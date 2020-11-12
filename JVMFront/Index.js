// This file is both BL and UI changes based on user input. It's the controller.




function DisplaySuccessfulSignIn() {
    //TODO: Add more stuff for changing the UI to reflect a successful sign-in;
    document.querySelector("#SignInSuccess").innerHTML = `Sign-in Successful. Changing HTML..`
    
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

function ChangeLayoutForSignIn() {
    document.querySelector('#SignInSection').setAttribute("style", "display: none");
    document.querySelector('#SignUpSection').setAttribute("style", "display: inline");
}

function ResetLayout() {
    document.querySelector('#SignInSection').setAttribute("style", "display: inline");
    document.querySelector('#SignUpSection').setAttribute("style", "display: none");
}