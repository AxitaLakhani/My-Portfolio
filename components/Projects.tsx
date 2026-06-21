import { portfolioData } from "@/lib/data";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { GrGithub } from "react-icons/gr";

export default function Projects(){

return(

<section
id="projects"
className="py-10 px-6"
>

<div className="max-w-7xl mx-auto">

<div className="text-center mb-16">

<p className="text-purple-400 mb-2 font-medium tracking-wider uppercase text-sm">
My Work
</p>

<h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
Featured Projects
</h2>

</div>


<div
className="
grid
md:grid-cols-2
xl:grid-cols-3
gap-8
"
>

{portfolioData.projects.map((project,index)=>(

<div
key={index}

className="
group
bg-white/5
border
border-white/10
rounded-[30px]
overflow-hidden
backdrop-blur-xl
hover:-translate-y-3
transition-all
duration-500
"
>

<div
className="
relative
w-full
h-[220px]
overflow-hidden
"
>

<Image
src={project.image}
alt={project.title}
fill
className="
object-cover
group-hover:scale-110
transition-all
duration-700
"
/>

</div>


<div className="p-6">

<h3 className="text-2xl font-bold">

{project.title}

</h3>

<p
className="
text-gray-400
leading-7
mt-4
"
>

{project.description}

</p>


<div
className="
flex
flex-wrap
gap-2
mt-6
"
>

{project.tech.map((tech,index)=>(

<span
key={index}

className="
px-3
py-2
rounded-lg
text-sm
bg-purple-500/10
border
border-purple-500/20
"
>

{tech}

</span>

))}

</div>


<div
className="
flex
gap-4
mt-8
"
>

<a
href={project.github}

className="
flex
items-center
gap-2
px-4
py-3
rounded-xl
bg-white/5
border
border-white/10
"
>

<GrGithub size={18}/>
Code

</a>


<a
href={project.live}

className="
flex
items-center
gap-2
px-4
py-3
rounded-xl
bg-purple-600
hover:bg-purple-700
transition
"
>

Live
<ArrowUpRight size={18}/>

</a>

</div>

</div>

</div>

))}

</div>

</div>

</section>

)

}





// import { portfolioData } from "@/lib/data";

// const projects = portfolioData.projects;

// export default function Projects(){

// return(

// <section id="projects">

// <h2>Projects</h2>

// {projects.map((project,index)=>(

// <div key={index}>

// <h3>{project.title}</h3>

// <p>{project.description}</p>

// </div>

// ))}

// </section>

// )

// }