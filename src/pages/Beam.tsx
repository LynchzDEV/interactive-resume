import { BackgroundBeamsWithCollision } from '@/components/ui/aceternity/background-beams-with-collision';
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

export function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision className="h-full flex flex-col pb-4">
      <div className="flex text-white text-4xl relative  flex-col sm:flex-row text-center">
        <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
          <span className="font-bold "> Full-stack wizard,</span>
        </div>
        <span className="py-4 font-normal">
          &nbsp; blending frontend finesse with backend power{' '}
        </span>
      </div>
      <div className="text-white w-full h-full flex justify-center p-8 items-center gap-4 flex-col sm:flex-row sm">
        <div className="flex flex-col justify-center content-start h-full w-full sm:w-[25%]">
          <h3 className="font-semibold text-2xl text-[#42d0ff]">Tools</h3>
          <p className="break-before-auto">
            Virtual Studio Code, InteliJ, Git, Github, GitLens, Bash, Postman,
            Cypress
          </p>
          <h3 className="font-semibold text-2xl text-[#42d0ff] pt-8">
            Languages &<br /> Frameworks
          </h3>
          <p className="break-before-auto">
            Virtual Studio Code, InteliJ, Git, Github, GitLens, Bash, Postman,
            Cypress
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
    </BackgroundBeamsWithCollision>
  );
}

export default BackgroundBeamsWithCollisionDemo;
