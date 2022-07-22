let form=document.querySelector("form");
let signupLS=JSON.parse(localStorage.getItem("signup"))||[];

form.addEventListener("submit",function(e){
    e.preventDefault();
    if(signupLS.length===0){
        alert("No User till now");
        return;
    }

    let obj={
        email:form.email.value,
        password:form.password.value,
    }

    let isSignedin=false;
    signupLS.forEach(function(ele){
        if(ele.email===obj.email&&ele.password===obj.password){
            isSignedin=true;
        
        localStorage.setItem("signin",JSON.stringify(ele));
        alert("Login Successfull");
        window.location.href="index.html";
        }
    })
    if(isSignedin===false){
        alert("Wrong Email or Password")
    }
})