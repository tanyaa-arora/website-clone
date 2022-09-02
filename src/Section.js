import { useNavigate } from "react-router-dom"
export default function Section() {
    const navigate=useNavigate()
    return (
        <div className="flex mt-2 justify-center bg-[#f9f9f9] shadow-md h-12 sticky top-0">
            <button className="md:text-lg p-2 cursor-pointer text-[#535353] hover:text-[#838383]" onClick={()=>navigate("/watch")} >Watch</button>
            <button className="md:text-lg p-2 cursor-pointer text-[#535353] hover:text-[#838383]" onClick={()=>navigate("/read")}>Read</button>
            <button className="md:text-lg p-2 cursor-pointer text-[#535353] hover:text-[#838383]" onClick={()=>navigate("/shop")}>Shop</button>
        </div>
    )
}