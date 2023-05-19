import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import * as api from '../api/gifts'

export const fetchMyGifts = createAsyncThunk(
    'gifts/setMyGifts',
    async (thunkAPI,{ getState}) => {
      const {user:{memberName}} = getState()
      console.log('memberName: ',memberName)
      const response = await api.getGiftsByMember(memberName)
      return response.data
    }
  )

  export const createMyGifts = createAsyncThunk(
    'gifts/createGifts',
    async ({ memberName,amount,currency,isPrivate,giftGroupName}) => {
      const response = await api.postGift({ memberName,amount,currency,isPrivate,giftGroupName})
      return response.data
    }
  )

const giftSlice  = createSlice({
    name:'gifts',
    initialState:[],
    reducers: { },
    extraReducers: (builder) => {
      builder.addCase(fetchMyGifts.fulfilled, (state, action) => {
        console.log('fetchMyGifts.fulfilled: ',action.payload)
        return action.payload 
      })
      builder.addCase(createMyGifts.fulfilled, (state, action) => {
        console.log('createMyGifts.fulfilled: ',action.payload)
        state.push(action.payload)
      })
    },
  })
  
  //Selector
  export const selectMyGifts = (state) => state.myGifts
  
  export default giftSlice.reducer