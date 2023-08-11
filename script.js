let clickRuns = 0, clickWickets = 0, clickBall = 0, clickWhiteBall=0
function run0Click ()
{
    clickRuns=clickRuns+0;
    document.querySelector('.total-clickRuns').textContent = clickRuns;
    ballClick()
    document.getElementById("wickets").value = "wicket"
}
function run1Click ()
{
    clickRuns=clickRuns+1;
    document.querySelector('.total-clickRuns').textContent = clickRuns;
    ballClick()
    document.getElementById("wickets").value = "wicket"
}
function run2Click()
{
    clickRuns=clickRuns+2;
    document.querySelector('.total-clickRuns').textContent = clickRuns;
    ballClick()
    document.getElementById("wickets").value = "wicket"
}
function run3Click()
{
    clickRuns=clickRuns+3;
    document.querySelector('.total-clickRuns').textContent = clickRuns;
    ballClick()
    document.getElementById("wickets").value = "wicket"
}
function run4Click()
{
    clickRuns=clickRuns+4;
    document.querySelector('.total-clickRuns').textContent = clickRuns;
    ballClick()
    document.getElementById("wickets").value = "wicket"
}
function run6Click()
{
    clickRuns=clickRuns+6;
    document.querySelector('.total-clickRuns').textContent = clickRuns;
    ballClick()
    document.getElementById("wickets").value = "wicket"
}
function wideBallClick()
{
    clickRuns=clickRuns+1;
    document.querySelector('.total-clickRuns').textContent = clickRuns;
}
function wicketClick()
{
    // document.getElementById("wickets").value = "wicket"
    clickWickets=clickWickets+1;
    document.querySelector('.total-clickWickets').textContent = clickWickets;
    ballClick()
}
function noBallClick()
{
    // run1Click()
    clickRuns=clickRuns+1;
    alert("click corresponding runs obtained")
    document.querySelector('.total-clickRuns').textContent = clickRuns;
    clickBall=clickBall-1;
    document.getElementById("wickets").value="runout";
    
}
function ballClick()
{
    clickBall=clickBall+1;
    document.querySelector('.total-clickBall').textContent = clickBall;
}


