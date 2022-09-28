document.addEventListener("DOMContentLoaded", ()=>{
    var listNew = [];
    var listUpdated = [];


    fetch('../backend/projects.json').then(val => val.json()).then(val =>{
        console.log(val);
    }).catch(err => console.log(err))
});