import React from 'react';
import {connect} from 'react-redux';
import ExpensesListItem from './ExpensesListItem';
import Selectors from '../selectors/expenses';
import ExpensesFilterInput from './ExpensesFilterInput';


export const ExpenseList = (props)=>{

  return(   
 <div>
 <ExpensesFilterInput />
 {
     props.expenses.length === 0 ? (
       <p>No Expenses</p>
     ):
     (
        props.expenses.map((item,index)=><ExpensesListItem {...item} key={index}/>)
     )
 }
  
 </div>
)

}


const MaptoState = ({expenses,filters})=>(
    {
        expenses:Selectors(expenses,filters)
    }
);

export default connect(MaptoState)(ExpenseList);