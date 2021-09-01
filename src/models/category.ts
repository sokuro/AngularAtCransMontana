export class Category {
    public get color(): string {
        return this._color;
    }
    public set color(value: string) {
        this._color = value;
    }

    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }
    public get category(): Category | null {
        return this._category;
    }
    public set category(value: Category | null) {
        this._category = value;
    }
    public get categoryId(): number | null {
        return this._categoryId;
    }
    public set categoryId(value: number | null) {
        this._categoryId = value;
    }
    public get date(): Date {
        return this._date;
    }
    public set date(value: Date) {
        this._date = value;
    }
    public get title(): string {
        return this._title;
    }
    public set title(value: string) {
        this._title = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
  
    // declared variables do not have to be declared again as global variables 
    constructor(
        private _id: number = 0,
        private _title: string = "",
        private _date: Date = new Date(Date.now()),
        private _categoryId: number | null = null,
        private _category: Category | null = null,
        private _description: string = "",
        private _color: string = "") 
        {
        }
}

export interface ICategory {
    id: number;
    title: string;
    color: string;
}
