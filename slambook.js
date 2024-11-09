 let profilePic = document.getElementById("profile-pic");
 let inputFile = document.getElementById("input-file");

 inputFile.onchange = function() {
  profilePic.src = URL.createObjectURL(inputFile.files[0]);
 }




 function myfunc(event) {
 	event.preventDefault();

var fullname = document.getElementById("fullname").value;
var age = document.getElementById("age").value;
var ingame = document.getElementById("ingame").value;
var gender = document.getElementById("gender").value;
var bday = document.getElementById("bday").value;
var rank = document.getElementById("rank").value;
var frole = document.getElementById("frole").value;
var fagent = document.getElementById("fagent").value;
var fmap = document.getElementById("fmap").value;
var fskin = document.getElementById("fskin").value;

temp_gender.checked ? gender = "Male" : gender = "Female";

	localStorage.setItem('ls_full_name', fullname);
	localStorage.setItem('ls_age', age);
	localStorage.setItem('ls_ingame', ingame);
	localStorage.setItem('ls_gender', gender);
	localStorage.setItem('ls_bday', bday);
	localStorage.setItem('ls_rank', rank);
	localStorage.setItem('ls_frole', frole);
	localStorage.setItem('ls_fagent', fagent);
	localStorage.setItem('ls_fmap', fmap);
	localStorage.setItem('ls_fskin', fskin);


 }