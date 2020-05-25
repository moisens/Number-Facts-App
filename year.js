//Variables for Ajax
let year = document.querySelector('#year');
let yearInput = document.querySelector('#yearInput');
let yearText = document.querySelector('#yearText');

//AddEvent listener for Ajax and Fetch
yearInput.addEventListener('input', getYear);



function getYear(){
   let yearEnter = yearInput.value; 
   //Connection with Ajax
   let xhr = new XMLHttpRequest();
   xhr.open('GET', 'http://numbersapi.com/'+yearEnter+'/year', true);
   xhr.onload = function(){
      //Verifying the statue and if the input is not empty
      if(this.status == 200 && yearEnter != ''){
         year.style.display = 'block';
         yearText.innerText = this.responseText;
      }
   }
   
   xhr.send();

}
