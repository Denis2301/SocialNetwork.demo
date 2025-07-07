import "./App.css";
import { News } from "./components/News/News";
import React, { useState, useEffect, lazy, FC, ComponentType } from "react";
import {
    Routes,
    Route,
    Navigate,
    BrowserRouter,
    NavLink,
    useLocation,
    Link,
} from "react-router-dom";
import { Music } from "./components/Music/Music";
import { Settings } from "./components/Settings/Settings";
import { SidebarContainer } from "./components/Sidebar/SidebarContainer";
import { UsersPage } from "./components/UsersContainer/UsersContainer";
import { Provider, connect, useSelector } from "react-redux";
import { initializeApp, globalErrorDispatch } from "./redux/appReducer";
import { Store, compose } from "redux";
import { Preloader } from "./components/common/Preloader/Preloader";
import { SuspenseHOC } from "./hoc/SuspenceHOC";
import { AppStateType } from "./redux/redux-store";
import { QueryParamProvider } from "use-query-params";
import { ReactRouter6Adapter } from "use-query-params/adapters/react-router-6";
import { Avatar, Button, Col, FloatButton, Row } from "antd";
import "antd/dist/reset.css";
import {
    LaptopOutlined,
    NotificationOutlined,
    UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import Column from "antd/es/table/Column";
import { AppHeaderView } from "./components/Header/HeaderView";

const { Content, Footer, Sider } = Layout;

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
let ChatPage = lazy(() =>
    import("./pages/chat/ChatPage").then((module) => ({
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
const SuspendedChatPage = SuspenseHOC(ChatPage);

const App: FC<PropsType> = ({
    globalErrorDispatch,
    globalError,
    initializeApp,
    initialized,
}) => {
    const [menuInd, menuChangeView] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const location = useLocation();

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const handleMenuView = () => {
        menuChangeView(!menuInd);
    };
    const catchAllUnhandleError = async (event: PromiseRejectionEvent) => {
        const errorMessage = event.reason + "";
        globalErrorDispatch(errorMessage);
    };

    const items2: MenuProps["items"] = [
        {
            key: `profile`,
            icon: <UserOutlined />,
            label: `My Profile`,
            children: [
                {
                    key: "/profile",
                    label: (
                        <Link onClick={() => handleMenuView()} to="/profile">
                            Profile
                        </Link>
                    ),
                },
                {
                    key: "/dialogs",
                    label: (
                        <Link onClick={() => handleMenuView()} to="/dialogs">
                            Messages
                        </Link>
                    ),
                },
            ],
        },
        {
            key: `developer`,
            icon: <LaptopOutlined />,
            label: `Developer`,
            children: [
                {
                    key: "/developers/",
                    label: (
                        <Link
                            onClick={() => handleMenuView()}
                            to="/developers/"
                        >
                            Find developers
                        </Link>
                    ),
                },
            ],
        },
        {
            key: `misc`,
            icon: <NotificationOutlined />,
            label: `More`,

            children: [
                {
                    key: "/news",
                    label: (
                        <Link onClick={handleMenuView} to="/news">
                            News
                        </Link>
                    ),
                },
                {
                    key: "/music",
                    label: (
                        <Link onClick={handleMenuView} to="/music">
                            Music
                        </Link>
                    ),
                },
                {
                    key: "/settings",
                    label: (
                        <Link onClick={handleMenuView} to="/settings">
                            Settings
                        </Link>
                    ),
                },
            ],
        },
    ];

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
            // <div className="wrapper">
            //     <HeaderContainer
            //         handleMenuView={handleMenuView}
            //         menuInd={menuInd}
            //     />
            //     <SidebarContainer
            //         handleMenuView={handleMenuView}
            //         menuInd={menuInd}
            //     />
            //     <div className="wrapper-content">
            //         <Routes>
            //             <Route path="/" element={<Navigate to="/profile" />} />

            //             <Route
            //                 path="/SocialNetwork.demo"
            //                 element={<Navigate to="/profile" />}
            //             />
            //             <Route
            //                 path="/profile/:id?"
            //                 element={<SuspendedProfile />}
            //             />
            //             <Route
            //                 path="/dialogs/*"
            //                 element={<SuspendedDialogs />}
            //             />
            //             <Route
            //                 path="/developers/*"
            //                 element={<UsersPage pageTitle={"Samurai"} />}
            //             />
            //             <Route path="/news/*" element={<News />} />
            //             <Route path="/music/*" element={<Music />} />
            //             <Route path="/settings/*" element={<Settings />} />
            //             <Route
            //                 path="/login*"
            //                 element={<SuspendedLoginPage />}
            //             />
            //             <Route
            //                 path="*"
            //                 element={
            //                     <div className="error">
            //                         Error 404. Not found.
            //                     </div>
            //                 }
            //             />
            //         </Routes>
            //     </div>
            //     {globalError && (
            //         <div
            //             className="error"
            //             style={{
            //                 position: "fixed",
            //                 width: "100vw",
            //                 left: "0",
            //                 zIndex: "9999",
            //                 backgroundColor: "rgba(255, 68, 68, 0.85)",
            //             }}
            //         >
            //             {globalError}
            //         </div>
            //     )}
            // </div>
            <Layout>
                <AppHeaderView />
                <div style={{ padding: "0 48px" }}>
                    <Breadcrumb
                        style={{ margin: "16px 0" }}
                        items={[
                            { title: "Home" },
                            { title: "List" },
                            { title: "App" },
                        ]}
                    />
                    <Layout
                        style={{
                            padding: "24px 0",
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <Sider
                            style={{ background: colorBgContainer }}
                            width={200}
                        >
                            <Menu
                                mode="inline"
                                selectedKeys={[location.pathname]}
                                defaultOpenKeys={[location.pathname]}
                                style={{ height: "100%" }}
                                items={items2}
                            />
                        </Sider>
                        <Content style={{ padding: "0 24px", minHeight: 280 }}>
                            <Routes>
                                <Route
                                    path="/"
                                    element={<Navigate to="/profile" />}
                                />
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
                                    path="/developers/*"
                                    element={
                                        <UsersPage pageTitle={"Samurai"} />
                                    }
                                />
                                <Route path="/news/*" element={<News />} />
                                <Route path="/music/*" element={<Music />} />
                                <Route
                                    path="/settings/*"
                                    element={<Settings />}
                                />
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
                            <FloatButton
                                shape="circle"
                                style={{ insetInlineEnd: 24 + 70 + 70 }}
                                onClick={() => {
                                    setIsChatOpen(true);
                                }}
                            />
                            <SuspendedChatPage
                                setIsChatOpen={setIsChatOpen}
                                isChatOpen={isChatOpen}
                            />
                        </Content>
                    </Layout>
                </div>
                <Footer style={{ textAlign: "center" }}>
                    SocialNetwork.demo ©{new Date().getFullYear()} Created by
                    Denis.
                </Footer>
            </Layout>
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
