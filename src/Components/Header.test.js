import { shallow } from 'enzyme';
import React from 'react';
import Header from './Header';

it('expect to render Header component', () => {
	const component = shallow(<Header />);
	component.setProps({ myProp: 'foo'});
	component.setState({ myState: 'boo'});

	expect.assertions(2);
	expect(component).toMatchSnapshot()
	expect(component.instance().shouldComponentUpdate()).toEqual(false)
})

