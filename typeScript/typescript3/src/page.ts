// const student: string = "ming";
// console.log(student);

import $ from "jquery";

$(function () {
  console.log("jquery");
  $("body").html("<div>123</div>");
  new $.fn.init();
});
