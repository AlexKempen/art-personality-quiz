import crow from "./public/crow.png";

export function Home(): JSX.Element {
    return (
        <div id="home" className="w-screen h-screen text-white">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <img className="lg:w-1/5 md:w-2/5 w-4/6 mb-10 object-cover object-center" alt="" src={crow} />
                <div className="text-center lg:w-5/12 w-full">
                    <h1 className="my-4 text-3xl leading-tight mb-12">
                        Take our quiz to find your perfect art!
                    </h1>
                    {/* <p className="text-2xl mb-8">
                        Ship products 5-10x faster with your existing design tools, tech stacks & workflows!
                    </p> */}
                    <div className="flex justify-center mx-auto">
                        <button
                            className="hover:underline bg-white text-gray-800 font-bold rounded-full  py-4 px-8">
                            Take the quiz
                        </button>
                        <button
                            className="ml-4 hover:underline bg-white text-gray-800 font-bold rounded-full  py-4 px-8">
                            Go back
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
}