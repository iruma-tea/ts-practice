import { bound } from "./decorator/bindThis.js";

const TASK_STATUS = ["todo", "working", "done"] as const;
type TaskStatus = (typeof TASK_STATUS)[number];

interface Task {
    title: string;
    description?: string;
}
class TaskForm {
    elemnt: HTMLFormElement;
    titleInputEl: HTMLInputElement;
    descriptionEl: HTMLTextAreaElement;

    constructor() {
        this.elemnt = document.querySelector("#task-form")!;

        this.titleInputEl = document.querySelector("#form-title")!;
        this.descriptionEl = document.querySelector("#form-description")!;

        // 新たにイベントリスナを設定
        this.bindEvents();
    }

    private makeNewTask(): Task {
        return {
            title: this.titleInputEl.value,
            description: this.descriptionEl.value,
        }
    }

    private clearInputs(): void {
        this.titleInputEl.value = "";
        this.descriptionEl.value = "";
    }

    @bound
    private submitHandler(event: Event) {
        event.preventDefault(); // ブラウザのデフォルトの動作をキャンセル

        // Taskオブジェクトの生成
        const task = this.makeNewTask();
        console.log(task);

        // フォームをクリア
        this.clearInputs();
    }

    private bindEvents() {
        this.elemnt.addEventListener("submit", this.submitHandler);
    }
}

new TaskForm();