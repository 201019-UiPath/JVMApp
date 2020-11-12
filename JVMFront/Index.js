// This file is both BL and UI changes based on user input. It's the controller.


var AllProducts = GetAllProducts();

function DisplaySuccessfulSignIn() {
    //TODO: Add more stuff for changing the UI to reflect a successful sign-in;
    document.querySelector("#SignInSuccess").innerHTML = `Sign-in Successful. Changing HTML..`;
    document.querySelector('#SignInSection').style = "display: none";
    document.querySelector('#SignUpSection').style = "display: none";
    document.querySelector("#UserChoices").style = "display: inline";
    
}

function AddProductToList(id = -10) {
    //TODO: This function should add a UserProduct to the user's list.
    document.querySelector('#UserChoiceSuccess').innerHTML = "Adding product to user's list.."
    AddToUserProducts(id);
}

function DisplayAllProducts() {
    ClearPrompts();
    document.querySelector('#UserProductsSection').style = "display:none";
    document.querySelector('#UserProductsSection').innerHTML = "";
    document.querySelector('#AllProductsSection').style = "display: inline";
    let products = [];
    products = AllProducts;
    
    let tableRowMarkup = '';
    //console.log(products)
    //console.log("Products is " + products);
    
    for (let index = 0; index < products.length; index++) {
        const element = products[index];
        console.log(1);
        tableRowMarkup += 
            `<tr onclick='AddProductToList(${index})'>
            <td>${element.Name}</td>
            <td>${element.Category}</td>
            <td>$${element.Cost}</td>
        </tr>`;
    }
    products.forEach(element => {
        
        
    });
    console.log(tableRowMarkup)
    

    let tableMarkup = `<table style="width:100%">
    <tr>
      <th>Name</th>
      <th>Category</th>
      <th>Cost</th>
    </tr>
    ${tableRowMarkup}
  </table> `
  
  document.querySelector('#AllProductsSection').innerHTML = tableMarkup;
}


function DisplayUserProducts() {
    CustomerProducts = GetUserProducts(CurrentUser);
    ClearPrompts();
    document.querySelector('#AllProductsSection').style = "display:none"
    document.querySelector('#AllProductsSection').innerHTML = ""
    setTimeout(1000);
    document.querySelector('#UserProductsSection').style = "display: inline";
    
    var products = CustomerProducts;// GetUserProducts(CurrentUser);
    var tableRowMarkup = [];

    products.forEach(element => {
        tableRowMarkup.push(
            `<tr onclick='RemoveFromUserProducts(${element.Product})'>
            <td>${element.Product.Name}</td>
            <td>${element.Product.Category}</td>
            <td>$${element.Product.Cost}</td>
            <td>$${element.Quantity}</td>
        </tr>
        `
        )
    });
    var tableMarkup = `<table style="width:100%">
    <tr>
      <th>Name</th>
      <th>Category</th>
      <th>Cost</th>
      <th>Quantity</th>
    </tr>
    ${tableRowMarkup.join('')}
  </table> `

  document.querySelector('#UserProductsSection').innerHTML = tableMarkup;
}








function ClearErrorPrompts() {
    document.querySelectorAll('.errorPrompt').forEach(element => {
        element.innerHTML = ''
    });
}

function ClearSuccessPrompts(){ 
    document.querySelectorAll('.successPrompt').forEach(element => {
        element.innerHTML = ''
    });
}

function ClearPrompts() {
    ClearSuccessPrompts();
    ClearErrorPrompts();
}

function ChangeLayoutForSignIn() {
    document.querySelector('#SignInSection').setAttribute("style", "display: none");
    document.querySelector('#SignUpSection').setAttribute("style", "display: inline");
}

function ResetLayout() {
    document.querySelector('#SignInSection').setAttribute("style", "display: inline");
    document.querySelector('#SignUpSection').setAttribute("style", "display: none");
}