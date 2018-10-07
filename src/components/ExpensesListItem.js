import React from 'react';
import {Link} from 'react-router-dom';


const ExpensesListItem = ({description,amount,createdAt,note ,id})=>{
 return(
     <div>
      <p>Title of Payment = >
      <Link to={`/edit/${id}`} >{description}</Link>
      </p>
      <p> Amount = > {amount}</p>
      <p>Time & Date = >{createdAt}</p>
      <p>Note = > {note}</p>
      <br/>
     </div>
 )
}

export default ExpensesListItem;