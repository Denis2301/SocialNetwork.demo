import { ComponentType, FC, LazyExoticComponent, Suspense } from "react";
import { Preloader } from "../components/common/Preloader/Preloader";

export function SuspenseHOC<WP>(
    WrappedComponent: LazyExoticComponent<ComponentType<WP>>
) {
    const LazyComponent = (props: WP & any) => {
        return (
            <Suspense fallback={<Preloader />}>
                <WrappedComponent {...props} />
            </Suspense>
        );
    };
    return LazyComponent;
}
