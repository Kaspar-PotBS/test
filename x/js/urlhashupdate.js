$(document).ready(function () {
		
var hashParams = window.location.hash.substr(1).split('&'); // substr(1) to remove the `#`
for(var i = 0; i < hashParams.length; i++){
    var p = hashParams[i].split('=');

   /* document.getElementById(p[0]).value = decodeURIComponent(p[1]);*/
	
	document.getElementById('dataset-select').selectedIndex=(p[1]);
	
	$('#dataset-select').on('change', function(){

    });
	
	
	/*$('#dataset-select').change();
	$('#dataset-select').on('change', indexfilterscript());*/
	
	$('#dataset-select').change();
	$('#dataset-select').on('change', filterscript1());
		
		
		
};
});


$(function(){
  $('#dataset-select').change(function () {
	  var datanum = document.getElementById("dataset-select").value;
		var url = "dataset="+datanum;
		console.log(url);
        window.location.hash = url;
	});
});


window.addEventListener('hashchange', fn, false);

window.onload = fn; // fire on pageload

function fn() {
   $('#versionset').val(window.location.hash.replace('#', ''));
   
   
   var DatasetValue = [];
	  var DatasetValue = document.getElementById("dataset-select").value;
	  
	  if (DatasetValue == "0")
	{
	document.getElementById('dataset-select').selectedIndex=0;
	}
	else
	
	document.getElementById('dataset-select').selectedIndex=1;
   
   
	/*indexfilterscript();*/
}