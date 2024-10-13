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
                    href="#"
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
                  Scorado is a competitive events management platform bringing innovative tools and services to event organizers, communities, participants and fans across all disciplines and ability levels. Our passion for competition is what drives us on our mission - making competitive events more accessible to everyone.
                </p>
                <h1>My Role at Scorado</h1>
                <ul className="list-disc pl-6 [&>li]:list-disc [&>li]:pb-1">
                  <li>
                    Actively engaged in the startup’s collaborative culture, bridging gaps between development and design by leveraging my previous agency and front-end experience to bring a fresh perspective.
                  </li>
                  <li>
                    Took on additional responsibility by developing a blog site for the company from scratch using Hugo and Tailwind.
                  </li>
                  <li>
                    Developed the front end with a focus on long-term, maintainable code, minimising the need for refactoring and ensuring stability over time.
                  </li>
                  <li>
                    Built components using React Cosmos for isolated and rapid testing.
                  </li>
                  <li>
                    Collaborated closely with a back-end developer to seamlessly integrate front-end with APIs.
                  </li>
                </ul>
              </div>
              <div>
                <h1
                  className="text-2xl font-bold hover:opacity-70"
                >
                  Technical Stack / Software
                </h1>
                <p className="text-lg xl:text-xl">Next.js, TypeScript, Figma, Sass, Vercel, Azure, Bitbucket, GitHub, Jira, Docker</p>
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
                    href="#"
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
                  An independent creative studio in the heart of Leicester specialising in brand, digital and motion.
                </p>
                <h1>My Role at the unloved:</h1>
                <ul className="list-disc pl-6 [&>li]:list-disc [&>li]:pb-1">
                  <li>
                    Development of websites using Vue.js, leveraging WordPress Rest Integration to retrieve data from Advanced Custom Fields (ACF)
                  </li>
                  <li>
                    Changed our approach to email template creation, resulting in significant time savings and an enhanced developer experience.
                  </li>
                  <li>
                    Contributed to the enhancement of existing features in a React Native app.
                  </li>
                  <li>
                    Additionally within the discovery process, independently set up a React Native app using Expo, creating a functional prototype with Mapbox. While waiting for the API to be finished, I created and deployed my own to use with dummy content.
                  </li>
                  <li>
                    Conducted monthly maintenance activities across multiple sites, monitoring uptime, performing database backups, and SSH into VPS to execute package and security updates, including WordPress plugins.
                  </li>
                  <li>
                    Initiated the setup of Laravel with Inertia for an upcoming project, utilizing Docker to streamline the development environment.
                  </li>
                  <li>
                    From new designs from the creative side, I developed and built the front-end for an upcoming rebuild.
                  </li>
                </ul>
              </div>
              <div>
                <h1
                  className="text-2xl font-bold hover:opacity-70"
                >
                  Technical Stack / Software
                </h1>
                <p className="text-lg xl:text-xl">Next.js, Vue.js, React Native, Wordpress, Laravel, Tailwind, Figma, Sass</p>
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
                    href="#"
                    target="_blank"
                    className="text-2xl font-bold hover:opacity-70"
                  >PassMeFast</Link>
                </div>
              </div>
              <div className=" py-3 lg:text-xl [&>h1]:pb-1 [&>h1]:pt-4 [&>h1]:text-xl [&>h1]:font-bold">
                <h1 className="text-xl ">Front-End Developer</h1>
                <p>
                  Rebuild existing Front-End systems within a modern technology stack as well as make improvements to a bespoke CMS. Continuously adding and adjusting components based on results from A/B testing to increase conversion.
                </p>
                <h1>My Role at PassMeFast</h1>
                <ul className="list-disc pl-6 [&>li]:list-disc [&>li]:pb-1">
                  <li>
                    Delivered Front-end components based on Figma designs while working closely with a UI/UX Designer.
                  </li>
                  <li>
                    Rebuilding existing projects from Laravel into Next.js independently from scratch.
                  </li>
                  <li>
                    Developed features that provided a solid impact on customer conversion rates increasing revenue.
                  </li>
                  <li>
                    Supported the content team alongside providing improvements to the internal CMS by automating manual tasks.
                  </li>
                  <li>
                    Communicated frequently across all internal teams with demos, knowledge, and support of various systems.
                  </li>
                </ul>
              </div>
              <div>
                <h1
                  className="text-2xl font-bold hover:opacity-70"
                >
                  Technical Stack / Software
                </h1>
                <p className="text-lg xl:text-xl">Next.js, Laravel, Sass, Docker, Jira, Bitbucket</p>
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
                    href="#"
                    target="_blank"
                    className="text-2xl font-bold hover:opacity-70"
                  >MMT Digital</Link>
                </div>
              </div>
              <div className=" py-3 lg:text-xl [&>h1]:pb-1 [&>h1]:pt-4 [&>h1]:text-xl [&>h1]:font-bold">
                <h1 className="text-xl ">Front-End Developer</h1>
                <p>
                  Developed with React, HTML, CSS/SCSS, and JavaScript to build and maintain websites for over 12 different clients. Communicated with stakeholders and client teams on a weekly basis. Performed deployments, CMS changes and monitoring reports.
                </p>
                <h1>My Role at MMT Digital:</h1>
                <ul className="list-disc pl-6 [&>li]:list-disc [&>li]:pb-1">
                  <li>
                    Built new accessible and mobile-friendly pages, forms and components on React.
                  </li>
                  <li>
                    Troubleshooting and resolving both Front-end and Back-end bugs within tight response deadlines.
                  </li>
                  <li>
                    Provided front-end knowledge and assistance within my team which led to an overall increase in the speed and completion of front-end weighted tickets.
                  </li>
                  <li>
                    Developed with RESTful API's and Content Management Systems such as Kentico and Kontent.
                  </li>
                  <li>
                    Slashed developer setup time for projects by rewriting and correcting technical documentation.
                  </li>
                  <li>
                    Troubleshooting and resolving both Front-end and Back-end bugs within tight response deadlines.
                  </li>
                  <li>
                    Performed critical incident management and provided monitoring reports for clients.
                  </li>
                  <li>
                    One of two developers assigned to build a React Gatsby website from scratch for a client with a month turnaround. The client later signed for support and monitoring service.
                  </li>
                </ul>
              </div>
              <div>
                <h1
                  className="text-2xl font-bold hover:opacity-70"
                >
                  Technical Stack / Software
                </h1>
                <p className="text-lg xl:text-xl">React (Vite), Gatsby, Kentico CMS, Kontent CMS, Sass, Jira, Azure, Bitbucket</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
