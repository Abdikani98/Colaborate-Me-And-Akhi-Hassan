
import img from "../assets/one.webp"
import Footer from "../components/footer"
import Header from "../components/header"
import imgOne from "../assets/waa.webp"
import imgTwo from "../assets/wee.webp"
import imgThree from "../assets/wrr.webp"
import imgFour from "../assets/wep.webp"

const Next = ()=>{
    return <>
    <Header/>
    <div className="bg-amber-200 flex h-80 justify-between px-20 py-10">
        <div>
            <h1 className="text-red-500 font-semibold text-2xl">.Live events</h1>
            <h1 className="font-semibold text-3xl pt-5 pb-3">Explore our live events, <br /> talks and free workshops</h1>
            <p className="w-80">Jump into a free workshop on UX design or data analytics, attend our students' demo days or join us for an interactive info session and find out more about Le Wagon.</p>
        </div>

        <div>
            <img className="w-80 rounded-lg" src={img} alt="" />
        </div>
    </div>

    {/*  */}
<div className=" flex justify-between px-32 pt-10">
    <div>
        <h1 className="font-semibold text-3xl">Filters</h1>
    </div>

    <div>
        <h1 className="font-semibold text-3xl">Events that match your search</h1>
    </div>
    </div>

    <div className="flex justify-between px-32 pt-10">
        <div>
            <h1 className="text-2xl ">Topic</h1>
            <input className="border-2 border-gray-500 rounded-lg px-4 mt-2" type="Select" placeholder="selct" />
        </div>

        <div>
            <h1 className="text-white">Categories</h1>
        </div>
    </div>

    <div>
        <h1 className="text-3xl font-semibold pl-[730px]">Categories</h1>

        <ul className="flex gap-10 pl-[730px] pt-10 font-semibold">
            <li className=" hover:text-blue-500 hover:bg-gray-300 hover:rounded-lg">All</li>
            <li className=" hover:text-blue-500 hover:bg-gray-300 hover:rounded-lg">WrokShop</li>
            <li className=" hover:text-blue-500 hover:bg-gray-300 hover:rounded-lg">Tallka</li>
            <li className=" hover:text-blue-500 hover:bg-gray-300 hover:rounded-lg">info Season</li>
            <li className=" hover:text-blue-500 hover:bg-gray-300 hover:rounded-lg">Demo Day</li>
        </ul>

        <div className="border-2 border-black flex justify-between px-10 py-5 rounded-xl mt-5 ml-36 mr-36">
            <div>
                <img className="w-60 rounded-lg" src={img} alt="" />
            </div>

            <div>
                <h1 className="font-semibold text-2xl">info sesone</h1>
                <h1>How to finance your bootcamp with an <br /> interest-free loan</h1>
                <h1>Tue, February 4 • 12:00 pm <br /> (Europe/Amsterdam Time)</h1>
                <h1>online</h1>
            </div>

            <div>
                <button className="bg-purple-700  px-5 py-3 font-semibold text-white rounded-lg mt-14">Regester now</button>
            </div>

        </div>
        <div className="border-2 border-black flex justify-between px-10 py-5 mt-5 rounded-xl ml-36 mr-36">
            <div>
                <img className="w-60 rounded-lg" src={imgOne} alt="" />
            </div>

            <div>
                <h1 className="font-semibold text-2xl">info sesone</h1>
                <h1>How to finance your bootcamp with an <br /> interest-free loan</h1>
                <h1>Tue, February 4 • 12:00 pm <br /> (Europe/Amsterdam Time)</h1>
                <h1>online</h1>
            </div>

            <div>
                <button className="bg-purple-700  px-5 py-3 font-semibold text-white rounded-lg mt-14">Regester now</button>
            </div>

        </div>
        <div className="border-2 border-black flex justify-between px-10 py-5 mt-5 rounded-xl ml-36 mr-36">
            <div>
                <img className="w-60 rounded-lg" src={imgTwo} alt="" />
            </div>

            <div>
                <h1 className="font-semibold text-2xl">info sesone</h1>
                <h1>How to finance your bootcamp with an <br /> interest-free loan</h1>
                <h1>Tue, February 4 • 12:00 pm <br /> (Europe/Amsterdam Time)</h1>
                <h1>online</h1>
            </div>

            <div>
                <button className="bg-purple-700  px-5 py-3 font-semibold text-white rounded-lg mt-14">Regester now</button>
            </div>

        </div>
        <div className="border-2 border-black flex justify-between px-10 py-5 mt-5 rounded-xl ml-36 mr-36">
            <div>
                <img className="w-60 rounded-lg" src={imgThree} alt="" />
            </div>

            <div>
                <h1 className="font-semibold text-2xl">info sesone</h1>
                <h1>How to finance your bootcamp with an <br /> interest-free loan</h1>
                <h1>Tue, February 4 • 12:00 pm <br /> (Europe/Amsterdam Time)</h1>
                <h1>online</h1>
            </div>

            <div>
                <button className="bg-purple-700  px-5 py-3 font-semibold text-white rounded-lg mt-14">Regester now</button>
            </div>

        </div>
        <div className="border-2 border-black flex justify-between px-10 py-5 mt-5 rounded-xl ml-36 mr-36">
            <div>
                <img className="w-60 rounded-lg" src={imgFour} alt="" />
            </div>

            <div>
                <h1 className="font-semibold text-2xl">info sesone</h1>
                <h1>How to finance your bootcamp with an <br /> interest-free loan</h1>
                <h1>Tue, February 4 • 12:00 pm <br /> (Europe/Amsterdam Time)</h1>
                <h1>online</h1>
            </div>

            <div>
                <button className="bg-purple-700  px-5 py-3 font-semibold text-white rounded-lg mt-14">Regester now</button>
            </div>

        </div>
    </div>
    <Footer />
    </>
}

export default Next