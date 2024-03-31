import React from "react";
export const Profile = () => {
    return (
        <main className="content">
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Ns_klcwbSxh3MSL6unhWESP_hJdaXowRp278Cn37ADaONNBFUwbbx-ngz2YuI1_77ws&usqp=CAU"
                className="background-profile"
                alt="background-profile"
            />
            <div className="describe-profile">
                <div className="describe-profile__image">
                    <img
                        src="https://w7.pngwing.com/pngs/851/967/png-transparent-cat-computer-icons-creative-cat-mammal-cat-like-mammal-animals-thumbnail.png"
                        alt="profile__image"
                    />
                </div>
                <div className="describe-profile__inform">
                    <h2>Denis</h2>
                    <p>Date of Birth: 23 January</p>
                    <p>City: Koryukivka</p>
                    <p>Education: USU '1</p>
                </div>
            </div>
            <div className="myPost">
                <div className="new-post">
                    <h2 className="new-post__title">My posts</h2>
                    <textarea className="new-post__text" name="" id="" rows="5">
                        Your text
                    </textarea>
                    <button className="new-post__send">Send</button>
                </div>
                <div className="post one">
                    <div className="post__imgProfile"></div>
                    <p className="post__text">Hey, why nobody love me?</p>
                </div>
                <div className="post two">
                    <div className="post__imgProfile"></div>
                    <p className="post__text">It is our new program! Hey!</p>
                </div>
            </div>
        </main>
    );
};
