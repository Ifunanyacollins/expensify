import React from 'react';
import { shallow } from 'enzyme';
import  ExpenseListItem  from '../../components/ExpensesListItem';
import { expenses } from '../fixture'

test("should render each expenses" , () => {
 const wrapper = shallow(<ExpenseListItem  {...expenses[0]}/>)
 expect(wrapper).toMatchSnapshot()
})