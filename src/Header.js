import logo from "./logo.png"
import { useNavigate } from "react-router-dom"
export default function Header() {
    const navigate=useNavigate()
    return (
        <div className=" pb-8">
            <div className="flex md:ml-8 md:mr-12 justify-between">
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="md:h-16 md:w-20 h-12 w-16 cursor-pointer" />
                    {/* <span className=""><FaEllipsisH size={"1.5rem"}/></span> */}
                    <button id="dropdownMenuIconHorizontalButton" data-dropdown-toggle="dropdownDotsHorizontal" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button">
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                    </button>

                    <div id="dropdownDotsHorizontal" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconHorizontalButton">
                            <li>
                                <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                            </li>
                        </ul>
                        <div className="py-1">
                            <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Separated link</a>
                        </div>
                    </div>
                </div>
                <div className="flex items-center">
                    <p className="mr-2 font-semibold cursor-pointer md:font-normal font-sm">Change Language</p>
                    <button className="rounded-full bg-indigo-500 text-white py-2 px-4 md:font-normal font-sm font-semibold" onClick={()=>navigate("/login")}>Login</button>
                </div>
            </div>
            <p className="md:text-xl mt-4  text-center">Passionate about Fashion, Beauty, Gadgets, Movies, Cooking & Travel? </p>
            <p className="mt-8 mb-4 text-center md:text-lg text-normal">Download the App.</p>
            <div className="flex items-center justify-center">
                <button className="mr-4 bg-indigo-600 px-2 py-[14px] rounded-full text-white w-40 w-min-20 hover:bg-indigo-500 md:text-normal text-sm">Download(1.7MB)</button>
                <button className="bg-indigo-600 mr-4 px-2 py-2 rounded-full text-white w-40 w-min-20 hover:bg-indigo-500"><p className="text-[8px] ">Get it on</p><p className="md:text-normal text-sm">Google Play</p></button>
                <button className="bg-indigo-600 mr-4 px-2 py-2 rounded-full text-white w-40 w-min-20 hover:bg-indigo-500"><p className="text-[8px]">Download on</p><p className="md:text-normal text-sm">App Store</p></button>
            </div>
        </div>

    )
}