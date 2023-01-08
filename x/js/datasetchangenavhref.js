function DataSetChangeNavHref(){
	console.log('change url script called');
	
	var DatasetValue = [];

	  var DatasetValue = document.getElementById("dataset-select").value;
	  
	  if (DatasetValue == "0")
	{
	var indexURL = "index.html#dataset=0";
	var shipindexURL = "shipindex.html#dataset=0";
	var compareURL = "compare.html#dataset=0";
	var crosscompareURL = "crosscompare.html#dataset=0";
	document.getElementById("indexref").href=indexURL;
	document.getElementById("shipindexref").href=shipindexURL;
    document.getElementById("compareref").href=compareURL;
	document.getElementById("crosscompareref").href=crosscompareURL;
	document.getElementById("shipindexref2").href=shipindexURL;
	}
	else if (DatasetValue == "1")
	{
	var indexURL = "index.html#dataset=1";
	var shipindexURL = "shipindex.html#dataset=1";
	var compareURL = "compare.html#dataset=1";
	var crosscompareURL = "crosscompare.html#dataset=1";
	document.getElementById("indexref").href=indexURL;
	document.getElementById("shipindexref").href=shipindexURL;
    document.getElementById("compareref").href=compareURL;
	document.getElementById("crosscompareref").href=crosscompareURL;
	document.getElementById("shipindexref2").href=shipindexURL;
	}
  
	
};

function DataSetChangeNavHref1(){
	console.log('change url script 1 called');
	
	var DatasetValue1 = [];

	  var DatasetValue1 = document.getElementById("dataset").value;
	  
	  if (DatasetValue1 == "0")
	{
	var indexURL = "index.html#dataset=0";
	var shipindexURL = "shipindex.html#dataset=0";
	var compareURL = "compare.html#dataset=0";
	var crosscompareURL = "crosscompare.html#dataset=0";
	document.getElementById("indexref").href=indexURL;
	document.getElementById("shipindexref").href=shipindexURL;
    document.getElementById("compareref").href=compareURL;
	document.getElementById("crosscompareref").href=crosscompareURL;
	}
	else if (DatasetValue1 == "1")
	{
	var indexURL = "index.html#dataset=1";
	var shipindexURL = "shipindex.html#dataset=1";
	var compareURL = "compare.html#dataset=1";
	var crosscompareURL = "crosscompare.html#dataset=1";
	document.getElementById("indexref").href=indexURL;
	document.getElementById("shipindexref").href=shipindexURL;
    document.getElementById("compareref").href=compareURL;
	document.getElementById("crosscompareref").href=crosscompareURL;
	}
  console.log('change url script 1 done');
	
};