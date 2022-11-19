document.getElementById('btn').addEventListener("click", login);
function login(){
	let num1 = document.getElementById("num1").value;
	

	if(num1 == "karm@gmail.com" ){
		alert("Username id not register.............")
		return;
	}
	if(num1 == "user@gmail.com" ){
		alert("Your Login Id=user, pass=password")
		return;
	}
	   alert("Something is missing type proper")
}