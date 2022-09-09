import React from "react";
import { configure, shallow } from "enzyme";
import configureStore from "redux-mock-store";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Login from "../../components/login/Login";
import * as redux from 'react-redux'
import { InitialStateType } from "../../store/reducers/Login";
import * as router from 'react-router';

configure({ adapter: new Adapter() });

const setUp = (state: InitialStateType, props: any) => {
    const mockStore = configureStore();

    const store = mockStore(state);
    const mockedUsedNavigate = jest.fn();
    jest.spyOn(redux, 'useSelector').mockImplementation(() => store.getState());
    jest.spyOn(redux, "useDispatch").mockImplementation(() => store.dispatch);
    jest.spyOn(router, "useNavigate").mockImplementation(() => mockedUsedNavigate);


    const wrapper = shallow(<Login {...props} store={store} />);
    return wrapper;
};

describe("Login Component", () => {
    const state = {
        login: {
            data: {
                token: '', 
                email: 'test', 
                password: '',
                err:''
            }
        }
    };
    it("should render Login Component correctly", () => {
        const component = setUp(state, {});
        const classInstance = component.find("#login-wrapper");
        expect(classInstance.length).toBe(1);
    });

    it("should simulate onChange event on email", () => {
        const component = setUp(state, {});
        const classInstance = component.find("#login-wrapper");
        const emailInput = classInstance.find("#email");
        emailInput.simulate("change", { target: { value: "tarun.goswami@thegatewaydigital.com" } });
    });

    it("should simulate onChange event on email with invalid email", () => {
        const component = setUp(state, {});
        const classInstance = component.find("#login-wrapper");
        const emailInput = classInstance.find("#email");
        emailInput.simulate("change", { target: { value: "Tarun" } });
    });
});
