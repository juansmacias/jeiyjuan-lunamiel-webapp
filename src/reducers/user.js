import { createSlice } from '@reduxjs/toolkit'


const userSlice = createSlice({
    name:'user',
    initialState:{ memberName:'N/A',onboardingStep:1},
    reducers:{
        setMemberName(state,action){
            state.memberName = action.payload
            state.onboardingStep++
        },
        clearMemberName(state){
            state.memberName = 'N/A'
            state.onboardingStep = 1
        }
    }
})

// ---- Selectors ----
export const selectMemberName = (state) => state.user.memberName
export const selectOnboardingStep = (state) => state.user.onboardingStep
// ---- Actions ------
export const { setMemberName,clearMemberName,setNextOnboardingStep } = userSlice.actions

export default userSlice.reducer
