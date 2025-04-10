import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ExperienceBlock() {
  return (
    <div>
      <div className="bg-secondary">
        <div className="page-container">
          <div id="Experience" className="bg-secondary py-16">
            <h1 className="text-white text-6xl -ml-0.5">Experience</h1>
          </div>
        </div>
      </div>
      <div className="page-container py-10">
        <div className="pb-10">
          <div className="lg:wrap lg:flex justify-center">
            <div>
              <div className="flex">
                <Image
                  className="max-h-20 w-[unset] pr-3"
                  src={"https://images.ctfassets.net/x78hfqipfhdb/7mubX3UsoU2NljGjE5bTgk/381ad88fb9067382b30817eefcaf4c53/scorado_logo.jpg?w=256&q=75"}
                  alt="Scorado Logo"
                  height={200}
                  width={200}
                />
                <div>
                  <Link
                    href="https://www.linkedin.com/company/scorado/"
                    target="_blank"
                    className="text-2xl font-bold hover:opacity-70"
                  >
                    Scorado
                  </Link>
                </div>
              </div>
              <div className=" py-3 lg:text-xl [&>h1]:pb-1 [&>h1]:pt-4 [&>h1]:text-xl [&>h1]:font-bold">
                <h1 className="text-xl ">Front-End Developer</h1>
                <p>
                  Scorado is a competitive events management platform bringing
                  innovative tools and services to event organizers,
                  communities, participants and fans across all disciplines and
                  ability levels. Our passion for competition is what drives us
                  on our mission - making competitive events more accessible to
                  everyone.
                </p>
                <h1>My Role at Scorado</h1>
                <ul className="list-disc pl-6 [&>li]:list-disc [&>li]:pb-1">
                  <li>
                    Developed a Next.js front end from Figma designs with a
                    focus on maintainability, ease in case of future refactors,
                    and ensuring long-term stability. Simultaneously,
                    implemented isolated UI component tests using React Cosmos.
                  </li>
                  <li>
                    Building a company blog site using Hugo, Tailwind, CI/CD
                    pipeline deploying via GitHub actions to GitHub pages.
                  </li>
                  <li>
                    Collaborated closely with the back-end team to integrate
                    front-end components with APIs.
                  </li>
                </ul>
              </div>
              <div>
                <h1 className="text-2xl font-bold hover:opacity-70">
                  Technical Stack / Software
                </h1>
                <p className="text-lg xl:text-xl">
                  Next.js, TypeScript, SCSS, React Cosmos, Tailwind, Figma
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-10">
          <div className="lg:wrap lg:flex justify-center">
            <div>
              <div className="flex">
                <Image
                  className="max-h-20 w-[unset] pr-3"
                  src={"https://images.ctfassets.net/x78hfqipfhdb/4oCrQl8x361mByluey6OP0/3097603429d13809585923088cc4d6b3/the_unloved_logo.jpg?w=256&q=75"}
                  alt="the unloved logo"
                  height={200}
                  width={200}
                />
                <div>
                  <Link
                    href="https://linkedin.com/company/theunloved"
                    target="_blank"
                    className="text-2xl font-bold hover:opacity-70"
                  >
                    the unloved
                  </Link>
                </div>
              </div>
              <div className=" py-3 lg:text-xl [&>h1]:pb-1 [&>h1]:pt-4 [&>h1]:text-xl [&>h1]:font-bold">
                <h1 className="text-xl ">Front-End Developer</h1>
                <p>
                  An independent creative studio in the heart of Leicester
                  specialising in brand, digital and motion.
                </p>
                <h1>My Role at the unloved:</h1>
                <ul className="list-disc pl-6 [&>li]:list-disc [&>li]:pb-1">
                  <li>
                    Development of websites using Vue.js, leveraging WordPress
                    Rest Integration to retrieve data from Advanced Custom
                    Fields (ACF). Translating designs from Figma on a tight
                    timeline and accurately.
                  </li>
                  <li>
                    Optimised our approach to email template creation, resulting
                    in significant time savings and making it much easier to
                    create. Also responsible for ensuring emails are sent out,
                    accurately, on time via Mailchimp.
                  </li>
                  <li>
                    Conducted monthly maintenance activities across multiple
                    sites, monitoring uptime, performing database backups, and
                    SSH into VPS to execute package and security updates,
                    including WordPress plugins.
                  </li>
                </ul>
              </div>
              <div>
                <h1 className="text-2xl font-bold hover:opacity-70">
                  Technical Stack / Software
                </h1>
                <p className="text-lg xl:text-xl">
                  Vue, Next.js, TypeScript, Tailwind, SCSS, Figma, Digital
                  Ocean, AWS S3, React Native, Docker
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-10">
          <div className="lg:wrap lg:flex justify-center">
            <div>
              <div className="flex">
                <Image
                  className="max-h-20 w-[unset] pr-3"
                  src={"https://images.ctfassets.net/x78hfqipfhdb/3zqChGO2Xcc2c099Q16C5U/9a3a7e959ad1f552303f3999e1fc617e/PMF-logo-green.png?w=1080&q=75"}
                  alt="PassMeFast Logo"
                  height={200}
                  width={200}
                />
                <div>
                  <Link
                    href="https://www.linkedin.com/company/passmefast"
                    target="_blank"
                    className="text-2xl font-bold hover:opacity-70"
                  >
                    PassMeFast
                  </Link>
                </div>
              </div>
              <div className=" py-3 lg:text-xl [&>h1]:pb-1 [&>h1]:pt-4 [&>h1]:text-xl [&>h1]:font-bold">
                <h1 className="text-xl ">Front-End Developer</h1>
                <p>
                  Rebuild existing Front-End systems within a modern technology
                  stack as well as make improvements to a bespoke CMS.
                  Continuously adding and adjusting components based on results
                  from A/B testing to increase conversion.
                </p>
                <h1>My Role at PassMeFast</h1>
                <ul className="list-disc pl-6 [&>li]:list-disc [&>li]:pb-1">
                  <li>
                    Developed front-end components from Figma designs,
                    collaborating closely with a UI/UX Designer. Translating
                    existing projects from Laravel to Next.js.
                  </li>
                  <li>
                    Implemented features that enhanced customer conversion
                    rates, based on A/B testing. Improved the internal CMS by
                    automating manual tasks, supporting the content team.
                  </li>
                  <li>
                    Regularly communicated across teams, providing demos,
                    knowledge sharing, and system support.
                  </li>
                </ul>
              </div>
              <div>
                <h1 className="text-2xl font-bold hover:opacity-70">
                  Technical Stack / Software
                </h1>
                <p className="text-lg xl:text-xl">
                  Laravel, Next.js, Vite.js, Tailwind, SCSS, Sanity CMS
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-10">
          <div className="lg:wrap lg:flex justify-center">
            <div>
              <div className="flex">
                <Image
                  className="max-h-20 w-[unset] pr-3"
                  src={"https://images.ctfassets.net/x78hfqipfhdb/1eWWNw2mjDWeHp3bxZMPLk/87686c1cedbf11f2c76a6bebde37d701/mmtdigital.png?w=256&q=75"}
                  alt="MMT Logo"
                  height={200}
                  width={200}
                />
                <div>
                  <Link
                    href="https://www.linkedin.com/company/mmt-digital"
                    target="_blank"
                    className="text-2xl font-bold hover:opacity-70"
                  >
                    MMT Digital
                  </Link>
                </div>
              </div>
              <div className=" py-3 lg:text-xl [&>h1]:pb-1 [&>h1]:pt-4 [&>h1]:text-xl [&>h1]:font-bold">
                <h1 className="text-xl ">Front-End Developer</h1>
                <p>
                  Developed with React, HTML, CSS/SCSS, and JavaScript to build
                  and maintain websites for over 12 different clients.
                  Communicated with stakeholders and client teams on a weekly
                  basis. Performed deployments, CMS changes and monitoring
                  reports.
                </p>
                <h1>My Role at MMT Digital:</h1>
                <ul className="list-disc pl-6 [&>li]:list-disc [&>li]:pb-1">
                  <li>
                    Troubleshoot and resolve both front-end and back-end bugs
                    under tight deadlines. Built accessible, mobile-friendly
                    pages, forms, and components with React.
                  </li>
                  <li>
                    Worked with RESTful APIs and CMS platforms like Kentico and
                    Kontent.
                  </li>
                  <li>
                    Participated and occasionally led weekly meetings with
                    stakeholders and around 12 different clients.
                  </li>
                  <li>
                    Performed critical incident management and provided
                    monitoring reports for clients.
                  </li>
                </ul>
              </div>
              <div>
                <h1 className="text-2xl font-bold hover:opacity-70">
                  Technical Stack / Software
                </h1>
                <p className="text-lg xl:text-xl">
                  React (Gatsby), SCSS, Kentico & Kentico Kontent CMS, Azure,
                  GitHub
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
