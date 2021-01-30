
import { shallow } from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton';

it('expect to render CounterButton component correctly', () => {
	const mockColor = 'red';
	expect(shallow(<CounterButton color= {mockColor} />)).toMatchSnapshot();
})

it('correctly increments the counter', () => {
	// const mockColor = 'red';
	const wrapper = shallow(<CounterButton />)

	expect.assertions(4);
	expect(wrapper.state()).toEqual({count: 0})
	wrapper.find('[id="counter"]').simulate('click');
	expect(wrapper.instance().state.count).toBe(1);
	wrapper.find('[id="counter"]').simulate('click');
	expect(wrapper.instance().state.count).toBe(2);
	wrapper.find('[id="counter"]').simulate('keypress');
	expect(wrapper.instance().state.count).toBe(2);
})
