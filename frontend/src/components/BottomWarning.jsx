import { Link } from "react-router-dom";

export function BottomWarning({label}){
return <>
<div className="py-2 text-sm flex justify-center">
    <div>
        {label}
    </div>
    <Link className="pointer underline pl-1 coursor-pointer" to={to}/>

</div>
</>
}