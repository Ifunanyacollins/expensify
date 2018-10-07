import { filterByText, sortByAmount ,sortByDate,setStartDate,setEndDate } from '../../actions/filters'
import moment from 'moment'

test('should filter by text',()=>{
    const action = filterByText('hello')
    expect(action).toEqual({
        type:'FILTERBY_TEXT',
        text:'hello'
    })
})

test('should filter by text for when text is empty',()=>{
    const action = filterByText()
    expect(action).toEqual({
        type:'FILTERBY_TEXT',
        text:''
    })
})

test('should sortByAmount', ()=>{
    const action = sortByAmount()
    expect(action).toEqual({
        type:'SORTBY_AMOUNT'
    })
})

test('should sortByDate', ()=>{
    const action = sortByDate()
    expect(action).toEqual({
        type:'SORTBY_DATE'
    })
})

test('should set start date',()=>{
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type:'SET_START_DATE',
        date:moment(0)
    })
})

test('should set end date',()=>{
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type:'SET_END_DATE',
        date:moment(0)
    })
})