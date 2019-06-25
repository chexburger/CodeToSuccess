$(document).ready(function(){
	$("form[name='validate']").validate({
		errorLabelContainer: "#errorBox",
  	wrapper: "li",
		//Validation rules
		rules: {
			//The key name is the name attribute of an input field.
			//Define the validation rules for each field
			name: "required",
			subject: "required",
      email: "required",
      message: "required",
			//If multiple rulls are required place in brackets
			email: {
				required: true,
				//use the build in email rule
				email: true
			},
		},

		//Setup error messages
		messages: {
			name: "A Name is Required",
      message: "Message content cannot be Empty",
      subject: "A Message Subject is Required",
			email: "Please enter a valid email address"
		},
		submitHandler: function(form) {
			form.submit();
		}
	});
});
