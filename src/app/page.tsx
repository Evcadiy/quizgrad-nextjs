import Header from "@/components/Header/Header";
import Image from "next/image";
import mainImage from "@/assets/landing-image.svg";
import lineImage from "@/assets/line.svg";

import "@/scss/main-page/main-page.scss";
import { MotionH1, MotionLink, MotionP } from "@/utils/motion";

const Home = () => {
  return (
    <>
      <Header />
      <div className="main">
        <div className="main-content">
          <MotionH1
            initial={{
              x: -40,
              opacity: 0,
            }}
            animate={{ x: 0, opacity: 1 }}
          >
            Master languages faster
          </MotionH1>
          <MotionP
            initial={{
              x: -40,
              opacity: 0,
            }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Unlock the world, one word at a time
          </MotionP>
          <MotionLink
            initial={{
              x: -50,
              opacity: 0,
            }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            href="/register"
            className="get-started-button"
          >
            Get started
          </MotionLink>
        </div>
        <Image width={700} height={700} src={mainImage} alt="main-image" />
      </div>
      <Image
        className="bottom-left-image"
        width={150}
        height={150}
        src={lineImage}
        alt="main-image"
      />
    </>
  );
};

export default Home;
