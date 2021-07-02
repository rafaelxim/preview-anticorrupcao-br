/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import celularImg from "../../assets/celular.png";
import smartphoneImg from "../../assets/smartphone.png";
import playImg from "../../assets/play.svg";
import smartphoneVideo from "../../assets/smartphoneVideo.mp4";
import "./styles.scss";
import PaginationButton from "../../components/Buttons/PaginationButton";

type Props = {
  returnHomeClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  onCompleteSmartPhone: (step: string) => void;
};

const Mobile: React.FC<Props> = ({ returnHomeClick, onCompleteSmartPhone }) => {
  const [currentView, setCurrentView] = useState(1);
  const [viewedVideo, setVideoView] = useState(false);
  const [isVideoVisible, setVideoVisible] = useState(false);

  return (
    <>
      {currentView === 1 && (
        <div className="mobile">
          <Header />
          <div className="mobile__content">
            <div className="mobile__left">
              <motion.p
                animate={{
                  opacity: 1,
                  left: 0,
                  transition: { duration: 1.2, delay: 2.8 },
                }}
                className="mobile__title"
              >
                BEM-VINDO AO NOSSO CURSO!
              </motion.p>
              <motion.p
                animate={{
                  top: 0,
                  opacity: 1,
                  transition: { duration: 1.2, delay: 3.5 },
                }}
                className="mobile__text"
              >
                Você já deve saber que confiança é a base de Integração do nosso
                time. Por isso, nos sentimos Bastante confortáveis para
                conversar com você sobre um tema delicado: a corrupção. Vamos
                então falar a respeito? <br />
                <br /> Veja a seguir como dividimos o conteúdo desta atividade:
                <br />
                <br /> - Descomplicando conceitos <br />- A lei anticorrupção é
                para todos <br />- Combatendo a corrupção na brMalls <br />- O
                papel de cada um <br />- Onde e com quem conversar sobre a
                corrupção
              </motion.p>
            </div>
            <div className="mobile__right">
              <div className="mobile__title2">
                <motion.span
                  animate={{
                    width: "100%",
                    transition: { duration: 1.2, delay: 2.2 },
                  }}
                >
                  INTRODUÇÃO
                </motion.span>
                <motion.div
                  animate={{
                    opacity: 1,
                    right: 0,
                    transition: { duration: 1.2, delay: 1 },
                  }}
                  className="mobile__mark"
                />
              </div>
              <div className="mobile__celularContainer">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, transition: { delay: 5.4 } }}
                  className="mobile__messageText"
                >
                  1 nova mensagem
                </motion.div>
                <motion.img
                  animate={{
                    top: 0,
                    opacity: 1,
                    transition: { duration: 1.2, delay: 4.2 },
                  }}
                  src={celularImg}
                  alt="celularImg"
                  className="mobile__celular"
                />
              </div>
            </div>
          </div>
          <div className="mobile__actions firstPage">
            <PaginationButton
              clickPaginateButton={returnHomeClick}
              mode="return"
            />
            <PaginationButton
              animation={{
                left: 0,
                opacity: 1,
                transition: { duration: 1, delay: 6 },
              }}
              clickPaginateButton={() => setCurrentView(2)}
              mode="forward"
            />
          </div>
        </div>
      )}

      {currentView === 2 && (
        <motion.div
          animate={{ opacity: 1, transition: { duration: 1 } }}
          className="mobile2"
        >
          {isVideoVisible && !viewedVideo && (
            <div className="mobile2__videoContainer">
              <video
                width="750"
                height="500"
                controls
                onEnded={() => setVideoView(true)}
              >
                <source src={smartphoneVideo} type="video/mp4" />
              </video>
            </div>
          )}

          <div className="mobile__title2">
            <motion.span
              animate={{
                width: "100%",
                transition: { duration: 1.2, delay: 2.2 },
              }}
            >
              DESCOMPLICANDO CONCEITOS
            </motion.span>
            <motion.div
              animate={{
                opacity: 1,
                right: 0,
                transition: { duration: 1.2, delay: 1 },
              }}
              className="mobile__mark"
            />
          </div>
          <motion.div
            animate={{
              top: 0,
              opacity: 1,
              transition: { duration: 1.2, delay: 3.2 },
            }}
            className="mobile2__smartContainer"
          >
            <img
              src={smartphoneImg}
              alt="smartphone"
              className="mobile2__smartphone"
            />
            {!viewedVideo && (
              <motion.img
                animate={{
                  opacity: [1, 0, 1],
                }}
                transition={{
                  duration: 0.8,
                  loop: Infinity,
                }}
                src={playImg}
                alt="playButtona"
                className="mobile2__play"
                onClick={() => setVideoVisible(true)}
              />
            )}
          </motion.div>
          <div className="mobile__actions secondPage">
            <PaginationButton
              clickPaginateButton={() => setCurrentView(1)}
              mode="return"
            />
            {viewedVideo && (
              <PaginationButton
                animation={{
                  left: 0,
                  opacity: 1,
                  transition: { duration: 1 },
                }}
                clickPaginateButton={() => onCompleteSmartPhone("mobile")}
                mode="forward"
              />
            )}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Mobile;
