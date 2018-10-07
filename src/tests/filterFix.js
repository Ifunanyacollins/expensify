import moment from 'moment'

const  defaultFilter = {
    text:'',
    sortBy:'amount',
    startDate:undefined,
    endDate:undefined
}

const  filter = {
    text:'love',
    sortBy:'date',
    startDate:moment().startOf('month'),
    endDate:moment().endOf('month')
}

export { defaultFilter, filter}