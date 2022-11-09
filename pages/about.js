import styles from "../styles/About.module.css"
import Image from "next/image"


export default function About(){
    return(
        <div className='text-teal-700'>
            <h2 className="text-teal-800 text-2xl font-semibold p-5"> About Me </h2>

           
            <p className="pl-5 pt-2"> I am forever in awe of what can be created with a few lines of code! I am passionate about learning and growing as an engineer while affecting positive change in the world around me. </p>

            <p className="pl-5 pt-2"> I have strong communication and problem-solving skills, honed through my previous career in healthcare. I pride myself on my ability to connect with people of diverse backgrounds </p>
        {/* // load img locallly from img folder */}
        <div  className="p-4">
            <Image
                src ="/michelle.jpg"
                alt ="michelle in the library"
                width={500}
                height={300}
            />
        </div>
        <div>
            <h2 className="text-teal-800 text-2xl font-bold p-4"> Skills </h2>
            <p className="pl-5"> HTML * CSS * JavaScript * Node * React * Python * Express * Postgres * non-sql DBs * MongoDB * Django * Git * Git Hub </p>
        </div>

        <footer>
            <div> 
                <h1 className='text-teal-800 text-2xl font-semi-bold p-4' > Contact Me </h1>
                {/* need direct links w  icons */}
                    <ul className="pl-5">
                        <li>Git Hub</li> 
                        <li> LinkedIn</li>
                        <li> Email </li>
                        <li> Resume </li>
                    </ul>
            </div>
        </footer>
    </div>
    )
}
{/* // load img hosted on another domain - need to whitelist in next.config.js*/}
{/* <Image
    src="https://placekitten.com/400/500"
    alt= "portfolio cat"
    width={400}
    height={500}
 /> */}