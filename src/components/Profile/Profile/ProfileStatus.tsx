import React, { ChangeEvent } from "react";
import objStyle from "./ProfileInfo.module.css";
type PropsType = {
    status: string;
    updateUserStatus: (newStatus: string) => void;
};

type StateType = {
    editMode: boolean;
    status: string;
};
export class ProfileStatus extends React.Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);
        this.state = {
            editMode: false,
            status: this.props.status,
        };
    }
    componentDidUpdate(prevProps: PropsType, prevState: StateType) {
        if (prevProps.status !== this.props.status) {
            this.setState({ status: this.props.status });
        }
    }
    activatedEditMode = () => {
        this.setState({ editMode: true });
    };
    deactivatedEditMode = () => {
        this.setState({ editMode: false });
        this.props.updateUserStatus(this.state.status);
    };
    onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({ status: e.target.value });
    };
    render() {
        return (
            <div className={objStyle.wrapperStatus}>
                {!this.state.editMode && (
                    <div className={objStyle.status}>
                        <span onDoubleClick={this.activatedEditMode}>
                            {this.state.status || "------"}
                        </span>
                    </div>
                )}
                {this.state.editMode && (
                    <div className={objStyle.status}>
                        <input
                            onChange={this.onChangeStatus}
                            autoFocus={true}
                            onBlur={this.deactivatedEditMode}
                            value={this.state.status}
                        />
                    </div>
                )}
            </div>
        );
    }
}
