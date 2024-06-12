import mountain from '/pahad.png'
export default function ThirdSection() {
    return <div >
        <div className='h-full flex flex-col justify-center items-center w-full gap-6 md:translate-y-12'>
            <div className='-mx-8 -mt-28 z-10'>
                <img src={mountain} alt='dice' />
            </div>
            <div id='withdraw' className='bg-[#a8925b] w-screen -mt-8 z-10 pb-16 sm:px-24 h-[350px] px-2'>
                <h1 className='text-4xl text-center text-black'>How to Withdraw</h1>
                <br />
                <p className='ml-1 text-xl'>Watch this YouTube video:<a href="https://youtube.com/shorts/n6cNr-mpTWo?si=98sniW82ZxMHfczp" target='_blank' className='underline text-orange-500 bg-black bg-clip-text'>Click here</a></p>
                <br/>
                <div className='text-left gap-2 flex flex-col text-xl'>
                    <p>Step 1:- Direct Message to admin,
                        "I want to withdraw my money."
                    </p>
                    <p>Step 2:- Withdrawal will be done in 5 minutes</p>
                </div>
            </div>
        </div>
    </div>
}