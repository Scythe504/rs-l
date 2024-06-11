import Navbar from "../navbar/navbar";

export default function PDF_File() {

    return <div className="min-w-screen min-h-screen">
        <div>
            <Navbar />
        </div>
        <div className=" flex flex-col items-center justify-center">
            <iframe src="https://drive.google.com/file/d/1yu9oxPpg_Uflr0SsnDcr176ApGUeIp--/preview" className="h-[600px] w-full" allow="autoplay"></iframe>
        </div>
    </div>
}