import React from 'react';
import { shallow } from 'enzyme';
import { EditExpenses } from '../../components/EditPage';
import { expenses } from '../fixture'


let edit_expense,remove_expense,history,wrapper
beforeEach(()=>{
edit_expense = jest.fn()
remove_expense = jest.fn()
history = {push:jest.fn()} 
wrapper = shallow(<EditExpenses expense={expenses[1]} edit_expense={edit_expense} history={history}  remove_expense={remove_expense}/>)
})

test('should render edit page',()=>{
   
   expect(wrapper).toMatchSnapshot()
})

test('should onsubmit after edit',()=>{

    wrapper.find('ExpensesForm').prop('onSubmit')(expenses[1])
    expect(edit_expense).toHaveBeenLastCalledWith(expenses[1].id,expenses[1])
    expect(history.push).toHaveBeenLastCalledWith('/dashboard')
})


test('should remove after edit',()=>{
    wrapper.find('button').simulate('click',()=>{})
    expect(remove_expense).toHaveBeenLastCalledWith(expenses[1].id)
    expect(history.push).toHaveBeenLastCalledWith('/dashboard')
})