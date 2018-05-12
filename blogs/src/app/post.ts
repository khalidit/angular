export class Post {

    title: string;
    content: string;
    creationDate: Date;
    loveIts: number;

    constructor(title: string, content: string) {
        this.title = title;
        this.content = content;
        this.creationDate = new Date();
        this.loveIts = 0;
    }

    increaseLoveIts() {
        this.loveIts++;
    }

    decreaseLoveIts() {
        this.loveIts--;
    }
}
