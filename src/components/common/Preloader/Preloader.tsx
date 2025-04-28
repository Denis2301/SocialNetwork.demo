import objStyle from "./animateLoader.module.css";
import loader from "../../../assets/images/loader.svg";
import { FC } from "react";
type PreloaderType = {}
export const Preloader: FC<PreloaderType> = () => {
    return <img className={objStyle.loader} src={loader} />;
};
