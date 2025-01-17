import React from 'react'
import { projects } from "@/data";
import { PinContainer } from "@/components/ui/3d-pin";
import {FaLocationArrow} from "react-icons/fa";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading ">
        A Brief Collection of {' '}
        <span className="text-purple">Highlighted Projects</span>
        :
        <p className="text-white-100 pt-20 pl-5 pr-5 font-normal text-lg">
          The following projects are some of my proudest works;
          reflecting my ability to {' '}
          <span className="text-purple font-bold">solve complex & real-world problems</span>, {' '}
          <span className="text-purple font-bold">build with different technologies</span>,
          and {' '}
          <span className="text-purple font-bold">manage large codebases effectively</span>.
          </p>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div key={id}
            className="sm:h-[41rem] lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
          >
            <PinContainer title={link} href={link}>
              <div
                className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] lg:h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl rounded-lg bg-[#13162d]">
                  <img src="" alt=""/>
                </div>
                <img
                  src={img}
                  alt={title}
                  className="z-10 absolute lg:top-0 bottom-0 lg:rounded-2xl rounded-lg"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-purple">
                {title}
              </h1>

              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 text-white">
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon) => (
                    <div key={icon, index}
                         className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                         style={{
                           transform: `translateX(-${5 * index * 2}px)`
                         }}
                    >
                      <img src={icon} alt={icon} className="p-2"/>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-purple">View Source Code</p>
                  <FaLocationArrow className="ms-3" color="#ACBFF9"/>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentProjects