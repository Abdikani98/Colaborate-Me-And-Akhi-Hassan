
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
    <div className="flex mt-5 px-5">
    <div className="w-full md:w-[30%] bg-white shadow shadow-black rounded-lg p-6 ">
          <h2 className="text-xl font-bold mb-4">Filters</h2>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Topic</h3>
            <select className="w-full p-2 border border-gray-300 rounded">
              <option>Select</option>
            </select>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Type</h3>
            <div className="space-y-2">
              {["All", "Online", "On-site", "Replay"].map((type, index) => (
                <label key={index} className="flex items-center">
                  <input type="radio" name="type" className="form-radio" defaultChecked={index === 0} />
                  <span className="ml-2">{type}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Language</h3>
            <div className="space-y-2">
              {["All", "English", "French", "Español - LA", "Spanish", "German"].map((lang, index) => (
                <label key={index} className="flex items-center">
                  <input type="radio" name="language" className="form-radio" defaultChecked={index === 0} />
                  <span className="ml-2">{lang}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
{/* events */}
    <div>
        <div className="text-center">
        <h1 className="text-3xl font-semibold ">Categories</h1>

        <ul className="flex gap-10  pt-10 font-semibold pl-36">
            <li className=" hover:text-blue-500 hover:bg-gray-300 hover:rounded-lg">All</li>
            <li className=" hover:text-blue-500 hover:bg-gray-300 hover:rounded-lg">WrokShop</li>
            <li className=" hover:text-blue-500 hover:bg-gray-300 hover:rounded-lg">Tallka</li>
            <li className=" hover:text-blue-500 hover:bg-gray-300 hover:rounded-lg">info Season</li>
            <li className=" hover:text-blue-500 hover:bg-gray-300 hover:rounded-lg">Demo Day</li>
        </ul>
        </div>

        <div className="border-2 border-black flex justify-between gap-5 px-10 py-5 rounded-xl mt-5 ml-36 mr-36">
            <div>
                <img className="w-60 rounded-lg" src={img} alt="" />
            </div>

            <div>
                <h1 className="font-semibold text-2xl">info sesone</h1>
                <h1>How to finance your bootcamp with an <br /> interest-free loan</h1>
                <h1 className="text-red-400">Tue, February 4 • 12:00 pm <br /> (Europe/Amsterdam Time)</h1>
                <h1>online</h1>
            </div>

            <div>
                <button className="bg-purple-700  px-5  font-semibold text-white rounded-lg mt-14">Regester now</button>
            </div>

        </div>
        <div className="border-2 border-black gap-5 flex justify-between px-10 py-5 mt-5 rounded-xl ml-36 mr-36">
            <div>
                <img className="w-60 rounded-lg" src={imgOne} alt="" />
            </div>

            <div>
                <h1 className="font-semibold text-2xl">info sesone</h1>
                <h1 >How to finance your bootcamp with an <br /> interest-free loan</h1>
                <h1 className="text-red-400">Tue, February 4 • 12:00 pm <br /> (Europe/Amsterdam Time)</h1>
                <h1>online</h1>
            </div>

            <div>
                <button className="bg-purple-700  px-5  font-semibold text-white rounded-lg mt-14">Regester now</button>
            </div>

        </div>
        <div className="border-2 border-black flex gap-5 justify-between px-10 py-5 mt-5 rounded-xl ml-36 mr-36">
            <div>
                <img className="w-60 rounded-lg" src={imgTwo} alt="" />
            </div>

            <div>
                <h1 className="font-semibold text-2xl">info sesone</h1>
                <h1>How to finance your bootcamp with an <br /> interest-free loan</h1>
                <h1 className="text-red-400">Tue, February 4 • 12:00 pm <br /> (Europe/Amsterdam Time)</h1>
                <h1>online</h1>
            </div>

            <div>
                <button className="bg-purple-700  px-5  font-semibold text-white rounded-lg mt-14">Regester now</button>
            </div>

        </div>
        <div className="border-2 border-black gap-5 flex justify-between px-10 py-5 mt-5 rounded-xl ml-36 mr-36">
            <div>
                <img className="w-60 rounded-lg" src={imgThree} alt="" />
            </div>

            <div>
                <h1 className="font-semibold text-2xl">info sesone</h1>
                <h1>How to finance your bootcamp with an <br /> interest-free loan</h1>
                <h1 className="text-red-400">Tue, February 4 • 12:00 pm <br /> (Europe/Amsterdam Time)</h1>
                <h1>online</h1>
            </div>

            <div>
                <button className="bg-purple-700  px-5  font-semibold text-white rounded-lg mt-14">Regester now</button>
            </div>

        </div>
        <div className="border-2 border-black gap-5 flex justify-between px-10 py-5 mt-5 rounded-xl ml-36 mr-36">
            <div>
                <img className="w-60 rounded-lg" src={imgFour} alt="" />
            </div>

            <div>
                <h1 className="font-semibold text-2xl">info sesone</h1>
                <h1>How to finance your bootcamp with an <br /> interest-free loan</h1>
                <h1 className="text-red-400">Tue, February 4 • 12:00 pm <br /> (Europe/Amsterdam Time)</h1>
                <h1>online</h1>
            </div>

            <div>
                <button className="bg-purple-700  px-5  font-semibold text-white rounded-lg mt-14">Regester now</button>
            </div>

        </div>
        {/*  */}
        </div>
    </div>
    <Footer />
    </>
}

export default Next