//your JS code here. If required.
function removeColor(){
	let select=document.getElementById("colorSelect");
	let index=select.selectedIndex;

	select.remove(index);
}