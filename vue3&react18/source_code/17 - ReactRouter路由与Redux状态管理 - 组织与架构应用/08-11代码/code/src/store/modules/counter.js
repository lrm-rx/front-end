function counterReducer(state={count: 0}, action){
  switch(action.type){
    case 'counter/inc': 
      const count = state.count + action.payload;
      return { count, doubleCount: count * 2 }
    default: 
      state.doubleCount = state.count * 2
      return state;
  }
}

export function counterTestAction(){
  return (dispatch) => {
    return new Promise((resolve)=>{
      setTimeout(()=>{
        //dispatch({ type: 'counter/inc', payload: 5 })
        resolve('response data')
      }, 2000)
    })
  }
}

export default counterReducer