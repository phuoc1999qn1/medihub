import 'jquery-validation'
import $ from 'jquery'
$(function () {
  $.validator.addMethod("valueNotEquals", function (value, element, arg) {
    return arg !== value;
  }, "Value must not equal arg.");

  $(".registration").validate({
    rules: {
      yourname: "required",
      phonename: {
        required: true,
        number: true
      },
      selectDepartments: { valueNotEquals: "default" },
      selectDoctor: { valueNotEquals: "default" },
      email: {
        required: true,
        email: true
      },
      date: {
        required: true,
        date: true
      }
    },
    messages: {
      yourname: "Please enter your yourname",
      phonename: "Please enter a valid phone",
      selectDepartments: { valueNotEquals: "Please select an item!" },
      selectDoctor: { valueNotEquals: "Please select an item!" },
      email: "Please enter a valid email address",
      date: "Please choose a day"
    },
    submitHandler: function (form) {
      form.submit();
    }
  });
});