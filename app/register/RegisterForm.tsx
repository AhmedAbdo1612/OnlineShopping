"use client"

import { useState } from "react";
import Heading from "../components/Heading";
import Input from "../components/Inputs/Inputs";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../components/Button/Button";
const RegisterForm = () => {
    const[loading, setLoading] = useState(false)
    const {register, handleSubmit, formState:{errors}} = useForm<FieldValues>({
        defaultValues:{
           name:"", email:"", password:"", 
        }
    })
    const onSubmit :SubmitHandler<FieldValues>=(data)=>{
        setLoading(true)
        console.log(data)
    }
    return (
        <>
        <Heading title="Sign up for E~shop" />
        <hr className="bg-slate-300 w-full h-px" />
        <Input id="name" label="Name" disabled= {loading}
        register={register}
        errors={errors}
        required  
         />
        <Input id="email" label="Email" disabled= {loading}
        register={register}
        errors={errors}
        required  
         />
        <Input id="password" label="Password" disabled= {loading}
        register={register}
        errors={errors}
        required  
        type="password"
         />
         <Button label = {loading? "Loading":"Sign Up"} onClick={()=>{handleSubmit(onSubmit)}}/>
        </>
        );
}

export default RegisterForm;