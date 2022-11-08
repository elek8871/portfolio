import Image from "next/image"
import Link from "next/link"

export default function Portfolio(){

    return(
        <div>
            <h1> My Projects </h1>
            <div>
                <Link href=" https://helpful-dusk-923e50.netlify.app/ ">
                <a> Goal Digger </a>
                </Link>
                    <Image
                        className="goalDigger"
                        src ="/goaldigger.png"
                        alt ="home screeen of web site"
                        width={500}
                        height={300}
                     />
                    <ul>
                        <li>Goal Digger is a full-stack, full CRUD, MERN application that allows users to create and edit their own bucket lists. </li>
                        <li>Tech Stack: React.js, JS, MongoDB, Mongoose, Express, HTML, Vanilla CSS, React Bootstrap, external API </li>
                    </ul>
            </div>

            <div>
                <Link href="https://pubs-and-pubs.fly.dev/">
                <a> Pups and Pubs </a>
                </Link>

                <Image
                    className="pupsandpups"
                    src ="/pupsnpubs.png"
                    alt ="home screeen of web site"
                    width={500}
                    height={300}
                />
                    <ul>
                        <li>
                            Pups and Pubs in a full-stack, full CRUD web application in which users can create an account, find and rate local breweries based on dog-friendliness and food and beverage quality.
                        </li>
                        <li>
                            Tech Stack: Axios, SQL, Bootstrap CSS, HTML, JS, Express, Git, External Api
                        </li>
                    </ul>
            </div>

            <div>
                    <Link href= "https://elek8871.github.io/SEI-Project-1---Match-Game/">
                        <a> Memory Match Game </a>
                    </Link>

                    <Image
                        className="memorymatch"
                        src ="/memorymatch.png"
                        alt ="home screeen of web site"
                        width={500}
                        height={300}
                    />
                    <ul>
                        <li> A fun retro hockey-themed memory match game, eloquently simple. </li>
                        <li> Tech Stack : vanilla JS, HTML, CSS, and DOM manipulation</li>
                    </ul>
            </div>
        </div>
    )

}