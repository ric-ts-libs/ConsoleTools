import { ConsoleCssStyledMessage } from "./ConsoleCssStyledMessage";

type ConsoleCssStyledMessageMappingLambda = 
    (consoleCssStyledMessage: ConsoleCssStyledMessage) => string;

export class ConsoleCssStyledMessages {
    static getMessagesAsArray(consoleCssStyledMessages: Array<ConsoleCssStyledMessage>)
    : Array<string> {
        const retour: Array<string> = ConsoleCssStyledMessages.getAsArray(
            consoleCssStyledMessages,
            (consoleCssStyledMessage :ConsoleCssStyledMessage) => {
                return consoleCssStyledMessage.Message;
            }
        );
        return(retour);
    }

    static getCssStylesAsArray(consoleCssStyledMessages: Array<ConsoleCssStyledMessage>)
    : Array<string> {
        const retour: Array<string> = ConsoleCssStyledMessages.getAsArray(
            consoleCssStyledMessages,
            (consoleCssStyledMessage :ConsoleCssStyledMessage) => {
                return consoleCssStyledMessage.CssStyle;
            }
        );
        return(retour);
    }    

    private static getAsArray(
        consoleCssStyledMessages: Array<ConsoleCssStyledMessage>,
        mappingLambda: ConsoleCssStyledMessageMappingLambda
    )
    : Array<string> {
        const retour: Array<string> = consoleCssStyledMessages.map(mappingLambda);
        return(retour);
    }    
}