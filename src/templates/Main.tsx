import React, { ReactNode } from 'react';

import Link from 'next/link';

import { Navbar } from '../components/navigation/Navbar';
import { Config } from '../utils/Config';
import HeroSlider from '../components/HeroSlider/HeroSlider';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased w-full text-gray-700">
    {props.meta}

    <div className="max-w-screen-xl mx-auto">
      <div className="border-b border-gray-300">
        <div>
          <Navbar>
            <div className="flex flex-col">
              <li>
                <Link href="/">
                  <a>Howwdo</a>
                </Link>
              </li>
            </div>
            <div>
              <li className="mr-6">
                <Link href="/story">
                  <a>Our story</a>
                </Link>
              </li>
              <li className="mr-6">
                <Link href="/about/">
                  <a>Membership</a>
                </Link>
              </li>
              <li className="mr-6">
                <Link href="/signin/">
                  <a>Sign in</a>
                </Link>
              </li>
              <li>
                <button>
                  Get started
                </button>
              </li>
            </div>
          </Navbar>
        </div>
        <div>
          <HeroSlider/>
        </div>
        <div className="pt-16 pb-8">
          <div className="font-semibold text-3xl text-gray-900">{Config.title}</div>
          <div className="text-xl">{Config.description}</div>
        </div>
      </div>

      <div className="text-xl py-5">{props.children}</div>

      <div className="border-t border-gray-300 text-center py-8 text-sm">
        © Copyright
        {' '}
        {new Date().getFullYear()}
        {' '}
        {Config.title}
        . Powered with
        {' '}
        <span role="img" aria-label="Love">
          ♥
        </span>
        {' '}
        by
        {' '}
        <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a>
        {/*
         * PLEASE READ THIS SECTION
         * We'll really appreciate if you could have a link to our website
         * The link doesn't need to appear on every pages, one link on one page is enough.
         * Thank you for your support it'll mean a lot for us.
         */}
      </div>
    </div>
  </div>
);

export { Main };
