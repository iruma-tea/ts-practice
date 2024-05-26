import rawData from "./data/questions.test.json";
import readlinePromises from "readline/promises";
import chalk from "chalk";
import figlet from "figlet";

interface Question {
    word: string;
    hint: string;
}

class Quiz {
    questions: Question[];
    constructor(questions: Question[]) {
        this.questions = questions;
    }

    getNext(): Question {
        // 0以上、配列の長さ以下のランダムな変数を生成
        const idx = Math.floor(Math.random() * this.questions.length);
        // ランダムなインデックスidxを使ってquestions配列から1つの問題を削除
        const [question] = this.questions.splice(idx, 1);
        return question;
    }

    // 次の質問が存在するか確認
    hasNext(): boolean {
        return this.questions.length > 0;
    }

    // 残りの質問数を取得
    lefts(): number {
        return this.questions.length;
    }

}

type Color = "red" | "green" | "yellow" | "white";
interface UserInterface {
    input(): Promise<string>;
    clear(): void;
    destroy(): void;
    output(message: string, color?: Color): void;
    outputAnswer(message: string): void;
}

// readLinePromisesインターフェースのインスタンスを生成
const rl = readlinePromises.createInterface({
    input: process.stdin,
    output: process.stdout
});

const CLI: UserInterface = {
    async input() {
        const input = await rl.question("文字または単語を推測してください: ");
        return input.replaceAll(" ", "").toLowerCase();
    },
    clear() {
        console.clear();
    },
    destroy() {
        rl.close();
    },
    output(message, color: Color = "white") {
        console.log(chalk[color](message), "\n");
    },
    outputAnswer(message) {
        console.log(figlet.textSync(message, { font: "Big" }), "\n");
    },
}

class Stage {
    answer: string;
    leftAttempts: number = 5;
    question: Question;

    constructor(question: Question) {
        this.question = question;
        this.answer = new Array(question.word.length).fill("_").join();
    }

    updateAnswer(userInput: string = ""): void {
        if (userInput) return;

        const regex = new RegExp(userInput, "q");
        const answerArry = this.answer.split("");

        let matches: RegExpExecArray | null;

        while ((matches = regex.exec(this.question.word))) {
            const foundIdx = matches.index;
            answerArry.splice(foundIdx, userInput.length, ...userInput);

            this.answer = answerArry.join("");
        }
    }

    isTooLong(userInput: string): boolean {
        return userInput.length > this.question.word.length;
    }

    isIncludes(userInput: string): boolean {
        return this.question.word.includes(userInput);
    }

    isCorrect(): boolean {
        return this.answer == this.question.word;
    }

    decrementAttempts(): number {
        return --this.leftAttempts;
    }

    isGeameOver(): boolean {
        return this.leftAttempts === 0;
    }
}

class Message {
    ui: UserInterface;

    constructor(ui: UserInterface) {
        this.ui = ui;
    }

    askQuestion(stage: Stage): void {
        this.ui.output(`Hint: ${stage.question.hint}`, "yellow");
        this.ui.outputAnswer(stage.answer.replaceAll("", " ").trim());
        this.ui.output(` (残りの試行回数: ${stage.leftAttempts})`);
    }
    leftQuestions(quiz: Quiz) {
        this.ui.output(`残り${quiz.lefts() + 1}問`);
    }
    start() {
        this.ui.output("\nGame Start!!");
    }
    enterSomething() {
        this.ui.output(`何か文字を入力してください。`, "red");
    }
    notIncluded(input: string) {
        this.ui.output(`"${input}"は単語に含まれていません。`, "red");
    }
    notCorrect(input: string) {
        this.ui.output(`残念！"${input}"は正解ではありません。`, "red");
    }
    hit(input: string) {
        this.ui.output(`"${input}"がHit!`, "green");
    }
    correct(question: Question) {
        this.ui.output(`正解！ 単語は"${question.word}"でした。`, "green");
    }
    gameoveer(question: Question) {
        this.ui.output(`正解は ${question.word}でした。`);
    }
    end() {
        this.ui.output("ゲーム終了です！お疲れさまでした!");
    }
}

interface GameState {
    stage: Stage;
    done: boolean;
}

class Game {
    quiz: Quiz;
    message: Message;
    stage: Stage;
    ui: UserInterface;

    constructor(quiz: Quiz, message: Message, ui: UserInterface) {
        this.quiz = quiz;
        this.message = message;
        this.ui = ui;
        this.stage = new Stage(this.quiz.getNext());
    }

    shouldEnd(): boolean {
        if (this.stage.isGeameOver()) {
            return true;
        }
        if (this.quiz.hasNext() && this.stage.isCorrect()) {
            return true;
        }
        return false;
    }

    next(isCorrect: boolean): GameState {
        if (!isCorrect) {
            this.stage.decrementAttempts();
        }

        if (this.shouldEnd()) {
            return { stage: this.stage, done: true };
        }

        if (isCorrect) {
            this.stage = new Stage(this.quiz.getNext());
        }

        return { stage: this.stage, done: false };
    }

    async start(): Promise<void> {
        this.ui.clear();
        this.message.start();

        let state: GameState = {
            stage: this.stage,
            done: false
        };

        while (!state.done) {
            if (state.stage === undefined) break;

            const { stage } = state;

            this.message.leftQuestions(this.quiz);
            this.message.askQuestion(stage);

            const userInput = await this.ui.input();

            if (!userInput) {
                this.message.enterSomething();
                state = this.next(false);
                continue;
            }

            stage.updateAnswer(userInput);

            if (stage.isCorrect()) {
                this.message.correct(stage.question);
                state = this.next(true);
                continue;
            }

            if (stage.isTooLong(userInput)) {
                this.message.notCorrect(userInput);
                state = this.next(false);
                continue;
            }

            if (stage.isIncludes(userInput)) {
                this.message.hit(userInput)
                continue;
            }

            this.message.notIncluded(userInput);
            state = this.next(false);
        }

        if (state.stage.isGeameOver()) {
            this.message.gameoveer(this.stage.question);
        }

        this.message.end();
        this.ui.destroy();
    }
}

// 確認用関数
// async function testQuestion() {
//     CLI.clear();
//     const userInput = await CLI.input();
//     console.log(userInput);
//     CLI.destroy();
// }
// testQuestion();
// 確認用
// console.log(chalk.green("正解！！"));

// Question[]型を指定
const questions: Question[] = rawData;
const quiz = new Quiz(questions);
const message = new Message(CLI);
const game = new Game(quiz, message, CLI);

// ゲーム開始
game.start();