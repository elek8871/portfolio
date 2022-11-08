import styles from "../styles/About.module.css"
import Image from "next/image"


export default function About(){
    return(
        <div className={styles.pink}>
            <h2 className="about"> About Me </h2>
            <p> 

                I have strong communication and problem-solving skills, honed through my previous career in healthcare. I pride myself in my ability to connect with 
                I truly desire to positively contribute to the world through software engineering.
            </p>
        {/* // load img locallly from img folder */}
        <Image
            className="img"
            src ="/michelle.jpg"
            alt ="logo"
            width={500}
            height={300}
        />
        <div>
            <h2 className="text-2xl font-bold underline"> Skills </h2>
            <p> HTML, CSS, JavaScript, Node, React, Python, Express, Postgres, MongoDB, Django </p>
        </div>

        {/* // load img hosted on another domain - need to whitelist in next.config.js*/}
        {/* <Image
            src="https://placekitten.com/400/500"
            alt= "portfolio cat"
            width={400}
            height={500}
         /> */}

        </div>
    )
}