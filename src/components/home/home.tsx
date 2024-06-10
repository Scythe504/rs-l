import { lazy, Suspense } from 'react'
import { Loader } from '../loading/loading'

const Navbar = lazy(() => import('@/components/navbar/navbar'))
const TopSection = lazy(() => import('@/components/top-level/top-section'))
const SecondSection = lazy(() => import('@/components/second/second'))
const ThirdSection = lazy(() => import('@/components/third/third-section'))
const FourthSection = lazy(() => import('@/components/fourth/fourth'))
const Footer = lazy(() => import('@/components/footer/footer'))
export default function Home() {

    return <div>
        <Suspense fallback={<Loader />}>
            <Navbar />
            <TopSection />
            <SecondSection />
            <ThirdSection />
            <FourthSection />
            <Footer />
        </Suspense>
    </div>
}