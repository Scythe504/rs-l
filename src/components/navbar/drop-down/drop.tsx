import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useNavigate } from "react-router-dom"

export function DropdownMenuDemo({ children }: {
    children: React.ReactNode
}) {
    const navigation = useNavigate();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    className="object-contain text-clip">
                    {children}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Menu</DropdownMenuLabel>
                <DropdownMenuSeparator />
                    <a
                        href={`/`}
                        target="_self"
                    >
                        <DropdownMenuItem>
                            <span>Home</span>
                        </DropdownMenuItem>
                    </a>
                <DropdownMenuGroup>
                    <a
                        href={`#wa`}
                    >
                        <DropdownMenuItem>
                            <span>How to Join Ludo Group</span>
                        </DropdownMenuItem>
                    </a>
                    <a
                        href={`#play`}
                    >
                        <DropdownMenuItem>
                            <span>How to play</span>
                        </DropdownMenuItem>
                    </a>
                    <a
                        href='#withdraw'
                        target='_parent'
                    >
                        <DropdownMenuItem>
                            <span>How to Withdraw</span>
                        </DropdownMenuItem>
                    </a>
                    <a
                        href="#"
                        onClick={()=>navigation('/rules')}
                        target="_self"
                    >
                        <DropdownMenuItem>
                            <span>Rules</span>
                        </DropdownMenuItem>
                    </a>
                    <a
                        href={`#contact`}
                        target="_self"
                    >
                        <DropdownMenuItem>
                            <span>Contact</span>
                        </DropdownMenuItem>
                    </a>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
