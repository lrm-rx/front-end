import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  msg: 'hello'
}

export const messageTestAction = createAsyncThunk('message/testAction', async ()=>{
  const ret = await new Promise((resolve)=>{
    setTimeout(()=>{
      resolve('response data')
    }, 2000)
  }) 
  return ret;
})

const messageSlice = createSlice({
  // dispatch('message/change')
  name: 'message',
  initialState: {
    ...initialState,
    upperMsg: initialState.msg.toUpperCase()
  },
  reducers: {
    change(state, action){
      state.msg = action.payload
      state.upperMsg = state.msg.toUpperCase()
    }
  },
  extraReducers: {
    [messageTestAction.fulfilled](state, action){
      state.msg = action.payload
      state.upperMsg = state.msg.toUpperCase()
    }
  }
})

export default messageSlice.reducer
