import React from 'react';
import { connect } from 'react-redux';
import {  filterByText,sortByAmount,sortByDate, setStartDate, setEndDate } from '../actions/filters'
import 'react-dates/initialize'
import {DateRangePicker} from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'


export class ExpensesFilterInput extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      focusedInput:null
    }
  }

 onDatesChange = ({startDate,endDate}) =>{
    this.props.setStartDate(startDate)
    this.props.setEndDate(endDate)
 }

 onFocusChange = (focusedInput) =>{
  this.setState(()=>({focusedInput}))
 }

 onTextchange = (e)=>{
  this.props.filterByText(e.target.value)
 }
 
 onSortBy = (e)=>{
  (e.target.value && e.target.value === 'date') ? this.props.sortByDate() : this.props.sortByAmount() 
}

  render(){
    
    return(
      <div>

     <input type="text" value={this.props.filters.text} onChange={this.onTextchange}/>

     <select value={this.props.filters.sortBy} onChange={this.onSortBy}>
     <option value="date">Date</option>
     <option value="amount">Amount</option>
     </select>

      <DateRangePicker 
       startDate={this.props.filters.startDate}
       startDateId={'1'}
       endDate={this.props.filters.endDate}
       endDateId={'2'}
       onDatesChange={this.onDatesChange}
       focusedInput={this.state.focusedInput}
       onFocusChange={this.onFocusChange}
       numberOfMonths={1}
       isOutsideRange={()=>false}
       showClearDates={true}

      />
      </div>
   )


  }
}

const mapDispatchToProps = (dispatch,props)=>({
  setStartDate:(startDate)=>dispatch( setStartDate(startDate) ),
  setEndDate:(endDate)=>dispatch( setEndDate(endDate)),
  filterByText:(text)=>dispatch( filterByText(text)),
  sortByDate:()=>dispatch( sortByDate() ),
  sortByAmount:()=>dispatch( sortByAmount() )
})


const MapToProps = ({expenses,filters}) => {

  return{
      filters
  }

}


export default connect(MapToProps,mapDispatchToProps)(ExpensesFilterInput)