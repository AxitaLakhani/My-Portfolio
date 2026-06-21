import { portfolioData } from "@/lib/data";

export default function Experience(){

return(

<section
id="experience"
className="py-28 px-6"
>

<div className="max-w-6xl mx-auto">

<div className="text-center mb-16">

<p className="text-purple-400">
My Journey
</p>

<h2 className="text-3xl md:text-5xl font-bold mt-3">
Experience
</h2>

</div>


{portfolioData.experience.map((exp,index)=>(

<div
key={index}

className="
relative
ml-6
border-l
border-purple-500/30
pl-10
pb-10
"
>

<div
className="
absolute
w-5
h-5
bg-purple-500
rounded-full
-left-[10px]
top-2
"
/>

<div
className="
bg-white/5
backdrop-blur-xl
border
border-white/10
rounded-3xl
p-8
"
>

<div
className="
flex
justify-between
flex-wrap
gap-4
"
>

<div>

<h3 className="text-2xl font-bold">

{exp.role}

</h3>

<p className="text-purple-400">

{exp.company}

</p>

</div>

<p className="text-gray-400">

{exp.duration}

</p>

</div>


<ul className="mt-6 space-y-3">

{exp.description.map((item,index)=>(

<li
key={index}
className="text-gray-300"
>

• {item}

</li>

))}

</ul>

</div>

</div>

))}

</div>

</section>

)

}