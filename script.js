const timer = document.querySelector('#time span');

setInterval(()=>{
    timer.innerText = new Date().toLocaleString()
})

function doSomething(){
    console.log('ali is the best')
}