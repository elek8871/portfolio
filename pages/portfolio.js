import Image from "next/image"
import Link from "next/link"

export default function Portfolio(){

    return(
        <div className="text-teal-700 font-serif">
            <h1 className="text-3xl p-3 flex justify-center"> My Projects </h1>
            <p className="flex justify-center"> Click on the title of any project to view the live site.</p>
            <ul>
                <li className="flex justify-center"> User Name = guest@web.com</li>
                <li className="flex justify-center"> Password = hello </li>
            </ul>

            {/* div that holds all cards */}
            <div className="">

            {/* goal digger div */}
                <div className="p-4 m-5 bg-amber-100 opacity-75 rounded-md border-2 border-slate-500 ">
                    <div className="flex justify-center text-2xl bottom-5  hover:bg-green-200 py-1 px-3">
                        <Link href="https://helpful-dusk-923e50.netlify.app/">
                            <a> Goal Digger </a>
                        </Link>
                    </div>

                    <div className="grid grid-flow-col auto-cols-auto top-5">
                        <div>
                            <Image
                                className="rounded-md"
                                src ="/goaldigger.png"
                                alt ="home screeen of goal digger site"
                                width={400}
                                height={280}
                                />
                        </div>
                        <div className="font-light text-med p-4 top-5">
                            <ul >
                                <li className="p-3">Goal Digger is a full-stack, full CRUD, MERN application that allows users to create and edit their own bucket lists. </li>
                                <li className="p-3">Tech Stack: React.js, JS, MongoDB, Mongoose, Express, HTML, Vanilla CSS, React Bootstrap, external API </li>
                            </ul>
                        </div>
                    </div>
                </div>

            {/* pups and pubs div */}
                <div className="p-4 m-5 bg-amber-100 opacity-75 rounded-md border-2 border-slate-500">
                    <div className="flex justify-center text-2xl  hover:bg-green-200 py-1 px-3">
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
                        <div className="order-1 text-md font-light p-4">
                            <ul>
                                <li className="p-3">
                                    Pups and Pubs in a full-stack, full CRUD web application in which users can create an account, find and rate local breweries based on dog-friendliness and food and beverage quality.
                                </li>
                                <li className="p-3">
                                    Tech Stack: Axios, SQL, Bootstrap CSS, HTML, JS, Express, Git, External Api
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            {/* memory match div */}
                <div className="p-4 m-5 bg-amber-100 opacity-75 rounded-md border-2 border-slate-500 ">
                    <div div className="flex justify-center text-2xl hover:bg-green-200 py-1 px-3">
                        <Link href= "https://elek8871.github.io/SEI-Project-1---Match-Game/">
                            <a className="flex justify-center text-center"> Memory Match Game </a>
                        </Link>
                    </div>

                    <div className = "grid grid-flow-col auto-cols-auto">
                        <div>
                            <Image
                                className="rounded-md"
                                src ="/memorymatch.png"
                                alt ="home screeen of memory match site"
                                width={400}
                                height={280}
                            />
                        </div>
                        <div className="text-md font-light p-4">
                            <ul>
                                <li className="p-3"> A fun retro hockey-themed memory match game, eloquently simple. </li>
                                <li className="p-3"> Tech Stack : vanilla JS, HTML, CSS, and DOM manipulation</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

}