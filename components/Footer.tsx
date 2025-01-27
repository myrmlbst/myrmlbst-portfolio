import React from 'react'
import MagicButton from "@/components/ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-[28vh]" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take {' '}
          <span className="text-purple">
            <span className="underline">your</span>
            {' '} digital presence
          </span>
          {' '}to the next level?
        </h1>

        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out today and let&apos;s discuss how I can help you achieve your goals!
        </p>

        <a href="https://www.linkedin.com/in/myriamlb-/">
          <MagicButton title="Let's get in touch!"
                       icon={<FaLocationArrow />}
                       position="right"
          />
        </a>
      </div>

    </footer>
  )
}

export default Footer