import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import noteImg from "../../assets/boardImgs/note1.png";
import foto03Img from "../../assets/boardImgs/foto_03.png";
import foto02Img from "../../assets/boardImgs/foto_02.png";
import foto01Img from "../../assets/boardImgs/foto_01.png";
import notebImg from "../../assets/boardImgs/noteb.png";
import babyBlockImg from "../../assets/boardImgs/babyblock.png";
import checkImg from "../../assets/boardImgs/check2.png";
import closeImg from "../../assets/close.svg";
import "./styles.scss";
import PaginationButton from "../../components/Buttons/PaginationButton";

const STEPS = {
  1: false,
  2: false,
  3: false,
  4: false,
  5: false,
};

type Props = {
  onCompleteStep: (step: string) => void;
};

const Paper: React.FC<Props> = ({ onCompleteStep }) => {
  const [currentModal, setCurrentModal] = useState<number | null>(null);
  const [stepsStatus, setStepsStatus] = useState(STEPS);
  const [step2choosen, setStep2Choosen] = useState<number | null>(null);
  const [step2Confirmed, setStep2Confirmed] = useState(false);
  const [step3choosen, setStep3Choosen] = useState<number | null>(null);
  const [step3Confirmed, setStep3Confirmed] = useState(false);
  const [step4choosen, setStep4Choosen] = useState<number | null>(null);
  const [step4Confirmed, setStep4Confirmed] = useState(false);
  const [step5SelectedPage, setStep5SelectedPage] = useState(1);

  const openModal = (modal: number) => {
    setCurrentModal(modal);
    setStepsStatus({ ...stepsStatus, [modal]: true });
  };

  const isAllStepsCompleted = () => {
    const steps = Object.values(stepsStatus);

    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < steps.length; index++) {
      if (!steps[index]) return false;
    }

    return true;
  };

  return (
    <div className="paper">
      <Header />
      {isAllStepsCompleted() && (
        <div className="paper__paginations">
          <PaginationButton
            mode="forward"
            clickPaginateButton={() => onCompleteStep("paper")}
          />
        </div>
      )}

      <div className="paper__titles">
        <motion.div
          animate={{
            left: 0,
            opacity: 1,
            transition: { delay: 2, duration: 1 },
          }}
          className="paper__title1"
        >
          <span>CLIQUE NAS ÁREAS EM DESTAQUE:</span>
        </motion.div>
        <div className="paper__title2">
          <motion.span
            animate={{
              width: "100%",
              transition: { delay: 1.5, duration: 0.8 },
            }}
          >
            O PAPEL DE CADA UM
          </motion.span>
          <motion.div
            animate={{
              right: 0,
              opacity: 1,
              transition: { delay: 0.8 },
            }}
            className="paper__mark"
          />
        </div>
      </div>
      <div className="paper__board">
        <motion.div
          animate={{
            top: 0,
            opacity: 1,
            transition: { delay: 3, duration: 0.8 },
          }}
          className="paper__boardItem"
          onClick={() => openModal(1)}
        >
          <img
            onClick={() => setCurrentModal(1)}
            src={noteImg}
            alt="noteImg"
            className="paper__note1"
          />
          <p className="paper__note1Text">
            Lembrete: estudar qual é o meu papel no combate à corrupção
          </p>
          {stepsStatus[1] && (
            <img src={checkImg} alt="check" className="paper__check1" />
          )}
        </motion.div>

        <motion.div
          animate={{
            top: 0,
            opacity: !stepsStatus[1] ? 0.5 : 1,
            transition: { delay: !stepsStatus[1] ? 3.8 : 0.5, duration: 0.8 },
          }}
          className="paper__boardItem"
        >
          <img
            onClick={() => (stepsStatus[1] ? openModal(2) : false)}
            src={foto02Img}
            alt="noteImg"
            className="paper__foto02"
          />
          <div className="paper__noteblock">
            <img
              onClick={() => (stepsStatus[1] ? openModal(2) : false)}
              src={notebImg}
              alt="notebImg"
              className="paper__notebImg"
            />
            <p>Resolver se vou no show</p>
          </div>
          {stepsStatus[2] && (
            <img src={checkImg} alt="check" className="paper__check2" />
          )}
        </motion.div>
        <motion.div
          animate={{
            top: 0,
            opacity: 1,
            transition: { delay: 4.6, duration: 0.8 },
          }}
          className="paper__boardItem"
        >
          <img
            src={babyBlockImg}
            alt="babyBlockImg"
            className="paper__bbBlock"
          />
        </motion.div>
        <motion.div
          animate={{
            top: 0,
            opacity: stepsStatus[2] ? 1 : 0.5,
            transition: { delay: stepsStatus[2] ? 0.5 : 5.4, duration: 0.8 },
          }}
          className="paper__boardItem"
        >
          <img
            onClick={() => (stepsStatus[2] ? openModal(3) : false)}
            src={foto01Img}
            alt="foto01Img"
            className="paper__foto01"
          />
          <div className="paper__noteblock mod2">
            <img
              onClick={() => (stepsStatus[2] ? openModal(3) : false)}
              src={notebImg}
              alt="notebImg"
              className="paper__notebImg"
            />
            <p>Definir a instituição de caridade</p>
          </div>
          {stepsStatus[3] && (
            <img src={checkImg} alt="check" className="paper__check3" />
          )}
        </motion.div>
        <motion.div
          animate={{
            top: 0,
            opacity: stepsStatus[3] ? 1 : 0.5,
            transition: { delay: stepsStatus[3] ? 0.5 : 6.2, duration: 0.8 },
          }}
          className={`paper__boardItem ${!stepsStatus[3] && `pending`}`}
        >
          <img
            onClick={() => (stepsStatus[3] ? openModal(4) : false)}
            src={foto03Img}
            alt="foto03Img"
            className="paper__foto03"
          />
          <div className="paper__noteblock mod3">
            <img
              onClick={() => (stepsStatus[3] ? openModal(4) : false)}
              src={notebImg}
              alt="notebImg"
              className="paper__notebImg"
            />
            <p>Atender a fiscalização</p>
          </div>
          {stepsStatus[4] && (
            <img src={checkImg} alt="check" className="paper__check4" />
          )}
        </motion.div>
        <motion.div
          animate={{
            top: 0,
            opacity: stepsStatus[4] ? 1 : 0.5,
            transition: { delay: stepsStatus[4] ? 0.5 : 7, duration: 0.8 },
          }}
          className="paper__boardItem"
        >
          <img
            onClick={() => (stepsStatus[4] ? openModal(5) : false)}
            src={noteImg}
            alt="noteImg"
            className="paper__note2"
          />
          <p className="paper__note2Text">Em caso de dúvidas, o que Fazer?</p>
          {stepsStatus[5] && (
            <img src={checkImg} alt="check" className="paper__check5" />
          )}
        </motion.div>
      </div>

      {currentModal === 1 && (
        <div className="paper__modal">
          <motion.div
            animate={{ scale: 1.0, transition: { duration: 1 } }}
            initial={{ scale: 0.2 }}
            className="paper__modalContent"
          >
            <div className="paper__modalLeft">
              <motion.img
                initial={{ rotate: 0, top: "30rem", opacity: 0 }}
                animate={{
                  rotate: "12deg",
                  top: "12rem",
                  opacity: 1,
                  transition: { duration: 0.8, delay: 0.5 },
                }}
                src={noteImg}
                alt="noteImg"
              />
              <motion.img
                initial={{ rotate: 0, top: "5rem", opacity: 0 }}
                animate={{
                  rotate: "-17deg",
                  top: "23rem",
                  opacity: 1,
                  transition: { duration: 0.8, delay: 1.5 },
                }}
                src={babyBlockImg}
                alt="babyBlockImg"
              />
              <motion.img
                initial={{ rotate: 0, top: "38rem", opacity: 0 }}
                animate={{
                  rotate: "16deg",
                  top: "56rem",
                  opacity: 1,
                  transition: { duration: 0.8, delay: 2.4 },
                }}
                src={babyBlockImg}
                alt="babyBlockImg"
              />
              <motion.img
                initial={{ rotate: 0, top: "36rem", opacity: 0 }}
                animate={{
                  rotate: "-10deg",
                  top: "54rem",
                  opacity: 1,
                  transition: { duration: 0.8, delay: 3 },
                }}
                src={noteImg}
                alt="noteImg"
              />
            </div>
            <div className="paper__modalRight">
              <motion.div
                initial={{ left: "-20rem", opacity: 0 }}
                animate={{
                  left: 0,
                  opacity: 1,
                  transition: { duration: 0.8, delay: 3.5 },
                }}
                className="paper__modalBold"
              >
                Meus deveres são:
              </motion.div>
              <motion.ul
                initial={{ top: "-20rem", opacity: 0 }}
                animate={{
                  top: 0,
                  opacity: 1,
                  transition: { duration: 1, delay: 4.2 },
                }}
                className="paper__modalList"
              >
                <li>Conhecer e cumprir o Código de Ética da brMalls;</li>
                <li>Conhecer e cumprir a Política Anticorrupção da brMalls;</li>
                <li>
                  Conhecer e cumprir as legislações vigentes, principalmente
                  aquelas que se referem ao nosso negócio;
                </li>
                <li>
                  Registrar no Canal Confidencial quaisquer indícios de violação
                  da legislação vigente, do Código de Ética e de nossas
                  políticas e procedimentos.
                </li>
              </motion.ul>
              <motion.div
                initial={{ left: "-20rem", opacity: 0 }}
                animate={{
                  left: 0,
                  opacity: 1,
                  transition: { duration: 0.8, delay: 5 },
                }}
                className="paper__modalBold"
              >
                Em casos de dúvida, tenho um canal de diálogo aberto com o time
                de Compliance.
              </motion.div>
            </div>

            <img
              src={closeImg}
              alt="closeIcon"
              onClick={() => setCurrentModal(null)}
              className="paper__modalClose"
            />
          </motion.div>
        </div>
      )}

      {currentModal === 2 && (
        <div className="paper__modal">
          <motion.div
            animate={{ scale: 1.0, transition: { duration: 1 } }}
            initial={{ scale: 0.2 }}
            className="paper__modalContent block"
          >
            <div className="paper__modalQuestion">
              <motion.img
                animate={{
                  rotate: "-22deg",
                  top: "-3rem",
                  opacity: 1,
                  transition: { duration: 2, delay: 0.8 },
                }}
                initial={{ top: "15rem", rotate: 0, opacity: 0 }}
                src={foto02Img}
                alt="foto02Img"
                className="paper__modal2Img"
              />
              <motion.p
                initial={{ left: "20rem", opacity: 0 }}
                animate={{
                  left: 0,
                  opacity: 1,
                  transition: { duration: 0.8, delay: 1.5 },
                }}
                className="paper__modalQuestionText"
              >
                Um fornecedor com o qual você possui relacionamento comercial
                recorrente, ofereceu como presente, um convite para um show.
                Diante desta situação, o que você deve fazer?
              </motion.p>
            </div>
            <motion.div
              initial={{ left: "-10rem", opacity: 0 }}
              animate={{
                left: 0,
                opacity: 1,
                transition: { duration: 0.8, delay: 2.3 },
              }}
              className="paper__modalAnswers"
            >
              <div
                onClick={() => setStep2Choosen(1)}
                className={`paper__answer ${
                  step2choosen === 1 && !step2Confirmed && "choosen"
                }`}
              >
                Aceitar o convite, uma vez que se trata de um fornecedor
                relevante para a Companhia.
              </div>
              <div
                onClick={() => setStep2Choosen(2)}
                className={`paper__answer ${
                  step2choosen === 2 && !step2Confirmed && "choosen"
                }`}
              >
                Aceitar o convite e sortá-lo aos membros da equipe de sua área
              </div>
              <div
                onClick={() => setStep2Choosen(3)}
                className={`paper__answer ${
                  step2choosen === 3 && !step2Confirmed && "choosen"
                } ${step2Confirmed && "correct"}`}
              >
                Recusar gentilmente o convite, uma vez que o evento não possui
                nenhuma relação com o negócio da brMalls.
              </div>
            </motion.div>
            {!step2Confirmed && step2choosen && (
              <motion.div
                initial={{ scale: 0.2, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  transition: { duration: 1, delay: 0 },
                }}
                className="paper__actions"
              >
                <button type="button" onClick={() => setStep2Confirmed(true)}>
                  Confirmar
                </button>
              </motion.div>
            )}
            <img
              src={closeImg}
              alt="closeIcon"
              onClick={() => setCurrentModal(null)}
              className="paper__modalClose"
            />
          </motion.div>
        </div>
      )}

      {currentModal === 3 && (
        <div className="paper__modal">
          <motion.div
            animate={{ scale: 1.0, transition: { duration: 1 } }}
            initial={{ scale: 0.2 }}
            className="paper__modalContent block"
          >
            <div className="paper__modalQuestion">
              <motion.img
                animate={{
                  rotate: "-22deg",
                  top: "-3rem",
                  opacity: 1,
                  transition: { duration: 2, delay: 0.8 },
                }}
                initial={{ top: "15rem", rotate: 0, opacity: 0 }}
                src={foto01Img}
                alt="foto01Img"
                className="paper__modal2Img"
              />
              <motion.p
                initial={{ left: "20rem", opacity: 0 }}
                animate={{
                  left: 0,
                  opacity: 1,
                  transition: { duration: 0.8, delay: 1.5 },
                }}
                className="paper__modalQuestionText"
              >
                Você deseja realizar uma ação social no shopping em que atua,
                realizando uma campanha de arrecadação de alimentos para
                posterior doação a uma instituição de Caridade. Como você deve
                escolher a instituição que será beneficiada nesta campanha?
              </motion.p>
            </div>
            <motion.div
              initial={{ left: "-10rem", opacity: 0 }}
              animate={{
                left: 0,
                opacity: 1,
                transition: { duration: 0.8, delay: 2.3 },
              }}
              className="paper__modalAnswers"
            >
              <div
                onClick={() => setStep3Choosen(1)}
                className={`paper__answer sm ${
                  step3choosen === 1 && !step3Confirmed && "choosen"
                }`}
              >
                Utilizo como único e principal critério a proximidade da
                instituição com o shopping em que atuo, para beneficiar a
                comunidade local.
              </div>
              <div
                onClick={() => setStep3Choosen(2)}
                className={`paper__answer sm ${
                  step3choosen === 2 && !step3Confirmed && "choosen"
                } ${step3Confirmed && "correct"} `}
              >
                Entro em contato com a área de Compliance enviando toda
                documentação necessária para que a entidade seja avaliada em
                relação a sua integridade - Diligência.
              </div>
              <div
                onClick={() => setStep3Choosen(3)}
                className={`paper__answer sm ${
                  step3choosen === 3 && !step3Confirmed && "choosen"
                }`}
              >
                Seleciono qualquer entidade, desde que esta não tenha vínculo
                com partidos políticos.
              </div>
            </motion.div>
            {!step3Confirmed && step3choosen && (
              <motion.div
                initial={{ scale: 0.2, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  transition: { duration: 1, delay: 0 },
                }}
                className="paper__actions"
              >
                <button type="button" onClick={() => setStep3Confirmed(true)}>
                  Confirmar
                </button>
              </motion.div>
            )}
            <img
              src={closeImg}
              alt="closeIcon"
              onClick={() => setCurrentModal(null)}
              className="paper__modalClose"
            />
          </motion.div>
        </div>
      )}

      {currentModal === 4 && (
        <div className="paper__modal">
          <motion.div
            animate={{ scale: 1.0, transition: { duration: 1 } }}
            initial={{ scale: 0.2 }}
            className="paper__modalContent block"
          >
            <div className="paper__modalQuestion wpt">
              <motion.img
                animate={{
                  rotate: "-22deg",
                  top: "-3rem",
                  opacity: 1,
                  transition: { duration: 2, delay: 0.8 },
                }}
                initial={{ top: "15rem", rotate: 0, opacity: 0 }}
                src={foto03Img}
                alt="foto03Img"
                className="paper__modal2Img"
              />
              <motion.p
                initial={{ left: "20rem", opacity: 0 }}
                animate={{
                  left: 0,
                  opacity: 1,
                  transition: { duration: 0.8, delay: 1.5 },
                }}
                className="paper__modalQuestionText"
              >
                Em uma fiscalização, um agente público identificou uma
                irregularidade passível de multa. Ao relatar a irregularidade, o
                auditor tomou a iniciativa de pedir uma quantia em dinheiro
                inferior a multa para não atuar a empresa. Neste caso, qual
                conduta a Companhia espera que você tenha?
              </motion.p>
            </div>
            <motion.div
              initial={{ left: "-10rem", opacity: 0 }}
              animate={{
                left: 0,
                opacity: 1,
                transition: { duration: 0.8, delay: 2.3 },
              }}
              className="paper__modalAnswers"
            >
              <div
                onClick={() => setStep4Choosen(1)}
                className={`paper__answer sm ${
                  step4choosen === 1 && !step4Confirmed && "choosen"
                } `}
              >
                Não aceitar a proposta do agente público e denunciá-lo ao Órgão
                Competente.
              </div>
              <div
                onClick={() => setStep4Choosen(2)}
                className={`paper__answer sm ${
                  step4choosen === 2 && !step4Confirmed && "choosen"
                }`}
              >
                Aceitar a proposta do agente público, pois esta representa uma
                boa economia para a empresa.
              </div>
              <div
                className={`paper__answer sm ${
                  step4choosen === 3 && !step4Confirmed && "choosen"
                } ${step4Confirmed && "correct"}`}
                onClick={() => setStep4Choosen(3)}
              >
                Não aceitar a proposta, sinalizando o ocorrido a área de
                Compliance para que, em conjunto com a área Jurídica, o fato
                seja apurado e a medida a ser adotada seja deliberada.
              </div>
            </motion.div>
            {!step4Confirmed && step4choosen && (
              <motion.div
                initial={{ scale: 0.2, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  transition: { duration: 1, delay: 0 },
                }}
                className="paper__actions"
              >
                <button type="button" onClick={() => setStep4Confirmed(true)}>
                  Confirmar
                </button>
              </motion.div>
            )}
            <img
              src={closeImg}
              alt="closeIcon"
              onClick={() => setCurrentModal(null)}
              className="paper__modalClose"
            />
          </motion.div>
        </div>
      )}

      {currentModal === 5 && (
        <div className="paper__modal">
          <motion.div
            animate={{ scale: 1.0, transition: { duration: 1 } }}
            initial={{ scale: 0.2 }}
            className="paper__modalContent"
          >
            <div className="paper__modalLeft">
              <motion.img
                initial={{ rotate: 0, top: "30rem", opacity: 0 }}
                animate={{
                  rotate: "12deg",
                  top: "12rem",
                  opacity: 1,
                  transition: { duration: 0.8, delay: 0.5 },
                }}
                src={noteImg}
                alt="noteImg"
              />
              <motion.img
                initial={{ rotate: 0, top: "5rem", opacity: 0 }}
                animate={{
                  rotate: "-17deg",
                  top: "23rem",
                  opacity: 1,
                  transition: { duration: 0.8, delay: 1.5 },
                }}
                src={babyBlockImg}
                alt="babyBlockImg"
              />
              <motion.img
                initial={{ rotate: 0, top: "38rem", opacity: 0 }}
                animate={{
                  rotate: "16deg",
                  top: "56rem",
                  opacity: 1,
                  transition: { duration: 0.8, delay: 2.4 },
                }}
                src={babyBlockImg}
                alt="babyBlockImg"
              />
              <motion.img
                initial={{ rotate: 0, top: "36rem", opacity: 0 }}
                animate={{
                  rotate: "-10deg",
                  top: "54rem",
                  opacity: 1,
                  transition: { duration: 0.8, delay: 3 },
                }}
                src={noteImg}
                alt="noteImg"
              />
            </div>

            {step5SelectedPage === 1 && (
              <div className="paper__modalRight">
                <motion.div
                  initial={{ left: "-20rem", opacity: 0 }}
                  animate={{
                    left: 0,
                    opacity: 1,
                    transition: { duration: 0.8, delay: 1.5 },
                  }}
                  className="paper__modalBold"
                >
                  Caso perceba algumas das situações a seguir ao se relacionar
                  com terceiros…
                </motion.div>
                <motion.ul
                  initial={{ top: "-20rem", opacity: 0 }}
                  animate={{
                    top: 0,
                    opacity: 1,
                    transition: { duration: 1, delay: 2.3 },
                  }}
                  className="paper__modalList with-exclamation"
                >
                  <li>
                    Histórico de envolvimento com situações de suborno,
                    corrupção ou outra atividade ilícita;
                  </li>
                  <li>
                    Recusa a inclusão de cláusula anticorrupção em contrato e
                    termos que atestam o cumprimento de práticas anticorrupção;
                  </li>
                  <li>
                    Solicitação de pagamentos adiantados para realização dos
                    serviços;
                  </li>
                  <li>
                    Se houver uma recomendação por um funcionário/agente público
                    ou de alguém que possui relacionamento próximo com o
                    Governo;
                  </li>
                </motion.ul>
              </div>
            )}

            {step5SelectedPage === 2 && (
              <div className="paper__modalRight">
                <motion.ul
                  initial={{ top: "-20rem", opacity: 0 }}
                  animate={{
                    top: 0,
                    opacity: 1,
                    transition: { duration: 1, delay: 0 },
                  }}
                  className="paper__modalList with-exclamation"
                >
                  <li>
                    Fornecimento de documentos duvidosos como, por exemplo,
                    notas fiscais e boletos bancários;
                  </li>
                  <li>
                    Se administrado por funcionário/agente público ou se este
                    participa do quadro societário da empresa;
                  </li>
                  <li>
                    Proposta de operação com PPE (Pessoa Politicamente Exposta)
                    Cobrança de taxas referentes aos seus serviços em desacordo
                    com a prática de mercado;
                  </li>
                  <li>Exigência de pagamento de serviços em dinheiro;</li>
                </motion.ul>
                <motion.div
                  initial={{ left: "-20rem", opacity: 0 }}
                  animate={{
                    left: 0,
                    opacity: 1,
                    transition: { duration: 0.8, delay: 1 },
                  }}
                  className="paper__modalBold"
                >
                  Entre em contato imediatamente com a área de Compliance ou
                  faça o registro no Canal Confidencial.
                </motion.div>
              </div>
            )}

            <img
              src={closeImg}
              alt="closeIcon"
              onClick={() => setCurrentModal(null)}
              className="paper__modalClose"
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.8, delay: 3 },
              }}
              className="paper__actions2"
            >
              <span
                onClick={() => setStep5SelectedPage(1)}
                className={`paper__ball ${
                  step5SelectedPage === 1 && "selected"
                }`}
              />
              <span
                onClick={() => setStep5SelectedPage(2)}
                className={`paper__ball ${
                  step5SelectedPage === 2 && "selected"
                }`}
              />
            </motion.div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Paper;
