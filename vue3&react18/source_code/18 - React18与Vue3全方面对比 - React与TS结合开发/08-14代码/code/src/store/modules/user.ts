import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export const loginAction = createAsyncThunk(
  'users/loginAction',
  async (userId: number) => {
    const response = await new Promise((resolve)=>{
      resolve('response data')
    })
    return response
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: 'xiaoming'
  },
  reducers: {
    change(state, action: PayloadAction<string>){
      state.name = action.payload
    }
  }
})

export const { change } = userSlice.actions

export default userSlice.reducer