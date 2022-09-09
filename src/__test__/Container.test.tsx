import React from 'react';
import { configure, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Container from '../Container';
import { Provider } from 'react-redux';
import { GloablInitialStateType } from '../types/GlobalTypes';

configure({ adapter: new Adapter() });

const setUp = (state: GloablInitialStateType) => {
    const mockStore = configureStore();

    const store = mockStore(state);
    const wrapper = shallow(
        <Provider store={store}>
            <Container />
        </Provider>);
    return wrapper;
};

describe('Root App Component', () => {
    const state = {
        global: {
            loading: false,
            online: navigator.onLine
        }
    };

    it('should render App Component correctly', () => {
        const component = setUp(state);
        expect(component.exists()).toBe(true);
    });

});
