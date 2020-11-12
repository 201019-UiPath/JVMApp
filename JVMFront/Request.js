// This file is just for accessing the DB. 
// It should be used to get objects and MAYBE update error/success prompts that show the user the progress. 


var baseUrl = "https://localhost:5001/api"

var CurrentUser;

var AllProducts = GetAllProducts();

function GetUserRequest()
{
    let userEmail = document.querySelector('#SignInEmailInput').value;

    getData(`${baseUrl}/User/get/${userEmail}`)
    .then(
        result => {
            let receiveduser = new User(result[0].name, result[0].email);
            CurrentUser = receiveduser;
            console.log(result);
            DisplaySuccessfulSignIn();
        }, 
        rejection => {
            // TODO: Change the HTML to reflect a failed sign-in.
            document.querySelector("#SignInError").innerHTML = `Sign-in Failed. Error: ${rejection}`
        }
    );
}


function SignUpRequest() {
    let userName = document.querySelector('#SignUpNameInput').value;
    let userEmail = document.querySelector('#SignUpEmailInput').value;
    let user = new User(-69, userName, userEmail);

    postData(`${baseUrl}/User/add`, user).then(
        result => {
            
            // TODO: Change HTML to reflect successful signup.
        },
        rejection => {
            // TODO: Base jump with no parachute, I guess, I have no idea what to do here yet.
        }
    );

}

function GetAllProducts() {
    // TODO: Arrange elements that need to be modified and added when the products are received.
    let allProducts = [];
    getData(`${baseUrl}/Product/getall`).then(
        result => {
            result.forEach(element => {
                allProducts.push(new Product( element.id, element.name, element.cost, element.category))
            });
            return allProducts;
        },
        rejection => {
            // TODO: Base jump with no parachute, I guess, I have no idea what to do here yet.
        }
    )
    return null;
}

function GetUserProducts(user = {}) {
    let allProducts = [];
    getData(`${baseUrl}/User/products/get/${user.Email}`).then(
        result => {
            result.forEach(element => {
                allProducts.push(new UserProduct( element.id, user, AllProducts.find(p=>p.id === element.productid) , element.quantity))
            });


            // TODO: Change HTML to show product options.
        },
        rejection => {
            // TODO: Base jump with no parachute, I guess, I have no idea what to do here yet.
        }
    )
    return allProducts;
}

function GetProduct(id = -5) {
    getData(`${baseUrl}/Product/get?id=${id}`).then(
        result => {
            return result[0];

            
        },
        rejection => {
            // TODO: Base jump with no parachute, I guess, I have no idea what to do here yet.
        }
    )
    return null;
}

function AddToUserProducts(product= {}) {
    postData(`${baseUrl}/User/products/add`, product).then(
        result => {

            // TODO: Change HTML to show successful product addition.
        }, 
        rejection => {
            // TODO: Base jump with no parachute, I guess, I have no idea what to do here yet.

        }
    )
}

function UpdateExistingProduct(product={}){
    putData(`${baseUrl}/User/products/update/${product.Id}`, product).then(
        result => {

            // TODO: Change HTML to show successful product update.
        }, 
        rejection => {
            // TODO: Base jump with no parachute, I guess, I have no idea what to do here yet.

        }
    )
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

  async function putData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
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

  async function deleteData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
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

  async function getData(url = ''/*, data = {}*/) {
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
      //body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }




