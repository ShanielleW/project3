function formValidation(){
		var firstname = document.myForm.first;
		var lastname = document.myForm.last;
		var username=  document.myForm.user;
		var useremail = document.myForm.email;
		//var certnumber =document.myForm.certnum;
		var password = document.myForm.pass;
		var passwordconf =document.myForm.passcon;
		var errormsg="";

		namevalid(firstname,lastname);
		validuname(username);
		validate_email(useremail);
		validate_certnum(certnumber);
		passwordmatch(password,passwordconf);
}

    function namevalid(firstname,lastname){
		var nameregex=/^[A-Za-z]+$/;


			if(firstname.value.match(nameregex) && lastname.value.match(nameregex)){
				return true;
				firstname.backgroundColor="green";
				lastname.backgroundColor="green";
			}else if(firstname.value==="" || lastname.value===""){
				firstname.classList.add("invalid");
				lastname.classList.add("invalid");
				errormsg="Please enter firstname and lastname.\n";
				alert(errormsg);
				return false;
			}else{
				errormsg=("Name must possess alphabet characters only\n");
				firstname.classList.add("invalid");
				lastname.classList.add("invalid");
				alert(errormsg);
				return false;
				}
	}

    function validuname(username){
	    var unameregex= /[^a-zA-Z0-9_-]/; //allowing letters, numbers and underscores
		var unamelen=username.value.length;

			if(username.value===""){
				alert("You did not enter a username");
				username.classList.add("invalid");
			    username.focus();
				return false;
			}else if ((unamelen<8) || (unamelen>16)){
				username.classList.add("invalid");
				username.focus();
				alert("Unsername must be between 8 and 16 characters");
				return false;
			}else if(unameregex.value.test(username)){
				username.classList.add("invalid");
				username.focus();
				alert("The username you entered have illegal characters");
				return false;
			}else{
				return true;
			}
    }

    function validate_email(useremail){
	    var emailregex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

			if(useremail.value.match(emailregex)){
				return true;
			}else if(useremail.value==""){
				alert("Please enter an email address");
				useremail.focus();
				useremail.classList.add("invalid");
				return false;
			}
     }

    function validate_certnum(certnumber){
	var certnumber_regex=/^[0-9]+$/;

		if (certnumber.value.match(certnumber_regex)===false || isNaN(certnumber.value) ||(certnumber.value.length)!=5){
			certnumber.classList.add("invalid");
	    	certnumber.focus();
	    	alert("Certificate number must be all numbers, atleast 5");
	    	return false;
		}else if(certnumber.value==""){
			alert("The cert num field cannot be empty, must be all number;atleast 5");
		}else{
			return true;
		    }
	}

   function passwordmatch(password,passwordconf){

   		var passwdregex=/^(?=.*[A-Zaz])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;

		var passwdlen=password.value.length;
		var passwdlen2=passwordconf.value.length;
		if((passwdlen) || (passwdlen2) ===0 || (passwdlen) ||(passwdlen2)<8 ){
			alert("Password fields cannot be empty and they must be longer than 8 characters");
			password.classList.add("invalid");
			passwordconf.classList.add("invalid");
			password.focus();
			passwordconf.focus();
			return false;

		}else if (password.value.match(passwdregex)){
		   return true;
		}else if (password.value.match(passwordconf)){
			return true;
		}else{
			alert("Passwords do not match, try again!");
			password.classList.add("invalid");
			passwordconf.classList.add("invalid");
			password.focus();
			passwordconf.focus();
			return false;
		}
	}
// }
