import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import lapisImg from "../../assets/lapis.png";
import paperImg from "../../assets/paper.png";
import moneyHandImg from "../../assets/money_hand.svg";
import stakeholders from "../../assets/stakeholders.svg";
import trofeuImg from "../../assets/trofeu.svg";
import tracosImg from "../../assets/tracos.svg";
import money2img from "../../assets/money2.svg";
import tracos2 from "../../assets/tracos2.svg";
import air from "../../assets/air.svg";
import rpImg from "../../assets/rp.svg";
import "./styles.scss";
import PaginationButton from "../../components/Buttons/PaginationButton";

type Props = {
  onCompleteStep: (step: string) => void;
  onReturnHome: () => void;
};

const Pencils: React.FC<Props> = ({ onCompleteStep, onReturnHome }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const onClickForward = () => {
    if (currentPage === 6) {
      onCompleteStep("pencils");
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  const onClickBack = () => {
    if (currentPage === 1) {
      onReturnHome();
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="pencils">
      <img className="pencils__lapis" src={lapisImg} alt="lapis" />
      <Header />
      <div className="pencils__content">
        <div className="pencils__titles">
          <div className="pencils__title2">
            <motion.span
              animate={{
                width: "100%",
                transition: { duration: 1, delay: 0.6 },
              }}
            >
              COMBATENDO A CORRUPÇÃO NA brMalls
            </motion.span>
            <motion.div
              animate={{
                opacity: 1,
                right: 0,
                transition: { duration: 0.8 },
              }}
              className="pencils__mark"
            />
          </div>
        </div>
        <motion.div
          animate={{
            top: 0,
            opacity: 1,
            transition: { duration: 1, delay: 1.2 },
          }}
          className="pencils__bookContainer"
        >
          {/* ------------------------- PART 1 ------------------------ */}
          {currentPage === 1 && (
            <div className="pencils__part">
              <div className="pencils__page left">
                <motion.div
                  animate={{
                    left: 0,
                    opacity: 1,
                    transition: { duration: 0.7, delay: 2.2 },
                  }}
                  className="pencils__pageTitle fromLeft"
                >
                  Mas e na brMalls?
                </motion.div>
                <motion.div
                  animate={{
                    top: 0,
                    opacity: 1,
                    transition: { duration: 0.8, delay: 2.6 },
                  }}
                  className="pencils__pageParagraph halfPage"
                >
                  Como será que nós atuamos no combate e prevenção à corrupção?
                </motion.div>
                <div className="pencils__pageImgContainer">
                  <motion.img
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.8, delay: 3.4 },
                    }}
                    className="pencils__fadeIn"
                    src={moneyHandImg}
                    alt="money hand"
                  />
                </div>
              </div>
              <div className="pencils__page right">
                <motion.div
                  animate={{
                    top: 0,
                    opacity: 1,
                    transition: { duration: 0.8, delay: 4 },
                  }}
                  className="pencils__pageParagraph"
                >
                  Praticamos os mais altos padrões éticos e nos preocupamos e
                  cuidamos para sermos reconhecidos como uma empresa que preza
                  pela ética e integridade em suas operações. <br />
                  <br /> Por isso, temos tolerância zero para práticas ilícitas
                  em nossas operações.
                </motion.div>
              </div>
            </div>
          )}

          {/* ------------------------- END PART 1 ------------------------ */}

          {/* ------------------------- PART 2 ------------------------ */}
          {currentPage === 2 && (
            <div className="pencils__part">
              <div className="pencils__page left">
                <div className="pencils__pageImgContainer">
                  <motion.img
                    animate={{
                      opacity: 1,
                      transition: { duration: 1, delay: 0.8 },
                    }}
                    className="pencils__fadeIn"
                    src={trofeuImg}
                    alt="money hand"
                  />
                </div>
                <motion.div
                  animate={{
                    top: 0,
                    opacity: 1,
                    transition: { duration: 0.8, delay: 1.5 },
                  }}
                  className="pencils__pageParagraph"
                >
                  Além disso acreditamos que nossos resultados devem ser
                  baseados na qualidade dos serviços que oferecemos aos nossos
                  clientes e não em práticas de negócios antiéticas ou ilegais.
                </motion.div>
              </div>
              <div className="pencils__page right">
                <motion.div
                  animate={{
                    top: 0,
                    opacity: 1,
                    transition: { duration: 0.8, delay: 2.2 },
                  }}
                  className="pencils__pageParagraph"
                >
                  E por fim, valorizamos nossa reputação frente aos nossos{" "}
                  <span className="pencils__asterisk">stakeholders*</span> e por
                  isso não toleramos práticas corruptas em nossos negócios e
                  relacionamentos.
                </motion.div>
                <div className="pencils__pageImgContainer">
                  <motion.img
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.8, delay: 2.9 },
                    }}
                    className="pencils__fadeIn"
                    src={stakeholders}
                    alt="money hand"
                  />
                </div>
                <motion.div
                  animate={{
                    top: 0,
                    opacity: 1,
                    transition: { duration: 0.8, delay: 3.4 },
                  }}
                  className="pencils__pageParagraph asterisk"
                >
                  <b>*Stakeholders:</b> Agentes internos ou externos que
                  influenciam ou sofrem influência da empresa.
                </motion.div>
              </div>
            </div>
          )}

          {/* ------------------------- END PART 2 ------------------------ */}

          {/* ------------------------- PART 3 ------------------------ */}
          {currentPage === 3 && (
            <div className="pencils__part">
              <div className="pencils__page left">
                <motion.div
                  animate={{
                    top: 0,
                    opacity: 1,
                    transition: { duration: 0.8, delay: 0.8 },
                  }}
                  className="pencils__pageParagraph p3"
                >
                  Em conformidade com a Lei Anticorrupção, a brMalls determina
                  diretrizes que devem ser observadas por nossos colaboradores,
                  tais como:
                </motion.div>
                <div className="pencils__pageImgContainer p3">
                  <motion.div
                    animate={{
                      width: "100%",
                      transition: { duration: 1.8, delay: 1.5 },
                    }}
                    className="pencils__curtain"
                  >
                    <motion.img
                      src={tracosImg}
                      alt="tracos"
                      className="pencils__tracosImg"
                    />
                    <motion.img
                      animate={{
                        opacity: 1,
                        transition: { duration: 0.8, delay: 4.7 },
                      }}
                      src={money2img}
                      alt="money hand"
                      className="pencils__money2img"
                    />
                  </motion.div>
                </div>
              </div>
              <div className="pencils__page right">
                <motion.div
                  animate={{
                    opacity: 1,
                    left: 0,
                    transition: { duration: 0.8, delay: 5.2 },
                  }}
                  className="pencils__pageTitle fromLeft sm no-margin-top"
                >
                  Brindes e Presentes
                </motion.div>
                <motion.div
                  animate={{
                    opacity: 1,
                    top: 0,
                    transition: { duration: 0.8, delay: 5.8 },
                  }}
                  className="pencils__pageParagraph small2"
                >
                  <ul>
                    <li>
                      Não receber ou oferecer hospitalidades, viagens,
                      entretenimento, presentes, brindes, ou qualquer coisa de
                      valor para outros colaboradores, representantes, sócios e
                      terceiros que possa afetar, beneficiar ou facilitar
                      negócios e decisões - salvo o caso de brindes com valor
                      máximo de R$ 100.
                    </li>
                    <li>
                      O Recebimento de brindes e/ou presentes deve ser
                      comunicado a área de Compliance.
                    </li>
                  </ul>
                </motion.div>
                <div className="pencils__pageImgContainer p3r">
                  <motion.div
                    animate={{
                      width: "100%",
                      transition: { duration: 1.8, delay: 3.3 },
                    }}
                    className="pencils__curtain2"
                  >
                    <img
                      src={tracos2}
                      alt="tracos2"
                      className="pencils__tracos2"
                    />
                    <motion.img
                      animate={{
                        left: 0,
                        opacity: 1,
                        transition: { duration: 1, delay: 4 },
                      }}
                      src={air}
                      alt="air"
                      className="pencils__air"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          )}
          {/* ------------------------- END PART 3 ------------------------ */}

          {/* ------------------------- PART 4 ------------------------ */}

          {currentPage === 4 && (
            <div className="pencils__part">
              <div className="pencils__page left">
                <motion.div
                  animate={{
                    left: 0,
                    opacity: 1,
                    transition: { duration: 0.8, delay: 0.8 },
                  }}
                  className="pencils__pageTitle fromLeft sm"
                >
                  Patrocínios e Doações
                </motion.div>
                <motion.div
                  animate={{
                    opacity: 1,
                    top: 0,
                    transition: { duration: 0.8, delay: 1.6 },
                  }}
                  className="pencils__pageParagraph small"
                >
                  <ul>
                    <li>
                      Não é permitido a concessão de patrocínios e/ou doações em
                      troca de benefício ou favorecimentos indevidos para a
                      brMalls ou a si próprio;
                    </li>
                    <li>
                      Não é autorizado realizar doações ou contribuições em nome
                      da brMalls a sindicatos, campanhas políticas e/ou
                      candidatos a cargos públicos e também para agentes e
                      funcionários públicos;
                    </li>
                    <li>
                      Todo e qualquer patrocínio ou doação deve ser comunicado
                      previamente a área de Compliance.
                    </li>
                  </ul>
                </motion.div>
              </div>
              <div className="pencils__page right">
                <motion.div
                  animate={{
                    opacity: 1,
                    left: 0,
                    transition: { duration: 0.8, delay: 2.4 },
                  }}
                  className="pencils__pageTitle fromLeft sm"
                >
                  Diligências de Terceiros
                </motion.div>
                <motion.div
                  animate={{
                    opacity: 1,
                    top: 0,
                    transition: { duration: 0.8, delay: 3 },
                  }}
                  className="pencils__pageParagraph small"
                >
                  <ul>
                    <li>
                      Para garantir que a brMalls se relacione somente com
                      terceiros idôneos e qualificados, é necessário que estes
                      sejam submetidos a uma avaliação - conduzida por
                      Compliance - anteriormente ao estabelecimento de qualquer
                      relação comercial.
                    </li>
                    <li>
                      Caso irregularidades sejam identificadas, deve-se
                      verificar a veracidade dos fatos e os riscos do negócio em
                      questão, bem como submeter o resultado da avaliação a
                      procedimentos adicionais de análise, aprovação e
                      monitoramento.
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          )}

          {/* ------------------------- END PART 4 ------------------------ */}

          {/* ------------------------- PART 5 ------------------------ */}
          {currentPage === 5 && (
            <div className="pencils__part">
              <div className="pencils__page left">
                <motion.div
                  animate={{
                    opacity: 1,
                    left: 0,
                    transition: { duration: 0.8, delay: 0.8 },
                  }}
                  className="pencils__pageTitle fromLeft sm2"
                >
                  Relacionamento com o Poder Público
                </motion.div>
                <motion.div
                  animate={{
                    opacity: 1,
                    top: 0,
                    transition: { duration: 0.8, delay: 1.6 },
                  }}
                  className="pencils__pageParagraph"
                >
                  <ul>
                    <li>
                      Não é permitida a realização de qualquer pagamento
                      facilitador em seu nome ou em nome da brMalls.
                    </li>
                    <li>
                      É proibido ocultar ou manipular informações solicitadas
                      pelos agentes e/ou funcionários públicos, bem como
                      dificultar quaisquer investigações ou fiscalizações.
                    </li>
                  </ul>
                </motion.div>
                <div className="pencils__pageImgContainer">
                  <motion.img
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.8, delay: 2.2 },
                    }}
                    src={rpImg}
                    alt="rp"
                    className="pencils__rpImg"
                  />
                </div>
              </div>
              <div className="pencils__page right">
                <motion.div
                  animate={{
                    opacity: 1,
                    left: 0,
                    transition: { duration: 0.8, delay: 3 },
                  }}
                  className="pencils__pageTitle fromLeft sm2"
                >
                  Reuniões com Agentes Públicos, inclusive atendimento de
                  fiscalizações devem:
                </motion.div>
                <motion.div
                  animate={{
                    opacity: 1,
                    top: 0,
                    transition: { duration: 0.8, delay: 4 },
                  }}
                  className="pencils__pageParagraph"
                >
                  <ul>
                    <li>
                      Preferencialmente ser realizas nas dependências do Órgão
                      Público;
                    </li>
                    <li>Ser registradas em agenda oficial e ata de reunião;</li>
                    <li>
                      Preferencialmente ser realizar na presença de dois
                      colaboradores brMalls capacitados e autorizados pelo
                      Jurídico;
                    </li>
                    <li>Ser comunicadas previamente a Compliance.</li>
                  </ul>
                </motion.div>
              </div>
            </div>
          )}
          {/* ------------------------- END PART 5 ------------------------ */}

          {/* ------------------------- PART 6 ------------------------ */}
          {currentPage === 6 && (
            <div className="pencils__part">
              <div className="pencils__page left">
                <motion.div
                  animate={{
                    opacity: 1,
                    left: 0,
                    transition: { duration: 0.8, delay: 0.8 },
                  }}
                  className="pencils__pageTitle fromLeft sm2"
                >
                  Exatidão de Livros, Registros e Documentos
                </motion.div>
                <motion.div
                  animate={{
                    opacity: 1,
                    top: 0,
                    transition: { duration: 0.8, delay: 1.6 },
                  }}
                  className="pencils__pageParagraph"
                >
                  <ul>
                    <li>
                      Não é permitida a falsificação de livros e registros
                      contábeis, ou qualquer declaração falsa ou omissões de
                      fatos relevantes, objetivando dissimular ou ocultar
                      quaisquer pagamentos realizados ou recebidos.
                    </li>
                    <li>
                      Não é permitida a fraude de documentos, sejam internos ou
                      públicos da Companhia.
                    </li>
                  </ul>
                </motion.div>
              </div>
              <div className="pencils__page right">
                <motion.img
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.8, delay: 2.2 },
                  }}
                  src={paperImg}
                  alt="rp"
                  className="pencils__lsImg"
                />
              </div>
            </div>
          )}
          {/* ------------------------- END PART 6 ------------------------ */}
        </motion.div>
      </div>

      <div className="pencils__actions">
        <PaginationButton
          clickPaginateButton={() => onClickBack()}
          mode="return"
        />
        <PaginationButton
          clickPaginateButton={() => onClickForward()}
          mode="forward"
        />
      </div>
    </div>
  );
};

export default Pencils;
