import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";



describe("ProfileStatus component", () => {
    test("Status from props should be in the state", () => {
      const component = create(<ProfileStatus status={"yoyoyo"}/>);
      const instance = component.getInstance(); 
      expect(instance.state.status).toBe("yoyoyo"); 
    });

    test("Should be <span> at first render", () => {
        const component = create(<ProfileStatus status={"yoyoyo"}/>);
        const root = component.root;
        const span = root.findByType("span"); 
        expect(span).not.toBeNull(); 
      });

      test("Shouldn't be <input> at first render", () => {
        const component = create(<ProfileStatus status={"yoyoyo"}/>);
        const root = component.root;

        expect(() => {
            const input = root.findByType("input"); 
        }).toThrow(); 
      });

      test("<input> should be displayed instead of <span>", () => {
        const component = create(<ProfileStatus status={"yoyoyo"}/>);
        const root = component.root;
        const span = root.findByType("span"); 
        span.props.onDoubleClick();
        const input = root.findByType("input"); 
        expect(input.props.value).toBe("yoyoyo"); 
      });

      test("Callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status={"yoyoyo"} updateUserStatus={mockCallback} />);
        const instance = component.getInstance(); 
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1); 
      });
  });


 
    
 
