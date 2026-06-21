import { portfolioData } from "@/lib/data";
import { Mail, Phone, Link } from "lucide-react";
import { GrGithub } from "react-icons/gr";

export default function Contact() {
  return (
    <section
      id="contact"
      className="portfolio-bg py-16 sm:py-20 px-4 sm:px-6 overflow-hidden"
    >
      <div className="grid-pattern"></div>

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-12 sm:mb-16">

          <p className="text-purple-400 mb-2 font-medium tracking-wider uppercase text-sm">
            Get In Touch
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Contact Me
          </h2>

          <p
            className="
            text-gray-400
            mt-4
            max-w-2xl
            mx-auto
            text-sm
            sm:text-base
            px-2
            "
          >
            I’m always open to discussing new
            opportunities, collaborations and
            interesting projects.
          </p>

        </div>

        {/* Contact cards */}

        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-5
          mb-10
          sm:mb-14
          "
        >

          {/* Email */}

          <a
            href={`mailto:${portfolioData.email}`}
            className="
            p-6
            rounded-3xl
            bg-white/5
            border border-white/10
            hover:-translate-y-2
            transition-all
            duration-500
            min-h-[170px]
            flex flex-col
            "
          >
            <Mail className="mb-4"/>

            <h3 className="font-bold mb-2">
              Email
            </h3>

            <p className="text-gray-400 text-sm break-all">
              {portfolioData.email}
            </p>

          </a>

          {/* Phone */}

          <a
            href={`tel:${portfolioData.phone}`}
            className="
            p-6
            rounded-3xl
            bg-white/5
            border border-white/10
            hover:-translate-y-2
            transition-all
            duration-500
            min-h-[170px]
            flex flex-col
            "
          >
            <Phone className="mb-4"/>

            <h3 className="font-bold mb-2">
              Phone
            </h3>

            <p className="text-gray-400 break-words">
              {portfolioData.phone}
            </p>

          </a>

          {/* Github */}

          <a
            href={portfolioData.socialLinks.github}
            target="_blank"
            className="
            p-6
            rounded-3xl
            bg-white/5
            border border-white/10
            hover:-translate-y-2
            transition-all
            duration-500
            min-h-[170px]
            flex flex-col
            "
          >
            <GrGithub
              className="mb-4"
              size={20}
            />

            <h3 className="font-bold mb-2">
              GitHub
            </h3>

            <p className="text-gray-400">
              View Projects
            </p>

          </a>

          {/* Linkedin */}

          <a
            href={portfolioData.socialLinks.linkedin}
            target="_blank"
            className="
            p-6
            rounded-3xl
            bg-white/5
            border border-white/10
            hover:-translate-y-2
            transition-all
            duration-500
            min-h-[170px]
            flex flex-col
            "
          >
            <Link className="mb-4"/>

            <h3 className="font-bold mb-2">
              LinkedIn
            </h3>

            <p className="text-gray-400">
              Let's Connect
            </p>

          </a>

        </div>

        {/* Bottom section */}

        <div
          className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-6
          lg:gap-10
          "
        >

          {/* LEFT */}

          <div
            className="
            bg-white/5
            border border-white/10
            backdrop-blur-xl
            rounded-[30px]
            p-6
            sm:p-8
            "
          >

            <h3 className="text-2xl font-bold mb-5">
              Let's Build Something Together
            </h3>

            <p className="text-gray-400 leading-8 text-sm sm:text-base">
              I'm always interested in discussing
              new ideas, Job opportunities,
              and exciting projects.

              <br /><br />

              Feel free to connect anytime.
            </p>

            <div className="mt-8 space-y-5">

              <div>
                <p className="text-gray-500">
                  Email
                </p>

                <p className="font-medium break-all">
                  {portfolioData.email}
                </p>
              </div>

              <div>
                <p className="text-gray-500">
                  Location
                </p>

                <p className="font-medium">
                  Junagadh, Gujarat, India
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div
            className="
            bg-white/5
            border border-white/10
            backdrop-blur-xl
            rounded-[30px]
            p-6
            sm:p-8
            "
          >

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="
                w-full
                p-4
                rounded-xl
                bg-white/5
                border border-white/10
                outline-none
                focus:border-purple-500
                "
              />

              <input
                type="email"
                placeholder="Your Email"
                className="
                w-full
                p-4
                rounded-xl
                bg-white/5
                border border-white/10
                outline-none
                focus:border-purple-500
                "
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                className="
                w-full
                p-4
                rounded-xl
                bg-white/5
                border border-white/10
                outline-none
                resize-none
                focus:border-purple-500
                "
              />

              <button
                className="
                w-full
                py-4
                rounded-xl
                bg-purple-600
                hover:bg-purple-700
                transition-all
                duration-300
                font-semibold
                "
              >
                Send Message
              </button>

            </form>

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

// return(

// <section
// id="contact"
// className="portfolio-bg py-10 px-6"
// >
// <div className="grid-pattern"></div>
// <div className="max-w-7xl mx-auto">

// {/* Heading */}

// <div className="text-center mb-16">

//  <p className="text-purple-400 mb-2 font-medium tracking-wider uppercase text-sm">
// Get In Touch
// </p>

// <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
// Contact Me
// </h2>

// <p
// className="
// text-gray-400
// mt-4
// max-w-2xl
// mx-auto
// "
// >

// I’m always open to discussing new
// opportunities, collaborations and
// interesting projects.

// </p>

// </div>


// {/* Contact cards */}

// <div
// className="
// grid
// sm:grid-cols-2
// lg:grid-cols-4
// gap-6
// mb-14
// "
// >

// {/* Email */}

// <a
// href={`mailto:${portfolioData.email}`}
// className="
// p-6
// rounded-3xl
// bg-white/5
// border
// border-white/10
// hover:-translate-y-2
// transition-all
// duration-500
// "
// >

// <Mail className="mb-4"/>

// <h3 className="font-bold mb-2">

// Email

// </h3>

// <p className="text-gray-400 text-sm">

// {portfolioData.email}

// </p>

// </a>



// {/* Phone */}

// <a
// href={`tel:${portfolioData.phone}`}
// className="
// p-6
// rounded-3xl
// bg-white/5
// border
// border-white/10
// hover:-translate-y-2
// transition-all
// duration-500
// "
// >

// <Phone className="mb-4"/>

// <h3 className="font-bold mb-2">

// Phone

// </h3>

// <p className="text-gray-400">

// {portfolioData.phone}

// </p>

// </a>



// {/* Github */}

// <a
// href={portfolioData.socialLinks.github}
// target="_blank"
// className="
// p-6
// rounded-3xl
// bg-white/5
// border
// border-white/10
// hover:-translate-y-2
// transition-all
// duration-500
// "
// >

// <GrGithub
// className="mb-4"
// size={20}
// />

// <h3 className="font-bold mb-2">

// GitHub

// </h3>

// <p className="text-gray-400">

// View Projects

// </p>

// </a>



// {/* Linkedin */}

// <a
// href={portfolioData.socialLinks.linkedin}
// target="_blank"
// className="
// p-6
// rounded-3xl
// bg-white/5
// border
// border-white/10
// hover:-translate-y-2
// transition-all
// duration-500
// "
// >

// <Link className="mb-4"/>

// <h3 className="font-bold mb-2">

// LinkedIn

// </h3>

// <p className="text-gray-400">

// Let's Connect

// </p>

// </a>

// </div>



// {/* Contact section */}

// <div
// className="
// grid
// lg:grid-cols-2
// gap-10
// "
// >

// {/* Left */}

// <div
// className="
// bg-white/5
// border
// border-white/10
// backdrop-blur-xl
// rounded-[30px]
// p-8
// "
// >

// <h3
// className="
// text-2xl
// font-bold
// mb-5
// "
// >

// Let's Build Something Together

// </h3>

// <p
// className="
// text-gray-400
// leading-8
// "
// >

// I'm always interested in discussing
// new ideas, Job opportunities,
// and exciting projects.

// Feel free to connect anytime.

// </p>


// <div className="mt-8 space-y-5">

// <div>

// <p className="text-gray-500">

// Email

// </p>

// <p className="font-medium">

// {portfolioData.email}

// </p>

// </div>


// <div>

// <p className="text-gray-500">

// Location

// </p>

// <p className="font-medium">

// Junagadh, Gujarat, India

// </p>

// </div>

// </div>

// </div>



// {/* Right */}

// <div
// className="
// bg-white/5
// border
// border-white/10
// backdrop-blur-xl
// rounded-[30px]
// p-8
// "
// >

// <form className="space-y-5">

// <input
// type="text"
// placeholder="Your Name"
// className="
// w-full
// p-4
// rounded-xl
// bg-white/5
// border
// border-white/10
// outline-none
// focus:border-purple-500
// "
// />


// <input
// type="email"
// placeholder="Your Email"
// className="
// w-full
// p-4
// rounded-xl
// bg-white/5
// border
// border-white/10
// outline-none
// focus:border-purple-500
// "
// />


// <textarea
// rows={5}
// placeholder="Your Message"
// className="
// w-full
// p-4
// rounded-xl
// bg-white/5
// border
// border-white/10
// outline-none
// resize-none
// focus:border-purple-500
// "
// />


// <button
// className="
// w-full
// py-4
// rounded-xl
// bg-purple-600
// hover:bg-purple-700
// transition-all
// duration-300
// font-semibold
// "
// >

// Send Message

// </button>

// </form>

// </div>

// </div>

// </div>

// </section>

// )

// }



