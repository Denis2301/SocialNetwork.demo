import objStyle from "./animateLoader.module.css";
import loader from "../../../assets/images/loader.svg";
import { FC } from "react";
type PreloaderPropsType = {}
export const Preloader: FC<PreloaderPropsType> = () => {
    return <img className={objStyle.loader} src={loader} />;
};
