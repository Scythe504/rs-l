import dice from '../../assets/mobile-fiest.png';
import wa from '../../assets/wa.svg'
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
        <div>
            <h1 className='text-orange-600 text-5xl text-left p-2'>Play & Earn</h1>
            <p>Multiplayer Gaming Whatsapp Group Platform <br />
                to earn real money
                <a href='todo' className='flex flex-row space-x-1'><img src={wa} alt='whatsapp icon'/>Join Now</a>
            </p>
        </div>
    </div>
}