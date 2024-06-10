import { cn } from "@/lib/utils"
import Lottie from "react-lottie-player"
import animation from '@/animation.json'
export const Loader = () => {

    return <div className={cn( `flex-col items-center justify-center min-w-screen min-h-screen flex`)}>
        <Lottie
            loop
            animationData={animation}
            play
            style={{
                width: 150,
                height: 150
            }}
        />
    </div>
}