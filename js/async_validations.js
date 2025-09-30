let simulatedData = null;

import {setApprovedState, setCheckingState, setRejectedState} from "./states.js"


fetch("../data/simulatedData.json")
    .then(response => response.json())
    .then(data => {
        simulatedData = data;
    })
    .catch(error => console.error(error));



function matchUsername(username) {
    return simulatedData.username.includes(username);
}
function matchEmail(email) {
    return simulatedData.email.includes(email);
}

const inputLoginEmail = document.getElementById("login-email");

const inputLoginPass = document.getElementById("login-password");

const inputRegisterName = document.getElementById("register-name");
const inputRegisterEmail = document.getElementById("register-email");
const inputRegisterUsername = document.getElementById("register-username");
const inputRegisterPass = document.getElementById("register-password");
const inputRegisterConfirmPass = document.getElementById("register-confirm-password");

// Usar asincronía para manejar valores esperados

inputLoginEmail.addEventListener("input", () => {
    setCheckingState(inputLoginEmail.id);
    setTimeout(() => {
        if(matchUsername(inputLoginEmail.value)) {
            setRejectedState(inputLoginEmail.id);
        } else {
            setApprovedState(inputLoginEmail.id);
        }  
    }, 1500);
});


