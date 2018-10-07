import React from 'react';
import { shallow } from 'enzyme';
import {ExpensesFilterInput} from '../../components/ExpensesFilterInput';
import {defaultFilter ,filter} from '../filterFix';


let  setStartDate,setEndDate,filterByText,sortByDate,sortByAmount,wrapper;

beforeEach(()=>{
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    sortByDate = jest.fn()
    sortByAmount = jest.fn()
    filterByText = jest.fn()
    wrapper = shallow(<ExpensesFilterInput 
                        setStartDate={setStartDate}
                        setEndDate={setEndDate}
                        sortByDate={sortByDate}
                        sortByAmount={sortByAmount}
                        filterByText={filterByText}
                        filters={defaultFilter}
                         
                     />)
})

test('shuld render filter input component',()=>{
    expect(wrapper).toMatchSnapshot()
})
 
test('shuld render filter input component with value',()=>{
    wrapper.setProps({
        filters:filter
    })
    expect(wrapper).toMatchSnapshot()
})

test('should setstartDate and setEnddate',()=>{
    const date = {
        startDate:12334,
        endDate:234567
    }
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')(date)
    expect(setEndDate).toHaveBeenLastCalledWith(date.endDate)
    expect(setStartDate).toHaveBeenLastCalledWith(date.startDate)
})

test('should setstartDate and setEnddate',()=>{
    const focused = 'endDate'
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(focused)
    expect(wrapper.state('focusedInput')).toBe(focused)
   
})


test('should change text',()=>{
    const value = "hello"
    wrapper.find('input').at(0).simulate('change',{
        target:{
            value
        }
    })
    expect(filterByText).toHaveBeenLastCalledWith(value)
})

test('should change sortBy to be date',()=>{
    const value = "date"
    wrapper.find('select').at(0).simulate('change',{
        target:{
            value
        }
    })
    expect(sortByDate).toHaveBeenCalled()
})

test('should change sortBy to be amount',()=>{
    const value = "amount"
    wrapper.find('select').at(0).simulate('change',{
        target:{
            value
        }
    })
    expect(sortByAmount).toHaveBeenCalled()
})

