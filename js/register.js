let account = [];
//thanh nhập tên
let inputname = document.getElementById('inputofname');
inputname.addEventListener('blur',function(){
    if(inputname.value == 0){
        document.getElementById('nodeofname').innerText = "Vui lòng nhập tên của bạn";
    }
})
inputname.addEventListener('keydown',function(){
    document.getElementById('nodeofname').innerHTML = null;
});
//thanh nhập email
let inputemail = document.getElementById('inputofemail');
inputemail.addEventListener('blur',function(){
    if(inputemail.value == 0){
        document.getElementById('nodeofemail').innerHTML = "Vui lòng nhập email của bạn";
    }
})
inputemail.addEventListener('keydown',function(){
    document.getElementById('nodeofemail').innerHTML = null;
});
//thanh nhập password
let inputpassword = document.getElementById('inputofpassword');
inputpassword.addEventListener('blur',function(){
    if(inputpassword.value == 0){
        document.getElementById('nodeofpassword').innerText = "Hãy nhập password của bạn";
    }
})
inputpassword.addEventListener('keydown',function(){
    document.getElementById('nodeofpassword').innerHTML = null;
});

//đăng ký
let register = document.getElementById('register');
register.addEventListener('click',function(){
    let char = [];
    for(var i = 0;i<inputemail.value.length;i++){
        char.push(inputemail.value.slice(i,i+1));
    }
    let specialchar = 0;
    for(var i = 0;i<char.length;i++)
    {
        if(char[i]=='@'){
            specialchar++;
        }
    }
    let loginbyemail = true;
    for(var i = 0;i<account.length;i++){
        if(account[i].email == inputemail.value){
            loginbyemail = false;
            break;
        }
    }
    let charneed = inputemail.value.slice(-3,inputemail.value.length);
    let passwordconfirm = document.getElementById('passwordconfirm');
    let conditions = 0;
    if(inputname.value == 0){
        document.getElementById('nodeofname').innerText = "Vui lòng nhập tên của bạn";
    }else {
        conditions++;
    }
    if(inputemail.value == 0){
        document.getElementById('nodeofemail').innerHTML = "Vui lòng nhập email của bạn";
    }else if(specialchar!=1 ||  charneed!='com'){
        document.getElementById('nodeofemail').innerHTML = "Sai định dạng email";
    }else if(loginbyemail==false){
        document.getElementById('nodeofemail').innerHTML = "Email đã tồn tại";
    }
    else {
        conditions++;
    }
    if(inputpassword.value == 0){
        document.getElementById('nodeofpassword').innerText = "Hãy nhập password của bạn";
    }else{
        conditions++;
    }
    if(passwordconfirm.value!==inputpassword.value){
        document.getElementById('nodeofpasswordconfirm').innerHTML = "Mật khẩu xác nhận chưa đúng.";
    }else {
        conditions++;
    }
    passwordconfirm.addEventListener('keypress',function(){
        document.getElementById('nodeofpasswordconfirm').innerHTML = null;
    });
    if(conditions==4 && loginbyemail == true){
        let person = {
            name: inputname.value,
            email: inputemail.value,
            password: passwordconfirm.value
        }
        account.push(person);
        window.open('login.html','_self');
    }
    localStorage.setItem('account',JSON.stringify(account));
})