const email  = document.getElementById('email');
const pass = document.getElementById('password');
const login = document.getElementById('login');


email.addEventListener('focus',()=>{
    email.style.border = '1px solid  #1FB6FA';
})

pass.addEventListener('focus',()=>{
    pass.style.border = '1px solid  #1FB6FA';
})

login.addEventListener('click',()=>{
    pass.style.border = '1px solid  #0E0E0E2B';
    email.style.border = '1px solid  #0E0E0E2B';
})



