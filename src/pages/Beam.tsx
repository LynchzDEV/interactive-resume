import { BackgroundBeamsWithCollision } from '@/components/ui/aceternity/background-beams-with-collision';
import {
  IconBrandGithub,
  IconPhone,
  IconMail,
  IconMapPin,
  IconBrandLinkedin,
} from '@tabler/icons-react';

export function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision className="flex flex-col pb-4 h-full">
      <div className="flex text-white text-4xl relative flex-col sm:flex-row text-center">
        <span className="py-4 font-normal">CONTACT ME</span>
      </div>
      <div className="text-white w-full h-full flex p-8 items-start flex-col content-center gap-4 sm:flex-row sm text-xl">
        <div className="flex items-center w-fit justify-center">
          <img
            src="https://www.eekmuttservice.com/resources/images/KMUTT.png"
            className="w-[25%] h-[25%]"
          />
          <div className="flex flex-col max-w-[60%] w-fit pl-8">
            {' '}
            <span className="font-semibold">
              King Mongkut's University of Technology Thonburi <br />
            </span>
            <span className="font-thin">B.Sc.Information Technology </span>
          </div>
        </div>
        <div className="flex w-full justify-center px-8 sm:border-l-2 sm:justify-start pl-20 sm:pl-0 pt-4 sm:pt-0">
          <div className="flex-col h-full">
            <a
              href="https://github.com/LynchzDEV"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandGithub className="w-8 h-8" />
            </a>
            <a
              href="www.linkedin.com/in/lynchzdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandLinkedin className="w-8 h-8" />
            </a>
            <IconPhone className="w-8 h-8" />
            <IconMail className="w-8 h-8" />
            <IconMapPin className="w-8 h-8" />
          </div>
          <div className="px-4 font-semibold w-fit ">
            <a
              href="https://github.com/LynchzDEV"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="underline h-8">LynchzDEV</p>
            </a>
            <a
              href="https://www.linkedin.com/in/lynchzdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="underline h-8">Jinnawat Vilairat</p>
            </a>
            <p className="h-8">089-6048001</p>
            <p className="h-8">jinnawatvilai@gmail.com</p>
            <p className="h-8">Bangkok, Thailand</p>
          </div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}

export default BackgroundBeamsWithCollisionDemo;
