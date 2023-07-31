import Image from "next/image";
import React from "react";
import Container from "./container";
import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const Benefits = ({ data, one }) => {
  console.log(data);
  return (
    <>
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
        <div
          className={`flex items-center justify-center w-full lg:w-1/2 ${
            data.imgPos === false ? "lg:order-1" : ""
          }`}
        >
          <div>
            <Image
              src={data.image || one ? benefitOneImg : benefitTwoImg}
              width="521"
              height="auto"
              alt="Benefits"
              className={"object-cover"}
            />
          </div>
        </div>

        <div
          className={`flex flex-wrap items-center w-full lg:w-1/2 ${
            data.imgPos === false ? "lg:justify-end" : ""
          }`}
        >
          <div>
            <div className="flex flex-col w-full mt-4">
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                {data.title}
              </h3>

              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                {data.desc}
              </p>
            </div>

            <div className="w-full mt-5">
              {data.bullets.map((item, index) => (
                <Benefit key={index} title={item.title} icon={item.icon}>
                  {item.desc}
                </Benefit>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

function Benefit(data) {
  return (
    <>
      <div className="flex items-start mt-8 space-x-3">
        <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-black dark:bg-blue-500 rounded-md w-11 h-11 ">
          <span className="scale-125 text-indigo-50">{data.icon}</span>
        </div>
        <div>
          <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
            {data.title}
          </h4>
          <p className="mt-1 text-gray-500 dark:text-gray-400">
            {data.children}
          </p>
        </div>
      </div>
    </>
  );
}

export default Benefits;
