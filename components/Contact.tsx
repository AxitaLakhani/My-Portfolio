"use client";

import { useState } from "react";
import { portfolioData } from "@/lib/data";
import { Mail, Phone, Link as LinkIcon, MapPin, Send, CheckCircle2 } from "lucide-react";
import { GrGithub } from "react-icons/gr";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      
      // Auto close success message after 5s
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="portfolio-bg relative py-16 sm:py-20 px-4 sm:px-6 overflow-hidden"
    >
  

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-purple-400 mb-2 font-medium tracking-wider uppercase text-sm">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Contact Me
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            I'm always open to discussing new opportunities, collaborations, or interesting projects.
          </p>
        </div>

        {/* Contact info cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Email */}
          <a
            href={`mailto:${portfolioData.email}`}
            className="group p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-purple-500/30 hover:shadow-[0_10px_30px_rgba(168,85,247,0.08)] transition-all duration-300 flex flex-col items-start"
          >
            <span className="p-3 rounded-xl bg-purple-500/10 text-purple-400 mb-4 group-hover:bg-purple-500/20 group-hover:text-purple-300 transition-colors">
              <Mail size={20} />
            </span>
            <h3 className="font-bold text-white text-base mb-1">Email</h3>
            <p className="text-gray-400 text-xs sm:text-sm break-all">{portfolioData.email}</p>
          </a>

          {/* Phone */}
          <a
            href={`tel:${portfolioData.phone}`}
            className="group p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-purple-500/30 hover:shadow-[0_10px_30px_rgba(168,85,247,0.08)] transition-all duration-300 flex flex-col items-start"
          >
            <span className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 mb-4 group-hover:bg-cyan-500/20 group-hover:text-cyan-300 transition-colors">
              <Phone size={20} />
            </span>
            <h3 className="font-bold text-white text-base mb-1">Phone</h3>
            <p className="text-gray-400 text-xs sm:text-sm">{portfolioData.phone}</p>
          </a>

          {/* Github */}
          <a
            href={portfolioData.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-purple-500/30 hover:shadow-[0_10px_30px_rgba(168,85,247,0.08)] transition-all duration-300 flex flex-col items-start"
          >
            <span className="p-3 rounded-xl bg-slate-800/50 text-gray-300 mb-4 group-hover:bg-slate-800 group-hover:text-white transition-colors">
              <GrGithub size={20} />
            </span>
            <h3 className="font-bold text-white text-base mb-1">GitHub</h3>
            <p className="text-gray-400 text-xs sm:text-sm">View Projects</p>
          </a>

          {/* Linkedin */}
          <a
            href={portfolioData.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-purple-500/30 hover:shadow-[0_10px_30px_rgba(168,85,247,0.08)] transition-all duration-300 flex flex-col items-start"
          >
            <span className="p-3 rounded-xl bg-blue-500/10 text-blue-400 mb-4 group-hover:bg-blue-500/20 group-hover:text-blue-300 transition-colors">
              <LinkIcon size={20} />
            </span>
            <h3 className="font-bold text-white text-base mb-1">LinkedIn</h3>
            <p className="text-gray-400 text-xs sm:text-sm">Let's Connect</p>
          </a>
        </div>

        {/* Contact Form section */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Left panel */}
          <div className="lg:col-span-5 bg-white/[0.02] border border-white/10 backdrop-blur-xl rounded-[24px] p-6 md:p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Let's Build Something Together
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                I'm always interested in discussing new ideas, job opportunities, and exciting projects. Feel free to connect anytime.
              </p>
            </div>

            <div className="mt-8 space-y-6">
              <div className="flex items-center gap-4">
                <span className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-purple-400">
                  <Mail size={18} />
                </span>
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase">Email</p>
                  <p className="text-sm font-medium text-gray-200">{portfolioData.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-cyan-400">
                  <MapPin size={18} />
                </span>
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase">Location</p>
                  <p className="text-sm font-medium text-gray-200">Junagadh, Gujarat, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel (Form) */}
          <div className="lg:col-span-7 bg-white/[0.02] border border-white/10 backdrop-blur-xl rounded-[24px] p-6 md:p-8">
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center text-center h-full py-10 min-h-[300px]">
                <CheckCircle2 size={56} className="text-emerald-400 mb-4 animate-bounce" />
                <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">Message Sent!</h4>
                <p className="text-gray-400 text-sm max-w-sm">
                  Thank you for reaching out, Akshita will get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-purple-500 focus:bg-white/[0.07] transition-all duration-300 text-sm sm:text-base"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-purple-500 focus:bg-white/[0.07] transition-all duration-300 text-sm sm:text-base"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Your Message"
                    className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white outline-none resize-none focus:border-purple-500 focus:bg-white/[0.07] transition-all duration-300 text-sm sm:text-base"
                  />
                </div>

                {error && <p className="text-rose-400 text-xs sm:text-sm font-medium">{error}</p>}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-purple-600 hover:bg-purple-700 disabled:bg-purple-800 disabled:cursor-not-allowed transition-all duration-300 font-semibold text-white flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(168,85,247,0.25)]"
                >
                  {isSubmitting ? (
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  ) : (
                    <>
                      Send Message
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}




// import { portfolioData } from "@/lib/data";
// import { Mail, Phone, Link } from "lucide-react";
// import { GrGithub } from "react-icons/gr";

// export default function Contact() {
//   return (
//     <section
//       id="contact"
//       className="portfolio-bg py-16 sm:py-20 px-4 sm:px-6 overflow-hidden"
//     >
//       <div className="grid-pattern"></div>

//       <div className="max-w-7xl mx-auto">

//         {/* Heading */}

//         <div className="text-center mb-12 sm:mb-16">

//           <p className="text-purple-400 mb-2 font-medium tracking-wider uppercase text-sm">
//             Get In Touch
//           </p>

//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
//             Contact Me
//           </h2>

//           <p
//             className="
//             text-gray-400
//             mt-4
//             max-w-2xl
//             mx-auto
//             text-sm
//             sm:text-base
//             px-2
//             "
//           >
//             I’m always open to discussing new
//             opportunities, collaborations and
//             interesting projects.
//           </p>

//         </div>

//         {/* Contact cards */}

//         <div
//           className="
//           grid
//           grid-cols-1
//           sm:grid-cols-2
//           lg:grid-cols-4
//           gap-5
//           mb-10
//           sm:mb-14
//           "
//         >

//           {/* Email */}

//           <a
//             href={`mailto:${portfolioData.email}`}
//             className="
//             p-6
//             rounded-3xl
//             bg-white/5
//             border border-white/10
//             hover:-translate-y-2
//             transition-all
//             duration-500
//             min-h-[170px]
//             flex flex-col
//             "
//           >
//             <Mail className="mb-4"/>

//             <h3 className="font-bold mb-2">
//               Email
//             </h3>

//             <p className="text-gray-400 text-sm break-all">
//               {portfolioData.email}
//             </p>

//           </a>

//           {/* Phone */}

//           <a
//             href={`tel:${portfolioData.phone}`}
//             className="
//             p-6
//             rounded-3xl
//             bg-white/5
//             border border-white/10
//             hover:-translate-y-2
//             transition-all
//             duration-500
//             min-h-[170px]
//             flex flex-col
//             "
//           >
//             <Phone className="mb-4"/>

//             <h3 className="font-bold mb-2">
//               Phone
//             </h3>

//             <p className="text-gray-400 break-words">
//               {portfolioData.phone}
//             </p>

//           </a>

//           {/* Github */}

//           <a
//             href={portfolioData.socialLinks.github}
//             target="_blank"
//             className="
//             p-6
//             rounded-3xl
//             bg-white/5
//             border border-white/10
//             hover:-translate-y-2
//             transition-all
//             duration-500
//             min-h-[170px]
//             flex flex-col
//             "
//           >
//             <GrGithub
//               className="mb-4"
//               size={20}
//             />

//             <h3 className="font-bold mb-2">
//               GitHub
//             </h3>

//             <p className="text-gray-400">
//               View Projects
//             </p>

//           </a>

//           {/* Linkedin */}

//           <a
//             href={portfolioData.socialLinks.linkedin}
//             target="_blank"
//             className="
//             p-6
//             rounded-3xl
//             bg-white/5
//             border border-white/10
//             hover:-translate-y-2
//             transition-all
//             duration-500
//             min-h-[170px]
//             flex flex-col
//             "
//           >
//             <Link className="mb-4"/>

//             <h3 className="font-bold mb-2">
//               LinkedIn
//             </h3>

//             <p className="text-gray-400">
//               Let's Connect
//             </p>

//           </a>

//         </div>

//         {/* Bottom section */}

//         <div
//           className="
//           grid
//           grid-cols-1
//           lg:grid-cols-2
//           gap-6
//           lg:gap-10
//           "
//         >

//           {/* LEFT */}

//           <div
//             className="
//             bg-white/5
//             border border-white/10
//             backdrop-blur-xl
//             rounded-[30px]
//             p-6
//             sm:p-8
//             "
//           >

//             <h3 className="text-2xl font-bold mb-5">
//               Let's Build Something Together
//             </h3>

//             <p className="text-gray-400 leading-8 text-sm sm:text-base">
//               I'm always interested in discussing
//               new ideas, Job opportunities,
//               and exciting projects.

//               <br /><br />

//               Feel free to connect anytime.
//             </p>

//             <div className="mt-8 space-y-5">

//               <div>
//                 <p className="text-gray-500">
//                   Email
//                 </p>

//                 <p className="font-medium break-all">
//                   {portfolioData.email}
//                 </p>
//               </div>

//               <div>
//                 <p className="text-gray-500">
//                   Location
//                 </p>

//                 <p className="font-medium">
//                   Junagadh, Gujarat, India
//                 </p>
//               </div>

//             </div>

//           </div>

//           {/* RIGHT */}

//           <div
//             className="
//             bg-white/5
//             border border-white/10
//             backdrop-blur-xl
//             rounded-[30px]
//             p-6
//             sm:p-8
//             "
//           >

//             <form className="space-y-5">

//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 className="
//                 w-full
//                 p-4
//                 rounded-xl
//                 bg-white/5
//                 border border-white/10
//                 outline-none
//                 focus:border-purple-500
//                 "
//               />

//               <input
//                 type="email"
//                 placeholder="Your Email"
//                 className="
//                 w-full
//                 p-4
//                 rounded-xl
//                 bg-white/5
//                 border border-white/10
//                 outline-none
//                 focus:border-purple-500
//                 "
//               />

//               <textarea
//                 rows={5}
//                 placeholder="Your Message"
//                 className="
//                 w-full
//                 p-4
//                 rounded-xl
//                 bg-white/5
//                 border border-white/10
//                 outline-none
//                 resize-none
//                 focus:border-purple-500
//                 "
//               />

//               <button
//                 className="
//                 w-full
//                 py-4
//                 rounded-xl
//                 bg-purple-600
//                 hover:bg-purple-700
//                 transition-all
//                 duration-300
//                 font-semibold
//                 "
//               >
//                 Send Message
//               </button>

//             </form>

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }







// // import { portfolioData } from "@/lib/data";
// // import { Mail, Phone, Link } from "lucide-react";
// // import { GrGithub } from "react-icons/gr";

// // export default function Contact() {

// // return(

// // <section
// // id="contact"
// // className="portfolio-bg py-10 px-6"
// // >
// // <div className="grid-pattern"></div>
// // <div className="max-w-7xl mx-auto">

// // {/* Heading */}

// // <div className="text-center mb-16">

// //  <p className="text-purple-400 mb-2 font-medium tracking-wider uppercase text-sm">
// // Get In Touch
// // </p>

// // <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
// // Contact Me
// // </h2>

// // <p
// // className="
// // text-gray-400
// // mt-4
// // max-w-2xl
// // mx-auto
// // "
// // >

// // I’m always open to discussing new
// // opportunities, collaborations and
// // interesting projects.

// // </p>

// // </div>


// // {/* Contact cards */}

// // <div
// // className="
// // grid
// // sm:grid-cols-2
// // lg:grid-cols-4
// // gap-6
// // mb-14
// // "
// // >

// // {/* Email */}

// // <a
// // href={`mailto:${portfolioData.email}`}
// // className="
// // p-6
// // rounded-3xl
// // bg-white/5
// // border
// // border-white/10
// // hover:-translate-y-2
// // transition-all
// // duration-500
// // "
// // >

// // <Mail className="mb-4"/>

// // <h3 className="font-bold mb-2">

// // Email

// // </h3>

// // <p className="text-gray-400 text-sm">

// // {portfolioData.email}

// // </p>

// // </a>



// // {/* Phone */}

// // <a
// // href={`tel:${portfolioData.phone}`}
// // className="
// // p-6
// // rounded-3xl
// // bg-white/5
// // border
// // border-white/10
// // hover:-translate-y-2
// // transition-all
// // duration-500
// // "
// // >

// // <Phone className="mb-4"/>

// // <h3 className="font-bold mb-2">

// // Phone

// // </h3>

// // <p className="text-gray-400">

// // {portfolioData.phone}

// // </p>

// // </a>



// // {/* Github */}

// // <a
// // href={portfolioData.socialLinks.github}
// // target="_blank"
// // className="
// // p-6
// // rounded-3xl
// // bg-white/5
// // border
// // border-white/10
// // hover:-translate-y-2
// // transition-all
// // duration-500
// // "
// // >

// // <GrGithub
// // className="mb-4"
// // size={20}
// // />

// // <h3 className="font-bold mb-2">

// // GitHub

// // </h3>

// // <p className="text-gray-400">

// // View Projects

// // </p>

// // </a>



// // {/* Linkedin */}

// // <a
// // href={portfolioData.socialLinks.linkedin}
// // target="_blank"
// // className="
// // p-6
// // rounded-3xl
// // bg-white/5
// // border
// // border-white/10
// // hover:-translate-y-2
// // transition-all
// // duration-500
// // "
// // >

// // <Link className="mb-4"/>

// // <h3 className="font-bold mb-2">

// // LinkedIn

// // </h3>

// // <p className="text-gray-400">

// // Let's Connect

// // </p>

// // </a>

// // </div>



// // {/* Contact section */}

// // <div
// // className="
// // grid
// // lg:grid-cols-2
// // gap-10
// // "
// // >

// // {/* Left */}

// // <div
// // className="
// // bg-white/5
// // border
// // border-white/10
// // backdrop-blur-xl
// // rounded-[30px]
// // p-8
// // "
// // >

// // <h3
// // className="
// // text-2xl
// // font-bold
// // mb-5
// // "
// // >

// // Let's Build Something Together

// // </h3>

// // <p
// // className="
// // text-gray-400
// // leading-8
// // "
// // >

// // I'm always interested in discussing
// // new ideas, Job opportunities,
// // and exciting projects.

// // Feel free to connect anytime.

// // </p>


// // <div className="mt-8 space-y-5">

// // <div>

// // <p className="text-gray-500">

// // Email

// // </p>

// // <p className="font-medium">

// // {portfolioData.email}

// // </p>

// // </div>


// // <div>

// // <p className="text-gray-500">

// // Location

// // </p>

// // <p className="font-medium">

// // Junagadh, Gujarat, India

// // </p>

// // </div>

// // </div>

// // </div>



// // {/* Right */}

// // <div
// // className="
// // bg-white/5
// // border
// // border-white/10
// // backdrop-blur-xl
// // rounded-[30px]
// // p-8
// // "
// // >

// // <form className="space-y-5">

// // <input
// // type="text"
// // placeholder="Your Name"
// // className="
// // w-full
// // p-4
// // rounded-xl
// // bg-white/5
// // border
// // border-white/10
// // outline-none
// // focus:border-purple-500
// // "
// // />


// // <input
// // type="email"
// // placeholder="Your Email"
// // className="
// // w-full
// // p-4
// // rounded-xl
// // bg-white/5
// // border
// // border-white/10
// // outline-none
// // focus:border-purple-500
// // "
// // />


// // <textarea
// // rows={5}
// // placeholder="Your Message"
// // className="
// // w-full
// // p-4
// // rounded-xl
// // bg-white/5
// // border
// // border-white/10
// // outline-none
// // resize-none
// // focus:border-purple-500
// // "
// // />


// // <button
// // className="
// // w-full
// // py-4
// // rounded-xl
// // bg-purple-600
// // hover:bg-purple-700
// // transition-all
// // duration-300
// // font-semibold
// // "
// // >

// // Send Message

// // </button>

// // </form>

// // </div>

// // </div>

// // </div>

// // </section>

// // )

// // }



