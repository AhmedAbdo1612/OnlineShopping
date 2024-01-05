import { useRouter } from "next/router";

const CartCount = () => {
    const router = useRouter()
    return (
        <div className="relative cursor-pointer" onClick={()=>{router.push('/cart')}}>

        </div>
    );
}

export default CartCount;