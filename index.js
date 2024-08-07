document.addEventListener('DOMContentLoaded', () => {

let passw = document.getElementById('password');
let cpassw = document.getElementById('cpassword');

let subm = document.getElementById("subm");
let verif = document.getElementById('verif');


let validate = function() {
    verif.innerHTML = "*Passwords don't match"
};

subm.addEventListener('click', (e) => {
    if (passw.value != cpassw.value){
        console.log('sub');
        validate();
        e.preventDefault();
    }
});

});

