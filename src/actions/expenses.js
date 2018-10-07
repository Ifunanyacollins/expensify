import uuid from 'uuid';

export const add_expense = ({  description = 'default',amount = 0,note = 'default',createdAt = 0 } = {}) => {

    return{  type:'add_expense',
      expenses:{id:uuid(),
               description,
               amount,
               note,createdAt}
  }
  
  };
  
  export const remove_expense = (id)=>{
      return{
          type:'remove_expense',
          id
      }
  }
  
 export const edit_expense = (id,update)=>(
      {
          type:'edit_expense',
          id,
          update
      }
  )