$(function() {
	$("form[name='validation']").validate({
		//Validation rules
		rules: {
			//The key name is the name attribute of an input field.
			//Define the validation rules for each field
			firstname: "required",
			lastname: "required",
      message: "required",
      subject: "required",
			//If multiple rulls are required place in brackets
			email: {
				required: true,
				//use the build in email rule
				email: true
			},
			password: {
				required: true,
				minlength: 5
			},
			password_confirm: {
				equalTo: "#password"
			}
		},

		//Setup error messages
		messages: {
			firstname: "Please enter your First Name",
			lastname:  "Please enter your Last Name",
      message: "Message content cannot be Empty",
      subject: "A Message Subject is Required",
			password: {
				required: "Please provide a password",
				minlength: "Password must be 5+ Characters"
			},
			password_confirm: {
				equalTo: "Passwords must match"
			},
			email: "Please enter a valid email address"
		},
		submitHandler: function(form) {
			form.submit();
		}
	});
});
