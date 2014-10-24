function show(type){
	console.log('works');
	if(type == "investor"){
		console.log('investor');
		document.getElementById('businessForm').style.display = "none";
		document.getElementById('investorForm').style.display = "normal";
	}
	if(type == "business"){
		console.log('business');
		document.getElementById('investorForm').style.display = "none";
		document.getElementById('businessForm').style.display = "normal";
	}
}