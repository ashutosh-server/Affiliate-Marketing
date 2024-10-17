import React from "react"
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
const Footer = () => {
    return (
        <section className="bg-[#2c0066] text-[#e9e4fe] py-40 px-32">
            <div className="grid grid-cols-2">
                <div className="font-semibold mr-80">
                    <h1 className="text-2xl">Affiliate Marketing</h1>
                    <div className="grid grid-cols-3 px-24 mt-10 ">
                        <a href="https://www.facebook.com/ashutosh.thummar.6925?mibextid=ZbWKwL"><BiLogoFacebook size={30} /></a>
                        <a href="https://twitter.com/280Thummar?t=w1rFhJOAF8Sm7kW7f-WzYA&s=08"><AiOutlineTwitter size={30} /></a>
                        <a href="https://instagram.com/hello_ashutosh_6925?igshid=NGExMmI2YTkyZg=="><AiOutlineInstagram size={30} /></a>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-10 font-semibold">

                    <div className="text-md">
                        <h1 className="text-xl">Description</h1>
                        <p>A lot</p>
                        <p>Adipisicing will be achieved</p>
                        <p>Just trouble</p>
                    </div>
                    <div>
                        <h1 className="text-xl">Products</h1>
                        <p>We blame the developers</p>
                        <p>He loves it</p>
                        <p>But pain</p>
                    </div>
                    <div>
                        <h1 className="text-xl">About us</h1>
                        <p>She herself</p>
                        <p>Just trouble</p>
                        <p>Except ours</p>
                        <p>Most of the pleasures</p>
                    </div>
                </div>
            </div>
           

        </section>
    )
}
export default Footer;