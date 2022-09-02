import logo from "./logo.png"
import "./index.css"
import sample from "./Sample.mp4"
export default function Login() {


    return (
        <div className="flex flex-col justify-center items-center">
            <video autoPlay loop muted id="video">
                <source src={sample} type="video/mp4"></source>
            </video>
            <div className="flex flex-col justify-center items-center">
                <img className="h-40 w-48 m-8" src={logo}></img>
                <p className="text-sm font-semibold text-white">India's #1 Lifestyle App!</p>
                <p className="text-3xl mt-8 text-white">Passionate about Fashion, Beauty,<br />Gadgets, Movies, Cooking & Travel?</p>
                <p className="text-3xl mt-12 text-white">Download Trell App!</p>
                <div className="mt-16 flex items-center justify-center">
                    <button className="bg-indigo-800 mr-8 px-2 py-2 rounded-full text-white w-40 w-min-20 hover:bg-indigo-700   "><p className="text-[8px] ">Get it on</p><p className="md:text-normal text-sm">Google Play</p></button>
                    <button className="bg-indigo-800 px-2 py-2 rounded-full text-white w-40 w-min-20 hover:bg-indigo-700"><p className="text-[8px]">Download on</p><p className="md:text-normal text-sm">App Store</p></button>
                </div>
                <button className="m-8 bg-indigo-800 py-[14px] rounded-full text-white w-80 w-min-20 hover:bg-indigo-700 md:text-normal text-sm animate-pulse">Download(1.7MB)</button>

            </div>
        </div>
    )
}