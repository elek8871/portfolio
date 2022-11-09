import Image from "next/image"
import Link from "next/link"

export default function Portfolio(){

    return(
        <div className="text-teal-700 font-serif">
            <h1 className="text-3xl p-3 flex justify-center"> My Projects </h1>
            <p className="flex justify-center"> Click on the title of the project to view the live site</p>

            {/* div that holds all cards */}
            <div className="">

            {/* goal digger div */}
                <div className="p-4 m-5 bg-slate-300 rounded-md border-2 border-slate-500 ">
                    <div className="flex justify-center text-2xl">
                        <Link href="https://helpful-dusk-923e50.netlify.app/">
                            <a> Goal Digger </a>
                        </Link>
                    </div>

                    <div className="grid grid-flow-col auto-cols-auto">
                        <Image
                            className="rounded-md"
                            src ="/goaldigger.png"
                            alt ="home screeen of goal digger site"
                            width={400}
                            height={280}
                            />
                        <ul className="font-light text-med p-4">
                            <li>Goal Digger is a full-stack, full CRUD, MERN application that allows users to create and edit their own bucket lists. </li>
                            <li>Tech Stack: React.js, JS, MongoDB, Mongoose, Express, HTML, Vanilla CSS, React Bootstrap, external API </li>
                        </ul>
                    </div>
                </div>

            {/* pups and pubs div */}
                <div className="p-4 m-5 bg-slate-300 rounded-md border-2 border-slate-500">
                    <div className="flex justify-center text-2xl">
                        <Link href="https://pubs-and-pubs.fly.dev/">
                        <a> Pups and Pubs </a>
                        </Link>
                    </div>

                    <div className="grid grid-flow-col auto-cols-auto">
                        <div className="order-2">
                        <Image
                            className="rounded-md"
                            src ="/pupsnpubs.png"
                            alt ="home screeen of pups and pubs site"
                            width={400}
                            height={280}
                        />
                        </div>
                        <div className="order-1">
                            <ul className="text-sm font-light p-4">
                                <li>
                                    Pups and Pubs in a full-stack, full CRUD web application in which users can create an account, find and rate local breweries based on dog-friendliness and food and beverage quality.
                                </li>
                                <li>
                                    Tech Stack: Axios, SQL, Bootstrap CSS, HTML, JS, Express, Git, External Api
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            {/* memory match div */}
                <div className="p-4 m-5 bg-slate-300 rounded-md border-2 border-slate-500 ">
                    <div div className="flex justify-center text-2xl">
                        <Link href= "https://elek8871.github.io/SEI-Project-1---Match-Game/">
                            <a className="flex justify-center text-center"> Memory Match Game </a>
                        </Link>
                    </div>

                    <div className = "grid grid-flow-col auto-cols-auto">
                        <Image
                            className="rounded-md"
                            src ="/memorymatch.png"
                            alt ="home screeen of memory match site"
                            width={300}
                            height={250}
                        />
                        <ul className="text-sm font-light p-4">
                            <li> A fun retro hockey-themed memory match game, eloquently simple. </li>
                            <li> Tech Stack : vanilla JS, HTML, CSS, and DOM manipulation</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )

}