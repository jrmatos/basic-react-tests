import React from 'react';
import Counter from './Counter';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

describe('Counter component', () => {
    it('matches the snapshot', () => {
        const tree = renderer.create(<Counter />).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('starts with a count of zero', () => {
        const wrapper = shallow(<Counter />);
        const countState = wrapper.state().count;
        const countText = wrapper.find('p').text();

        expect(countState).toEqual(0);
        expect(countText).toEqual('Current count: 0');
    });

    it('can increment the count when the increment button is clicked', () => {
        const wrapper = shallow(<Counter />);
        const incrementButton= wrapper.find('button.increment');
        
        incrementButton.simulate('click');

        const countText = wrapper.find('p').text();

        expect(countText).toEqual('Current count: 1');
    });

    it('can decrement the count when the decrement button is clicked', () => {
        const wrapper = shallow(<Counter />);
        const decrementButton= wrapper.find('button.decrement');
        
        decrementButton.simulate('click');

        const countText = wrapper.find('p').text();

        expect(countText).toEqual('Current count: -1');
    });
});
