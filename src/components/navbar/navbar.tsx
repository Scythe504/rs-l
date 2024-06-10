import { LucideAlignJustify } from 'lucide-react'
import logo from '../../assets/crown.png'
import { DropdownMenuDemo } from './drop-down/drop'

export default function Navbar() {

    return <header className='w-full h-[150px] py-2 flex flex-row justify-between items-center'>
        {/* logo */}
        <div className="flex flex-col text-2xl">
            <div className='flex flex-row space-x-2 font-lactosa'>
                <span className='ml-2'>
                    Rs
                </span>
                <img src={logo}
                    height={30}
                    width={50}
                    className='bg-blend-exclusion'
                />
            </div>
            <div className='font-lactosa flex flex-row space-x-1'>
                <p className='text-orange-600 text-3xl'>Ludo</p>
                <p className='text-4xl'>Group</p>
            </div>
        </div>
        {/* menu bar */}
        <DropdownMenuDemo>
            <LucideAlignJustify/>
        </DropdownMenuDemo>
    </header>
}