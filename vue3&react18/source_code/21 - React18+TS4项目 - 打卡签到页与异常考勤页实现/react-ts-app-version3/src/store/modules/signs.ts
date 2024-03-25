import http from '../../utils/http';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type Infos = {
  [index: string]: unknown
}
export type SignsState = {
  infos: Infos
}
type Time = {
  userid: string
}

export const getTimeAction = createAsyncThunk('signs/getTimeAction', async (payload: Time) => {
  const ret = await http.get('/signs/time', payload)
  return ret;
})

export const putTimeAction = createAsyncThunk('signs/putTimeAction', async (payload: Time)=>{
  const ret = await http.put('/signs/time', payload)
  return ret; 
})

const signsSlice = createSlice({
  name: 'signs',
  initialState: {
    infos: {}
  } as SignsState,
  reducers: {
    updateInfos(state, action: PayloadAction<Infos>){
      state.infos = action.payload;
    }
  }
})

export const { updateInfos } = signsSlice.actions;

export default signsSlice.reducer;