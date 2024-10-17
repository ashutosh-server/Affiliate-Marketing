import React from "react";
import Main from "../components/Img/image4.jpg";
import Main2 from '../components/Img/image16.jpg'
const Body = () => {
  return (
    <section className="bg-[#550aa9] text-white px-24 py-12" id="Home">
      <div className="grid grid-cols-2">
        <div className=" ">
          <div className="text-7xl p-2  text-center font-semibold">
            <h1>
              Affiliate
              <br /> Marketing
            </h1>
          </div>
          <p className="px-12 text-xl font-semibold">
            From the words of the architect, pain and sorrow will result, and it
            will come to pass, he himself fled with ease, just as no one knows
            the trouble we will have by rejecting our duties and rejecting them
            at a similar time!
          </p>
          <div className="py-10 text-xl text-center ">
            <div className="border inline-block rounded-3xl p-4 text-white  cursor-pointer font-semibold hover:bg-white hover:text-[#550aa9]">
              <button>Start Now </button>
            </div>
          </div>
        </div>
      

          <div className="h-96  " style={{ backgroundImage: `url(${Main})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className="pl-40">
              <img src={Main2} className=" relative bottom-9   rounded-xl h-[450px]"></img>
            </div>
          </div>
      
      </div>
    </section>
  );
};

export default Body;
