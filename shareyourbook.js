const title=document.getElementById('book-title')
const email=document.getElementById('email')
const year=document.getElementById('year')
const password=document.getElementById('password')
const phoneRegEx = new RegExp (/\[1-9]|[0-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9]\b/)
const passwordRegEx = new RegExp (/^[a-zA-Z0-9!@#\$%\^\&*\)|(+=._-]{6,}$/g)

email.addEventListener('change',function(){
    if(!email.value.includes('@')){
        alert('Email requires @');
        email.setAttribute('class','form-control is-invalid');
        email.focus();
    }else{email.setAttribute('class','form-control is-valid');}
})
year.addEventListener('change',function(){
     if(!phoneRegEx.test(year.value) || (year.value.length >4)){
        alert('Please check whether you typed the right year or not (PS: the year must be 4 or less letters)');
        year.setAttribute('class','form-control is-invalid');
        year.focus();
    }
    else{year.setAttribute('class','form-control is-valid');}
})
password.addEventListener('change',function(){
    if(!passwordRegEx.test(password.value)){
        alert('please check if you typed the right password.');
        password.setAttribute('class','form-control is-invalid');
        password.focus();
    }else{password.setAttribute('class','form-control is-valid');}
})