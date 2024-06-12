import { MailIcon } from 'lucide-react'
import cut from '/cuts.png'
import wa from '/wa.svg'
import Navbar from '../navbar/navbar'
export default function Contact() {

    return <div>
        <Navbar/>
        <div className='h-full flex flex-col justify-center items-center w-full'>
            <div className='-mx-12  z-20'>
                <img src={cut} alt='dice' />
            </div>
            <br />
            <div className='bg-[#444244] w-screen px-4 z-20 pb-10 md:px-20 h-screen -mt-8'>
                <h1 className='text-4xl text-center md:mr-44' id='contact'>Contact</h1>
                <br />
                <a href='https://wa.link/hdv7d0'
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
}