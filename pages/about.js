import styles from "../styles/About.module.css"
import Image from "next/image"
import Link from "next/link"


export default function About(){
    return(
        <div className="text-teal-700 font-serif">
                <div>
                    <h2 className="text-teal-800 text-2xl font-semibold p-5 flex justify-center border-b"> About Me </h2>
                        <div className="p-3">
                            <p className="pl-5 pt-2 flex justify-center padding"> I am forever in awe of what can be created with a few lines of code! I am passionate about learning and growing as an engineer while affecting positive change in the world around me. </p>
                            <p className="pl-5 pt-2 flex justify-center"> I have strong communication and problem-solving skills, honed through my previous career in healthcare. I pride myself on my ability to connect with people of diverse backgrounds. </p>
                            <p className="pl-5 pt-2 flex justify-center"> While not chasing the thrill of functioning code I enjoy playing hockey, knitting, and learning to communicate with my deaf dog.  </p>
                        </div>
                </div>
        {/* // load img locallly from img folder */}
                <div  className="p-4 flex justify-center">
                    <Image
                        className="rounded-full shadow-md"
                        src ="/michelle.jpg"
                        alt ="michelle at the library"
                        width={400}
                        height={300}
                    />
                </div>

                <div>
                    <h2 className="text-teal-800 text-2xl font-bold p-4 flex justify-center border-b"> Current Skills </h2>
                    <p className="pl-5 flex justify-center p-3"> HTML * CSS * JavaScript * Node * React * Python * Express * Postgres * non-sql DBs * MongoDB * Django * Git * Git Hub </p>
                </div>
    

            <footer>
                <div> 
                    <h1 className="text-teal-800 text-2xl font-semi-bold p-4 flex justify-center" > Contact Me </h1>
                    {/* need direct links w  icons */}
                        <div className="pl-5 flex justify-center space-x-8">
                            <div className="inline-block border border-slate-500 rounded hover:border-gray-200 text-teal-800 hover:bg-green-200 py-1 px-3">
                                <Link href="https://github.com/elek8871" target="_blank">
                                    <a>Git Hub</a>
                                </Link>
                            </div>
                            <div className="inline-block border border-slate-500 rounded hover:border-gray-200 text-teal-800 hover:bg-green-200 py-1 px-3">
                                <Link href="https://www.linkedin.com/in/michelle-elek/" target="_blank"> 
                                    <a>LinkedIn </a>
                                </Link>
                            </div>
                            <div className="inline-block border border-slate-500 rounded hover:border-gray-200 text-teal-800 hover:bg-green-200 py-1 px-3">
                                <Link href="https://docs.google.com/document/d/1h5UoX7ne6breWCU2WWb3ml9eHRHDreoQ6mQNCiZ3aJM/edit?usp=sharing" target="_blank" >
                                <a> View my Resume </a>
                                </Link>
                            </div>
                        </div>
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