import { Suspense } from "react";
import { Preloader } from "../components/common/Preloader/Preloader";

export const SuspenseHOC = (Component) => {
    return (props) => (
        <Suspense fallback={<Preloader />}>
            <Component {...props} />
        </Suspense>
    );
};
