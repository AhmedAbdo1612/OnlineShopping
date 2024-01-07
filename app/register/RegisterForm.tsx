"use client"
import { useState } from "react";
import Heading from "../components/Heading";
import Input from "../components/Inputs/Inputs";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../components/Button/Button";
import { SyncLoader } from "react-spinners";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";

const RegisterForm = () => {
    const [loading, setLoading] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            name: "", email: "", password: "",
        }
    })
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setLoading(true)
        console.log(data)
    }
    return (
        <>
            <Heading title="Sign up for E~shop" />
            <Button outline label="Sign up with Google" 
            icon={AiOutlineGoogle} onClick={()=>{}}/>
            <hr className="bg-slate-300 w-full h-px" />
            <Input id="name" label="Name" disabled={loading}
                register={register}
                errors={errors}
                required
            />
            <Input id="email" label="Email" disabled={loading}
                register={register}
                errors={errors}
                required
            />
            <Input id="password" label="Password" disabled={loading}
                register={register}
                errors={errors}
                required
                type="password"
            />
            {loading && <SyncLoader color="rgba(214, 54, 140, 1)" className="transition" />}
            {!loading && <Button label={loading ? "Loading" : "Sign Up"} onClick={handleSubmit(onSubmit)} />}
            <p className="text-sm">
                Already have account? {" "}
                <Link className="underline" href="/login">
                    Login
                </Link>
            </p>
        </>
    );
}

export default RegisterForm;