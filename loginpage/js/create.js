document.getElementById('btn').addEventListener("click", login);
function login(){
	let num1 = document.getElementById("num1").value;
	let num2 = document.getElementById("num2").value;
    let num3 = document.getElementById("num3").value;

	if(num1 == "" && num2 == "" && num3 == ""){
		alert("Username / password are not valid")
		return;
	}
	if(num1 == "user" && num2 == "user@gmail.com" && num3 == "password"){
		alert("Your Register successfully -- Id=user, pass=password")
		return;
	}
	   alert("Something is missing type proper")
}