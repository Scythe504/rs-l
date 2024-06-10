import { MailIcon } from 'lucide-react'
import cut from '../../assets/cuts.png'
import wa from '../../assets/wa.svg'
export default function FourthSection() {
    return <div>
        <div className='h-full flex flex-col justify-center items-center w-full gap-6'>
            <div className='-mx-12 -mt-8 z-20'>
                <img src={cut} alt='dice' />
            </div>
            <div className='bg-[#444244] w-screen -mt-8 z-20 sm:px-24'>
                <h1 className='text-5xl text-center'>About</h1>
                <div className='ml-7 text-left gap-2 flex flex-col'>
                    <h1 className='text-2xl text-center mr-6 p-1' >
                        Rules and Regulations
                    </h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, dolorum minima fuga ipsum delectus veritatis doloremque voluptatum, eos, deserunt cupiditate molestiae iusto. Inventore, laboriosam maxime sunt accusamus dolores enim maiores.</p>
                </div>
                <br />
                <div className='bg-[#444244] w-screen ml-7 z-20 pb-10 text-left'>
                    <h1 className='text-4xl'>Contact</h1>
                    <br />
                    <p>
                        We are open for business. Feel free to drop us a line or send your brief.
                    </p>
                    <br />
                    <a href='https://wa.link/hdv7d0'
                        className='flex flex-row space-x-4 items-center justify-start'
                    >
                        <img src={wa} alt='whatsapp'
                            height={30}
                            width={30}
                        />&nbsp;WhatsApp
                    </a>
                    <a href=''
                        className='flex flex-row space-x-2'
                    >
                        <MailIcon color='black' height={30}
                            width={30} />&nbsp;Email
                    </a>
                    <br />
                <p>For any help please Whatsapp or Email us.</p>
                </div>
            </div>
        </div>
    </div>
}