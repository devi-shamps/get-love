var maxprogress = 100;
var actualprogress = 0;
var itv = 0;
function prog()
{
  if(actualprogress >= maxprogress) 
  {
    clearInterval(itv);   	
    return;
  }	
  var progressnum = document.getElementById("progressnum");
  var indicator = document.getElementById("indicator");
  actualprogress += 1;	
  indicator.style.width=actualprogress + "px";
  progressnum.innerHTML = "wait " + (maxprogress - actualprogress) + " seconds";
}