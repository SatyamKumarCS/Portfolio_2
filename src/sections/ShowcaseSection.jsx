import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/Project1.png" alt="Wealth" />
            </div>
            <div className="text-content">
              <h2>
                Track, Analyze, Optimize – Redefine Finance with AI Finance Tracker.
              </h2>
              <p className="text-white-50 md:text-xl">
              A sleek, AI-powered finance tracker built with Next.js, TailwindCSS, PostgreSQL, Prisma, and Shadcn UI — 
              delivering a fast, intelligent, and user-friendly experience.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div>
                <img
                  src="/images/project2.png"
                  alt="Schedulrr"
                />
              </div>
              <h2>Schedulrr: Effortless Work Scheduling</h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div>
                <img src="/images/project3.png" alt="SweatLab" />
              </div>
              <h2>SweatLab - A Fitness App</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
