import React from "react";
import objStyle from "./Dialogs.module.css";

export const Dialogs = (props) => {
    return (
        <main
            aria-labelledby={objStyle.page_dialogs}
            className={objStyle.content}
        >
            <h1 id={objStyle.page_dialogs}>Dialogs</h1>
            <section className={objStyle.wrapper__dialogs_contact}>
                <div className={objStyle.dialogs_contact__name}>
                    <ul>
                        <li>Andrew</li>
                        <li id={objStyle.item}>Dmitry</li>
                        <li>Sasha</li>
                        <li>Sveta</li>
                        <li>Valera</li>
                        <li>Viktor</li>
                        <li>This is a list item</li>
                        <li>Another list item</li>
                        <li>This is a list item</li>
                        <li>Yup, another list item</li>
                    </ul>
                </div>
                <div className={objStyle.dialogs_contact__messages}>
                    <div className={objStyle.contact__messages_item}>
                        <div className={objStyle.messages_itemImg}>
                            <img
                                src="https://w7.pngwing.com/pngs/851/967/png-transparent-cat-computer-icons-creative-cat-mammal-cat-like-mammal-animals-thumbnail.png"
                                alt="avatar"
                            />
                            <span id={objStyle.messages_item__author}>
                                Dmitry
                            </span>
                        </div>
                        <div className={objStyle.massages_itemText}>
                            <p>
                                {" "}
                                I am a normal popove Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Aliquid quod
                                distinc
                                distinctio vel, voluptatum ducimus libero.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};
