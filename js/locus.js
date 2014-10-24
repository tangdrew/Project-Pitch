function show(type){
	if(type == "investor"){
		document.getElementById('businessForm').display = "inline";
		document.getElementById('investorForm').display = "normal";
	}
	if(type == "business"){
		document.getElementById('investorForm').display = "inline";
		document.getElementById('businessForm').display = "normal";
	}
}