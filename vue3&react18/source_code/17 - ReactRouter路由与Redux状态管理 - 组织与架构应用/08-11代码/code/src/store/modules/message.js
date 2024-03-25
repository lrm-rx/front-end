function messageReducer(state={msg: 'hello'}, action){
  switch(action.type){
    case 'message/change': 
      const msg = action.payload
      return { msg, upperMsg: msg.toUpperCase() }
    default: 
      state.upperMsg = state.msg.toUpperCase()
      return state;
  }
}

export default messageReducer