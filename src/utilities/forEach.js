import entries from './entries'

const forEach = ({ data, callback }) => entries(data).forEach(callback)

export default forEach
