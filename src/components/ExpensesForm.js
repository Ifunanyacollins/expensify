import React from 'react'
import moment from 'moment'
import 'react-dates/initialize'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'





export default class ExpensesForm extends React.Component{

        constructor(props){
            super(props);

            this.state = {
                description:props.expense ? props.expense.description : '',
                note:props.expense ? props.expense.note : '',
                amount:props.expense ? props.expense.amount.toString() : '',
                createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
                focused:false,
                error:undefined
            }
        }
    
    



     onDescriptionChange= (e)=>{

         const value = e.target.value
         this.setState(()=>({description:value}))
       
     }
     
     onNoteChange = (e) => {
         const value = e.target.value
         this.setState(()=>({
             note:value
         }))
     }

     onAmountChange = (e) => {
         const value = e.target.value
         if(!value || value.match(/^\d{1,}(\.\d{0,2})?$/))
         this.setState(()=>({amount:value}))
        }

        onDateChange = (createdAt)=> {
            if(createdAt){
                this.setState(()=>({createdAt}))
            }
          
          
        }

        onFocusChange = ({ focused }) =>{
            this.setState(()=>({focused}))
           
        }
        onFormSubmit = (e) =>{
            e.preventDefault()

            if(!this.state.description || !this.state.amount){
               this.setState(()=>({error:true})) 
            }else{
                this.setState(()=>({error:undefined}))
                this.props.onSubmit({
                    description:this.state.description,
                    amount:parseFloat(this.state.amount,10),
                    createdAt:this.state.createdAt.valueOf(),
                    note:this.state.note
                })
            }
        }

    render(){

        return(
            <div>
               {this.state.error && <p>Hmmm, it seems you didnt provide a description or Amount</p>}
               <form onSubmit={this.onFormSubmit}>
               <input 
                type="text"
                placeholder="description" 
                value={this.state.description}
                onChange={this.onDescriptionChange}
                />
               <input type="text" placeholder="amount" value={this.state.amount} onChange={this.onAmountChange} />
               <SingleDatePicker

                date={this.state.createdAt}
                onDateChange={this.onDateChange}
                focused={this.state.focused}
                onFocusChange={this.onFocusChange}
                numberOfMonths={1}
                isOutsideRange={()=>false}
                
               />
               <textarea value={this.state.note} onChange={this.onNoteChange}></textarea>
               <button>Add Expenses</button>
               </form>
            </div>
        )

    }
}