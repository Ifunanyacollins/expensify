import React from  'react'
import { connect } from 'react-redux'
import {edit_expense,remove_expense } from '../actions/expenses'
import ExpensesForm from './ExpensesForm'



 export class EditExpenses extends React.Component{

  onSubmit = (expense)=>{
    this.props.edit_expense(this.props.expense.id , expense)
    this.props.history.push('/dashboard')
  }

  onClickhandle = ()=>{
    this.props.remove_expense(this.props.expense.id)
    this.props.history.push('/dashboard')
  }

  render(){
    return(
      <div>
      <ExpensesForm 
       expense={this.props.expense}  
       onSubmit={this.onSubmit}
      />
      <button
      onClick={this.onClickhandle} 
      >Remove
      </button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch ,props)=>(
  {
   edit_expense:(id,expense)=>( dispatch(edit_expense(id,expense)) ),
   remove_expense:(id)=>( dispatch(remove_expense(id)) )
  }
)

const MapToProps = (state,props)=>{
  
  return{ expense:state.expenses.find((expense)=>(
     expense.id === props.match.params.id
  )) }
}


export default connect(MapToProps,mapDispatchToProps)(EditExpenses);