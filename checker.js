function checkFirstName(){ //validates first name entry
	
	var input = document.getElementById("firstName").value; //Gets the input for the first name
	var writing = /^[a-zA-Z]+$/;
	
	if(writing.test(input) && input.length >= 2){ //validates that it is 2 letters or more and only contains letters
		document.getElementById("firstNamePrompt").style.color = "green";
		document.getElementById("firstNamePrompt").innerHTML = "<strong>Valid</strong>"; //Displays valid
	}
	else{//Doesn't follow name protocal
		document.getElementById("firstNamePrompt").style.color = "red";
		document.getElementById("firstNamePrompt").innerHTML = "<strong>Invalid</strong>";//Displays invalid 
	}
	return true;
}

function checkLastName(){ // Check the last name
	
	var input = document.getElementById("lastName").value;//Gets the last name input
	var writing = /^[a-zA-Z]+$/;
	
	if(writing.test(input) && input.length > 2){//Checks if it is valid similar to the first name
		document.getElementById("lastNamePrompt").style.color = "green";//Sets color green
		document.getElementById("lastNamePrompt").innerHTML = "<strong>Valid</strong>";//Displays valid
	}
	else{
		document.getElementById("lastNamePrompt").style.color = "red";
		document.getElementById("lastNamePrompt").innerHTML = "<strong>Invalid</strong>";//Displays invalid
	}
	return true;
}

function checkCost(){//Reminder to put a cost
	
	var input = parseInt(document.getElementById("cost").value);//Gets cost
	
	if(input > 0){
		document.getElementById("pricePrompt").style.color = "green";//Displays that the cost is valid
		document.getElementById("pricePrompt").innerHTML = "<strong>Valid</strong>";//Valid
	}
	else{
		document.getElementById("pricePrompt").style.color = "black";//Black for cautionary, not necessary
		document.getElementById("pricePrompt").innerHTML = "<strong>***No Price</strong>";//Says no price enterred
	}
	
	return true;
}

function checkLongAnswer1(){//Checks to see if text answered for the first long answer question
	var input = document.getElementById("fairPrice").value;//Gets the input
	
	if(input.length > 0){//If there is a character
		document.getElementById("fairPricePrompt").style.color = "black";
		document.getElementById("fairPricePrompt").innerHTML = "<strong>Thank you!</strong>";//They enterred something, thank you
	}
	else{
		document.getElementById("fairPricePrompt").style.color = "black";
		document.getElementById("fairPricePrompt").innerHTML = "<strong>***No Entry</strong>";//Did not enter anything so kind reminder to hopefully enter something
	}
	
	return true;
}

function checkLongAnswer2(){//Checks the second long answer
	var input = document.getElementById("safety").value;//Gets the input
	
	if(input.length > 0){//Checks to see if some characters are enterred
		document.getElementById("safetyPrompt").style.color = "black";
		document.getElementById("safetyPrompt").innerHTML = "<strong>Thank you!</strong>";//Thank you for enterring something
	}
	else{
		document.getElementById("safetyPrompt").style.color = "black";
		document.getElementById("safetyPrompt").innerHTML = "<strong>***No Entry</strong>";//Did not enter anything so kind reminder to hopefully enter something
	}
	
	return true;
}

function checkLongAnswer3(){//Checks the third long answer
	var input = document.getElementById("more").value;
	
	if(input.length > 0){//checks to see if something was enterred
		document.getElementById("morePrompt").style.color = "black";
		document.getElementById("morePrompt").innerHTML = "<strong>Thank you!</strong>";//Says thank you for enterring something
	}
	else{
		document.getElementById("morePrompt").style.color = "black";
		document.getElementById("morePrompt").innerHTML = "<strong>***No Entry</strong>";//Did not enter anything so kind reminder to hopefully enter something
	}
	
	return true;
}

function displaySubmittedMessage(){//Upon clicking finish survey
	document.getElementById("submittedMessage").innerHTML = "<strong>Form Submitted!</strong>";//Displays submitted
}