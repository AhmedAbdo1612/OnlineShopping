"use client";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

 
interface InputProps{
    id:string ,
    label:string ,
    type?:string ,
    disabled?:boolean, 
    required?:string,
    register:UseFormRegister<FieldValues>,
    errors:FieldErrors
}
const Input:React.FC<InputProps> = ({id, label,type,disabled,register,required,errors}) => {
    return (
        <div className="w-full relative">
            <input autoComplete = "off"
            placeholder=""
            type= {type}
            id={id}
            disabled = {disabled}
            {...register(id,{required})}
            className={`peer w-full p-4 pt-6 outline-none bg-whtie
            font-light border-2 rounded-md transition disabled:opacity-70
            disabled:cursor-not-allowed
            ${errors[id]?'border-rose-400':'border-slate-300'}
            ${errors[id]?'focus:border-rose-400':'focus:border-slate-300'}`}/>
            <label htmlFor={id}>{label}</label>
        </div>
        );
}

export default Input;
