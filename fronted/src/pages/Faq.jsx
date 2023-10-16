import Faq1 from '../components/Img/Faq.jpg'
const Faq = () => {
    return (
        <section className="bg-[#e9e4ff] font-semibold px-32 text-[#550aa9] py-20 ">
            <div className='grid grid-cols-2 gap-28 ' id='Faq'>

                <div className="text-2xl ">
                    <div className="text-6xl">
                        <h1>Marketing FAQ</h1>
                    </div>
                    <div className='ml-20'> 

                        <div className='py-20 '>
                            <div className='grid grid-cols-2 '>
                                <h1>And so laborious, if no one accepts them for forgiveness?</h1>
                                <span>+</span>
                                <p>________________________________</p>
                            </div>
                            <div className='grid grid-cols-2'>
                                <h1>What is the difference between flattery and pain?</h1>
                                <span>+</span>
                                <p>________________________________</p>
                            </div>
                            <div className='grid grid-cols-2'>
                                <h1>The architect rougher or?</h1>
                                <span>+</span>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='px-24'>

                    <div className='py-10'>
                        <img src={Faq1} className=' w-96 h-42 rounded-3xl'></img>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Faq;