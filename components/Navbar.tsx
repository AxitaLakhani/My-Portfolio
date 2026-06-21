"use client"

import Link from "next/link"

const links=[
"Home",
"About",
"Projects",
"Experience",
"Skills",
"Contact"
]

export default function Navbar(){

return(

<header className="fixed top-0 z-50 w-full backdrop-blur-lg border-b">

<nav className="container mx-auto flex justify-between p-5">

<h1 className="font-bold text-xl">
Akshita Lakhani
</h1>

<div className="hidden md:flex gap-8">

{links.map(link=>(

<Link
key={link}
href={`#${link.toLowerCase()}`}
className="hover:text-purple-500 transition"
>

{link}

</Link>

))}

</div>

</nav>

</header>

)

}