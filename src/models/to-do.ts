import { Category } from "./category";

export class ToDo {
    get Id(): number {
        return this.id;
    }

    set setId(value: number) {
        this.id = value;
    }

    get Title(): string {
        return this.title;
    }

    set Title(value: string) {
        this.title = value;
    }

    get Date(): Date {
        return this.date;
    }

    set Date(value: Date) {
        this.date = value;
    }

    get Description(): string {
        return this.description;
    }

    set Description(value: string) {
        this.description = value;
    }

    get CategoryId(): number {
        return this.categoryId;
    }

    set CategoryId(value: number) {
        this.categoryId = value;
    }

    get Category(): Category {
        return this.category;
    }

    set Category(value: Category) {
        this.category = value;
    }

    public get Color(): string {
        return this.color;
    }
    public set Color(value: string) {
        this.color = value;
    }

    constructor(
        private id: number=0,
        private title: string,
        private date: Date=new Date(Date.now()),
        private categoryId: number | null = null,
        private category: Category | null = null,
        private description: string="",
        private color: string = "")
        {
        }
}

export class IToDo {
    id: number;
    title: string;
    date: Date;
    description: string;
    categoryId: number | null;
    category: Category | null;
    color: string | null;
}
