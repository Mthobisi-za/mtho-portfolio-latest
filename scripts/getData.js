document.addEventListener("DOMContentLoaded", ()=>{
    const createElements = (param)=>{
        document.querySelector('.row').appendChild(
            Object.assign(
                document.createElement('div'),
                {class: 'box', id: 'box'}
            )
        ).appendChild(
            Object.assign(
                document.createElement('h2'),
                {class: "subtitle", innerHTML: param.name}
            )
        );
    }
    fetch('../backend/projects.json').then(val => val.json()).then(val =>{
        var arg = val.projects;
        arg.forEach(element => {
            createElements(element);
        });
    }).catch(err => console.log(err))
});

/*

document.body
  .appendChild(
  Object.assign(
    document.createElement('div'),
    { id:'box'}
  )
).appendChild(
  Object.assign(
    document.createElement('button'),
    { innerHTML : 'button' ,
      id:'button-1'
    }
  )
)
*/