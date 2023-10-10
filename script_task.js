let tasks = [
    {
      id : 1,
      name : 'Write an article about programming',
      status : 'completed' ,
    } ,
    {
      id : 2,
      name : 'Front end and back end Coding',
      status : 'Not Completed' ,
    } ,
    {
      id: 3,
      name: 'Web Development',
      status : 'Almost completed' ,
    } 
  ]
  
  let content ='';
  for ( let task in tasks) {
    content = content + `<div class="msg selected-bg anim-y" onclick="changeContent(${tasks[task]})">
    <input type="checkbox" name="msg" id="mail1" class="mail-choice" checked></input>
    <label for="mail1"></label> 
    <div class="msg-content">
      <div class="msg-title">${tasks[task].name}</div>
    <div class="msg-date">11 Apr, 2023</div>
    </div>
  </div>
  `
  }

  function renderHomes(home) {

  let deleteHome =
  document.createElement("button")
    deleteHome. setAttribute('id', 'delete-btn')
    deleteHome.innerText = "delete listing"

  deleteHome.addEventListener("click", function(event) {

    console.log("test222 home id", homeDiv.id)

    if(event.target.id ==='delete-btn') {

  deleteHome.addEventListener ("click", function(event) {
    if (event.target.id ==='delete-btn') {

    fetch(`http://http://127.0.0.1:5500/Task.html${home.id}`, {
      method: "DELETE" ,
      headers:  {
      "content-type":
    "application/json",
      accept: "application/json"
    }
    }).then(resp => resp.json())
    .then( () => {
    homeDiv.querySelector(`[data-id='${homeDiv. id}']`);
      home.remove();
    })
  }
    }
  )}
})
    }