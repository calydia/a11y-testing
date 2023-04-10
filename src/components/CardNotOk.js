import * as React from 'react';
import { StaticImage } from "gatsby-plugin-image";

export default function CardNotOk({index, title, ariaLabel, alt}) {

  return (
    <li className="grid items-stretch p-2 border-solid border-4 gradient-border-light bg-lt-blue-light text-lt-gray
    dark:gradient-border-dark dark:bg-dk-purple dark:text-white
    ">
      <a key={index} href="#" aria-label={ariaLabel ? ariaLabel : null}
        className="post-link border-2 border-transparent focus:outline focus:outline-4 focus:outline-offset-15	focus:outline-black dark:focus:outline-white hover:border-lt-purple dark:hover:border-dk-blue-light">
        <StaticImage
          src="../images/cat.jpg"
          alt={alt ? alt : ""}
          width={500}
          height={300}
        />
        <div className="self-center text-center">
          <span id={`blog-title${index}`} className="post-title block text-lg font-bold md:text-2xl py-4 px-2
          after:bg-black after:h-0.5 after:block after:w-10 after:mt-4 after:mb-0 after:mx-auto after:content-['']
          dark:after:bg-white">
            {title}
          </span>
          <span className="block text-base md:text-xl pb-4">
            January 20th, 2023
            <span aria-hidden="true"> | </span><span className="sr-only">in category</span> News
          </span>
        </div>
      </a>
    </li>
  );
}
