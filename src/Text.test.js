import React from 'react';
import { shallow } from 'enzyme';
import Text from './Text';

const data={
     userDetails: [
       { name: 'John', age: 24, id: 1234 },
       { name: 'Mary', age: 29, id: 1289 },
       { name: 'Joel', age: 27, id: 1567 }
     ]
   }

const state = {
  textDetails: 'Unit Test in React with Jest - Enzyme'
};

it('show text value in the input text field', () => {
  const wrapper = shallow(<Text />);
  expect(wrapper.find('input[type="text"]').prop('value')).toEqual(null);
  wrapper.find('input[type="text"]').simulate('change',{target : {value: "Unit Test in React with Jest - Enzyme"}});
  expect(wrapper.find('input[type="text"]').prop('value')).toEqual(state.textDetails);

});



