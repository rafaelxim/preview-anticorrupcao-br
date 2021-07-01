import React from "react";
import { motion, useAnimation } from "framer-motion";
import brLogo from "../../assets/brMalls_logo.svg";
import Button1 from "../../components/Buttons/Button1";
import "./styles.scss";

type WelcomeProps = {
  handleClickIniciar: React.MouseEventHandler<HTMLButtonElement>;
};

const Welcome: React.FC<WelcomeProps> = ({
  handleClickIniciar,
}: WelcomeProps) => {
  const pageControl = useAnimation();
  const logoControl = useAnimation();
  const separatorControl = useAnimation();
  const separator2Control = useAnimation();
  const titleControl = useAnimation();
  const buttonControl = useAnimation();

  const separatorsSequence = async () => {
    separatorControl.start({
      marginRight: "13%",
      transition: {
        duration: 1,
      },
    });

    await separator2Control.start({
      marginLeft: "13%",
      transition: {
        duration: 1,
      },
    });
  };

  const sequence = async () => {
    await pageControl.start({
      top: 0,
    });

    await logoControl.start({
      top: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    });

    await separatorsSequence();
    await titleControl.start({
      width: "100%",
      transition: {
        duration: 1,
      },
    });

    buttonControl.start({
      top: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    });
  };

  sequence();

  return (
    <motion.div
      initial={{ top: "100vh" }}
      animate={pageControl}
      transition={{ duration: 0.7 }}
      className="welcome"
    >
      <motion.img
        initial={{ top: "20rem", opacity: 0 }}
        animate={logoControl}
        className="welcome__logo"
        src={brLogo}
        alt="logoBrmalls"
      />
      <motion.div
        initial={{
          marginRight: "100%",
        }}
        animate={separatorControl}
        className="welcome__separator"
      />
      <motion.div
        initial={{
          width: 0,
        }}
        animate={titleControl}
        className="welcome__mainTitle"
      >
        ANTICORRUPÇÃO
      </motion.div>
      <motion.div
        initial={{
          marginLeft: "100%",
        }}
        animate={separator2Control}
        className="welcome__separator2"
      />
      <motion.div
        className="welcome__action"
        initial={{
          top: "10rem",
          opacity: 0,
        }}
        animate={buttonControl}
      >
        <Button1 handleClick={handleClickIniciar} text="Iniciar" />
      </motion.div>
    </motion.div>
  );
};

export default Welcome;
