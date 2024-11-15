import React from "react";
export default function Badge({children,...rest}:any){
    return(
        <div className="border-[1px] p-2 text-xs text-white rounded-full w-fit border-[#3d444d]" {...rest}>
            {children}
        </div>
    )
}