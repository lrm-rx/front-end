// 获取form对象
// 当用户点击提交按钮时，获取用户输入的值
// 校验用户输入的值
// 如果校验通过，模拟发送请求提交表单

// 面向过程编程
const form = document.getElementById('login-form');

const username = document.getElementById('username');
const password = document.getElementById('password');

function submitHandler(evt) {
  evt.preventDefault();
  const usernameValue = username.value;
  const passwordValue = password.value;

  if (usernameValue.trim().length === 0) {
    alert('用户名不能为空');
    return;
  }
  if (passwordValue.trim().length < 6) {
    alert('密码长度不能小于6位');
    return;
  }

  const user = {
    username: usernameValue,
    password: passwordValue,
  };

  console.log(user);
  console.log('用户' + user.username + '登录成功');
}

form.addEventListener('submit', submitHandler);
