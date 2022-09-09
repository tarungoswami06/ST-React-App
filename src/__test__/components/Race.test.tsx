import React from 'react';
import { configure, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { RootState } from '../../store/store';
import Race from '../../components/race/Race';
import * as redux from 'react-redux'
import { RaceInitialStateType } from '../../store/reducers/Race';

configure({ adapter: new Adapter() });

const setUp = (state: RaceInitialStateType | {}, props: any) => {
    const mockStore = configureStore();

    const store = mockStore(state);
    jest.spyOn(redux, 'useSelector').mockImplementation(() => store.getState());
    jest.spyOn(redux, "useDispatch").mockImplementation(() => store.dispatch);

    const wrapper = shallow(<Race {...props} store={store} />);
    return wrapper;
};

describe('Race Component', () => {
    //Mock data
    const state = {
    	login: {
    		data: {
    			token: '',
    			email: '',
    			password: ''
    		}
    	},
    	race: {
    		data: [
    			{ id: 3, name: 'Soho', time: '10,2s' },
    			{ id: 14, name: 'Aries', time: '12,2s' },
    			{ id: 25, name: 'Patriot', time: '15,2s' }
    		],
            columns:[
                {
                    title: 'Id',
                    dataIndex: 'id',
                    key: 'id',
                },
                {
                    title: 'Name',
                    dataIndex: 'name',
                    key: 'name',
                },
                {
                    title: 'Time',
                    dataIndex: 'time',
                    key: 'time',
                }
            ]
    	}
    };
    it('should render Race Component correctly', () => {
    	const component = setUp(state, {});
    	const classInstance = component.find('#race-wrapper');
    	expect(classInstance.length).toBe(1);
    });
});
