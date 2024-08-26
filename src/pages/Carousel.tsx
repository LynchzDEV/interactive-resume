'use client';
import {
  Carousel,
  Card,
} from '@/components/ui/aceternity/apple-cards-carousel';

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card
      key={card.src}
      card={card}
      index={index}
    />
  ));

  return (
    <div className="w-full h-full py-20 bg-[#18181B]">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-200 font-sans">
        MY PROJECTS.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={'dummy-content' + index}
            className="bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold  text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{' '}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const AmongDucks = () => {
  return (
    <div className="bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold  text-neutral-200">
          I am the creative force behind "Among Duck",
        </span>{' '}
        a 2D platformer web game. As the designer, project owner, and developer,
        I oversee the entire game's development process, from conceptualizing
        the visual style to coding the game mechanics. My role involves blending
        creativity with technical expertise to bring this unique and engaging
        gaming experience to life.
      </p>
      <br />
      <div className="flex justify-around">
        <a
          href="https://www.figma.com/design/De68DsnlzP3zmqom7YBVNx/Among-Goose?node-id=26-2&t=A2A0mDV097nNPTWW-1"
          target="_blank"
          rel="noopener noreferrer"
          className=" max-w-fit md:w-3/4 md:h-3/4"
        >
          <img
            src="https://zd4cdq.bl.files.1drv.com/y4muqGiZi436kAlSLoQtMzeI2BqvaUAWCUGRyQxdXpgqU662rXJ8ujZwcy9BYjGoR4Yc1uhEX7y2NpiyizZBGACZtKhAR4vhZAqduAafcjUPodF9kelqK3R5oa6xlua3n51k8ERdYZwIMKQx1aQr13kjhVpC4r_ms0ByrsnBoFE1cjjrgRoTA5h8Dzdlp6P79MZttV-zxja4sHMmk20YdT67GZqe-BA2Bn2-s5oRPXAEG0"
            alt="Among Duck Figma Design"
            height="500"
            width="500"
            className=" h-full w-full object-contain"
          />

          <p className="text-neutral-400 font-medium opacity-80 text-center">
            entire figma
          </p>
        </a>
        <div className=" flex flex-col items-center justify-center content-center">
          <span className="font-bold  text-neutral-200 mx-auto md:text-xl">
            Links:
          </span>{' '}
          <ul className="text-neutral-400 text-base md:text-xl font-sans text-center">
            <a
              href="https://among-duck-hellogoose.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              <li>Game</li>
            </a>
            <a
              href="https://github.com/LynchzDEV/AmongDuck-HelloWord"
              target="_blank"
              rel="noopener noreferrer"
              className=" underline"
            >
              <li>Github</li>
            </a>
            <a
              href="https://www.figma.com/design/De68DsnlzP3zmqom7YBVNx/Among-Goose?node-id=26-2&t=A2A0mDV097nNPTWW-1"
              target="_blank"
              rel="noopener noreferrer"
              className=" underline"
            >
              <li>Figma</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    category: 'SIT Hello World’s 2D platformer game',
    title: 'Among Ducks',
    src: 'https://vj4cdq.bl.files.1drv.com/y4m9MHlHai2ON0H-DTVilWRU0kB_m2FfT75ZK92FjBpVhM8exLGLNtChvCUsQdODdK29IlUCWVe63_EBEq210zNswPWU4SRmxc8tCFgKdTwy2YgDKTw3fSNTe_ROaAXSO6xdNZZE7N7Q0Qs-jAalVJvnC2h9MeXvLQMhtasRCSneWOt0h0ZiDy3j9bDmvqOc2elA-wlFnHTfsVMpLTJVxomDXvMFJnLkcNlENkH8vfmziw',
    // ****************************** GIF IS WORKING!!!!!!! ****************************** //
    // src: 'https://i.pinimg.com/originals/3a/7b/da/3a7bda163b42122cec8497e44ce3f9dd.gif',
    // ****************************** GIF IS WORKING!!!!!!! ****************************** //
    content: <AmongDucks />,
  },
  {
    category: 'SIT’s junior project',
    title: 'Kanban Board',
    src: 'https://vz4cdq.bl.files.1drv.com/y4mSCtvuuhpyiPumCdelMlunOAwDMzaC0o6M9qWJz7KDpQIfNeQxoBVsEWEp2h9wjKKLDeaFogXHrJ_mFPq2DYQDNpdrpVUuH6_7KYvtOOGlGpfdEThEeWLPeqBO7ulLS3OCOR0bCC73wDWG59gmVkDGbtcyWZJAjaVshhY10LkL1zkbLV6IuhttWF5ceh2FJ2xQuSFXbcEV0Hd3rTSwrRKJbVdTei5yTZULrSOHtbNIG8',
    content: <DummyContent />,
  },
  {
    category: 'Self Learning Project',
    title: 'Virtual Study Group Platform',
    src: 'https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    content: <DummyContent />,
  },

  {
    category: 'Self Learning Project',
    title: 'FitTracker',
    src: 'https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    content: <DummyContent />,
  },
];
