function show(type){
	console.log('works');
	if(type == "investor"){
		console.log('investor');
		document.getElementById('businessForm').display = "inline";
		document.getElementById('investorForm').display = "normal";
	}
	if(type == "business"){
		console.log('business');
		document.getElementById('investorForm').display = "inline";
		document.getElementById('businessForm').display = "normal";
	}
}