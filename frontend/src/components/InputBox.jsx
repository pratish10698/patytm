export function InputBox({label, placeholder}){
    return <>
    <div className="text-sm font-medium text-lefft py-2">
        {label}
    </div>
    <input placeholder={placeholder} className="w-full px-2 py-1 border rounded border-slate-200 "/>
    </>
}