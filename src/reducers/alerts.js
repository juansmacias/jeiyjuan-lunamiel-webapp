import { createSlice } from '@reduxjs/toolkit'

// alert: {
//     id
//     type,
//     message,
//     duration
// }

const alertsSlice = createSlice({
    name:'alerts',
    initialState:[],
    reducers:{
        setAlert(state,action){
            state.push(action.payload)
        },removeAlert(state,action){
            const alertId = action.payload
            return state.filter(alert => alert.id !== alertId);
        }
    }
})

export const selectAlerts = (state) => state.alerts

export const { setAlert,removeAlert } = alertsSlice.actions

export default alertsSlice.reducer