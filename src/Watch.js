import Header from "./Header"
import Section from "./Section"
import Video from "./Video"
export default function Main(props) {

    const numArray = props.array.map((element, index) => {
        return (
            <div>
                <div className="h-80 w-64 bg-indigo-300 rounded-md"><Video /></div>
                <p>This is a video</p>
            </div>
        )
    })

    return (
        <div>
            <Header />
            <Section />
            <div className="pt-8 grid md:grid-cols-4 gap-4 px-52 bg-[#f9f9f9]">
                {numArray}

            </div>
        </div>
    )
}