import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/hero.png";
import { Slide } from "react-awesome-reveal";
import { useState } from "react";

const Hero = ({ heroData }) => {
  const {
    title,
    subHeading,

    buttonText,
    buttonLink,
    sideImage,
  } = heroData;
  const [submit, setSubmit] = useState(false);
  const handleSubmit = () => {
    setSubmit(true);
  };
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <Slide direction="left">
            <div className="max-w-2xl mb-8">
              <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                {title}
              </h1>
              <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
                {subHeading}
              </p>

              <div
                className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row"
                onClick={handleSubmit}
              >
                <button className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md ">
                  {buttonText}
                </button>
              </div>
            </div>
          </Slide>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <Slide direction="right">
            <div className="">
              <Image
                src={sideImage || heroImg}
                width="616"
                height="617"
                className={"object-cover"}
                alt="Hero Illustration"
                loading="eager"
              />
            </div>
          </Slide>
        </div>
      </Container>
      {!!submit && <Modal setSubmit={setSubmit} />}
    </>
  );
};

export default Hero;

const Modal = ({ setSubmit }) => (
  <div class="fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-50">
    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
      <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full  sm:mx-0 sm:h-10 sm:w-10">
              <svg
                viewBox="0 0 117 117"
                version="1.1"
                fill="#000000"
                stroke="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <title></title> <desc></desc> <defs></defs>
                  <g
                    fill="none"
                    fill-rule="evenodd"
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                  >
                    <g fill-rule="nonzero" id="correct">
                      <path
                        d="M34.5,55.1 C32.9,53.5 30.3,53.5 28.7,55.1 C27.1,56.7 27.1,59.3 28.7,60.9 L47.6,79.8 C48.4,80.6 49.4,81 50.5,81 C50.6,81 50.6,81 50.7,81 C51.8,80.9 52.9,80.4 53.7,79.5 L101,22.8 C102.4,21.1 102.2,18.5 100.5,17 C98.8,15.6 96.2,15.8 94.7,17.5 L50.2,70.8 L34.5,55.1 Z"
                        fill="#17AB13"
                        id="Shape"
                      ></path>
                      <path
                        d="M89.1,9.3 C66.1,-5.1 36.6,-1.7 17.4,17.5 C-5.2,40.1 -5.2,77 17.4,99.6 C28.7,110.9 43.6,116.6 58.4,116.6 C73.2,116.6 88.1,110.9 99.4,99.6 C118.7,80.3 122,50.7 107.5,27.7 C106.3,25.8 103.8,25.2 101.9,26.4 C100,27.6 99.4,30.1 100.6,32 C113.1,51.8 110.2,77.2 93.6,93.8 C74.2,113.2 42.5,113.2 23.1,93.8 C3.7,74.4 3.7,42.7 23.1,23.3 C39.7,6.8 65,3.9 84.8,16.2 C86.7,17.4 89.2,16.8 90.4,14.9 C91.6,13 91,10.5 89.1,9.3 Z"
                        fill="#4A4A4A"
                        id="Shape"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
              <h3
                class="text-base font-semibold leading-6 text-gray-900"
                id="modal-title"
              >
                Successfully Submitted!!
              </h3>
              <div class="mt-2">
                <p class="text-sm text-gray-500">
                  Our Agent Will talk to you on this ...
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button
            onClick={() => setSubmit(false)}
            type="button"
            class="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  </div>
);
