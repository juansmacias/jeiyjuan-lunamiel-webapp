import { createSlice } from '@reduxjs/toolkit'


const userSlice = createSlice({
    name:'user',
    initialState:{ memberName:'N/A'},
    reducers:{
        setMemberName(state,action){
            state.memberName = action.payload
        },
        clearMemberName(state){
            state.memberName = 'N/A'
        }
    }
})

// ---- Selectors ----
export const selectMemberName = (state) => state.user.memberName
// ---- Actions ------
export const { setMemberName,clearMemberName } = userSlice.actions

export default userSlice.reducer
