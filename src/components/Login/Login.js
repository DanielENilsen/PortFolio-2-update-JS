import React from 'react';
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import FormControl from "react-bootstrap/FormControl";




//This code are from module 3.4 but modified to this assigment.

const schema = yup.object().shape({
    
    firstName: yup.string().required("First name is required").min(2),
    last: yup
        .string()
        .required("lastname is required")
        .min(2),
    email:
        yup.string()
        .email("Please enter a valid email")
        .required("Email is required"),
    password:yup
        .string()
        .required("Password is required")
        .min(10)    
});

function Login () { 

    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema
    });

    function dataFromForm(callbackData) {
        console.log("callbackData", callbackData);
    }

    // Some of the codes are from module 3.4, but modified for this assigment. and example woudl be "{errors.firstName && <p>{errors.firstName.message}</p>}"
    return (
            <div>
                <h1>Feel free to Login </h1>
                       <Form className = "Formline" onSubmit={handleSubmit(dataFromForm)}>  
                <FormControl className ="col-3  newLine " type="text"  name="firstName" placeholder="First name" ref={register} />
                   {errors.firstName && <p>{errors.firstName.message}</p>}          
                <FormControl className ="col-3  newLine " type="text"  name="last" placeholder="Last name" ref={register} />
                   {errors.last && <p>{errors.last.message}</p>}   
                <FormControl className ="col-3  newLine " type="email"  name="email" placeholder="Email" ref={register} />
                   {errors.email && <p>{errors.email.message}</p>}  
                <FormControl className ="col-3  newLine " type="password" name="password" placeholder="Password" ref={register}  />
                   {errors.password && <p>{errors.password.message}</p>}
                <FormControl className ="col-3  newLine " type="submit" value="Submit" />
            </Form>       
        </div>       
                    
       
    );
}

export default Login;