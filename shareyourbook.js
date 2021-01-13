const title=document.getElementById('book-title')
const email=document.getElementById('email')
const year=document.getElementById('year')
const password=document.getElementById('password')
const phoneRegEx = new RegExp (/^[0-9]g/)
const passwordRegEx = new RegExp (/^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]))/)

email.addEventListener('change',function(){
    if(!email.value.includes('@')){
        alert('Email requires @');
        email.setAttribute('class','form-control is-invalid');
        email.focus();
    }
})
year.addEventListener('change',function(){
    if(!phoneRegEx.test(year.value)||(year.value.length>4)){
        alert('Error phone Number');
        year.setAttribute('class','form-control is-invalid');
        year.focus();
    }
})
password.addEventListener('change',function(){
    if(!passwordRegEx.test(password.value)){
        alert('Error phone Number');
        password.setAttribute('class','form-control is-invalid');
        password.focus();
    }
})