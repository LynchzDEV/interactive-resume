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
      <div className="text-white w-full h-full flex p-8 flex-col item-center content-center justify-center gap-4 sm:flex-row sm text-xl">
        <div className="flex items-center w-fit justify-center">
          <img
            src="https://www.eekmuttservice.com/resources/images/KMUTT.png"
            className="w-[25%] h-auto sm:w-[15%] sm:h-auto "
          />
          <div className="flex flex-col w-full pl-8 mt-4">
            {' '}
            <span className="font-semibold">
              King Mongkut's University of Technology Thonburi <br />
            </span>
            <span className="font-thin">B.Sc.Information Technology </span>
          </div>
        </div>
        <div className="flex w-fit justify-start sm:pl-4 px-8 sm:border-l-2 sm:justify-center pl-20 pt-4 sm:pt-0">
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
