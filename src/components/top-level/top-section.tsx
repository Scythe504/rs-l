import dice from '../../assets/mobile-fiest.png';
import wa from '../../assets/wa.svg'
import { Button } from '../ui/button';
export default function TopSection() {
    return <div>
        <div className='h-full flex flex-col justify-center items-center w-full gap-6'>
            <div>
                <img src={dice} alt='dice'
                    height={300}
                    width={300}
                />
            </div>
        </div>
        <div className='flex flex-col gap-3'>
            <h1 className='text-orange-600 text-5xl text-left'>Play & Earn</h1>
            <p className='text-left text-xl p-1'>Ludo Whatsapp Group Platform
                to earn real money
            </p>
            <Button className=' bg-clip-border bg-white rounded-md p-4 ml-1 w-fit'>
                <a href='https://wa.link/hdv7d0' 
                    target='_blank'
                className='flex flex-row space-x-1 object-contain items-center'>
                    <img src={wa} alt='whatsapp icon' className='text-white'
                        height={30}
                        width={30}
                    />
                    Join The Group Now
                </a>
            </Button>
        </div>
    </div>
}