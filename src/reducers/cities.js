import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import * as api from '../api/cities'


export const fetchCities = createAsyncThunk(
  'cities/setCities',
  async (thunkAPI) => {
    const response = await api.getCities()
    return response.data
  }
)

const citySlice  = createSlice({
  name:'cities',
  initialState:[],
  reducers: { },
  extraReducers: (builder) => {
    builder.addCase(fetchCities.fulfilled, (state, action) => {
      action.payload.forEach(element => {
        state.push(element)
      });
    })
  },
})

//Selector
export const selectCities = (state) => state.cities

export default citySlice.reducer