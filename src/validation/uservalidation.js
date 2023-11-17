export const validationUserData = (user)=> {
    
    let errors={};
    console.log("hello");
    console.log(user);
    if(user.name.trim()==""){
         errors.name="user name is required";
         
    }
    else if(user.name.length<=3){
        errors.name="length must be > 3";
        
    }


    if(user.email.trim()==""){
        errors.email="user email is required";
    }
    else if(user.email.length<=9){
        errors.email="email length must be > 9";
    }

    if(user.password.trim()==""){
        errors.password="user password is required";
    }
    else if(user.password.length<=3){
        errors.password="password must be > 3";
    }


    return errors;
}