"use client";
import { Icon } from "@mui/material";
import { IconType } from "react-icons";


interface ButtonProps {
    label: string,
    disapled?: boolean,
    outline?: boolean,
    small?: boolean,
    custom?: string,
    icon?: IconType,
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}
const Button: React.FC<ButtonProps> = ({
    label, disapled,
    outline, small,
    custom, icon, onClick }) => {
    return (
        <button disabled = {disapled} onClick={onClick}
         className={`disabled:opacity-70 disabled:cursor-not-allowed
         rounded-md hover:opacity-80 transition w-full border-slate-700 
         flex items-center justify-center gap-2 
         ${outline?"bg-white":"bg-slate-700"}
         ${outline?"text-slate-700":"text-white"}
         ${small?"text-sm font-light":"text-md font-semibold"}
         ${small?"py-1 px-2 border-[1px]":"py-3 px-4 border-[2px]"}
         ${custom?custom: null}
         `}>
            {icon && <Icon />}
            {label}
        </button>
    );
}

export default Button;