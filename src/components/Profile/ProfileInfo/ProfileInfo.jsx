import objStyle from "./ProfileInfo.module.css";
export const ProfileInfo = (props) => {
    return (
        <>
            <img
                src="https://oir.mobi/uploads/posts/2021-03/1616964894_10-p-fon-priroda-12.jpg"
                className={objStyle.content__background}
                alt="background-profile"
            />
            <section className={objStyle.describe__profile}>
                <div className={objStyle.describe__profile__image}>
                    <img
                        src="https://w7.pngwing.com/pngs/851/967/png-transparent-cat-computer-icons-creative-cat-mammal-cat-like-mammal-animals-thumbnail.png"
                        alt="profile__image"
                    />
                </div>
                <div className={objStyle.describe__profile__inform}>
                    <h2>{props.name}</h2>
                    <p>{props.birth}</p>
                    <p>City: {props.city}</p>
                    <p>Education: {props.edu}</p>
                </div>
            </section>
        </>
    );
};
