import { useEffect, useState } from 'react'
import { Loader } from '../loading/loading'
import FourthSection from '@/components/fourth/fourth'
import Footer from '../footer/footer'
import Navbar from '../navbar/navbar'
import SecondSection from '../second/second'
import ThirdSection from '../third/third-section'
import TopSection from '../top-level/top-section'

export default function Home() {
    const [loading, setLoading] = useState(true);
    const [home, setHome] = useState(<></>)
    useEffect(() => {
        setTimeout(() => {
            setHome(<>
                <Navbar />
                <TopSection />
                <SecondSection />
                <ThirdSection />
                <FourthSection />
                <Footer />
            </>
            )
            setLoading(false);
        }, 500)
    }, [loading])
    return <div>
        {
            loading ? <Loader/> : home
        }
    </div>
}