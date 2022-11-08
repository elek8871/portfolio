import styles from "../styles/About.module.css"
import Image from "next/image"


export default function About(){
    return(
        <div>
            <h2 className="about"> About Me </h2>

           
            <p> I am forever in awe of what can be created with a few lines of code! I am passionate about learning and growing as an engineer while affecting positive change in the world around me. </p>

            <p> I have strong communication and problem-solving skills, honed through my previous career in healthcare. I pride myself in my ability to connect with people of diverse backgrounds </p>
        {/* // load img locallly from img folder */}
        <Image
            className="img"
            src ="/michelle.jpg"
            alt ="logo"
            width={500}
            height={300}
        />
        <div>
            <h2> Skills </h2>
            <p> HTML * CSS * JavaScript * Node * React * Python * Express * Postgres * MongoDB * Django </p>
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