let clickRuns = 0, clickWickets = 0, clickBall = 0, clickWhiteBall=0, countBall=0, clickOvers=0
function run0Click()
{
    clickRuns=clickRuns+0;
    document.querySelector('.total-clickRuns').textContent = clickRuns;
    ballClick()
    Overs()
    saveData()
    update()
    document.getElementById("wickets").value = "wicket"
}
function run1Click()
{
    clickRuns=clickRuns+1;
    document.querySelector('.total-clickRuns').textContent = clickRuns;
    ballClick()
    Overs()
    saveData()
    update()
    document.getElementById("wickets").value = "wicket"
}
function run2Click()
{
    clickRuns=clickRuns+2;
    document.querySelector('.total-clickRuns').textContent = clickRuns;
    ballClick()
    Overs()
    saveData()
    update()
    document.getElementById("wickets").value = "wicket"
}
function run3Click()
{
    clickRuns=clickRuns+3;
    document.querySelector('.total-clickRuns').textContent = clickRuns;
    ballClick()
    Overs()
    saveData()
    update()
    document.getElementById("wickets").value = "wicket"
}
function run4Click()
{
    clickRuns=clickRuns+4;
    document.querySelector('.total-clickRuns').textContent = clickRuns;
    ballClick()
    Overs()
    saveData()
    update()
    document.getElementById("wickets").value = "wicket"
}
function run6Click()
{
    clickRuns=clickRuns+6;
    document.querySelector('.total-clickRuns').textContent = clickRuns;
    ballClick()
    Overs()
    saveData()
    update()
    document.getElementById("wickets").value = "wicket"
}
function wideBallClick()
{
    clickRuns=clickRuns+1;
    document.querySelector('.total-clickRuns').textContent = clickRuns;
    document.getElementById("wickets").value = "wicket"
}
function wicketClick()
{
    // document.getElementById("wickets").value = "wicket"
    clickWickets=clickWickets+1;
    document.querySelector('.total-clickWickets').textContent = clickWickets;
    ballClick()
    Overs()
    saveData()
    update()
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
let history = []
function saveData() {
const state = {
    clickRuns,
    clickBall,
    clickWhiteBall,
    clickWickets
}
history.push(state)
}
function update() {
    document.querySelector('.total-clickRuns').textContent = clickRuns;
    document.getElementById('.total-clickWickets').textContent = clickWickets;
    document.getElementById('.total-clickBalls').textContent = clickBall;
}
function Undo() {
if (history.length>1){
    history.pop();
    const previousState = history[history.length-1];
    clickRuns = previousState.clickRuns
    clickBall = previousState.clickBall
    clickWickets = previousState.clickWickets
    clickWhiteBall = previousState.clickWhiteBall
    update();
}
}
function Overs(){
    if(clickBall<5){
        countBall=countBall+1
        clickOvers=(countBall/10)
        // console.log(clickOvers)
    }
    else{
        countBall=0
        clickOvers=clickOvers+1
        clickBall=0
        // console.log(clickOvers)
    }
    document.querySelector('.total-overs').textContent = clickOvers;
}


