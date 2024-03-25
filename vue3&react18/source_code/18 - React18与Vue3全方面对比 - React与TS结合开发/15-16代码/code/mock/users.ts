 
import { defineMock } from "umi";

export default defineMock({
 
  // 返回值可以是数组形式
  'GET /api/users': [
    { id: 1, name: 'foo' },
    { id: 2, name: 'bar' }
  ],
  
  'POST /api/users': {
    errcode: 0
  },
  'POST /api/login': (req, res) => {
    if(req.body.username === 'xiaoming' && req.body.password === '123456'){
      res.send({ errcode: 0 });
    }
    else{
      res.send({ errcode: -1 });
    }
  }
})