"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "@/components/ui/3d-pin";

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A Brief Collection of
        {' '}
        <span className="text-purple">Highlighted Projects</span>
        :
        <p className="text-white-100 pt-20 pl-5 pr-5 font-normal text-lg">
          The following projects are some of my proudest works,
          reflecting my ability to {' '}
          <span className="text-purple font-bold">build with various different technologies</span>,
          {' '}
          <span className="text-purple font-bold">manage large codebases efficiently</span>,
          {' '}
          and
          {' '}
          <span className="text-purple font-bold">solve complex, real-world problems effectively.</span>
        </p>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-0">
        {projects.map((item) => (
          <div
            className="sm:h-[41rem] lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
            key={item.id}
          >
            <PinContainer
              title={item.link}
              href={item.link}
            >
              <div
                className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[30vh] h-[30vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl rounded-lg bg-[#13162d]"
                  style={{backgroundColor: "#13162D"}}
                >
                  <img src="/bg.png" alt="bgimg"/>
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute top-0 overflow-hidden lg:rounded-3xl rounded-lg"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-purple">
                {item.title}
              </h1>

              <p
                className="lg:font-lg lg:text-base font-light text-sm line-clamp-2 text-white"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2"/>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-base md:text-xs text-sm text-purple">
                    Check Code Repository
                  </p>
                  <FaLocationArrow className="ms-3" color="#9fb9fc"/>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>

    </div>
  );
};

export default RecentProjects;