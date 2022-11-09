import Link from "next/link"
import styles from "../styles/About.module.css"

export default function NavBar(){
    return(
        <div className="flex">
            <nav className= "mr-3">
                <div className="inline-block border border-slate-300 rounded hover:border-slate-500 text-teal-800 hover:bg-green-200 py-1 px-3">
                <Link href="/" > Home </Link>
                </div>
            </nav>

            <nav className="mr-3">
                <div className="inline-block border border-slate-300 rounded hover:border-gray-200 text-teal-800 hover:bg-green-200 py-1 px-3">
                <Link href="/about"> About Me</Link>
                </div>
            </nav>

            <nav className="mr-3">
                <div className="inline-block border border-slate-300 rounded hover:border-gray-200 text-teal-800 hover:bg-green-200 py-1 px-3">
                <Link href="/portfolio" > Projects </Link>
                </div>
            </nav>
        </div>
    
    )
    
}

