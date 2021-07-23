import React from "react";
import { motion } from "framer-motion";
import PaginationButton from "../../components/Buttons/PaginationButton";
import Header from "../../components/Header";
import callCenterImg from "../../assets/callcenter.png";
import phoneIcon from "../../assets/phone-icon.svg";
import arrowIcon from "../../assets/arrow-icon.svg";
import "./styles.scss";

type Props = {
  onCompleteStep: (step: string) => void;
};

const Phone: React.FC<Props> = ({ onCompleteStep }) => {
  return (
    <div className="phone">
      <Header />
      <div className="phone__content">
        <div className="phone__left">
          <motion.div
            animate={{
              opacity: 1,
              top: 0,
              transition: { delay: 2, duration: 0.8 },
            }}
            className="phone__description"
          >
            A brMalls mantém um Canal Confidencial para um Canal Confidencial
            para o recebimento e direcionamento de denúncias relacionadas a
            condutas antiéticas ou que violem a legislação vigente. O canal é
            administrado por uma empresa especializada que garante o anonimato e
            confidencialidade do denunciante e previne qualquer retaliação que
            poderia ocorrer. <br />
            <br /> Valorizamos a transparência em nossas relações, por isso,
            caso algum colaborador, fornecedor ou terceiro descumpra algum item
            do Código de Ética ou das políticas da brMalls, é seu dever utilizar
            o Canal Confidencial e relatar o ocorrido. Estes casos serão
            tratados de forma diferenciada e sigilosa.
          </motion.div>
        </div>
        <div className="phone__right">
          <div className="phone__title2">
            <motion.span
              animate={{
                width: "100%",
                transition: { delay: 1.2, duration: 0.8 },
              }}
            >
              ONDE E COM QUEM CONVERSAR SOBRE CORRUPÇÃO
            </motion.span>
            <motion.div
              animate={{
                right: 0,
                opacity: 1,
                transition: { delay: 0.5, duration: 0.8 },
              }}
              className="phone__mark"
            />
          </div>
          <div className="phone__rightUp">
            <motion.div
              animate={{
                left: 0,
                opacity: 1,
                transition: { delay: 2.8, duration: 0.8 },
              }}
              className="phone__description2"
            >
              Caso você observe desvios às diretrizes do Código de Ética ou
              deste treinamento, reporte ao Canal Confidencial por meio dos
              canais a seguir:
            </motion.div>
            <div className="phone__descImg">
              <motion.img
                initial={{ scale: 0 }}
                animate={{
                  scale: 1,
                  transition: { delay: 3.5, duration: 0.6 },
                }}
                src={callCenterImg}
                alt="callcenter"
              />
            </div>
          </div>

          <motion.div
            animate={{
              bottom: 0,
              opacity: 1,
              transition: { delay: 4.1, duration: 0.6 },
            }}
            className="phone__rightBottom"
          >
            <div className="phone__tel">
              <img src={phoneIcon} alt="icone phone" />
              <span>0800 777 0784</span>
            </div>
            <div className="phone__site">
              <img src={arrowIcon} alt="arrrow icone" />
              <span>www.canalconfidencial.com.br/brmalls</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="phone__actions">
        <PaginationButton
          animation={{
            opacity: 1,
            transition: { delay: 4.7, duration: 0.6 },
          }}
          mode="forward"
          clickPaginateButton={() => onCompleteStep("phone")}
        />
      </div>
    </div>
  );
};

export default Phone;
