import { useRef, useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ShinyText from "./components/ShinyText/ShinyText";
import BlurText from "./components/BlurText/BlurText";
import ScrambledText from "./components/ScrambledText/ScrambledText";
import SplitText from "./components/SplitText/SplitText";
import Lanyard from "./components/Lanyard/Lanyard";
import GlassIcons from "./components/GlassIcons/GlassIcons";
import { listTools, listProyek, listAchievements } from "./data";
import ChromaGrid from "./components/ChromaGrid/ChromaGrid";
import ProjectModal from "./components/ProjectModal/ProjectModal"; // <-- IMPORT MODAL
import Aurora from "./components/Aurora/Aurora";
import AOS from 'aos';
import ChatRoom from "./components/ChatRoom";
import 'aos/dist/aos.css';
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error in Lanyard:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}

AOS.init();

function App() {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const [selectedProject, setSelectedProject] = useState(null); // null = modal tertutup

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };
  // -------------------------

  useEffect(() => {
    const isReload =
      performance.getEntriesByType("navigation")[0]?.type === "reload";

    if (isReload) {
      // Ambil path tanpa hash
      const baseUrl = window.location.origin + "/";
      window.location.replace(baseUrl);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full -z-10 ">
        <Aurora
          colorStops={["#577870", "#1F97A6", "#127B99"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
          <div className="animate__animated animate__fadeInUp">
            <div className="flex items-center gap-3 mb-6 bg bg-zinc-800 w-fit p-4 rounded-2xl">
              <img src="./assets/saty1.png" className="w-10 rounded-md" />
              <q>Avoid or just undertake it</q>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              <ShinyText text="Hi I'm Satyam Kumar" disabled={false} speed={3} className='custom-class' />
            </h1>
            <BlurText
              text="An aspiring AI/ML Developer passionate about building intelligent, data-driven solutions and crafting high-performance applications through innovative and user-centric approaches."
              delay={150}
              animateBy="words"
              direction="top"
              className=" mb-6"
            />
            <div className="flex items-center sm:gap-4 gap-2">
              <a
                href="https://drive.google.com/file/d/1RlgZ66clGTXilMhhmve4KZIENzw7-7hl/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors"
              >
                <ShinyText text="Download CV" disabled={false} speed={3} className="custom-class" />
              </a>

              <a href="#project" className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors">
                <ShinyText text="Explore My Projects" disabled={false} speed={3} className="custom-class" />
              </a>
            </div>

          </div>
          <div className="md:ml-auto animate__animated animate__fadeInUp">
            <ProfileCard
              name="Satyam Kumar"
              title="AI/ML Developer"
              handle="satyamkumar"
              status="Online"
              contactText="Contact Me"
              avatarUrl="/assets/saty.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => console.log('Contact clicked')}
            />
          </div>
        </div>
        {/* tentang */}
        <div className="mt-15 mx-auto w-full max-w-[1600px] rounded-3xl border-[5px] border-violet-500/40 shadow-[0_0_30px_rgba(168,85,247,0.4)] bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] p-6" id="about">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 pt-0 px-8" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            <div className="basis-full md:basis-7/12 pr-0 md:pr-8 border-b md:border-b-0 md:border-r border-violet-500/30">
              {/* Kolom kiri */}
              <div className="flex-1 text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                  About Me
                </h2>

                <BlurText
                  text="I’m Satyam Kumar, Full Stack, AI/ML Developer with 250+ DSA problems solved and a 1600 contest rating on LeetCode. Experienced in building
scalable backend systems, deploying end-to-end ML pipelines, and implementing DevOps practices for production-ready
applications. Passionate about engineering impactful solutions through efficient system design, and development workflows."
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-base md:text-lg leading-relaxed mb-10 text-gray-300"
                />

                <div className="flex flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left gap-y-8 sm:gap-y-0 mb-4 w-full">
                  <div>
                    <h1 className="text-3xl md:text-4xl mb-1">
                      70<span className="text-violet-500">+</span>
                    </h1>
                    <p>Github Repo's</p>
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-4xl mb-1">
                      1600<span className="text-violet-500">+</span>
                    </h1>
                    <p>LeetCode Contest Rating</p>
                  </div>
                  <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" data-aos-once="true">
                    <h1 className="text-3xl md:text-4xl mb-1">
                      250+<span className="text-violet-500"></span>
                    </h1>
                    <p>Leetcode Problems</p>
                  </div>
                </div>


                <ShinyText
                  text="Working with heart, creating with mind."
                  disabled={false}
                  speed={3}
                  className="text-sm md:text-base text-violet-400"
                />
              </div>
            </div>

            {/* Kolom kanan */}
            <div className="basis-full md:basis-5/12 pl-0 md:pl-8 overflow-hidden max-w-full flex justify-center ">
              <ErrorBoundary>
                <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
              </ErrorBoundary>
            </div>
          </div>

        </div>
        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Tech Stack</h1>
          <p className="w-2/5 text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Full Stack · AI/ML · DevOps — the tools I build with.</p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

            {listTools.map((tool) => (
              <div
                key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true"
                className="flex items-center gap-4 p-4 border border-zinc-700 rounded-xl bg-zinc-900/60 backdrop-blur-md hover:bg-zinc-800/80 hover:border-violet-500/50 transition-all duration-300 group shadow-lg"
              >
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-14 h-14 object-contain bg-zinc-800 p-2 rounded-lg group-hover:bg-zinc-900 transition-all duration-300 flex-shrink-0"
                />
                <div className="flex flex-col overflow-hidden">
                  <div className="truncate">
                    <ShinyText
                      text={tool.nama}
                      disabled={false}
                      speed={3}
                      className="text-lg font-semibold block"
                    />
                  </div>
                  <p className="text-xs text-zinc-400 truncate">{tool.ket}</p>
                  {tool.category && (
                    <span className="mt-1 text-[10px] font-semibold px-2 py-0.5 rounded-full w-fit bg-violet-500/15 text-violet-400 border border-violet-500/30">
                      {tool.category}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* tentang */}

        {/* Proyek */}
        <div className="proyek mt-32 py-10" id="project" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true"></div>
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Project</h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Showcasing a selection of projects that reflect my skills, creativity, and passion for building meaningful digital experiences.</p>
        <div className="proyek-box mt-14" >

          <div style={{ height: 'auto', position: 'relative' }} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true" >
            <ChromaGrid
              items={listProyek}
              onItemClick={handleProjectClick} // Kirim fungsi untuk handle klik
              radius={500}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            />
          </div>
        </div>
        {/* Proyek */}


        {/* ── Experience ───────────────────────────────────────── */}
        <div className="mt-32" id="experience">
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Experience</h1>
          <p className="w-2/5 text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Where I've worked and what I've built.</p>

          <div className="mt-14 relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-violet-500/30 hidden md:block" />

            <div className="flex flex-col gap-8">

              {/* Experience 1 - GoForGold */}
              <div className="flex gap-6 items-start group" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" data-aos-once="true">
                <div className="hidden md:flex flex-col items-center pt-1">
                  <div className="w-3 h-3 rounded-full bg-violet-500 ring-4 ring-violet-500/20 group-hover:ring-violet-500/50 group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.6)] transition-all duration-300 z-10" />
                </div>
                <div className="flex-1 border border-zinc-700 rounded-xl bg-zinc-900/60 backdrop-blur-md group-hover:border-violet-500/50 group-hover:-translate-y-1 group-hover:shadow-[0_8px_30px_rgba(139,92,246,0.15)] transition-all duration-300 p-6 shadow-lg">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <ShinyText text="Technical Lead" disabled={false} speed={3} className="text-xl font-bold block" />
                      <p className="text-violet-400 font-semibold text-sm mt-0.5">GoForGold · Full-time · Remote</p>
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-violet-500/15 text-violet-400 border border-violet-500/30 w-fit">Oct 2025 – Present · 7 mos</span>
                  </div>
                  <ul className="text-zinc-300 text-sm leading-relaxed list-disc list-inside space-y-1">
                    <li>Architected and deployed the official website for India's premier ICPC Winter Camp using Next.js (frontend) and Node.js + Express.js (backend), hosted on AWS.</li>
                    <li>Optimised platform performance for scale, ensuring reliability during peak traffic from 200+ national participants.</li>
                    <li>Led cross-functional technical coordination, delivering the product on schedule by managing tasks across multiple teams.</li>
                    <li>Implemented CI/CD workflows and server-side optimisations using AWS, Nginx, and Docker for production reliability.</li>
                  </ul>
                </div>
              </div>

              {/* Experience 2 - Countrees AI */}
              <div className="flex gap-6 items-start group" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" data-aos-once="true">
                <div className="hidden md:flex flex-col items-center pt-1">
                  <div className="w-3 h-3 rounded-full bg-violet-500 ring-4 ring-violet-500/20 group-hover:ring-violet-500/50 group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.6)] transition-all duration-300 z-10" />
                </div>
                <div className="flex-1 border border-zinc-700 rounded-xl bg-zinc-900/60 backdrop-blur-md group-hover:border-violet-500/50 group-hover:-translate-y-1 group-hover:shadow-[0_8px_30px_rgba(139,92,246,0.15)] transition-all duration-300 p-6 shadow-lg">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <ShinyText text="SDE Intern" disabled={false} speed={3} className="text-xl font-bold block" />
                      <p className="text-violet-400 font-semibold text-sm mt-0.5">Countrees AI Technologies Pvt. Ltd. · Internship · Remote</p>
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-violet-500/15 text-violet-400 border border-violet-500/30 w-fit">May 2025 – Jul 2025 · 3 mos</span>
                  </div>
                  <ul className="text-zinc-300 text-sm leading-relaxed list-disc list-inside space-y-1">
                    <li>Engineered the end-to-end Inventory Management module for a production-grade ERP system using React.js, Node.js, Express.js, and PostgreSQL — serving 500+ inventory records.</li>
                    <li>Built 10+ scalable REST APIs and secure authentication workflows, improving client–server communication efficiency by 30%.</li>
                    <li>Optimised 5+ API endpoints, reducing average response time by 25% through query tuning and caching strategies.</li>
                    <li>Collaborated in an Agile team of 6 engineers using Git, GitHub, and iterative sprint-based delivery.</li>
                  </ul>
                </div>
              </div>

              {/* Experience 3 - Hacktoberfest */}
              <div className="flex gap-6 items-start group" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
                <div className="hidden md:flex flex-col items-center pt-1">
                  <div className="w-3 h-3 rounded-full bg-violet-500/60 ring-4 ring-violet-500/10 group-hover:ring-violet-500/40 group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.6)] transition-all duration-300 z-10" />
                </div>
                <div className="flex-1 border border-zinc-700 rounded-xl bg-zinc-900/60 backdrop-blur-md group-hover:border-violet-500/50 group-hover:-translate-y-1 group-hover:shadow-[0_8px_30px_rgba(139,92,246,0.15)] transition-all duration-300 p-6 shadow-lg">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <ShinyText text="Hacktoberfest Contributor" disabled={false} speed={3} className="text-xl font-bold block" />
                      <p className="text-violet-400 font-semibold text-sm mt-0.5">Hacktoberfest · Part-time · Remote</p>
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-violet-500/15 text-violet-400 border border-violet-500/30 w-fit">Sep 2024 – Oct 2024 · 2 mos</span>
                  </div>
                  <ul className="text-zinc-300 text-sm leading-relaxed list-disc list-inside space-y-1">
                    <li>Contributed to open-source projects with 2 accepted pull requests, improving real-world codebases on GitHub.</li>
                    <li>Collaborated with global developers through issue tracking, code reviews, and version control workflows.</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
        {/* ── /Experience ──────────────────────────────────────── */}


        {/* ── Achievements ─────────────────────────────────────── */}
        <div className="mt-32" id="achievements">
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Achievements</h1>
          <p className="text-base/loose opacity-50 mb-14" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Milestones, recognitions and competitive highlights.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listAchievements.map((achievement, i) => (
              <div
                key={i}
                className="group relative rounded-[2rem] bg-gradient-to-b from-zinc-800 to-zinc-950 p-[1px] hover:from-violet-500 hover:to-fuchsia-600 transition-all duration-700"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={(i % 3) * 150}
                data-aos-once="true"
              >
                <div className="h-full w-full bg-zinc-950/90 backdrop-blur-3xl rounded-[calc(2rem-1px)] p-8 flex flex-col relative overflow-hidden">
                  {/* Giant transparent icon background */}
                  <div className="absolute -top-4 -right-4 text-[10rem] opacity-[0.02] group-hover:opacity-[0.08] group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500 pointer-events-none select-none">
                    {achievement.icon}
                  </div>

                  {/* Glowing top line effect inside the card */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-violet-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Content */}
                  <div className="relative z-10 mt-auto pt-16">
                    <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-xl mb-6 shadow-inner group-hover:border-violet-500/30 transition-colors duration-500">
                      {achievement.icon}
                    </div>
                    <h3 className="text-xl font-bold text-zinc-100 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-fuchsia-400 transition-all duration-500">
                      {achievement.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {achievement.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* ── /Achievements ─────────────────────────────────────── */}


        {/* Kontak */}
        <div className="kontak mt-32 sm:p-10 p-0" id="contact">
          <h1
            className="text-4xl mb-2 font-bold text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Contact & Chat
          </h1>
          <p
            className="text-base/loose text-center mb-10 opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Get in touch with me or chat in real-time
          </p>

          {/* Container dua kolom */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Chat Room di kiri */}
            <div className="flex-1 bg-zinc-800 p-6 rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true">
              <ChatRoom />
            </div>

            {/* Contact Form di kanan */}
            <div className="flex-1">
              <form
                action="https://formsubmit.co/rissoppa21@gmail.com"
                method="POST"
                className="bg-zinc-800 p-10 w-full rounded-md"
                autoComplete="off"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="500"
                data-aos-once="true"
              >
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold">Full Name</label>
                    <input
                      type="text"
                      name="Name"
                      placeholder="Input Name..."
                      className="border border-zinc-500 p-2 rounded-md"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold">Email</label>
                    <input
                      type="email"
                      name="Email"
                      placeholder="Input Email..."
                      className="border border-zinc-500 p-2 rounded-md"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-semibold">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      cols="45"
                      rows="7"
                      placeholder="Message..."
                      className="border border-zinc-500 p-2 rounded-md"
                      required
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full w-full cursor-pointer border border-gray-700 hover:bg-[#222] transition-colors"
                    >
                      <ShinyText text="Send" disabled={false} speed={3} className="custom-class" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Kontak */}
      </main>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </>
  )
}

export default App
