import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';
import { expenses } from '../fixture'


test('should render with data ' ,() => {
 const wrapper = shallow( <ExpenseList expenses={expenses} />)
 expect(wrapper).toMatchSnapshot()
})

test('should render with data when there is no data' ,() => {
    const wrapper = shallow( <ExpenseList expenses={[]} />)
    expect(wrapper).toMatchSnapshot()
   })