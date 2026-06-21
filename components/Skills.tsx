import { portfolioData } from "@/lib/data";

export default function Skills() {

return(

<section
id="skills"
className="py-28 px-6"
>

<div className="max-w-7xl mx-auto">

<div className="text-center mb-20">

<p className="text-2xl md:text-3xl text-purple-400 mb-3">
My Expertise
</p>

<h2 className="text-3xl md:text-5xl font-bold">
Technical Skills
</h2>

<p className="text-gray-400 mt-4 max-w-2xl mx-auto">
Technologies and tools I use to build modern,
responsive and scalable applications.
</p>

</div>


<div className="space-y-5">

{portfolioData.skills.map((skill,index)=>(

<div key={index}>

<h3
className="
text-2xl
font-bold
mb-6
text-white
flex
items-center
gap-3
"
>

<div
className="
w-3
h-3
rounded-full
bg-purple-500
"
/>

{skill.category}

</h3>


<div
className="
flex
flex-wrap
gap-4
"
>

{skill.items.map((item,i)=>(

<div
key={i}

className="
group
px-6
py-4
rounded-2xl
bg-white/5
backdrop-blur-lg
border
border-white/10

hover:border-purple-500/40
hover:-translate-y-2
hover:shadow-[0_0_25px_rgba(168,85,247,.25)]

transition-all
duration-500
cursor-pointer
"
>

<span
className="
text-gray-200
group-hover:text-white
"
>

{item}

</span>

</div>

))}

</div>

</div>

))}

</div>

</div>

</section>

)

}