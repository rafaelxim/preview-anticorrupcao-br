import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import portaRetrato from "../../assets/porta_retrato.png";
import monitor from "../../assets/monitor.png";
import fone from "../../assets/fone.png";
import tel from "../../assets/tel.png";
import paper01 from "../../assets/paper01.png";
import pencils from "../../assets/pencils.png";
import board from "../../assets/board.png";
import key from "../../assets/key.png";
import calc from "../../assets/calc.png";
import mouse from "../../assets/mouse.png";
import mobile from "../../assets/mobile.png";
import "./styles.scss";
// eslint-disable-next-line import/no-cycle
import { Steps } from "../../App";

type Props = {
  clickedItem: (item: string) => void;
  steps: Steps;
};

const Home: React.FC<Props> = ({ clickedItem, steps }) => {
  const [highlight, setHighlight] = useState(false);

  return (
    <div className="home">
      <Header />
      <div className="home__topItems">
        {highlight && !steps.mobile && (
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 1,
              loop: Infinity,
            }}
            className="home__mobileBlur"
          />
        )}

        {highlight && steps.mobile && !steps.monitor && (
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 1,
              loop: Infinity,
            }}
            className="home__monitorBlur"
          />
        )}

        {highlight && steps.monitor && !steps.pencils && (
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 1,
              loop: Infinity,
            }}
            className="home__pencilsBlur"
          />
        )}

        {highlight && steps.pencils && !steps.paper && (
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 1,
              loop: Infinity,
            }}
            className="home__paperBlur"
          />
        )}

        <motion.img
          animate={{ opacity: 1, top: 0, transition: { duration: 2 } }}
          className="home__portaRetrato"
          src={portaRetrato}
          alt="portaRetrato"
        />
        <motion.img
          animate={{
            opacity: 1,
            top: "22rem",
            transition: { duration: 2, delay: 1.3 },
          }}
          className="home__calc"
          src={calc}
          alt="calc"
        />
        <motion.img
          whileHover={steps.mobile && !steps.monitor ? { scale: 1.1 } : {}}
          className={`home__monitor ${steps.monitor ? "withBorder" : ""}`}
          src={monitor}
          alt="monitor"
          onClick={() =>
            steps.mobile && !steps.monitor ? clickedItem("monitor") : false
          }
          // onClick={() => clickedItem("monitor")}
        />
        <motion.img
          animate={{
            opacity: 1,
            top: "-8rem",
            transition: { duration: 2, delay: 1.5 },
          }}
          className="home__fone"
          src={fone}
          alt="fone"
        />
        <motion.img
          animate={{
            opacity: 1,
            top: 0,
            transition: { duration: 2, delay: 2.3 },
          }}
          className="home__tel"
          src={tel}
          alt="tel"
        />

        <motion.img
          animate={{
            opacity: 1,
            top: "26rem",
            transition: { duration: 2, delay: 0.7 },
          }}
          className="home__board"
          src={board}
          alt="board"
        />
        <motion.img
          animate={{
            opacity: 1,
            top: "26rem",
            transition: { duration: 2, delay: 0.7 },
          }}
          className="home__paper01"
          src={paper01}
          alt="paper01"
        />
        <motion.img
          animate={{
            opacity: 1,
            top: "24rem",
            transition: { duration: 2, delay: 0.3 },
          }}
          className={`home__pencils ${steps.pencils ? "withBorder" : ""}`}
          src={pencils}
          alt="pencils"
          onClick={
            () =>
              steps.monitor && !steps.pencils ? clickedItem("pencils") : false
            // clickedItem("pencils")
          }
        />
        <motion.img
          animate={{
            opacity: 1,
            top: "46rem",
            transition: { duration: 2, delay: 1.1 },
          }}
          className="home__key"
          src={key}
          alt="key"
        />
        <motion.img
          animate={{
            opacity: 1,
            top: "57rem",
            transition: { duration: 2, delay: 1.1 },
          }}
          className="home__mouse"
          src={mouse}
          alt="mouse"
        />
        <motion.img
          animate={{
            opacity: 1,
            top: "50rem",
            transition: { duration: 2, delay: 2 },
          }}
          className={`home__mobile ${steps.mobile ? "withBorder" : ""}`}
          src={mobile}
          alt="mobile"
          whileHover={steps.mobile ? {} : { scale: 1.3 }}
          onClick={() => (steps.mobile ? false : clickedItem("mobile"))}
        />
      </div>

      <motion.div
        animate={{
          opacity: 1,
          top: 0,
          transition: { duration: 2, delay: 2.3 },
        }}
        onAnimationComplete={() => setHighlight(true)}
        className="home__action"
      >
        CLIQUE NA ÁREA EM DESTAQUE
      </motion.div>
    </div>
  );
};

export default Home;
