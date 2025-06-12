import { ComponentType } from "react";
declare module "*.module.css" {
    const classes: { [key: string]: string };
    export default classes;
}
declare module "*.png" {
    const value: string;
    export default value;
}
declare module "*.svg" {
    const value: string;
    export default value;
}
declare module "*.jpg" {
    const value: string;
    export default value;
}

declare module "*.tsx" {
    const Component: ComponentType<any>;
    export default Component;
}
