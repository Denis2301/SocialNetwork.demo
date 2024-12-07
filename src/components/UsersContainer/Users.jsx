import { useEffect } from "react";
import { setUsersAC } from "../../redux/usersReducer";
import objStyle from "./Users.module.css";

export const Users = ({ users, follow, unfollow, setUsers }) => {
    useEffect(() => {
        setUsers([
            {
                id: 1,
                photoUrl:
                    "https://w7.pngwing.com/pngs/851/967/png-transparent-cat-computer-icons-creative-cat-mammal-cat-like-mammal-animals-thumbnail.png",
                followed: false,
                location: {
                    country: "Ukraine",
                    city: "Kyiv",
                },
                fullName: "Denis Tikhonovskyi",
                status: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore facere ipsum earum. At numquam architecto rem saepe nesciunt beatae, ullam in aspernatur recusandae eaque illo iste maiores? Cupiditate illo sit unde odio iusto! Unde delectus illo, hic ratione rerum harum quas incidunt cupiditate, totam inventore placeat! Voluptate consequuntur quo illum amet perspiciatis dicta explicabo ad unde ab ullam, eaque at voluptatem exercitationem veritatis cumque esse ut, soluta nobis maxime! Perspiciatis inventore dicta labore maiores recusandae voluptatibus at odio nisi sed facere in nostrum placeat tempora consequatur, id ipsa. Odio earum voluptatum alias deleniti, neque incidunt similique mollitia? Odit voluptates laboriosam magni voluptas accusantium expedita qui nesciunt deserunt quidem vitae at consequatur possimus accusamus, repudiandae excepturi doloremque fuga voluptatem error tempore. Vel asperiores amet alias nemo quibusdam maiores! Non accusamus harum quae minus, dolores hic neque tenetur magni, perspiciatis excepturi velit quibusdam ad ipsam, repellat vel. Est at sunt officia magnam porro praesentium voluptatibus dolorem repudiandae provident, iure quaerat eligendi numquam unde minima rerum facilis aliquam voluptas, dolorum saepe quae possimus ratione? Iusto ea vero harum facilis itaque similique distinctio esse, tempore quaerat molestiae omnis suscipit a impedit cum eum assumenda! Est voluptates cupiditate omnis nulla maiores magnam dolorem voluptate, dignissimos, inventore et recusandae dolore exercitationem ea ipsam vero maxime, error at beatae soluta dicta! Esse eum dolorem nostrum illum, quisquam perferendis nam aliquam accusamus sit fugiat porro nobis cupiditate? Nihil minima nostrum vel consequuntur ipsa quasi suscipit ut eius, magni assumenda deleniti molestiae quae architecto blanditiis saepe quo! Excepturi nisi tempora delectus distinctio voluptates sit dolor explicabo aspernatur a quisquam. Odit veniam officia qui quisquam corrupti labore totam aliquam excepturi modi, maxime molestias sed fuga? Molestiae, sit aliquid commodi distinctio optio quasi doloremque modi labore, nemo tenetur ut perspiciatis obcaecati quaerat accusamus ipsam. Debitis eum et quis consequuntur necessitatibus optio eveniet sint placeat vitae, veniam sequi expedita ad doloribus? Magnam ipsum ducimus, iste consequuntur laborum doloremque atque voluptatibus soluta quos laudantium illum recusandae quidem quasi nam possimus impedit voluptates omnis deleniti veniam? Vero nihil nostrum praesentium optio perferendis? Atque fugiat a ut adipisci amet dolorum doloremque qui accusamus dolores repellat illo aliquid aspernatur ratione, modi ullam laboriosam nam animi quos nostrum tempore ad. Voluptatibus doloremque, eius neque accusantium sapiente, labore nulla blanditiis, qui distinctio commodi error molestiae. Debitis deleniti dignissimos inventore sed facilis! Fuga totam, nostrum nesciunt tenetur tempora ipsa expedita similique, eos cumque dignissimos eius, excepturi eum? Libero aperiam odit iure laudantium debitis similique obcaecati, animi iste itaque adipisci amet quisquam! Porro facilis ratione eum nulla voluptatibus distinctio, nemo repudiandae doloribus dolorum, quos vitae facere magnam nisi inventore aspernatur harum nesciunt itaque doloremque veniam architecto natus? Mollitia similique inventore iste sequi adipisci suscipit ducimus dolores est, rem voluptate natus velit quibusdam voluptatum, quas quidem consectetur magnam. Aliquam nulla expedita provident eligendi suscipit distinctio deleniti vel placeat neque sunt inventore perspiciatis, odio amet, eveniet eum qui accusamus alias nisi magnam tenetur enim dolorum voluptates. Laudantium doloribus voluptate laborum qui, unde perspiciatis vitae nihil exercitationem. Tenetur vel exercitationem autem error. Sit!",
            },
            {
                id: 2,
                photoUrl:
                    "https://w7.pngwing.com/pngs/851/967/png-transparent-cat-computer-icons-creative-cat-mammal-cat-like-mammal-animals-thumbnail.png",
                followed: true,
                location: {
                    country: "Ukraine",
                    city: "Kyiv",
                },
                fullName: "Andrew Tikhonovskyi",
                status: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, nobis.",
            },
            {
                id: 3,
                photoUrl:
                    "https://w7.pngwing.com/pngs/851/967/png-transparent-cat-computer-icons-creative-cat-mammal-cat-like-mammal-animals-thumbnail.png",
                followed: false,
                location: {
                    country: "Ukraine",
                    city: "Kyiv",
                },
                fullName: "Sasha Tikhonovskyi",
                status: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, nobis.",
            },
            {
                id: 4,
                photoUrl:
                    "https://w7.pngwing.com/pngs/851/967/png-transparent-cat-computer-icons-creative-cat-mammal-cat-like-mammal-animals-thumbnail.png",
                followed: true,
                location: {
                    country: "Ukraine",
                    city: "Kyiv",
                },
                fullName: "Denis Tikhonovskyi",
                status: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, nobis.",
            },
        ]);
    }, []);

    return (
        <main className={objStyle.content}>
            <h1 className={objStyle.content__title}> Users</h1>
            {users.map((user) => (
                <div className={objStyle.wrapperUser} key={user.id}>
                    <div className={objStyle.status}>
                        <div className={objStyle.status__img}>
                            {" "}
                            <img src={user.photoUrl} alt="" />
                        </div>
                        {user.followed === true ? (
                            <button
                                className={objStyle.status__follow}
                                onClick={() => unfollow(user.id)}
                            >
                                Followed
                            </button>
                        ) : (
                            <button
                                className={objStyle.status__follow}
                                onClick={() => follow(user.id)}
                            >
                                Unfollowed
                            </button>
                        )}
                    </div>
                    <div className={objStyle.description}>
                        <div className={objStyle.description__name_location}>
                            <span className={objStyle.description__fullName}>
                                {user.fullName}
                            </span>
                            <div className={objStyle.description__location}>
                                <span className={objStyle.location_country}>
                                    {user.location.country}
                                </span>
                                <span className={objStyle.location_city}>
                                    {user.location.city}
                                </span>
                            </div>
                        </div>
                        <p className={objStyle.description__status}>
                            {user.status}
                        </p>
                    </div>
                </div>
            ))}
            <button
                onClick={() => setUsersAC(users)}
                className={objStyle.addUsers}
            >
                Add Users
            </button>
        </main>
    );
};
