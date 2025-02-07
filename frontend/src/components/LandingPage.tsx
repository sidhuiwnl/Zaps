import {NavLink} from "react-router";
import {Safari} from "@/components/safari.tsx";
import BuiltWith from "@/components/BuiltWith.tsx";

export default function LandingPage() {

    return(
        <main className="h-screen mt-10 overflow-y-scroll">
            <header className="flex flex-row items-center p-5 justify-around ">
                <h1 className="font-medium text-3xl  antialiased">zaps</h1>
                <div className="flex flex-row items-center gap-10">
                    <NavLink to="/pricing">
                        <span className="font-medium  text-base text-neutral-700 tracking-widest antialiased">Pricing</span>
                    </NavLink>
                    <NavLink to="/about">
                       <span className=" text-base font-medium text-neutral-700  tracking-widest antialiased">About</span>
                    </NavLink>
                    <NavLink to="/login">
                       <span className="font-medium text-base text-neutral-700  tracking-widest antialiased">Login</span>
                    </NavLink>
                </div>
                <button
                    className="rounded-full border-2 px-4 py-1 border-blue-700  text-neutral-800 text-lg bg-gray-100"

                >
                    <span className="font-medium text-lg">Dashboard</span>
                </button>
            </header>
            <section className="flex flex-col items-center justify-center py-20 gap-10">

                    <h1 className="text-8xl text-neutral-700">Automate without limits.</h1>
                    <p className=" font-medium  text-2xl text-zinc-500">Turn chaos into smooth operations by automating workflows yourself</p>
                    <button className="bg-blue-600 text-white px-6 py-3  rounded-full font-medium tracking-wider">Dashboard</button>
                    <Safari

                        url="zaps.com"
                        className="size-half"

                    />
            </section>
            <section className="flex flex-col items-center justify-center ">
                <h1 className="text-lg font-medium ">Built Using Tools Like</h1>
                <BuiltWith />
            </section>
        </main>
    )
}


// #565656