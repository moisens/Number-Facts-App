//AJAX Variables
let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText');
let numberInput = document.querySelector('#numberInput');

//Fetch variables
let factFetch = document.querySelector('#factFetch');
let factTextFetch = document.querySelector('#factTextFetch');
let numberInputFetch = document.querySelector('#numberInputFetch'); 

numberInput.addEventListener('input', getFactAjax);
numberInputFetch.addEventListener('input', getFactFetchs);

//Get the value of the input With Ajax
function getFactAjax(){
   let number = numberInput.value;
   let xhr = new XMLHttpRequest();
   xhr.open('GET', 'http://numbersapi.com/'+number, true);

   xhr.onload = function(){
      if(this.status == 200 && number !=''){
         fact.style.display = 'block';
         factText.innerText = this.responseText;
      }
   }

   xhr.send();

}

//Get the value of the input with Fetch()

function getFactFetchs(){
   let number = numberInputFetch.value;
   fetch('http://numbersapi.com/'+number)
      .then((res) => res.text())
      .then((data) => {
         if(number != ''){
            factFetch.style.display = 'block';
            factTextFetch.innerText = data;
         }
      })
      .catch((error) => console.log(error));
}
