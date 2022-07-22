let form=document.querySelector("form");
let signupLS=JSON.parse(localStorage.getItem("signup"))||[];

form.addEventListener("submit",function(event){
    event.preventDefault();

    let obj={
        name:form.name.value,
        email:form.email.value,
        password:form.password.value,
    }
    // // console.log(obj)
    if(obj.name==""||obj.email==""||obj.password==""){
        alert("Field Empty");
        return
    }
    signupLS.push(obj);
    localStorage.setItem("signup",JSON.stringify(signupLS));
    window.location.href="login.html"
   
    
})
