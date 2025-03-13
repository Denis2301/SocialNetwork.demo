import React from "react";
import { create } from "react-test-renderer";
import { ProfileStatus } from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="zaibala bolnitza" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("zaibala bolnitza");
    });
    test("after creation span should displayed", () => {
        const component = create(<ProfileStatus status="zaibala bolnitza" />);
        let root = component.root;
        const span = root.findByType("span");
        expect(span).not.toBeNull();
    });
    test("after creation input should not displayed", () => {
        const component = create(<ProfileStatus status="zaibala bolnitza" />);
        let root = component.root;
        expect(() => root.findByType("input")).toThrow();
    });
    test("after creation span should contains correct status", () => {
        const component = create(<ProfileStatus status="zaibala bolnitza" />);
        let root = component.root;
        const span = root.findByType("span");
        expect(span.children[0]).toBe("zaibala bolnitza");
    });
    test("input should be displayed instead span", () => {
        const component = create(<ProfileStatus status="zaibala bolnitza" />);
        let root = component.root;
        const span = root.findByType("span");
        span.props.onDoubleClick();
        const input = root.findByType("input");
        expect(input.props.value).toBe("zaibala bolnitza");
    });
    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(
            <ProfileStatus
                status="zaibala bolnitza"
                updateUserStatus={mockCallback}
            />
        );
        let instance = component.getInstance();
        instance.deactivatedEditMode();
        instance.deactivatedEditMode();
        instance.deactivatedEditMode();
        expect(mockCallback.mock.calls.length).toBe(3);
    });
});
