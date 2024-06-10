import cloud from '../../assets/badal.png';
import cycle from '../../assets/cycle.png'

export default function SecondSection() {

    return <div className='-mx-8 mt-6 w-screen'>
        <div>
            <img src={cloud} alt='cloud' />
        </div>
        <div id='play' className='bg-[#dbdecb] h-fit w-screen -z-10 -mt-2 md:px-40 overflow-hidden    ' >
            <h1 className='text-center text-5xl text-black font-satoshi-black pt-4'>How To Play</h1>
            <p className='text-xl text-black text-center'>Watch youtube video, <a 
            href="https://youtu.be/s3ZALjXtODY?si=RoMnaBVjgl74-AyU" 
            target='_blank' 
            className=' underline text-orange-500'>How to play
            </a>
            </p>
            <div className='flex p-3 gap-2 items-center justify-center'>
                <img src={cycle} alt='tutorial'></img>
            </div>
        </div>
    </div>
}