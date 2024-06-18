import FancyHeader from "./FancyHeader";

const AboutMe = () => {
  return (
    <div className="px-20 pt-20">
      <FancyHeader text="ABOUT ME" />

      <div className="">
        <div className="flex justify-center items-start gap-10">
          <div className="col-span-4">
            <div className="w-80 h-80 bg-gray-100 rounded-md shadow-md"></div>
          </div>
          <div className="w-1/2">
            <div>
              <span className="text-3xl font-semibold">
                I'm <span className="underline ">Mst. Gannatul Maua,</span> a
                <span className="text-pink-500"> Programmer</span>. I work from
                home, finding global jobs online and collaborating with diverse
                teams worldwide.
              </span>
            </div>
            <div className="mt-6">
              <h1 className="text-2xl font-medium text-gray-600">
                My Expertise
              </h1>
              <ul className="flex flex-col gap-1 mt-1">
                <li>
                  <span className="font-medium">Web Development:</span> I
                  specialize in creating dynamic, responsive, and user-friendly
                  websites. From front-end frameworks to back-end systems, I
                  bring ideas to life on the web.
                </li>

                <li>
                  <span className="font-medium">C++:</span> My proficiency in
                  C++ allows me to develop high-performance applications,
                  leveraging the power and efficiency of this robust language.
                </li>

                <li>
                  <span className="font-medium">JavaScript & Node.js:</span>{" "}
                  JavaScript is my go-to language for creating interactive web
                  experiences. With Node.js, I build scalable and efficient
                  server-side applications.
                </li>

                <li>
                  <span className="font-medium">TypeScript:</span> Enhancing
                  JavaScript with TypeScript has been a game-changer for my
                  projects, providing strong typing and improved
                  maintainability.
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <h1 className="text-2xl font-medium text-gray-600">
                What Drives Me
              </h1>
              <p className="mt-1">
                I am driven by a desire to solve complex problems and create
                seamless digital experiences. Each project I undertake is an
                opportunity to push the boundaries of what technology can do.
                Whether it's developing a sleek new website or optimizing an
                existing system, I approach each challenge with enthusiasm and a
                commitment to excellence.
              </p>
            </div>

            <div className="mt-6">
              <h1 className="text-2xl font-medium text-gray-600">
                Continuous Learning
              </h1>
              <p className="mt-1">
                The tech industry is constantly changing, and so am I. I am
                always learning and exploring new technologies, frameworks, and
                methodologies to stay ahead of the curve. This continuous
                learning process ensures that I can offer the most current and
                effective solutions to my clients and projects.
              </p>
            </div>

            <div className="mt-6">
              <h1 className="text-2xl font-medium text-gray-600">
                Let's Connect
              </h1>
              <p className="mt-1">
                I love collaborating with like-minded individuals and teams who
                are as passionate about technology as I am. If you have a
                project in mind or just want to chat about the latest in web
                development, C++, JavaScript, Node.js, or TypeScript, feel free
                to reach out. Let's create something amazing together! Thank you
                for visiting my site, and I look forward to connecting with you!
              </p>
            </div>

            <div className="mt-6">
              <h1 className="text-2xl font-medium text-gray-600">
                Want to meet?
              </h1>
              <p className="mt-1">
                Email: mmcse.cf@gmail.com <br />
                Address: Bamondi, Gangni, Meherpur
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
