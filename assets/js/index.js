
const messageAlert = document.getElementsByClassName("btn btn--green")


var myHeaders = new Headers();
myHeaders.append("X-RapidAPI-Key", "c1d9267467msh5e96a7a8932441bp1ccd00jsn745bf1fe6106");
myHeaders.append("X-RapidAPI-Host", "zillow56.p.rapidapi.com");

var raw = "";

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://zillow56.p.rapidapi.com/search?location=houston%2C%20tx", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


