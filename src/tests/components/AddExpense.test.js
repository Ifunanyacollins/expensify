import React from 'react';
import {shallow} from 'enzyme';
import { AddExpenses } from '../../components/AddExpenses'
import {expenses} from '../fixture'


let add_expense,history,wrapper;

beforeEach(()=>{
     add_expense = jest.fn()
     history = {push:jest.fn()}
     wrapper = shallow(<AddExpenses  add_expense={add_expense} history={history}/>)
})

test('render addExpenses page',()=>{
    expect(wrapper).toMatchSnapshot()
})

test('render addExpenses page with value',()=>{
    wrapper.find('ExpensesForm').prop('onSubmit')(expenses[1])
    expect(history.push).toHaveBeenLastCalledWith('/dashboard')
    expect(add_expense).toHaveBeenLastCalledWith(expenses[1])
    expect(wrapper).toMatchSnapshot()
})