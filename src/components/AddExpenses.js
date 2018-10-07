import React from 'react';
import { connect } from 'react-redux';
import {add_expense} from '../actions/expenses'
import ExpensesForm from './ExpensesForm';


 export class AddExpenses extends React.Component{
 onSubmit = (expense)=>{
     this.props.add_expense(expense)
     this.props.history.push('/dashboard')
 }
    render(){
        return(
            <ExpensesForm  onSubmit={this.onSubmit}/>
        )
    }
}




const mapDispatchToProps = (dispatch) => ( {
    add_expense:(expense) => dispatch(add_expense(expense))
} )


export default connect(undefined,mapDispatchToProps)(AddExpenses);