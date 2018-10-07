import React from 'react'
import { shallow } from 'enzyme'
import ExpensesForm from '../../components/ExpensesForm'
import { expenses  }from  '../fixture'
import moment from 'moment'


test('should render form',()=>{
    const wrapper = shallow(<ExpensesForm />)
    expect(wrapper).toMatchSnapshot()
})

test('should render with Data',()=>{
    const wrapper = shallow(<ExpensesForm  expense={expenses[0]}/>)
    expect(wrapper).toMatchSnapshot()
})

test('should simulate onSubmit form',()=>{
    const wrapper = shallow(<ExpensesForm />)
    expect(wrapper).toMatchSnapshot()
    wrapper.find('form').simulate('submit',{
        preventDefault:()=>{}
    })
    expect(wrapper.state('error')).toBe(true)
    expect(wrapper).toMatchSnapshot()
})

test('should simulate on change for  input description',()=>{
const value = "egg of life"
 const wrapper = shallow(<ExpensesForm />)
 expect(wrapper).toMatchSnapshot()
 wrapper.find('input').at(0).simulate('change',{
     target:{value}
 })
 expect(wrapper.state('description')).toBe('egg of life')
 expect(wrapper).toMatchSnapshot()
})

test('should simulate on change for input amount',()=>{
    const value = '230'
    const wrapper = shallow(<ExpensesForm/>)
    wrapper.find('input').at(1).simulate('change',{
        target:{value}
    })
    expect(wrapper.state('amount')).toBe('230')
    expect(wrapper).toMatchSnapshot()
})


test('should simulate on change for input amount not valid for regx',()=>{
    const value = '230.345'
    const wrapper = shallow(<ExpensesForm/>)
    wrapper.find('input').at(1).simulate('change',{
        target:{value}
    })
    expect(wrapper.state('amount')).toBe('')
    expect(wrapper).toMatchSnapshot()
})

test('should simulate on change for textarea note',()=>{
    const value = 'help me buy candy'
    const wrapper = shallow(<ExpensesForm/>)
    wrapper.find('textarea').simulate('change',{
        target:{value}
    })
    expect(wrapper.state('note')).toBe('help me buy candy')
    expect(wrapper).toMatchSnapshot()
})

test('form submission with data',()=>{
    const onSubmitspy = jest.fn()
   
    const wrapper = shallow(<ExpensesForm  expense={expenses[2]} onSubmit={onSubmitspy}/>)
     const { description,note,amount,createdAt} = expenses[2]
    wrapper.find('form').simulate('submit',{
        preventDefault:()=>{}
    })
    expect(onSubmitspy).toHaveBeenLastCalledWith({
        description,
        note,
        amount,
        createdAt
    })
})

test('on date change for singleDate picker',()=>{
    const now = moment()

    const wrapper = shallow(<ExpensesForm />)
    wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now)

    expect(wrapper.state('createdAt')).toEqual(now)
   
})

test('on focus change for single date picker',()=>{
    const now = {focused:true}

    const wrapper = shallow(<ExpensesForm />)
    wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')(now)

    expect(wrapper.state('focused')).toEqual(now.focused)
})