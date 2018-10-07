import moment from 'moment'

const filterReducerDefaultState = {
    text:'',
    sortBy:'amount',
    startDate:moment().startOf('month'),
    endDate:moment().endOf('month')
}


export default (state = filterReducerDefaultState,action) =>{
 switch(action.type){
  case 'FILTERBY_TEXT':
     return{
         ...state,
         text:action.text
     }
 case 'SORTBY_AMOUNT':
    return{
        ...state,
        sortBy:'amount'
    }
case 'SORTBY_DATE':
  return{
      ...state,
      sortBy:'Date'
  }
case 'SET_START_DATE':
  return{
      ...state,
      startDate:action.date
  }

  case 'SET_END_DATE':
  return{
      ...state,
      endDate:action.date
  }
     default:
     return state
 }

};