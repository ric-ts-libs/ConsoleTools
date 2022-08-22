import { ConsoleCssStyledMessage } from "./ConsoleCssStyledMessage";
import { ConsoleCssStyledMessages } from "./ConsoleCssStyledMessages";

export class Console {
    public static writeStyledMessages(consoleCssStyledMessages: Array<ConsoleCssStyledMessage>) {
        const messages = ConsoleCssStyledMessages.getMessagesAsArray(consoleCssStyledMessages);
        const cssStyles = ConsoleCssStyledMessages.getCssStylesAsArray(consoleCssStyledMessages);

        console.log(...messages, ...cssStyles);
    }

    public static writeStyledMessage(consoleCssStyledMessage: ConsoleCssStyledMessage) {
        console.log(consoleCssStyledMessage.Message, consoleCssStyledMessage.CssStyle);
    }    
}