// 获取form对象
// 当用户点击提交按钮时，获取用户输入的值
// 校验用户输入的值
// 如果校验通过，模拟发送请求提交表单
const REQUIRED = 'REQUIRED';
const MIN_LENGTH = 'MIN_LENGTH';

// 函数式编程
function validate(value, flag, validatorValue) {
  if (flag === REQUIRED) {
    return value.trim().length > 0;
  }
  if (flag === MIN_LENGTH) {
    return value.trim().length > validatorValue;
  }
}

function getUserInput(inputId) {
  return document.getElementById(inputId).value;
}

function createUser(username, password) {
  if (!validate(username, REQUIRED) || !validate(password, MIN_LENGTH, 6)) {
    // alert -> 副作用 -> 依赖外部环境（HTTP请求、修改DOM等操作了外部环境）
    // -> 在函数式编程中，尽量要避免出现副作用
    throw new Error('用户名或者密码不符合要求');
  }
  return {
    username,
    password,
  };
}

function greet(user) {
  console.log('用户' + user.username + '登录成功');
}

function submitHandler(evt) {
  evt.preventDefault();

  const usernameValue = getUserInput('username');
  const passwordValue = getUserInput('password');

  try {
    const user = createUser(usernameValue, passwordValue);

    console.log(user);
    greet(user);
  } catch (error) {
    alert(error.message);
  }
}

function createForm(formId, handler) {
  const form = document.getElementById(formId);
  form.addEventListener('submit', handler);
}

createForm('login-form', submitHandler);

// 思考：响应式
// const btn = document.getElementById('btn');

// function inputHandler(evt) {
//   if (username.value.trim().length === 0 || password.value.trim().length < 6) {
//     btn.disabled = true;
//     return;
//   }
//   btn.disabled = false;
// }
// username.addEventListener('input', inputHandler);
// password.addEventListener('input', inputHandler);
