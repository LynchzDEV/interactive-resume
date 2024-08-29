'use client';
import { BackgroundBeams } from '@/components/ui/aceternity/background-beams';
import { CompareDemo } from '@/pages/Compare.tsx';

const spliter = (text: string) => {
  return text.split(', ').map((word, index) => (
    <div
      key={index}
      className=" bg-slate-400 py-1 px-2 rounded-full w-fit text-nowrap"
    >
      {word}
    </div>
  ));
};

export function BackgroundBeamsDemo() {
  return (
    <div className="h-full w-full bg-[#18181B] relative flex flex-col items-center justify-center antialiased">
      <div className="flex text-white text-4xl relative flex-col sm:flex-row text-center">
        <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
          <span className="font-bold "> Full-stack wizard,</span>
        </div>
        <span className="py-4 font-normal">
          &nbsp; blending frontend finesse with backend power
        </span>
      </div>
      <div className="text-white w-full h-full flex justify-center p-8 items-center gap-4 flex-col-reverse sm:flex-row sm ">
        <div className="flex flex-col justify-center content-start h-full w-full sm:w-[25%]">
          <h3 className="font-semibold text-2xl text-[rgb(66,208,255)]">
            Tools
          </h3>
          <p className="break-before-auto">
            Virtual Studio Code, InteliJ, Git, Github, GitLens, Bash, Postman,
            Cypress
          </p>
          <h3 className="font-semibold text-2xl text-[#42d0ff] pt-8">
            Languages
          </h3>
          <p className="break-before-auto">
            TypeScript, JavaScript, Java, SQL, HTML/CSS, C#, Python
          </p>
          <h3 className="font-semibold text-2xl text-[#42d0ff] pt-8">
            Frameworks
          </h3>
          <p className="break-before-auto">
            Vue, React, Spring Boot, Tailwind CSS, NodeJS, Express, NestJS
          </p>
          <h3 className="font-semibold text-2xl text-[#42d0ff] pt-8">
            Soft Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {' '}
            {spliter(
              'Fast Learner, Critical Thinker, Flexibility, Emotional Intelligence, Leadership, Self Management, Communication'
            )}
          </div>
        </div>
        <CompareDemo />
      </div>
      <div className="hidden sm:block ">
        {' '}
        <BackgroundBeams />
      </div>
    </div>
  );
}

export default BackgroundBeamsDemo;
