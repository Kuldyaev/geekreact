import {CHECK_ON, CHECK_OFF} from '../constants'

const changeCheckBoxOn = () => ({type: CHECK_ON})
const changeCheckBoxOff = () => ({type: CHECK_OFF})

export {changeCheckBoxOn, changeCheckBoxOff}