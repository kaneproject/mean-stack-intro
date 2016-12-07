export class Message {
    constructor(
        private user: string,
        private content: string
    ){}
    toString(){
        return this.user + " " + this.content;
    }
}
