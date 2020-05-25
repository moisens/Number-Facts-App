let yearFetch = document.querySelector('#yearFetch');
let yearTextFetch = document.querySelector('#yearTextFetch');
let yearInputFetch = document.querySelector('#yearInputFetch');

yearInputFetch.addEventListener('input', getYearFetch);

function getYearFetch(){
   let theYear = yearInputFetch.value;
   //console.log(theYear);
   fetch(`http://numbersapi.com/${theYear}/year`)
      .then((res) => res.text())
      .then((data) => {
         if(theYear != ''){
            yearFetch.style.display = 'block';
            yearTextFetch.innerHTML = data;
         }
      })
      .catch((error) => console.log(error));

}