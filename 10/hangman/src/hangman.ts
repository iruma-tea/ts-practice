import rawData from "./data/questions.test.json";

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

// Question[]型を指定
const questions: Question[] = rawData;
const quiz = new Quiz(questions);