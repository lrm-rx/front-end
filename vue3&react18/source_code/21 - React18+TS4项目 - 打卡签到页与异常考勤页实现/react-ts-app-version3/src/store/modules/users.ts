import http from '../../utils/http';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type Token = string;
export type Infos = {
  [index: string]: unknown
}
export type UsersState = {
  token: Token
  infos: Infos
}
type Login = {
  email: string 
  pass: string
}

export const loginAction = createAsyncThunk('users/loginAction', async (payload: Login) => {
  const ret = await http.post('/users/login', payload)
  return ret;
})

export const infosAction = createAsyncThunk('users/infosAction', async ()=>{
  const ret = await http.get('/users/infos')
  return ret; 
})

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    token: '',
    infos: {}
  } as UsersState,
  reducers: {
    updateToken(state, action: PayloadAction<Token>){
      state.token = action.payload;
    },
    updateInfos(state, action: PayloadAction<Infos>){
      state.infos = action.payload;
    },
    clearToken(state){
      state.token = '';
    }
  }
})

export const { updateToken, updateInfos, clearToken } = usersSlice.actions;

export default usersSlice.reducer;