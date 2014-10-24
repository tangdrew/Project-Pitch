function show(type){
	if(type == "investor"){
		document.getElementById('businessForm').display = "none";
		document.getElementById('investorForm').display = "normal";
	}
	if(type == "business"){
		document.getElementById('investorForm').display = "none";
		document.getElementById('businessForm').display = "normal";
	}
}