import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0
}

const counterSlice = createSlice({
  // dispatch('counter/inc')
  name: 'counter',
  initialState: {
    ...initialState,
    doubleCount: initialState.count * 2
  },
  reducers: {
    inc(state, action){
      state.count += action.payload
      state.doubleCount = state.count * 2
    }
  }
})

export default counterSlice.reducer
