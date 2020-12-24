import React from 'react';
import { Link } from 'react-router-dom';
import { GoProject } from 'react-icons/go';
const Landing = () => {
  return (
    <div className="lg:px-56 text-2xl font-light">
      <nav className="flex justify-between items-center py-4 px-6">
        <a href="/" className="pl-4 flex items-center text-5xl">
          <GoProject className="text-blue-500" />
          <h1
            style={{ fontFamily: 'Permanent Marker, cursive' }}
            className="text-blue-500 pl-1"
          >
            Assign
          </h1>
        </a>

        <ul className="flex items-center">
          <li className="mr-4">
            <Link
              className="block p-1 font-semibold text-gray-600 hover:bg-gray-100 rounded font-black"
              to="/register"
            >
              Join now
            </Link>
          </li>
          <li className="mr-4">
            <Link
              className="block py-2 px-5 bg-transparent text-blue-700 border rounded border-blue-500 font-semibold hover:bg-blue-500 hover:text-white hover:border-transparent"
              to="/login"
            >
              Sign in
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex justify-around pt-16">
        <div>
          <h2 className="text-6xl font-hairline text-blue-500">
            <span className="">Assign Management,</span> <br />
            software that works for you. <br />
          </h2>
          <button className="bg-blue-500 rounded-full p-4 ml-20 mt-12">
            Join now - It's Free!
          </button>
        </div>
        <div></div>
      </div>
      <div>
        <h1>intro what the app does</h1>
        <h1>how the app batter then the other apps that do the same</h1>
        <h1>Donation options 4 cards</h1>
        <h1>Happy customers comment: 3-2 example: name - comment - picture</h1>
        <h1>
          support / request for email comment large company or small group
        </h1>
        <h1>
          ------------------------------------------------------------------------------------
          footer:
          <h2>menu: CONTACT US, CARRERAS, PRIVACY POLICY, TERMS</h2>
          <p>
            message: Built by Sergway Khodyachikh for ..... some of the presnted
            CSS features are hightly experemental and may not work in all
            browsers, or may work in a diffrent wau at the time..
          </p>
          ------------------------------------------------------------------------------------
        </h1>
      </div>
      <section>
        <h3 className="text-3xl font-semibold">
          Get started in minutes. Nothing complicated to learn.
        </h3>
        <p>
          Assign helps growing businesses get organized. Create your custom{' '}
          <br />
          online database in minutes and manage anything, from clients and
          <br />
          projects to ideas and events. All in one place.
        </p>
      </section>
      <section>
        <h3 className="text-3xl font-semibold">
          Better organization to get focused
        </h3>
        Keep your team on the rails. Tracker's shared backlog makes priorities
        <br />
        clear so the team can stay organized. Easily visualize scope, focus your
        <br />
        teamwork, and stay nimble when circumstances change.
        <br />
      </section>
      <section>
        <h3 className="text-3xl font-semibold">
          Tools to help you adapt and evolve
        </h3>
        <p>
          Get more work done, more often. Tracker's guided iteration planning
          <br />
          helps you break down and prioritize projects into manageable chunks so
          <br />
          the team can keep the momentum toward delivering.
          <br />
        </p>
      </section>
      <section>
        <h3 className="text-3xl font-semibold">
          Team transparency at a glance
        </h3>
        No more surprises. With a shared, clear view of your team's work,
        <br />
        everyone has a real-time, single source of truth. A quick scan explains
        <br />
        your team's status, who's responsible for what, and what's coming next
        <br />
      </section>
      <section className="text-center">
        <h2 className="text-4xl font-semibold">A better way to develop</h2>
        <p>
          Succeeding in an evolving tech landscape requires a time-tested <br />
          process and a tool your team can rely on. Tracker's modern workflow{' '}
          <br />
          helps your team keep the pace and adapt when needs change.
        </p>
      </section>

      <footer>
        <sup>&copy;</sup> Sergway Khodyachikh
      </footer>
    </div>
  );
};

export default Landing;
