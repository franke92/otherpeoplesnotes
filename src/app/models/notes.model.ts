export interface INotesItem {
    name: String;
    surname: String;
    publishingDate: String;
    text: String;
    photo: String;
    publishingTime: String;
    isInput?:boolean;
}

export interface INotes {
    notes : INotesItem[];
}

