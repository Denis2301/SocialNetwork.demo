import React from "react";
import objStyle from "./ProfileInfo.module.css";

export class ProfileStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            status: this.props.status,
        };
    }
    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.status !== this.props.status) {
            this.setState({ status: this.props.status });
        }
    };
    activatedEditMode = (e) => {
        this.setState({ editMode: true });
    };
    deactivatedEditMode = (e) => {
        this.setState({ editMode: false });
        this.props.updateUserStatus(this.state.status);
    };
    onChangeStatus = (e) => {
        this.setState({ status: e.target.value });
    };
    render() {
        return (
            <div className={objStyle.wrapperStatus}>
                {!this.state.editMode && (
                    <div className={objStyle.status}>
                        <span onDoubleClick={this.activatedEditMode}>
                            {this.props.status || "------"}
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
