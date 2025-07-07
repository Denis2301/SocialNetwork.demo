import { LogoutOutlined } from "@ant-design/icons";
import { Avatar, Button, Col, Layout, Menu, MenuProps, Row } from "antd";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logOutMe } from "../../redux/authReducer";
import { getIsAuth, getLogin, getPhoto } from "../../redux/authSelector";
import { AppDispatch } from "../../redux/redux-store";
const { Header } = Layout;
export const AppHeaderView: FC = ({}) => {
    let navigate = useNavigate();
    const photo = useSelector(getPhoto);
    const isAuth = useSelector(getIsAuth);
    const dispatch = useDispatch<AppDispatch>();
    const login = useSelector(getLogin);
    const items1: MenuProps["items"] = ["1"].map((key) => ({
        key,
        label: <Link to="developers/">Developers</Link>,
    }));

    return (
        <Header style={{ display: "flex", alignItems: "center" }}>
            <div className="demo-logo" />
            <Row
                style={{ width: "100%", display: "flex", alignItems: "center" }}
            >
                <Col span={20}>
                    {" "}
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={["2"]}
                        items={items1}
                        style={{ flex: 1, minWidth: 0 }}
                    />
                </Col>

                {!!isAuth ? (
                    <>
                        <Col span={2}>
                            {" "}
                            <Avatar
                                alt={login || ""}
                                style={{ flexShrink: "0" }}
                                src={photo}
                            />
                        </Col>
                        <Col span={2}>
                            {" "}
                            <Button
                                type="primary"
                                danger
                                icon={<LogoutOutlined />}
                                onClick={async () => {
                                    await dispatch(logOutMe());
                                    navigate("/login");
                                }}
                            >
                                OUT
                            </Button>
                        </Col>
                    </>
                ) : (
                    <Col span={2}>
                        <Button
                            type="primary"
                            onClick={() => {
                                navigate("/login");
                            }}
                        >
                            Login
                        </Button>
                    </Col>
                )}
            </Row>
        </Header>
    );
};
