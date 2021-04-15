function verify_pass()
{

var password = document.getElementById('pass').value;
var cpassword = document.getElementById('cpass').value;
if(cpassword.length>0){
    password=cpassword;
}

console.log(password);
console.log("hello");
if(password.length > 7)
    {
        // document.getElementById('let').checked()=true;
        let.checked=1;
    }else{let.checked=0;}
if(isNaN(password))
    {
        num.checked=1;
    }
    else{num.checked=0;}
    
    if(!/^[a-zA-Z]*$/g.test(password))
    {
        // document.getElementById('char').checked()=true;
        char.checked=1;
    }else{char.checked=0;}


}
function validate(){
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let address = document.getElementById('address').value;
    let zip = document.getElementById('zip').value;
    let phone = document.getElementById('phone').value;
    let state = document.getElementById('state').value;
    let city = document.getElementById('city').value;
    let mail = document.getElementById('mail').value;
    let cmail = document.getElementById('cmail').value;
    let pass = document.getElementById('pass').value;
    let cpass = document.getElementById('cpass').value;

    //let alert_error = document.getElementById('alert_err').value;
    var modal = document.getElementById("myModal");

    var reg_button = document.getElementById("reg_button");

    if(alert_err.checked==0){
        if(fname == "" || fname == null){
            document.getElementById('err-fname').innerHTML='First name cannot be empty';
            // alert('First name cannot be empty');
            return false;
        }else{
            document.getElementById('err-fname').innerHTML=' ';
        }
        if(lname == "" || lname == null){
            document.getElementById('err-lname').innerHTML='Last name cannot be empty';
            return false;
        }else{
            document.getElementById('err-lname').innerHTML=' ';
        }
        if(address == "" || address == null){
            document.getElementById('err-address').innerHTML='Address cannot be empty';
            return false;
        }else{
            document.getElementById('err-address').innerHTML=' ';
        }
        if(phone == "" || phone == null){
            document.getElementById('err-phone').innerHTML='Phone number cannot be empty';
            return false;
        }
        else if(isNaN(phone)){
            document.getElementById('err-phone').innerHTML='Enter only numbers';
            return false;
        }
        else if(phone.length<10){
            document.getElementById('err-phone').innerHTML='Phone number cannot be less than 10 digits';
            return false;
        }
        else{
            document.getElementById('err-phone').innerHTML=' ';
        }
        if(zip == "" || zip == null){
            document.getElementById('err-zip').innerHTML='Zip code cannot be empty';
            return false;
        }
        else if(isNaN(zip)){
            document.getElementById('err-zip').innerHTML='Enter only numbers';
            return false;
        }
        else if(zip.length<6){
            document.getElementById('err-zip').innerHTML='Zip code cannot be less than 6 digits';
            return false;
        }else{
            document.getElementById('err-zip').innerHTML=' ';
        }
        
        if(state == "" || state == null){
            document.getElementById('err-state').innerHTML='State cannot be empty';
            return false;
        }else{
            document.getElementById('err-state').innerHTML=' ';
        }
        if(city == "" || city == null){
            document.getElementById('err-city').innerHTML='City cannot be empty';
            return false;
        }else{
            document.getElementById('err-city').innerHTML=' ';
        }
        if(mail == "" || mail == null){
            document.getElementById('err-mail').innerHTML='Email cannot be empty';
            return false;
        }
        // else if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)){
        //     document.getElementById('err-mail').innerHTML='Invalid Email';
        //     return false;
        // }
        else{
            document.getElementById('err-mail').innerHTML=' ';
        }
        if(cmail == "" || cmail == null){
            document.getElementById('err-cmail').innerHTML='Confirm mail cannot be empty';
            return false;
        }
        else if(cmail != mail){
            document.getElementById('err-cmail').innerHTML='Your Mail doesnot match';
            return false;
        }else{
            document.getElementById('err-cmail').innerHTML=' ';
        }
        if(pass == "" || pass == null){
            document.getElementById('err-pass').innerHTML='Password cannot be empty';
            return false;
        }else{
            document.getElementById('err-pass').innerHTML=' ';
        }
        if(cpass == "" || cpass == null){
            document.getElementById('err-cpass').innerHTML='Confirm Password cannot be empty';
            return false;
        }
        else if(cpass!=pass){
            document.getElementById('err-cpass').innerHTML='Your Password doesnot match';
            return false;
        }else{
            document.getElementById('err-cpass').innerHTML=' ';
        }
    }else{
        if(fname == "" || fname == null){
            // document.getElementById('err-fname').innerHTML='First name cannot be empty';
            alert('First name cannot be empty');
            return false;
        }else{
            document.getElementById('err-fname').innerHTML=' ';
            
        }
        if(lname == "" || lname == null){
            //document.getElementById('err-lname').innerHTML='Last name cannot be empty';
            alert('Last name cannot be empty');
            return false;
        }else{
            document.getElementById('err-lname').innerHTML=' ';
        }
        if(address == "" || address == null){
            //document.getElementById('err-address').innerHTML='Address cannot be empty';
            alert('Address cannot be empty');
            return false;
        }else{
            document.getElementById('err-address').innerHTML=' ';
        }
        if(phone == "" || phone == null){
            //document.getElementById('err-phone').innerHTML='Phone number cannot be empty';
            alert('Phone number cannot be empty');
            return false;
        }
        else if(phone.length<10){
            //document.getElementById('err-phone').innerHTML='Phone number cannot be less than 10 digits';
            alert('Phone number cannot be less than 10 digits');
            return false;
        }
        else if(isNaN(phone.value)){
            //document.getElementById('err-phone').innerHTML='Enter only numbers';
            alert('Enter only numbers');
            return false;
        }else{
            document.getElementById('err-phone').innerHTML=' ';
        }
        if(zip == "" || zip == null){
            //document.getElementById('err-zip').innerHTML='Zip code cannot be empty';
            alert('Zip code cannot be empty');
            return false;
        }else{
            document.getElementById('err-zip').innerHTML=' ';
        }
        
        if(state == "" || state == null){
            //document.getElementById('err-state').innerHTML='State cannot be empty';
            alert('State cannot be empty');
            return false;
        }else{
            document.getElementById('err-state').innerHTML=' ';
        }
        if(city == "" || city == null){
            //document.getElementById('err-city').innerHTML='City cannot be empty';
            alert('City cannot be empty');
            return false;
        }else{
            document.getElementById('err-city').innerHTML=' ';
        }
        if(mail == "" || mail == null){
            //document.getElementById('err-mail').innerHTML='Email cannot be empty';
            alert('Email cannot be empty');
            return false;
        }else{
            document.getElementById('err-mail').innerHTML=' ';
        }
        if(cmail == "" || cmail == null){
            //document.getElementById('err-cmail').innerHTML='Confirm mail cannot be empty';
            alert('Confirm mail cannot be empty');
            return false;
        }
        else if(mail!=cmail){
            //document.getElementById('err-cmail').innerHTML='Your Mail doesnot match';
            alert('Your Mail doesnot match');
            return false;
        }else{
            document.getElementById('err-phone').innerHTML=' ';
        }
        if(pass == "" || pass == null){
            //document.getElementById('err-pass').innerHTML='Password cannot be empty';
            alert('Password cannot be empty');
            return false;
        }else{
            document.getElementById('err-pass').innerHTML=' ';
        }
        if(cpass == "" || cpass == null){
            //document.getElementById('err-cpass').innerHTML='Confirm Password cannot be empty';
            alert('Confirm Password cannot be empty');
            return false;
        }
        else if(cpass!=pass){
            //document.getElementById('err-cpass').innerHTML='Your Password doesnot match';
            alert('Your Password doesnot match');
            return false;
        }else{
            document.getElementById('err-cpass').innerHTML=' ';
        }
    }

    if(let.checked==1 && char.checked==1 && num.checked==1 ){
        if(grecaptcha && grecaptcha.getResponse().length > 0){
            modal.style.display = "block";
            window.location.reload();
            //window.alert('Registration Successful!');
            
            
        }else{
            document.getElementById('valid_pass').innerHTML=' ';
            document.getElementById('valid_captcha').innerHTML='Verify you are human';
        }
        
    }else{
        //alert('Password is too weak');
        document.getElementById('valid_captcha').innerHTML=' ';
        document.getElementById('valid_pass').innerHTML='Password is too weak';
        }
    
}
if(reg_button.click()){
    alert('button click');
}