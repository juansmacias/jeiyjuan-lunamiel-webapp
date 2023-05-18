import { createSlice } from '@reduxjs/toolkit'


const userSlice = createSlice({
    name:'user',
    initialState:{ memberName:'N/A'},
    reducers:{
        setMemberName(state,action){
            state.memberName = action.payload
        }
    }
})

// ---- Selectors ----

export const selectMemberName = (state) => state.memberName

export default userSlice.reducer
