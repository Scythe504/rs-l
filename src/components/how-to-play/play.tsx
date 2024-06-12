import { instructions } from '@/data/metadata';
import cloud from '/badal.png';
import { Card } from '../ui/card';
import Navbar from '../navbar/navbar';

export default function HowToPlay() {

    return <div className='mt-4'>
            <Navbar />
        <div className='-mx-8 mt-6 w-screen'>
            <div className=' bg-bottom-[#dbdecb]'>
                <img src={cloud} alt='cloud' />
            </div>
            <div id='play' className='bg-[#dbdecb] h-fit w-screen -z-10 -mt-2 md:px-40 overflow-hidden pb-20' >
                <h1 className='text-center text-5xl text-black font-satoshi-black pt-4'>How To Play</h1>
                <br />
                <p className='text-xl text-black text-center'>Watch youtube video, <a
                    href="https://youtu.be/s3ZALjXtODY?si=RoMnaBVjgl74-AyU"
                    target='_blank'
                    className='underline text-orange-500'>Click Here
                </a>
                </p>
                <div className='grid grid-cols-2 gap-2 pb-20 px-2 pt-4'>
                    {
                        instructions.map((instruction, index) => (
                            <Card key={index} className='flex items-center justify-center rounded-full bg-orange-600 py-8 text-md px-2 text-center'>
                                {instruction}
                            </Card>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
}