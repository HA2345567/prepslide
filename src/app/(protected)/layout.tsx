import { onAuththenticateUser } from "@/action/user";
import { redirect } from "next/navigation";

type Props = {
    children : React.ReactNode;
}
const Layout =async({children}: Props)=>{
    const auth = await onAuththenticateUser();
    if(!auth.user) redirect('/sign-in')
    return (
        <div className="w-full min-h-screen">
            {children}
        </div>
    )
}
export default Layout;