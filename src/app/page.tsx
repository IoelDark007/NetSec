"use client"
import ProjectCard from "./components/ProjectCard";
import ServiceCard from "./components/ServiceCard";
import TeamCard from "./components/TeamCard";

import { projects } from "@/constants/projects";
import { services } from "@/constants/services";
import { team } from "@/constants/team";

import MotionWrapper from "./components/MotionWrapper";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function HomePage() {
  // Add these states
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  // EmailJS IDs
  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
  const TEMPLATE_ID_OWNER = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_OWNER as string;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

  // Handle form submission
  const handleSendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setError("");
    setSent(false);

    const form = formRef.current;
    if (!form) return;

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID_OWNER, form, PUBLIC_KEY);
      setSent(true);
      form.reset();
    } catch {
      setError("Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="pt-2 text-body overflow-x-hidden">

      {/* Home Section */}
      <section id="home" className="relative min-h-screen flex flex-col justify-center bg-violet-950 bg-gradient-to-b from-violet-950 to-violet-900 items-center text-center px-6 py-16">
        <div className="absolute insert-0 bg-[url('/images/background1.jpg')] min-h-screen bg-center bg-no-repeat min-w-screen bg-cover opacity-20 pointer-events-none z-0" aria-hidden='true'>
        </div>
        <div className="relative z-10 flex flex-col justify-center items-center">
        <MotionWrapper>
        <h1>
          <span className="text-2sm md:text-4sm font-extralight text-white">Hi, We are NetSec</span>
        </h1>
        </MotionWrapper>
        <MotionWrapper delay={0.2} duration={0.8} yOffset={30}>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Building <span className="text-highlight text-sky-400">Innovative</span> <br />
          Digital Solutions
        </h1>
        </MotionWrapper>
        <MotionWrapper delay={0.4} duration={0.8} yOffset={30}>
        <p className="text-lg md:text-xl max-w-2xl text-gray-300 mb-8">
          Driven by innovation, we craft secure web, mobile, and desktop solutions that help startups move fast and scale smart—plus expert training to keep your team sharp.
        </p>
        </MotionWrapper>
        <MotionWrapper delay={0.6} duration={0.8} yOffset={30}>
        <div className="flex gap-4">
          <a
            href="#contact"
            className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="border border-accent text-white px-6 py-3 rounded-lg hover:bg-accent hover:text-purple-600 transition"
          >
            View Portfolio
          </a>
        </div>
        </MotionWrapper>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative min-h-screen flex flex-col justify-center bg-violet-950 bg-gradient-to-b from-violet-900 to-violet-950 items-center text-center px-6 py-16">
        <div className="absolute insert-0 bg-[url('/images/background2.jpg')] min-h-screen bg-center bg-no-repeat min-w-screen bg-cover opacity-20 pointer-events-none z-0" aria-hidden='true'>
        </div>
        <div className="relative z-10 flex flex-col justify-center items-center">
        <MotionWrapper>
        <h2 className="text-3xl font-semibold text-white mb-4">Our Featured Projects</h2>
        </MotionWrapper>
        <MotionWrapper delay={0.2} duration={0.8} yOffset={30}>
        <p className="max-w-2xl mx-auto text-gray-200 mb-10">
          A curated selection of our recent work across various disciplines, showcasing our approach to problem-solving and design thinking.
        </p>
        </MotionWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              tags={project.tags}
            />
          ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative min-h-screen flex flex-col justify-center bg-violet-950 bg-gradient-to-b from-violet-950 to-violet-900 items-center text-center px-6 py-16">
        <div className="absolute insert-0 bg-[url('/images/projects_background.jpg')] min-h-screen bg-center bg-no-repeat min-w-screen bg-cover opacity-10 pointer-events-none z-0" aria-hidden='true'>
        </div>
        <div className="relative z-10 flex flex-col justify-center items-center">
          <MotionWrapper>
        <h2 className="text-3xl font-semibold text-white mb-4">Our Services</h2>
          </MotionWrapper>
        <MotionWrapper delay={0.2} duration={0.8} yOffset={30}>
        <p className="max-w-2xl mx-auto text-gray-200 mb-10">
          We offer a range of services to help businesses and individuals create meaningful digital experiences.
        </p>
        </MotionWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="relative min-h-screen flex flex-col justify-center bg-violet-950 bg-gradient-to-b from-violet-900 to-violet-950 items-center text-center px-6 py-16">
        <div className="relative z-10 flex flex-col justify-center items-center">
          <MotionWrapper>
        <h2 className="text-3xl font-semibold text-white mb-4">Meet Our Team</h2>
        </MotionWrapper>
        <MotionWrapper delay={0.2} duration={0.8} yOffset={30}>
        <p className="max-w-2xl mx-auto text-gray-200 mb-10">
          We’re a small but mighty team of creative developers, designers, and problem-solvers passionate about turning ideas into innovative digital experiences.
        </p>
        </MotionWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 max-w-7xl mx-auto pointer-cursor-default">
          {team.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              role={member.role}
              description={member.description}
              avatarUrl={member.avatarUrl}
              githubUrl={member.githubUrl}
            />
          ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative min-h-auto flex flex-col justify-center bg-violet-950 items-center text-center px-6 py-16">
        <div className="absolute insert-0 bg-[url('/images/contact_background.jpg')] min-h-screen bg-center bg-no-repeat min-w-screen bg-cover opacity-20 pointer-events-none z-0" aria-hidden='true'>
        </div>
        <div className="relative z-10 flex flex-col justify-center items-center">
          <MotionWrapper>
        <h2 className="text-3xl font-semibold text-white mb-4">Let’s Discuss Your Project</h2>
         </MotionWrapper>
        <MotionWrapper delay={0.2} duration={0.8} yOffset={30}>
        <p className="max-w-2xl mx-auto text-gray-200 mb-10">
          Ready to take your idea to the next level? Let’s talk and discover the best way to make it happen.
        </p>
        </MotionWrapper>
        <MotionWrapper delay={0.4} duration={0.8} yOffset={30}>
        <form
          ref={formRef}
          className="max-w-xl mx-auto px-6 space-y-4"
          onSubmit={handleSendEmail}
        >
          <input
            type="text"
            name="user_name"
            placeholder="Enter Your Name"
            className="w-full bg-transparent border border-accent text-white rounded-md px-4 py-3 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Enter Your E-mail"
            className="w-full bg-transparent border border-accent text-white rounded-md px-4 py-3 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
          <textarea
            name="message"
            placeholder="Type your Message"
            rows={5}
            className="w-full bg-transparent border border-accent text-white rounded-md px-4 py-3 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
          <button
            type="submit"
            className="bg-accent text-white px-6 py-3 rounded-md hover:bg-purple-600 transition cursor-pointer"
            disabled={sending}
          >
            {sending ? "Sending..." : "Send Message"}
          </button>
          {sent && <p className="text-green-400 mt-2">Message sent! Check your email for confirmation.</p>}
          {error && <p className="text-red-400 mt-2">{error}</p>}
        </form>
        </MotionWrapper>
        </div>
      </section>
      
    </div>
  );
}
