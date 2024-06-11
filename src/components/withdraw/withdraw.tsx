import mountain from '../../assets/pahad.png'
import Navbar from '../navbar/navbar'

export default function Withdraw() {
    return <div >
        <Navbar/>
        <div className='h-full flex flex-col justify-center items-center w-full gap-6 md:translate-y-12'>
            <div className='-mx-8 z-10'>
                <img src={mountain} alt='dice' />
            </div>
            <div id='withdraw' className='bg-[#a8925b] w-screen -mt-8 z-10 pb-16 sm:px-24 h-[350px] px-2'>
                <h1 className='text-5xl'>How to Withdraw</h1>
                <br />
                <p className='ml-1'>Watch this YouTube video:<a href="" target='_blank' className='underline text-orange-500 bg-black bg-clip-text'> How to Withdraw</a></p>
                <br></br>
                <div className='ml-7 text-left gap-2 flex flex-col'>
                    <h1 className='text-3xl' >
                        Steps:
                    </h1>
                    <p>1. Direct Message to admin,
                        "I want to withdraw my money."
                    </p>
                    <p>2. Withdrawal will be done in 5 minutes</p>
                </div>
            </div>
        </div>
    </div>
}