const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";

const messageReducer = (action, messagesPage) => {
    switch (action.type) {
        case SEND_MESSAGE:
            const messagesBody = messagesPage.newTextBody;
            messagesPage.dialogs.push({
                id: messagesPage.dialogs.length,
                name: "New Author",
                url: "https://w7.pngwing.com/pngs/851/967/png-transparent-cat-computer-icons-creative-cat-mammal-cat-like-mammal-animals-thumbnail.png",
                data: {
                    year: new Date().getFullYear(),
                    month: new Date().getMonth(),
                    date: new Date().getDate(),
                },
            });
            messagesPage.messageAsk.push({
                author: "New Author",
                text: messagesBody,
                id: messagesPage.messageAsk.length,
                url: "https://w7.pngwing.com/pngs/851/967/png-transparent-cat-computer-icons-creative-cat-mammal-cat-like-mammal-animals-thumbnail.png",
                data: {
                    year: new Date().getFullYear(),
                    month: new Date().getMonth(),
                    date: new Date().getDate(),
                },
            });
            messagesPage.newTextBody = "";
            return messagesPage;
        case UPDATE_NEW_MESSAGE_BODY:
            messagesPage.newTextBody = action.body;
            return messagesPage;
        default:
            return messagesPage;
    }
};
export const sendMessageCreator = (type) => ({ type: type });
export const updateNewMessageBodyCreator = (type, text) => ({
    type: type,
    body: text,
});
export default messageReducer;
