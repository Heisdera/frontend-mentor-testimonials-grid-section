export default function App() {
  return (
    <>
      <main className="grid w-full gap-4 px-5 py-6 text-5xl md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        <article className="relative flex flex-col gap-4 rounded-lg bg-moderate-violet px-7 py-6 text-white md:col-span-2">
          <header className="flex items-center gap-4">
            <img
              src="../images/image-daniel.jpg"
              alt="daniel clifford"
              className="w-8 rounded-full"
            />
            <svg className="absolute right-[10%] top-0 w-28 rounded-full opacity-70" width="104" height="102" xmlns="http://www.w3.org/2000/svg"><path d="M104 102V59.727H84.114c0-5.871.689-11.182 2.068-15.933 1.379-4.75 3.42-9.287 6.125-13.61C95.01 25.86 98.909 22.257 104 19.375V0c-9.758 4.27-17.712 9.874-23.864 16.813-6.151 6.939-10.712 14.545-13.681 22.818C63.485 47.904 62 59.941 62 75.74V102h42zm-62 0V59.727H22.114c0-5.871.689-11.182 2.068-15.933 1.379-4.75 3.42-9.287 6.125-13.61C33.01 25.86 36.909 22.257 42 19.375V0c-9.652 4.27-17.58 9.874-23.784 16.813C12.01 23.752 7.424 31.358 4.455 39.631 1.485 47.904 0 59.941 0 75.74V102h42z" fill="#A775F1" fill-rule="nonzero"/></svg>

            <div className="leading-4">
              <h2 className="text-custom font-semibold">Daniel Clifford</h2>
              <p className="text-[11px] opacity-50">Verified Graduate</p>
            </div>
          </header>

          <p className="z-10 text-lg font-semibold leading-6">
            I received a job offer mid-course, and the subjects I learned were
            current, if not more so, in the company I joined. I honestly feel I
            got every penny’s worth.
          </p>

          <p className="text-custom leading-5 opacity-70">
            “ I was an EMT for many years before I joined the bootcamp. I’ve
            been looking to make a transition and have heard some people who had
            an amazing experience here. I signed up for the free intro course
            and found it incredibly fun! I enrolled shortly thereafter. The next
            12 weeks was the best - and most grueling - time of my life. Since
            completing the course, I’ve successfully switched careers, working
            as a Software Engineer at a VR startup. ”
          </p>
        </article>

        <article className="flex flex-col gap-4 rounded-lg bg-very-dark-grayish-blue px-7 py-6 text-white">
          <header className="flex items-center gap-4">
            <img
              src="../images/image-jonathan.jpg"
              alt="jonathan walters"
              className="w-8 rounded-full"
            />

            <div className="leading-4">
              <h2 className="text-custom font-semibold">Jonathan Walters</h2>
              <p className="text-[11px] opacity-50">Verified Graduate</p>
            </div>
          </header>

          <p className="text-lg font-semibold leading-5">
            The team was very supportive and kept me motivated
          </p>

          <p className="text-custom leading-5 opacity-70">
            “ I started as a total newbie with virtually no coding skills. I now
            work as a mobile engineer for a big company. This was one of the
            best investments I’ve made in myself. ”
          </p>
        </article>

        <article className="flex flex-col gap-4 rounded-lg bg-white px-7 py-6 text-very-dark-blackish-blue">
          <header className="flex items-center gap-4">
            <img
              src="../images/image-jeanette.jpg"
              alt="jeanette harmon"
              className="w-8 rounded-full"
            />

            <div className="leading-4">
              <h2 className="text-custom font-semibold">Jeanette Harmon</h2>
              <p className="text-[11px] opacity-50">Verified Graduate</p>
            </div>
          </header>

          <p className="text-lg font-semibold leading-5">
            An overall wonderful and rewarding experience
          </p>

          <p className="text-custom leading-5 opacity-70">
            “ Thank you for the wonderful experience! I now have a job I really
            enjoy, and make a good living while doing something I love. ”
          </p>
        </article>

        <article className="relative flex flex-col gap-4 rounded-lg bg-very-dark-blackish-blue px-7 py-6 text-white md:col-span-2">
          <header className="flex items-center gap-4">
            <img
              src="../images/image-patrick.jpg"
              alt="patrick abrams"
              className="w-8 rounded-full"
            />

            <div className="leading-4">
              <h2 className="text-custom font-semibold">Patrick Abrams</h2>
              <p className="text-[11px] opacity-50">Verified Graduate</p>
            </div>
          </header>

          <p className="text-lg font-semibold leading-5">
            Awesome teaching support from TAs who did the bootcamp themselves.
            Getting guidance from them and learning from their experiences was
            easy.
          </p>

          <p className="text-custom leading-5 opacity-70">
            “ The staff seem genuinely concerned about my progress which I find
            really refreshing. The program gave me the confidence necessary to
            be able to go out in the world and present myself as a capable
            junior developer. The standard is above the rest. You will get the
            personal attention you need from an incredible community of smart
            and amazing people. ”
          </p>
        </article>

        <article className="flex flex-col gap-4 rounded-lg bg-white px-7 py-6 text-very-dark-blackish-blue md:col-start-2 md:row-start-2 md:row-end-4 lg:col-start-4 lg:row-start-1 lg:row-end-3">
          <header className="flex items-center gap-4">
            <img
              src="../images/image-kira.jpg"
              alt="kira whittle"
              className="w-8 rounded-full"
            />

            <div className="leading-4">
              <h2 className="text-custom font-semibold">Kira Whittle</h2>
              <p className="text-[11px] opacity-50">Verified Graduate</p>
            </div>
          </header>

          <p className="text-lg font-semibold leading-5">
            Such a life-changing experience. Highly recommended!
          </p>

          <p className="text-custom leading-5 opacity-70">
            “ Before joining the bootcamp, I’ve never written a line of code. I
            needed some structure from professionals who can help me learn
            programming step by step. I was encouraged to enroll by a former
            student of theirs who can only say wonderful things about the
            program. The entire curriculum and staff did not disappoint. They
            were very hands-on and I never had to wait long for assistance. The
            agile team project, in particular, was outstanding. It took my
            learning to the next level in a way that no tutorial could ever
            have. In fact, I’ve often referred to it during interviews as an
            example of my developent experience. It certainly helped me land a
            job as a full-stack developer after receiving multiple offers. 100%
            recommend! ”
          </p>
        </article>
      </main>

      <footer className="text-center text-sm">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          className="text-attribution-blue underline"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://www.github.com/Heisdera"
          target="_blank"
          className="text-attribution-blue underline"
        >
          Raphael Wisdom
        </a>
        .
      </footer>
    </>
  );
}
