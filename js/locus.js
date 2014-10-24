function show(type){
	if(type == "investor"){
		document.getElementById('businessForm').style.display = "none";
		document.getElementById('investorForm').style.display = "inline";
	}
	if(type == "business"){
		document.getElementById('investorForm').style.display = "none";
		document.getElementById('businessForm').style.display = "inline";
	}
}