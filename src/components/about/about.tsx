import cut from '../../assets/cuts.png'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'
import Navbar from '../navbar/navbar'
export default function About() {

    const navigate = useNavigate()
    return <div>
        <Navbar/>
        <div className='h-full flex flex-col justify-center items-center w-full gap-6'>
            <div className='-mx-12  z-20'>
                <img src={cut} alt='dice' />
            </div>
            <div className='bg-[#444244] w-screen -mt-8 z-20 sm:px-24 px-4 h-[900px] overflow-hidden'>
                <h1 className='text-orange-600 text-5xl text-center'>About</h1>
                <br />
                <p className='text-2xl text-center'>We are Providing a Platform where you can use your Ludo Skills to Earn Real Money</p>
                <div className='px-8 text-left gap-2 flex flex-col'>
                    <br />
                    <h1 className='text-orange-600 text-4xl text-center mr-6 p-1' >
                        Rules and Regulations
                    </h1>
                    <Button onClick={()=>navigate('/rules')}>Check the game rules</Button>
                </div>
                <br />
            </div>
        </div>
    </div>
}