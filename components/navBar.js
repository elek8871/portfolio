import Link from "next/link"
import styles from "../styles/About.module.css"

export default function NavBar(){
    return(
        <nav>
            <Link href="/"> Home </Link>

            <Link href="/about"> About Me</Link>

            <Link href="/portfolio"> Projects </Link>

        </nav>
    )
    
}

