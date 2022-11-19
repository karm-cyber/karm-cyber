document.getElementById('btn').addEventListener("click", login);
function login(){
	let num1 = document.getElementById("num1").value;
	let num2 = document.getElementById("num2").value;

	if(num1 == "" && num2 == ""){
		alert("Username / password are not valid")
		return;
	}
	if(num1 == "user" && num2 == "password"){
		alert("Your Login successfully ")
		return;
	}
	   alert("Something is missing type proper")
}