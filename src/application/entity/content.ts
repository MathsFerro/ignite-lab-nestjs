export class Content {
    private readonly content: string;

    constructor(content: string) {
        const isValidLength = this.validateContentLength(content);
        if(!isValidLength)
            throw new Error('Content length is invalid.');
            
        this.content = content;
    }

    private validateContentLength(content: string) {
        return content.length >= 5 && content.length <= 240;
    }

    get value(): string {
        return this.content;
    }
}