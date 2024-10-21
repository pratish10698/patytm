import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"


export function Dashboard(){
    const user={firstName:"Pratish",LastName:"Kumar"}
    return <>
    <Appbar></Appbar>
    <Balance value={10000}></Balance>
    <Users user={user}></Users>
    </>
}