function show(type){
	console.log('works');
	if(type == "investor"){
		console.log('investor');
		document.getElementById('businessForm').style.display = "inline";
		document.getElementById('investorForm').style.display = "normal";
	}
	if(type == "business"){
		console.log('business');
		document.getElementById('investorForm').style.display = "inline";
		document.getElementById('businessForm').style.display = "normal";
	}
}