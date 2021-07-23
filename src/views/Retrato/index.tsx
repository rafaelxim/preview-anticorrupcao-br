import React from "react";
import { motion } from "framer-motion";
import lapisImg from "../../assets/lapiss.png";
import starImg from "../../assets/star.png";
import portaRetratoImg from "../../assets/portaretrato.png";
import PaginationButton from "../../components/Buttons/PaginationButton";
import Header from "../../components/Header";
import "./styles.scss";

type Props = {
  onCompleteStep: (step: string) => void;
};

const Retrato: React.FC<Props> = ({ onCompleteStep }) => {
  return (
    <div className="retrato">
      <Header />
      <div className="retrato__content">
        <img src={lapisImg} alt="lapis" className="retrato__bgImage" />
        <div className="retrato__left">
          <motion.div
            animate={{
              left: 0,
              opacity: 1,
              transition: { duration: 0.8, delay: 0.5 },
            }}
            className="retrato__title"
          >
            Obrigado por sua participação no treinamento Anticorrupção.
          </motion.div>
          <motion.div
            animate={{
              top: 0,
              opacity: 1,
              transition: { duration: 0.8, delay: 0.8 },
            }}
            className="retrato__description"
          >
            Agora sim você ficou muito bem na foto, pois concluiu com sucesso
            esta atividade! <br />
            <br /> E por último, não se esqueça: você tem papel fundamental no
            combate e prevenção à corrupção. Caso identifique alguma das
            situações vistas neste curso ou outras que entenda ser duvidosas,
            não ignore: sinalize ao time de Compliance ou utilize o Canal
            Confidencial!
          </motion.div>
          <motion.div
            animate={{
              left: 0,
              opacity: 1,
              transition: { duration: 0.8, delay: 1.6 },
            }}
            className="retrato__closingText"
          >
            Você já pode fechar o curso. Para isso, clique no botão X do
            navegador.
          </motion.div>
        </div>
        <div className="retrato__right">
          <motion.img
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              transition: { duration: 0.8, delay: 2.4 },
            }}
            src={portaRetratoImg}
            alt="portaRetrato"
            className="retrato__portaRetrato"
          />
          <motion.img
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              transition: { duration: 0.4, delay: 3 },
            }}
            src={starImg}
            alt="star"
            className="retrato__star1"
          />
          <motion.img
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              transition: { duration: 0.8, delay: 3.3 },
            }}
            src={starImg}
            alt="star"
            className="retrato__star2"
          />
          <motion.img
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              transition: { duration: 0.8, delay: 3.6 },
            }}
            src={starImg}
            alt="star"
            className="retrato__star3"
          />
        </div>
      </div>
      <div className="retrato__actions">
        <PaginationButton
          mode="return"
          clickPaginateButton={() => onCompleteStep("retrato")}
        />
      </div>
    </div>
  );
};

export default Retrato;
