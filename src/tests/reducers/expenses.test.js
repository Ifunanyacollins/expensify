import moment from 'moment'
import ExpensesReducer from '../../reducers/expenses'

const expenses = [
    {
        id:'1234567',
        description:'I bought goat',
        amount:200,
        note:'i got molly i black sheep',
        createdAt:moment(1538303211204).subtract(2,'days'),
    },

    {
        id:'2390348',
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

test('filters initialization',()=>{
    const action ={
        type:'@@INIT'
    }
    const state = ExpensesReducer([],action)
    expect(state).toEqual([])
})

test('add expeense to store',()=>{
    const action = {
        type:'add_expense',
        expenses:{
            id:'2390342',
            description:'help chikwado',
            amount:1000000,
            note:'God is great',
            createdAt:moment(1538303211204).subtract(7,'days'),
        }
    }

    
    
    const state = ExpensesReducer(expenses,action)

    expect(state).toEqual([...expenses,action.expenses])

})

test('remove expense',()=>{
    const action = {
        type:'remove_expense',
        id:expenses[0].id
    }

    const state = ExpensesReducer(expenses,action)

    expect(state).toEqual([expenses[1],expenses[2]])
})

test('edit expenses',()=>{
    const action ={
        type:'edit_expense',
        update:{
            id:'2390345',
            description:'help viky',
            amount:1000000,
            note:'God is great',
            createdAt:moment(1538303211204).subtract(7,'days'),
        },
        id:expenses[2].id

    }

    const state = ExpensesReducer(expenses,action)
    expect(state).toEqual([expenses[0],expenses[1] , {
        ...expenses[2],
        ...action.update
    }])
})

test('edit expenses with invalid id',()=>{
    const action ={
        type:'edit_expense',
        update:{
            id:'2390345',
            description:'help viky',
            amount:1000000,
            note:'God is great',
            createdAt:moment(1538303211204).subtract(7,'days'),
        },
        id:'4'

    }

    const state = ExpensesReducer(expenses,action)
    expect(state).toEqual([expenses[0],expenses[1],expenses[2]])
})