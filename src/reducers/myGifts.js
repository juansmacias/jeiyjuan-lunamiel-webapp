import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import * as api from '../api/gifts'

import { setAlert } from 'reducers/alerts'


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
    async ({ memberName,amount,currency,isPrivate,giftGroupName,message },thunkApi ) => {
      const response = await api.postGift({ memberName,amount,currency,isPrivate,giftGroupName,message})
      thunkApi.dispatch(setAlert({
        id:Math.floor(Math.random() * 9999),
        type:'success',
        message:'Regalo Reservado con Exito!',
        duration:5000
      }))
      return response.data
    }
  )

const giftSlice  = createSlice({
    name:'gifts',
    initialState:[],
    reducers: { },
    extraReducers: (builder) => {
      builder.addCase(fetchMyGifts.fulfilled, (state, action) => {
        return action.payload 
      })
      builder.addCase(createMyGifts.fulfilled, (state, action) => {
        state.push(action.payload)
      })
    },
  })
  
  //Selector
  export const selectMyGifts = (state) => state.myGifts
  
  export default giftSlice.reducer