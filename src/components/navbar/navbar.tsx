import { LucideAlignJustify } from 'lucide-react'
import logo from '/crown.png'
import { DropdownMenuDemo } from './drop-down/drop'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
    const navigate = useNavigate()
    return <header className='w-full h-[150px] py-2 flex flex-row justify-between items-center'>
        {/* logo */}
        <div className="flex flex-col text-2xl"
            onClick={() => navigate('/')}
        >
            <div className='flex flex-row space-x-2 font-lactosa'>
                <span className='ml-2'>
                    Rs
                </span>
                <span>
                    <img src={logo}
                        height={30}
                        width={50}
                        className='bg-blend-exclusion'
                    />
                </span>
            </div>
            <div className='font-lactosa flex flex-row space-x-1'>
                <p className='text-orange-600 text-2xl'>Trusted</p>
                <p className='text-4xl'>Group</p>
            </div>
        </div>
        {/* menu bar */}
        <DropdownMenuDemo>
            <LucideAlignJustify />
        </DropdownMenuDemo>
    </header>
}