var baseUrl = "https://localhost:5001"

var currentCustomer;


function GetCustomerRequest()
{
    let customerEmail = document.querySelector('#SignInEmailInput').value;

    fetch(`${baseUrl}/Customer/get/${customerEmail}`)
    .then(response => response.json())
    .then(
        result => {
            let receivedCustomer = new Customer(result[0].name, result[0].email);
            currentCustomer = receivedCustomer;

            //TODO: Add more stuff for changing the UI to reflect a successful sign-in;
        }, 
        rejection => {
            // TODO: Change the HTML to reflect a failed sign-in.
        }
    );
}


function SignUpRequest() {
    let customerName = document.querySelector('#SignUpNameInput').value;
    let customerEmail = document.querySelector('#SignUpEmailInput').value;
    let customer = new Customer(customerName, customerEmail);

    postData(`${baseUrl}/Customer/add`, customer).then(
        result => {
            
            // TODO: Change HTML to reflect successful signup.
        },
        rejection => {
            // TODO: Base jump with no parachute, I guess, I have no idea what to do here yet.
        }
        );

}







async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  async function getData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }







function GetPokemon()
{
    let xhr = new XMLHttpRequest();
    let pokemon = {};
    let pokemonInput = document.querySelector('#pokemonInput').value;
    //the ready state of the xhttp object determines the state of the request:
    // 0 - uninitialized
    // 1 - loading (server connection established) the open method has been invoked
    // 2 - loaded (request received by server) send has been called
    // 3 - interactive (processing request) response body is being received
    // 4 - complete (response received) 
    //the status code checks if the operation was successful
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status > 199 && this.status < 300)
        {
            //JSON.parse is a function that converts the response body to a JS object
            pokemon = JSON.parse(xhr.responseText);
            document.querySelector('.pokemonResult img').setAttribute('src', pokemon.sprites.front_default);
            document.querySelectorAll('.pokemonResult caption').forEach((element) => element.remove());
            let caption = document.createElement('caption');
            let pokeName = document.createTextNode(pokemon.forms[0].name);
            caption.appendChild(pokeName);
            document.querySelector('.pokemonResult').appendChild(caption);
            document.querySelector('#pokemonInput').value = '';
        }
    };
    //creates the request
    //first parameter is the http method, second is the url/endpoint, third sets whether the request is async
    // By making the request async, the end user will be able to interact with the page while waiting for server response
    // The A in AJAX
    xhr.open("GET", `https://pokeapi.co/api/v2/pokemon/${pokemonInput}`, true);
    //Sends the request, has an optional parameter of request body data
    xhr.send();
}
function GetDigimon()
{
    let digiName = document.querySelector('#digimonInput').value;
    //Simplest form takes in the URL you'll be querying, you can add additional request initializations in an object as a second parameter
    //returns a promise, you convert the response to json (which returns a promise), 
    //then you take the converted response and update your page
    fetch(`https://digimon-api.vercel.app/api/digimon/name/${digiName}`)
    .then(response => response.json())
    .then(result => {
        document.querySelector('.digimonResult img').setAttribute('src', result[0].img);
        document.querySelectorAll('.digimonResult caption').forEach((element) => element.remove());
        let caption = document.createElement('caption');
        caption.appendChild(document.createTextNode(result[0].name));
        document.querySelector('.digimonResult').appendChild(caption);
        document.querySelector('#digimonInput').value = '';
    });
}