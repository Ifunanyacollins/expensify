import moment from 'moment'
import ExpensesFilters from '../../reducers/filters'

const DefaultState = {
    text:'',
    sortBy:'Date',
    startDate:undefined,
    endDate:undefined
}


test('filters initializtion',()=>{
    const action = {
        type:'@@INIT'
    }
    const state = ExpensesFilters(undefined, action)
 
    expect(state).toEqual({
        text:'',
        sortBy:'amount',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    })
 })


test('sort by date',()=>{
   const action = {
       type:'SORTBY_DATE'
   }
   const state = ExpensesFilters(undefined, action)

   expect(state.sortBy).toBe('Date')
})

test('sort  by amount',()=>{
    const action = {
        type:'SORTBY_AMOUNT'
    }
    const state = ExpensesFilters(DefaultState, action)
    expect(state.sortBy).toBe('amount')

})

test('filter by text value',()=>{
    const action = {
        type:'FILTERBY_TEXT',
        text:'egg'
    }

    const state = ExpensesFilters(undefined, action)
    expect(state.text).toBe('egg')
})

test('Set start  date',()=>{
    const action = {
        type:'SET_START_DATE',
        date:moment().startOf('year')
    }

    const state = ExpensesFilters(DefaultState, action)
    expect(state.startDate).toEqual(moment().startOf('year'))
})