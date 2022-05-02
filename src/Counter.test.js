import React from 'react'
import { shallow } from 'enzyme/build'

import Counter from './Counter'

it('Increments count by 1 when the increment button is clicked', ()=>{
    // Targetting component using shallow 
     const wrapper = shallow(<Counter/>)

     // Targetting elements using classname
     const incrementButton = wrapper.find('button.increment')
     
     // Simulating action click using simulate function
     incrementButton.simulate('click')

     // Targetting element h1 and fetching text using text function
     const text = wrapper.find('h1').text()

     // Assertions 
     expect(text).toEqual('Value : 1')
})

