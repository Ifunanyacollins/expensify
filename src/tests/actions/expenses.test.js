import {add_expense,remove_expense,edit_expense} from '../../actions/expenses'


test('should remove expenses from store',()=>{
    const action = remove_expense('1234')
    expect(action).toEqual({
        type:'remove_expense',
        id:'1234'
    })
})

test('should edit expense from store', ()=>{
    const action = edit_expense('123',{name:'collins'})

    expect(action).toEqual({
        type:'edit_expense',
        id:'123',
        update:{name:'collins'}
    })
})

test('should add expenses',()=>{
    const expense = {
       description: 'money for coffe',
       amount:2,
       note:'money from oke',
       createdAt:'123455'

    }
    const action = add_expense(expense)

    expect(action).toEqual(
        {
            type:'add_expense',
            expenses:{
               id:expect.any(String),
               description: 'money for coffe',
               amount:2,
               note:'money from oke',
               createdAt:'123455'
            }
        }
    )
})

test('should add expenses',()=>{
  
    const action = add_expense()

    expect(action).toEqual(
        {
            type:'add_expense',
            expenses:{
               id:expect.any(String),
               description: 'default',
               amount:0,
               note:'default',
               createdAt:0
            }
        }
    )
})