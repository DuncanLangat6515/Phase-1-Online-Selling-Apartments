const init = () => {
  const inputForm = document.getElementById('search')

  inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.getElementById('property');
    fetch(`http://localhost:3000/${input.value}`)
      .then(response => response.json())

      .then(data => housesInCity(data))

    function housesInCity(houses) {
      for (let i = 0; i < houses.length; i++) {
        let div = document.getElementById('properties')
        let h4 = document.createElement('h4')
        h4.innerHTML = ` ${houses[i].name} ${houses[i].details} Ksh ${houses[i].price} 
        <img src="${houses[i].url}">`
        div.appendChild(h4)
     

      }
    }
    
  })
  document.getElementById('comment_form').addEventListener('submit',addMessage)
 function addMessage(e){
  e.preventDefault() 
  let message={
    comment:e.target.comment_input.value
  }
  postMessage(message)
 }
 function postMessage(messageObj){
  fetch('http://localhost:3000/messages',{
    method:'POST',
    headers:{
      'Content-Type':'application/json',
      Accept:'application/json'
    },
    body:JSON.stringify(messageObj)
  })
  .then(response=>response.json())
 }





}


document.addEventListener('DOMContentLoaded', init);