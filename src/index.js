import React from 'react';
import ReactDOM from 'react-dom';
import AppRouters from './App';
import { Provider } from 'react-redux';
import configstore from './store/configstore'
import {add_expense} from './actions/expenses'
import {filterByText} from './actions/filters'
import GetvisbileState from './selectors/expenses'

const store = configstore()


store.subscribe(()=>{
    const curentState = store.getState()
    const getvisbileState = GetvisbileState(curentState.expenses,curentState.filters)
    console.log('idom',getvisbileState)
})

store.dispatch( add_expense( {description:'money for weed', amount:1000,createdAt:1438021606327 }))
store.dispatch( add_expense( {description:'money for custard', amount:30,createdAt:1338025601027} ) )
 

store.dispatch(filterByText())

// setInterval(()=>{
//     store.dispatch(filterByText({text:'money'}))  
// },3000)

const jsx = (
    <Provider store = {store}>

    <AppRouters/>

    </Provider>
)

ReactDOM.render(jsx,document.querySelector('.root'))
// Modal.setAppElement(appRoot);
