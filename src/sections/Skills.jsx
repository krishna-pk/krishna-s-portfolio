import React from "react";
import GooeyNav from "../components/GooeyNav";
import navLinks from "../constants/navItems";

const skillGroups = [
  {
    number: "01",
    title: "Programming Languages",
    description: "Languages I use to solve problems and build applications.",
    skills: [
      { name: "Java", detail: "OOP, Collections, Multithreading" },
      { name: "Python", detail: "Data processing, ML workflows" },
      { name: "JavaScript", detail: "ES6+, DOM, async programming" },
      { name: "SQL", detail: "Queries, joins, database design" },
      { name: "C", detail: "Pointers,Memory management" },
    ],
  },
  {
    number: "02",
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    skills: [
      { name: "React", detail: "Components, props, hooks" },
      { name: "HTML & CSS", detail: "Semantic markup, layouts" },
      { name: "Tailwind CSS", detail: "Responsive utility-first styling" },
      { name: "GSAP", detail: "Motion and scroll animations" },
    ],
  },
  {
    number: "03",
    title: "Backend & Databases",
    description: "Working with application logic, APIs, and persistent data.",
    skills: [
      { name: "Spring Boot", detail: "Java backend development" },
      { name: "MySQL", detail: "Relational database management" },
      { name: "MongoDB", detail: "Document-oriented databases" },
    ],
  },
  {
    number: "04",
    title: "Machine Learning & Data",
    description: "Exploring data-driven solutions and predictive models.",
    skills: [
      { name: "Scikit-learn", detail: "Model training and evaluation" },
      { name: "Pandas", detail: "Data manipulation and analysis" },
      { name: "NumPy", detail: "Numerical computing" },
      { name: "Matplotlib", detail: "Data visualization" },
      { name: "TensorFlow", detail: "Neural network experiments" },
    ],
  },
  {
    number: "05",
    title: "Tools & Workflow",
    description: "Tools I use during development and testing.",
    skills: [
      {
        name: "Anaconda",
        detail: "Python environments and package management",
      },
      { name: "VS Code", detail: "Development environment" },
      { name: "Eclipse", detail: "Java development" },
      { name: "Postman", detail: "API testing" },
    ],
  },
  {
    number: "06",
    title: "Cloud & DevOps",
    description:
      "Working with cloud platforms, deployment, and development workflows.",
    skills: [
      { name: "AWS", detail: "Core cloud concepts and services" },
      { name: "Git & GitHub", detail: "Version control and collaboration" },
      { name: "Linux", detail: "Command-line and system fundamentals" },
    ],
  },
];

function SkillCard({ group }) {
  return (
    <article className="group relative rounded-xl border border-white/9 bg-[#111116]/80 p-5 transition-colors duration-200 hover:border-violet-400/40 hover:bg-[#15141d] sm:p-6">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-medium tracking-tight text-white">
            {group.title}
          </h3>
          <p className="mt-2 max-w-sm text-sm leading-6 text-zinc-400">
            {group.description}
          </p>
        </div>

        <span className="shrink-0 font-mono text-xs text-violet-300/70">
          {group.number}
        </span>
      </div>

      <div className="space-y-0">
        {group.skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-start justify-between gap-4 border-t border-white/[0.07] py-3"
          >
            <span className="text-sm font-medium text-zinc-200 transition-colors group-hover:text-white">
              {skill.name}
            </span>

            <span className="max-w-[58%] text-right text-xs leading-5 text-zinc-500">
              {skill.detail}
            </span>
          </div>
        ))}
      </div>
    </article>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative text-white "
    >
      <div className="mt-5 mb-5 flex items-center justify-center">
        <div className="w-2xl h-20 mt-5 bg-white/10  border-white/20 rounded-md flex items-center mx-6 ">
          <GooeyNav
            items={navLinks}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-24 -z-10 h-64 w-[min(700px,90vw)] -translate-x-1/2 rounded-full bg-violet-500/6 blur-3xl"
      />

      <div className="mx-auto max-w-6xl">
  
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <SkillCard key={group.number} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}
