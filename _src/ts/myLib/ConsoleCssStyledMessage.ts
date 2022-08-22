export class ConsoleCssStyledMessage {
    get Message():  string {
        return(this.message);
    };
    
    get CssStyle(): string {
        return(this.cssStyle);
    };

    constructor(private message, private cssStyle) {
        this.message = `%c${this.message}`;
    }
}