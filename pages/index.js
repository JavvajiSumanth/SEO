import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import {
  Fade,
  Reveal,
  JackInTheBox,
  AttentionSeeker,
  Roll,
  Slide,
  Zoom,
} from "react-awesome-reveal";

const Home = ({
  metaTags,
  navData,
  videoSection,
  benifitSection,
  heroData,
  videoId,
  benefitTwo,
  benefitOne,
  testimonialsSection,
  testimonials,
  faqSection,
  faqdata,
  loading,
}) => {
  if (!!loading)
    return (
      <>
        <Head>
          <title>{metaTags.metaTitle}</title>
          <meta name="description" content={metaTags.metaDescription} />
          <link rel="icon" href={metaTags.metaIcon || "/favicon.ico"} />
        </Head>
        <Navbar navData={navData} />
        <Hero heroData={heroData} />
        <AttentionSeeker delay={500}>
          <SectionTitle
            pretitle={benifitSection.pretitle}
            title={benifitSection.title}
          >
            {benifitSection.body}
          </SectionTitle>
        </AttentionSeeker>
        <Zoom direction="left">
          <Benefits data={benefitOne} one />
        </Zoom>
        <Zoom direction="right">
          <Benefits data={benefitTwo} />
        </Zoom>
        <AttentionSeeker>
          <SectionTitle
            pretitle={videoSection.pretitle}
            title={videoSection.title}
          >
            {videoSection.body}
          </SectionTitle>
        </AttentionSeeker>

        <JackInTheBox>
          <Video videoId={videoId} />
        </JackInTheBox>
        <AttentionSeeker>
          <SectionTitle
            pretitle={testimonialsSection.pretitle}
            title={testimonialsSection.title}
          >
            {testimonialsSection.body}
          </SectionTitle>
        </AttentionSeeker>

        <Testimonials testimonials={testimonials} />
        <AttentionSeeker>
          <SectionTitle pretitle={faqSection.pretitle} title={faqSection.title}>
            {faqSection.body}
          </SectionTitle>
        </AttentionSeeker>
        <Slide>
          <Faq faqdata={faqdata} />
        </Slide>
        <Footer />
        {/* <PopupWidget /> */}
      </>
    );

  return <h1>Loading...</h1>;
};

export default Home;

export async function getServerSideProps() {
  const navData = {
    // menus: ["Product", "Features", "Pricing", "Company", "Blog"],
    menus: [],
    logoImg: "",
    logoTitle: "Nextly",
    buttonTitle: "Get Stsarted",
  };
  const heroData = {
    title: "Free Landing Page Template for startups",
    subHeading:
      "Nextly is a free landing page & marketing website template forstartups and indie projects. Its built with Next.js & TailwindCSS. And its completely open-source.",
    buttonText: "Download for Free",
    buttonLink: "#",
    sideImage: "",
  };

  const benifitSection = {
    pretitle: "Nextly Benefits",
    title: "Why should you use this landing page",
    body: "Nextly is a free landing page & marketing website template for startups  and indie projects. Its built with Next.js & TailwindCSS. And its completely open-source.",
  };
  const videoSection = {
    pretitle: "Watch a video",
    title: "Learn how to fullfil your needs",
    body: "  This section is to highlight a promo or demo video of your product. Analysts says a landing page with video has 3% more conversion rate. So, don't forget to add one. Just like this.",
  };
  const benefitOne = {
    title: "Highlight your benefits",
    desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
    image: "",
    imgPos: true,
    bullets: [
      {
        title: "Understand your customers",
        desc: "Then explain the first point breifly in one or two lines.",
        icon: "👀",
      },
      {
        title: "Improve acquisition",
        desc: "Here you can add the next benefit point.",
        icon: "👀",
      },
      {
        title: "Drive customer retention",
        desc: "This will be your last bullet point in this section.",
        icon: "👀",
      },
    ],
  };

  const benefitTwo = {
    title: "Offer more benefits here",
    desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
    image: "",
    imgPos: false,

    bullets: [
      {
        title: "Mobile Responsive Template",
        desc: "Nextly is designed as a mobile first responsive template.",
        icon: "👀",
      },
      {
        title: "Powered by Next.js & TailwindCSS",
        desc: "This template is powered by latest technologies and tools.",
        icon: "👀",
      },
      {
        title: "Dark & Light Mode",
        desc: "Nextly comes with a zero-config light & dark mode. ",
        icon: "👀",
      },
    ],
  };
  const testimonialsSection = {
    pretitle: "Testimonials",
    title: "Here's what our customers said",
    body: " Testimonails is a great way to increase the brand trust and awareness. Use this section to highlight your popular customers.",
  };
  let testimonials = [
    {
      name: "Sarah Steiner",
      title: "VP Sales at Google",
      profile: "",
      testimonial:
        "Share a real testimonial that hits some of your benefits from one of your popular customer.",
    },
    {
      name: "Dylan Ambrose",
      title: "Lead marketer at Netflix",
      profile: "",
      testimonial:
        "  Make sure you only pick the right sentence to keep it short and simple.",
    },
    {
      name: "Gabrielle Winn",
      title: "Co-founder of Acme Inc",
      profile: "",
      testimonial:
        "This is an awesome landing page template I&apos;ve seen. I would use this for anything.",
    },
  ];

  const faqSection = {
    pretitle: "FAQ",
    title: "Frequently Asked Questions",
    body: "Answer your customers possible questions here, it will increase the conversion rate as well as support or chat requests.",
  };
  const faqdata = [
    {
      question: "Is this template completely free to use?",
      answer: "Yes, this template is completely free to use.",
    },
    {
      question: "Can I use it in a commercial project?",
      answer: "Yes, this you can.",
    },
    {
      question: "What is your refund policy? ",
      answer:
        "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
    },
    {
      question: "Do you offer technical support? ",
      answer:
        "No, we don't offer technical support for free downloads. Please purchase a support plan to get 6 months of support.",
    },
  ];
  const fetchedData = [];
  const fetchedData2 = [];

  try {
    const querySnapshot = await getDocs(collection(db, "reviews"));
    querySnapshot.forEach((doc) => {
      fetchedData.push(doc.data());
    });
    const querySnapshot2 = await getDocs(collection(db, "faqs"));
    querySnapshot2.forEach((doc) => {
      fetchedData2.push(doc.data());
    });

    const docRef = doc(db, "content", "ID");

    const docSnap = await getDoc(docRef);
    return {
      props: {
        ...docSnap.data(),
        testimonials: fetchedData,
        faqdata: fetchedData2,
        loading: true,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        navData,
        videoSection,
        benifitSection,
        heroData,
        videoId: "Y6KDk5iyrYE",
        benefitOne,
        benefitTwo,
        testimonialsSection,
        testimonials,
        faqSection,
        faqdata,
        loading: true,
      },
    };
  }
}
