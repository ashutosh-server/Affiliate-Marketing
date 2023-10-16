import React from "react";
import Marketing1 from '../components/Img/Marketing1.jpg'
const Marketing = () => {
    return (
        <section className="text-[#550aa9] bg-[#f8f7ff] px-32" >
            <div className=" text-7xl font-semibold py-20" id="Marketing">
                <h1>Modern Marketing</h1>
            </div>
            <div className="font-semibold text-2xl py-10 px-36  ml-[450px]">
                <p>Adipisicion will be carried out. Painful, laborious, refusing. They, indeed, were<br /> often less blinded by their elders.<br /> Painful pains lead us to error training.</p>
            </div>
            <div className="grid grid-cols-2 ">
                <div className=" font-semibold mt-24 pl-20">
                    <h1 className="border-[#550aa9] border-solid "></h1>
                    <h1 className="text-6xl mt-4">99%</h1>
                    <p className="text-2xl">Free time for pleasures. Who, by <br /> reason Thank you very much.</p>
                </div>
                <div className="py-6">
                    <img src={Marketing1}></img>
                </div>
            </div>
        </section>
    )
}
export default Marketing;