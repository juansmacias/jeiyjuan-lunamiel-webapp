import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name:'user',
    initialState:{ memberName:'N/A',onboardingStep:0},
    reducers:{
        setMemberName(state,action){
            state.memberName = action.payload
            state.onboardingStep = 1
        },
        clearMemberName(state){
            state.memberName = 'N/A'
            state.onboardingStep = 0
        },nextOnboardingStep(state){
            state.onboardingStep++
        }
    }
})

// ---- Selectors ----
export const selectMemberName = (state) => state.user.memberName
export const selectOnboardingStep = (state) => state.user.onboardingStep
// ---- Actions ------
export const { setMemberName,clearMemberName,nextOnboardingStep } = userSlice.actions

export default userSlice.reducer
