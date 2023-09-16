// 获取form对象
// 当用户点击提交按钮时，获取用户输入的值
// 校验用户输入的值
// 如果校验通过，模拟发送请求提交表单

// 面向过程编程
class Validator {
  static REQUIRED = 'REQUIRED';
  static MIN_LENGTH = 'MIN_LENGTH';

  static validate(value, flag, validatorValue) {
    if (flag === this.REQUIRED) {
      return value.trim().length > 0;
    }
    if (flag === this.MIN_LENGTH) {
      return value.trim().length > validatorValue;
    }
  }
}
class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  greet() {
    console.log('用户' + this.username + '登录成功');
  }
}
class UserInputForm {
  constructor() {
    this.form = document.getElementById('login-form');
    this.username = document.getElementById('username');
    this.password = document.getElementById('password');

    // 这里要注册第二个submitHandler为什么要使用bind
    // addEventListener的第二个参数是一个回调函数，回调函数中的this指向的是当前的DOM元素
    // 但是这里的this，需要指向的是UserInputForm，所以需要使用bind修改this的指向
    this.form.addEventListener('submit', this.submitHandler.bind(this));
  }
  submitHandler(evt) {
    evt.preventDefault();
    const usernameValue = this.username.value;
    const passwordValue = this.password.value;
    if (
      !Validator.validate(usernameValue, Validator.REQUIRED) ||
      !Validator.validate(passwordValue, Validator.MIN_LENGTH, 6)
    ) {
      alert('用户名或者密码不符合要求');
      return;
    }
    const user = new User();
    user.username = usernameValue;
    user.password = passwordValue;
    console.log(user);
    user.greet();
    // console.log('用户' + user.username + '登录成功');
  }
}

new UserInputForm();
