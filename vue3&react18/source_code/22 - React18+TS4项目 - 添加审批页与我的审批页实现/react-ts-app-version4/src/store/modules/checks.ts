import http from '../../utils/http';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type Infos = {
  [index: string]: unknown
}
type ChecksState = {
  applyList: Infos[]
  checkList: Infos[]
}
type GetApply = {
  applicantid?: string
  approverid?: string
}
type PostApply = {
  applicantid: string
  applicantname: string
  approverid: string
  approvername: string
  note: string
  reason: string
  time: [string, string]
}
type PutApply = {
  _id: string 
  state: '已通过' | '未通过'
}

export const getApplyAction = createAsyncThunk('checks/getApplyAction', async (payload: GetApply) => {
  const ret = await http.get('/checks/apply', payload)
  return ret;
})

export const postApplyAction = createAsyncThunk('checks/postApplyAction', async (payload: PostApply)=>{
  const ret = await http.post('/checks/apply', payload)
  return ret; 
})

export const putApplyAction = createAsyncThunk('checks/putApplyAction', async (payload: PutApply)=>{
  const ret = await http.put('/checks/apply', payload)
  return ret; 
})

const checksSlice = createSlice({
  name: 'checks',
  initialState: {
    applyList: [],
    checkList: []
  } as ChecksState,
  reducers: {
    updateApplyList(state, action: PayloadAction<Infos[]>){
      state.applyList = action.payload;
    },
    updateCheckList(state, action: PayloadAction<Infos[]>){
      state.checkList = action.payload;
    }
  }
})

export const { updateApplyList, updateCheckList } = checksSlice.actions;

export default checksSlice.reducer;