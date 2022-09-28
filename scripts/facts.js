document.addEventListener("DOMContentLoaded", ()=>{
    var list = [];


    fetch('../backend/facts.json').then(val => val.json()).then(val =>{
        console.log(val.facts);
        var data = val.facts;
        var item = Math.random(val.facts.length)
        var actualItem = Math.floor(item);
        document.querySelector('.p-text').innerHTML = `Fun Fact : ${data[actualItem]}`
    }).catch(err => console.log(err))

    setInterval(()=>{
        document.querySelector('.p-text').innerHTML = `Fun Fact : ${data[actualItem]}`
    }, 5000);
});