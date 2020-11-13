// This file is both BL and UI changes based on user input. It's the controller.

const { debug } = require("console");


// var AllProducts = GetAllProducts();

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
    debugger;
    let tableRowMarkup = '';
    // console.log(products)
    //console.log("Products is " + products);
    // debugger;
    for (let index = 0; index < products.length; index++) {
        // debugger;
        const element = products[index];
        console.log(1);
        tableRowMarkup += 
            `<tr onclick='AddProductToList(${index})'>
            <td>${element.Name}</td>
            <td>${ReturnProductCategoryAsString(element.Category)}</td>
            <td>$${element.Cost}</td>
        </tr>`;
    }
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
    // CustomerProducts = GetUserProducts();
    console.log(CustomerProducts);
    ClearPrompts();
    document.querySelector('#AllProductsSection').style = "display:none"
    document.querySelector('#AllProductsSection').innerHTML = ""
    setTimeout(1000);
    document.querySelector('#UserProductsSection').style = "display: inline";
     
    var products = CustomerProducts;
    var tableRowMarkup = [];
    // debugger;
    products.forEach(element => {
        console.log(element);
        // debugger;
        tableRowMarkup.push(
            `<tr onclick='RemoveFromUserProducts(${element.Product})'>
            <td>${element.Product.name}</td>
            <td>${ReturnProductCategoryAsString(element.Product.category)}</td>
            <td>$${element.Product.cost}</td>
            <td>${element.Quantity}</td>
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



function ReturnProductCategoryAsString(categoryId) {
    switch (categoryId) {
        case 0: return 'Beverage';
        case 1: return 'Bread';
        case 2: return 'Canned Goods';
        case 3: return 'Dairy';
        case 4: return 'Baking Goods';
        case 5: return 'Frozen Food';
        case 6: return 'Meat';
        case 7: return 'Produce';
        default: "No Category Found"
    }
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