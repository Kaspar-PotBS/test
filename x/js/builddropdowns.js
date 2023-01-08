function BuildDropdowns(){
};
$.getJSON("js/shipdata.json", function(json) {
	  
function removeOptions(selectElement) {
   var i, L = selectElement.options.length - 1;
   for(i = L; i >= 0; i--) {
      selectElement.remove(i);
   }
}	  
	  
removeOptions(document.getElementById('ship'));
removeOptions(document.getElementById('shipb'));

shipselect = document.getElementById('ship');
ship1select = document.getElementById('shipb');
shipselect.options[shipselect.options.length] = new Option('-- n/a --', '9999999');
ship1select.options[ship1select.options.length] = new Option('-- n/a --', '9999999');
	  
	  
	  var DatasetValue = [];
	  var DatasetValue = document.getElementById("dataset").value;
	  
	  
	  if (DatasetValue == "0")
	{
	var shipdata = json.Legacy;
	}
	else
	
	var shipdata = json.Ships;
	  
	  
	  
	//var shipdata =  json.Ships;
	
	shipdata.sort(function(a, b) {
  var modelA = a.model.toUpperCase(); // ignore upper and lowercase
  var modelB = b.model.toUpperCase(); // ignore upper and lowercase
  if (modelA < modelB) {
    return -1;
  }
  if (modelA > modelB) {
    return 1;
  }

  // names must be equal
  return 0;
});
	
	
	const arr = shipdata.map(i => `${i.model}`);
	const arr1 = shipdata.map(i => `${i.ID}`);
	

shipselect = document.getElementById('ship');
ship1select = document.getElementById('shipb');

arr.forEach((Stat1, index) => {
  const Stat2 = arr1[index];

shipselect.options[shipselect.options.length] = new Option(Stat1, Stat2);
ship1select.options[ship1select.options.length] = new Option(Stat1, Stat2);
});

});