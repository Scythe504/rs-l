import { useEffect, useState } from "react";
import Navbar from "../navbar/navbar";
import { Loader } from "../loading/loading";

export default function PDF_File() {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const s = async () => {
            setTimeout(() => {
                 setLoading(false)
            }, 3000)
        };
        s();
    }, [loading])
    return <div className="min-w-screen min-h-screen">
        {loading ? (
            <div>
                <Loader />
            </div>) : <>
            <div>
                <Navbar />
            </div>
            <div className=" flex flex-col items-center justify-center">
                <iframe src="https://drive.google.com/file/d/1yu9oxPpg_Uflr0SsnDcr176ApGUeIp--/preview" className="h-[600px] w-full" allow="autoplay"></iframe>
            </div>
        </>
        }
    </div>
}