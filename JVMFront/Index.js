function ChangeLayoutForSignIn() {
    document.querySelector('#SignInSection').setAttribute("style", "display: none");
    document.querySelector('#SignUpSection').setAttribute("style", "display: inline");
}

function ResetLayout() {
    document.querySelector('#SignInSection').setAttribute("style", "display: inline");
    document.querySelector('#SignUpSection').setAttribute("style", "display: none");
}


function DisplaySuccessfulSignIn() {
    //TODO: Add more stuff for changing the UI to reflect a successful sign-in;
    document.querySelector("#SignInSuccess").innerHTML = `Sign-in Successful. Changing HTML..`
    
}

function ClearErrors() {
    document.querySelectorAll('.errorPrompt').forEach(element => {
        element.innerHTML = ''
    });
}

