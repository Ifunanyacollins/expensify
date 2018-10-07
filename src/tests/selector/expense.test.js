import moment from 'moment'
import ExpensesSelector from '../../selectors/expenses'



const expenses = [
    {
        id:'1234567',
        description:'I bought goat',
        amount:200,
        note:'i got molly i black sheep',
        createdAt:moment(1538303211204).subtract(2,'days'),
    },

    {
        id:'2390345',
        description:'I got you ice cream ',
        amount:400,
        note:'i got Emelda vanila',
        createdAt:74,
    },
    
    {
        id:'2390345',
        description:'Money man',
        amount:500,
        note:'I have a friend',
        createdAt:moment(1538303211204).subtract(2,'days'),
    }

]

test('should select base on value',()=>{
    const filters = {
        text:'money',
        sortBy:'',
        startDate:undefined,
        endDate:undefined
    }

    const result = ExpensesSelector(expenses,filters)
    expect(result).toEqual([expenses[2]])
})

test('should select base on no value for text',()=>{
    const filters = {
        text:'',
        sortBy:'',
        startDate:undefined,
        endDate:undefined
    } 

    const result = ExpensesSelector(expenses,filters)
    expect(result).toEqual([...expenses])
})

test('should sort by date',()=>{
    const filters = {
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    } 
    
    const result = ExpensesSelector(expenses,filters)
    expect(result).toEqual([expenses[1],expenses[2],expenses[0]]) 
})

test('should sort by amount',()=>{
    const filters = {
        text:'',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    } 
    
    const result = ExpensesSelector(expenses,filters)
    expect(result).toEqual([...expenses]) 
})

test('shout sort by date',()=>{

    const filters = {
        text:'',
        sortBy:'',
        startDate:moment(1538303211204).subtract(2,'days'),
        endDate:moment(1538303211204).add(2,'days')
    } 
    
    const result = ExpensesSelector(expenses,filters)
    expect(result).toEqual([expenses[0],expenses[2]]) 
})