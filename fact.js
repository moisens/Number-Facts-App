let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText');
let numberInput = document.querySelector('#numberInput');

//numberInput.addEventListener('input', getFactAjax);
numberInput.addEventListener('input', getFactFetchs);

//Get the value of the input With Ajax
//function getFactAjax(){
//   let number = numberInput.value;
//   let xhr = new XMLHttpRequest();
//   xhr.open('GET', 'http://numbersapi.com/'+number, true);
//
//   xhr.onload = function(){
//      if(this.status == 200 && number !=''){
//         fact.style.display = 'block';
//         factText.innerText = this.responseText;
//      }
//   }
//
//   xhr.send();
//
//}

//Get the value of the input with Fetch()

function getFactFetchs(){
   let number = numberInput.value;
   fetch('http://numbersapi.com/'+number)
      .then((res) => res.text())
      .then((data) => {
         if(number != ''){
            fact.style.display = 'block';
            factText.innerText = data;
         }
      })
      .catch((error) => console.log(error));
}
