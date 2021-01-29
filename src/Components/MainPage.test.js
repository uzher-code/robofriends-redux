
import { shallow } from 'enzyme';
import React from 'react';
import  MainPage from './MainPage';


let wrapper;

beforeEach(() => {
	const mockProps = {
		onRequestRobots: jest.fn(),
		robots: [],
		searchField: '',
		isPending: false
	}
	wrapper = shallow(<MainPage { ...mockProps} />)
})	


it('renders  MainPage without crashing', () => {
	expect(wrapper).toMatchSnapshot();
})

it('filters robots correctly', () => {
	const mockProps2 = {
		onRequestRobots: jest.fn(),
		robots: [{
			id: 3,
			name: 'John',
			email: 'john@gmail.com'
		}],
		searchField: 'john',
		isPending: false
	}
	const mockProps3 = {
		onRequestRobots: jest.fn(),
		robots: [{
			id: 3,
			name: 'John',
			email: 'john@gmail.com'
		}],
		searchField: 'a',
		isPending: false
	}
	const mockProps4 = {
		onRequestRobots: jest.fn(),
		robots: [],
		searchField: '',
		isPending: true
	}

	const wrapper2 = shallow(<MainPage { ...mockProps2} />)
	const wrapper3 = shallow(<MainPage { ...mockProps3} />)
	const wrapper4 = shallow(<MainPage { ...mockProps4} />)

	expect.assertions(3)
	expect(wrapper2.instance().filteredRobots()).toEqual([{
			id: 3,
			name: 'John',
			email: 'john@gmail.com'
		}]);
	expect(wrapper3.instance().filteredRobots()).toEqual([]);
	expect(wrapper4.instance().filteredRobots()).toEqual([]);

})