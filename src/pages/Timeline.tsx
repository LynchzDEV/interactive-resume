import { Timeline } from '@/components/ui/aceternity/timeline';

// * Startup
import startup1 from '@/assets/images/Startup/Startup1.jpg';
import startup2 from '@/assets/images/Startup/Startup2.jpg';
import startup3 from '@/assets/images/Startup/Startup3.jpg';
import startup4 from '@/assets/images/Startup/Startup4.jpg';

// * Starter Pack
import sp1 from '@/assets/images/StarterPack/sp1.jpg';
import sp2 from '@/assets/images/StarterPack/sp2.jpg';
import sp3 from '@/assets/images/StarterPack/sp3.jpg';
import sp4 from '@/assets/images/StarterPack/sp4.jpg';

// * Code of Conduct
import ca1 from '@/assets/images/Aquatia/ca1.jpeg';
import ca2 from '@/assets/images/Aquatia/ca2.jpg';

// * GameDev
import hw1 from '@/assets/images/HelloWorld/hw1.jpg';
import hw2 from '@/assets/images/HelloWorld/hw2.jpg';
import hw3 from '@/assets/images/HelloWorld/hw3.jpg';
import hw4 from '@/assets/images/HelloWorld/hw4.jpg';

export function TimelineDemo() {
  const data = [
    {
      title: 'Aug/2022 - Nov/2022',
      content: (
        <div>
          <h1 className="text-neutral-200 text-2xl font-semibold">
            IT Specialist for Startup Team
          </h1>
          <p className="text-neutral-200 text-m  font-normal my-2">
            <span className="font-semibold">iNiGIE</span> Team member at Sandbox
            Innovation Startup
          </p>
          <p className="text-neutral-200 text-m  font-normal mb-4">
            four-month program where students develop digital product ideas into
            viable businesses using Agile methodology. Experts and faculty act
            as Scrum Masters, guiding students through prototyping, market
            testing, and growth hacking. The program culminates in a pitching
            competition before judges and potential investors.
          </p>
          <ul className="text-neutral-200 text-sm font-normal mb-8">
            <li>
              - Led IT efforts for a refrigerator locker rental service.
              Developed
            </li>
            <li>
              - and implemented secure, user-friendly systems. Collaborated with
            </li>
            <li> - teams for seamless hardware-software integration. </li>
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={startup1}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={startup2}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={startup3}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={startup4}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: 'June/2023',
      content: (
        <div>
          <h1 className="text-neutral-200 text-2xl font-semibold">
            Academic Speaker
          </h1>
          <p className="text-neutral-200 text-m  font-normal my-2">
            IT#29 Starter pack
          </p>
          <p className="text-neutral-200 text-m font-normal mb-2">
            an event designed to teach first-year IT students the essential
            fundamentals needed for university life. It covers basic skills,
            tools, and knowledge to help students navigate their studies
            effectively. The event provides a strong foundation to succeed in
            the IT faculty.
          </p>
          <ul className="text-neutral-200 text-sm font-normal mb-8">
            <li>
              - Being an academic speaker on the topic of Basic Java at an
              academic event for new-coming students
            </li>
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={sp1}
              alt="Starter1"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={sp2}
              alt="Starter2"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={sp3}
              alt="Starter3"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={sp4}
              alt="Starter4"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Aug/2023',
      content: (
        <div>
          <h1 className="text-neutral-200 text-2xl font-semibold">
            Project President
          </h1>
          <p className="text-neutral-200 text-m  font-normal my-2">
            IT#29 Code of Conduct; Aquatia
          </p>
          <p className="text-neutral-200 text-m  font-normal mb-2">
            an activity focused on reinforcing the code of conduct among IT
            faculty members, fostering a stronger bond between different
            generations. It emphasizes shared values, respect, and
            collaboration, helping to build a cohesive and supportive community
            within the faculty.{' '}
          </p>
          <ul className="text-neutral-200 text-sm font-normal mb-8">
            <li>- Organizing and managing the event</li>
            <li>- Developing an official academic’s website</li>
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={ca1}
              alt="COA1"
              width={200}
              height={200}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={ca2}
              alt="COA2"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Nov/2023 - Dec/2023',
      content: (
        <div>
          <h1 className="text-neutral-200 text-2xl font-semibold">
            Project President & Lead of Game Developer Speaker
          </h1>
          <p className="text-neutral-200 text-m  font-normal my-2">
            SIT Hello World Goose{' '}
          </p>
          <p className="text-neutral-200 text-m  font-normal mb-2">
            An academic event where all second-year students, as seniors,
            showcase their high-level skills across four sections: Frontend,
            DevOps, Design, and GameDev. The event is designed to inspire and
            impress the next generation of IT faculty members by demonstrating
            advanced techniques and expertise in these key areas.
          </p>
          <ul className="text-neutral-200 text-sm font-normal mb-8">
            <li>- Served as leader of an academic event</li>
            <li>- Developed an official game’s website </li>
            <li>- Served as academic speaker on whole class of Phaser3</li>
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={hw1}
              alt="GameDev1"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={hw2}
              alt="GameDev2"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={hw3}
              alt="GameDev3"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={hw4}
              alt="GameDev4"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Dec2023 - Present',
      content: (
        <div className="flex w-full text-center justify-center content-center items-center h-full text-neutral-200 text-2xl font-normal mb-8">
          "CONTINUE IMPROVING MYSELF"
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
