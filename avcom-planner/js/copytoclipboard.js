function CopyCodeToClipboard() {
  var copyText = document.getElementById("SkillCode");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  
  var tooltip = document.getElementById("copybtn-tooltip");
  tooltip.innerHTML = "Copied: " + copyText.value;
}

$('#copyURLSkillCode').click(function() {
	var Part1 = window.location.origin,
	Part2 = window.location.pathname,
	hashPart = '#SkillCode=',
    CodePart = $('#SkillCode').val();
					$('input[name=URL]').val(Part1 + Part2 + hashPart + CodePart);
					var URLCODE = (Part1 + hashPart + CodePart);
					var copyText = document.getElementById("URLField");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  
  var tooltip = document.getElementById("copybtn-tooltip2");
  tooltip.innerHTML = "Copied URL with code: " + CodePart;
});

