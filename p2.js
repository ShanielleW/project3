function validator(){
	var first= document.getElement("first").value;
	var last= document.getElement("last").value;
	var user=document.getElement("user").value;
	var email=document.getElement("email").value;
	var pass=document.getElement("pass").value;
	var passcon=document.getElement("passcon").value;
	var isvalid = 0;
	if (first==""){
		document.getElement("r10").className="clr";
	}else{
		document.getElement("r10").className="clr2";
		return true;
	}
	if (last=="") {
		document.getElement("r20").className = "clr";
	}else{
		document.getElement("r20").className="cl2";
	}
	if (user=="") {
		document.getElement("r30").className = "clr";
	}else{
		document.getElement("r30").className="clr2";
	}
	if (email=="") {
		document.getElement("r40").className="clr";
	}else{
		document.getElement("r40").className="clr2";
	}
	if(password==""||password.length<8){
		document.getElement("r50").className = "clr";
	}else{
		if (passcon==""||passcon.length<8) {
			document.getElement("r60").className = "clr";
		}
	}else{
		if (password!=passcon) {
			document.getElement("r50").className = "clr";
			document.getElement("r60").className = "clr";
		}
	}else{
		document.getElement("r50").className="clr2";
		document.getElement("r60").className="clr2";
	}

}
