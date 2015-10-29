var hide = function(){
	var a = document.getElementById('small');
	a.hidden = true;
	setTimeout(function(){
		a.hidden = false;
	},1000);
}

var allComents="";
var submit = function(){
	var name = document.getElementById('name').value;
	var comment = document.getElementById('comment').value;
	var date = new Date();
	var time = date.toString().slice(0,15);
	allComents=time+"&nbsp;&nbsp;&nbsp;"+name+"&nbsp;"+comment+ "<html><br></html>"+allComents; 
	document.getElementById('submit').innerHTML = allComents
}