
const expensesReducerDefaultState = []

export default (state = expensesReducerDefaultState,action) =>{
 switch(action.type){
     case 'add_expense':
     return [...state,action.expenses] 
     case 'remove_expense':
      return state.filter(el=>(
          !el.id.includes(action.id)
      ))
      case 'edit_expense':
       return state.map((el) => {

            if(el.id === action.id){
               return {
                   ...el,
                   ...action.update
               }
            }else{
              return el
            }      
       }) 
     default:
     return state
 }

};
