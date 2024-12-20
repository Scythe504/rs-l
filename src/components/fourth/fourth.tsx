import { MailIcon } from 'lucide-react'
import cut from '/cuts.png'
import wa from '/wa.svg'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'
export default function FourthSection() {

    const navigate = useNavigate()
    return <div>
        <div className='h-full flex flex-col justify-center items-center w-full gap-6 '>
            <div className='-mx-12 -mt-8 z-20'>
                <img src={cut} alt='dice' width={1920}  height={400}/>
            </div>
            <div className='bg-[#444244] w-screen -mt-8 z-20 sm:px-24' id='about'>
                <h1 className='text-5xl text-center text-orange-500'>About</h1>
                <br />
                <p className='text-2xl text-center'>We are Providing a Platform where you can use your Ludo Skills to Earn Real Money</p>
                <br />
                <div className='px-8 text-left gap-2 flex flex-col'>
                    <h1 className='text-4xl text-center mr-6 p-1 text-orange-500 ' >
                        Rules and Regulations
                    </h1>
                    <Button onClick={() => navigate('/rules')}>Check the game rules</Button>
            </div>
                <br />
                <div className='bg-[#444244] w-screen px-4 z-20 pb-10 md:px-20'>
                    <h1 className='text-4xl text-center md:mr-44' id='contact'>Contact</h1>
                    <br />
                    <a href='https://wa.me/919470981359'
                        className='flex flex-row space-x-4 items-center justify-start'
                    >
                        <img src={wa} alt='whatsapp'
                            height={30}
                            width={30}
                        />&nbsp;WhatsApp
                    </a>
                    <a href='mailto:rsludogroup@gmail.com'
                        className='flex flex-row space-x-2'
                    >
                        <MailIcon color='black' height={30}
                            width={30} />&nbsp;Email
                    </a>
                    <br />
                    <p className='text-center md:mr-44'>To join group or any help please Whatsapp or Email us.</p>
                </div>
            </div>
        </div>
    </div>
}