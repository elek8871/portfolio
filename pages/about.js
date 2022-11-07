import styles from "../styles/About.module.css"
import Image from "next/image"


export default function About(){
    return(
        <div className={styles.pink}>
            <h2> About Me </h2>
            <p > Hi I am Michelle, am I a back-end leaning, full-stack developer</p>
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