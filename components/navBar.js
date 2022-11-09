import Link from "next/link"
import styles from "../styles/About.module.css"

export default function NavBar(){
    return(
        <nav className='text-teal-800 space-x-10'>
            <Link href="/" > Home </Link>

            <Link href="/about"> About Me</Link>

            <Link href="/portfolio" > Projects </Link>
        </nav>
    
    )
    
}

