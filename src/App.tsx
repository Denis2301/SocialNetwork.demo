import "./App.css";
import { News } from "./components/News/News";
import { useState, useEffect, lazy, FC, ComponentType } from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { Music } from "./components/Music/Music";
import { Settings } from "./components/Settings/Settings";
import { SidebarContainer } from "./components/Sidebar/SidebarContainer";
import { UsersPage } from "./components/UsersContainer/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import { Provider, connect } from "react-redux";
import { initializeApp, globalErrorDispatch } from "./redux/appReducer";
import { Store, compose } from "redux";
import { Preloader } from "./components/common/Preloader/Preloader";
import { SuspenseHOC } from "./hoc/SuspenceHOC";
import { AppStateType } from "./redux/redux-store";
import { QueryParamProvider } from "use-query-params";
import { ReactRouter6Adapter } from "use-query-params/adapters/react-router-6";

let ProfileContainer = lazy(() =>
    import("./components/Profile/ProfileContainer").then((module) => ({
        default: module.default as ComponentType<any>,
    }))
);
let DialogsPage = lazy(() =>
    import("./components/Dialogs/Dialogs").then((module) => ({
        default: module.default as ComponentType<any>,
    }))
);

let LoginPage = lazy(() => import("./components/Login/Login"));
type MapStateToProps = ReturnType<typeof mapStateToProps>;
type MapDispatchToProps = {
    initializeApp: () => void;
    globalErrorDispatch: (globalError: string | null) => void;
};
type PropsType = MapStateToProps & MapDispatchToProps;

const SuspendedProfile = SuspenseHOC(ProfileContainer);
const SuspendedDialogs = SuspenseHOC(DialogsPage);
const SuspendedLoginPage = SuspenseHOC(LoginPage);

const App: FC<PropsType> = ({
    globalErrorDispatch,
    globalError,
    initializeApp,
    initialized,
}) => {
    const [menuInd, menuChangeView] = useState(false);
    const handleMenuView = () => {
        menuChangeView(!menuInd);
    };
    const catchAllUnhandleError = async (event: PromiseRejectionEvent) => {
        const errorMessage = event.reason + "";
        globalErrorDispatch(errorMessage);
    };
    useEffect(() => {
        initializeApp();

        // Promise.reject(new Error("Test error without catch"));

        window.addEventListener("unhandledrejection", catchAllUnhandleError);

        return () => {
            window.removeEventListener(
                "unhandledrejection",
                catchAllUnhandleError
            );
        };
    }, [initializeApp]);
    {
        return initialized ? (
            <div className="wrapper">
                <HeaderContainer
                    handleMenuView={handleMenuView}
                    menuInd={menuInd}
                />
                <SidebarContainer
                    handleMenuView={handleMenuView}
                    menuInd={menuInd}
                />
                <div className="wrapper-content">
                    <Routes>
                        <Route path="/" element={<Navigate to="/profile" />} />
                        <Route
                            path="/SocialNetwork.demo"
                            element={<Navigate to="/profile" />}
                        />
                        <Route
                            path="/profile/:id?"
                            element={<SuspendedProfile />}
                        />
                        <Route
                            path="/dialogs/*"
                            element={<SuspendedDialogs />}
                        />
                        <Route
                            path="/users/*"
                            element={<UsersPage pageTitle={"Samurai"} />}
                        />
                        <Route path="/news/*" element={<News />} />
                        <Route path="/music/*" element={<Music />} />
                        <Route path="/settings/*" element={<Settings />} />
                        <Route
                            path="/login*"
                            element={<SuspendedLoginPage />}
                        />
                        <Route
                            path="*"
                            element={
                                <div className="error">
                                    Error 404. Not found.
                                </div>
                            }
                        />
                    </Routes>
                </div>
                {globalError && (
                    <div
                        className="error"
                        style={{
                            position: "fixed",
                            width: "100vw",
                            left: "0",
                            zIndex: "9999",
                            backgroundColor: "rgba(255, 68, 68, 0.85)",
                        }}
                    >
                        {globalError}
                    </div>
                )}
            </div>
        ) : (
            <Preloader />
        );
    }
};
const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized,
    globalError: state.app.globalError,
});

let AppContainer = compose(
    // TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultRootState
    connect<MapStateToProps, MapDispatchToProps, {}, AppStateType>(
        mapStateToProps,
        {
            initializeApp,
            globalErrorDispatch,
        }
    )(App)
);
let MainApp: FC<{ store: Store<AppStateType> }> = ({ store }) => {
    return (
        <BrowserRouter>
            <QueryParamProvider adapter={ReactRouter6Adapter}>
                <Provider store={store}>
                    <AppContainer />
                </Provider>
            </QueryParamProvider>
        </BrowserRouter>
    );
};
export default MainApp;
