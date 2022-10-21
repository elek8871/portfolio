import styles from "../styles/About.module.css"
import Image from "next/image"


export default function About(){
    return(
        <div className={styles.pink}>
            <h1> About Me </h1>
            <p > Hi I am Michelle, am I a back-end leaning, full-stack developer</p>
        {/* // load img locallly from img folder */}
        <Image
            src ="/vercel.svg"
            alt ="logo"
            width={300}
            height={500}
        />

        {/* // load img hosted on another domain - need to whitelist in next.config.js*/}
        <Image
            src="https://placekitten.com/400/500"
            alt= "portfolio cat"
            width={400}
            height={500}
         />



        </div>
    )
}