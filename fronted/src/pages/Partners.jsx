import Main from '../components/Img/partneragency.jpg'
const Partners = () => {
    return (
        <section className='px-32 bg-[#fff6eb]' id='partners'>
            <div className='grid grid-cols-2 py-24 px-24 '>
                <div className='px-32  '>
                    <div className='w-96 '>
                        <img src={Main} className='rounded-3xl'></img>
                    </div>
                </div>
                <div className='text-6xl mt-32 font-semibold align-center-grid place-items-center text-[#550aa9]'>
                    <h1>Advertising</h1>
                    <h1>Agency</h1>
                    <h1>Partners</h1>
                </div>
            </div>
        </section>
    )
}
export default Partners;