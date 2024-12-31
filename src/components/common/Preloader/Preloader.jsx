import objStyle from "./animateLoader.module.css";
import loader from "../../../assets/images/loader.svg";
export const Preloader = () => {
    return <img className={objStyle.loader} src={loader} />;
};
