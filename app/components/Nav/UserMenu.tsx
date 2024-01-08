"use client"

import { useCallback, useState } from "react";
import Avatar from "../Avatar";
import { AiFillCaretDown } from "react-icons/ai";

const UserMenu = () => {
    const [opened, setOpened] = useState(false)
    const toggleOpen = useCallback(()=>{
        setOpened(!opened)
    },[opened])
    return (
        <>
        <div className="relative z-30">
            <div onClick={toggleOpen} 
            className="p-2 border-[1px] border-slate-400 flex flex-row 
            items-center gap-1 rounded-full cursor-pointer hover:shadow-md
            transition text-slate-700 hover:bg-white ">
                <Avatar/>
                <AiFillCaretDown className =""/>
            </div>
        </div>
        </>
    );
}

export default UserMenu;