// for filter
 export const filterByText = ( text = "" )=>({
    type:'FILTERBY_TEXT',
    text
});

export const sortByAmount = ()=>(
    {
        type:'SORTBY_AMOUNT'
    }
)

 export const sortByDate = ()=>(
    {
        type:'SORTBY_DATE'
    }
)

export const setStartDate = (date) => (
   {
       type:'SET_START_DATE',
       date
   }
)

export const setEndDate = (date) => (
    {
        type:'SET_END_DATE',
        date
        
    }
 )