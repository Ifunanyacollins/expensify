 import moment from 'moment'
 
 export  const expenses = [
    {
        id:'1234567',
        description:'I bought goat',
        amount:200,
        note:'i got molly i black sheep',
        createdAt:moment(1538303211204).subtract(2,'days').valueOf(),
    },

    {
        id:'2390348',
        description:'I got you ice cream ',
        amount:400,
        note:'i got Emelda vanila',
        createdAt:74,
    },
    
    {
        id:'2390345',
        description:'Money man',
        amount:500,
        note:'I have a friend',
        createdAt:moment(1538303211204).subtract(2,'days').valueOf(),
    }

]