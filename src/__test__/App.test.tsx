import React from 'react';
import { configure, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { RootState } from '../store/store';
import * as redux from 'react-redux'
import App from '../App';
import Container from '../Container'

configure({ adapter: new Adapter() });

const setUp = (state: RootState | null, props: null) => {
  const mockStore = configureStore();

  const store = mockStore(state);
  jest.spyOn(redux, 'useSelector').mockImplementation(() => store.getState());
  jest.spyOn(redux, "useDispatch").mockImplementation(() => store.dispatch);

  const wrapper = shallow(<App {...props} store={store} />);
  return wrapper;
};

describe('Root App Component', () => {
  const state = null;
  const prop = null;

  it('should render App Component correctly', () => {
    const component = setUp(state, prop);
    expect(component.exists()).toBe(true);
  });

  it('Should render Container component', () => {
    const component = setUp(state, prop);
    const navComponent = component.find(Container);
    expect(navComponent).toHaveLength(1);
  });
});
