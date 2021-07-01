import React, { useState } from "react";
import imacImg from "../../assets/imac.png";
import closeIcn from "../../assets/close.svg";
import checkIcn from "../../assets/double-check.svg";
import Header from "../../components/Header";
import "./styles.scss";
import PaginationButton from "../../components/Buttons/PaginationButton";

const QUESTIONS = [
  {
    question: "O que é a lei anticorrupção no Brasil?",
    answer:
      "A lei 12.846, chamada de Lei Anticorrupção, vigora no Brasil desde 2014. É ela que estabelece a responsabilidade civil e administrativa das empresas em caso de práticas ilícitas à administração pública, nacional ou estrangeira. Esta lei é aplicável as empresas que possuem sede, filiais ou representação no Brasil, e seus dirigentes, administradores e pessoas que participem do ato ilícito.",
    done: false,
  },
  {
    question: "O que são atos ilícitos de acordo com a lei?",
    answer: `<ul>
    <li>
      Prometer, oferecer ou dar, direta ou indiretamente, vantagem indevida
      a agente público ou terceiros a ele relacionados
    </li>
    <li>
      Financiar, custear, patrocinar ou de qualquer modo facilitar, a
      prática de atos ilícitos;
    </li>
    <li>
      Utilizar pessoa física ou jurídica para ocultar ou dissimular seus
      reais interesses ou a identidade dos beneficiários do atos praticados
      (também conhecidos como “laranjas”);
    </li>
    <li>Fraudar licitações e contratos públicos;</li>
    <li>      
       Dificultar quaisquer investigações ou fiscalizações de órgãos,
      entidades ou agentes públicos.
    </li>
  </ul>`,
    done: false,
  },
  {
    question: "Quais são as penalidades em caso de corrupção?",
    answer: `<ul>
      <li>Proibição de receber incentivos, subsídios ou empréstimos de órgãos ou entidades públicas e de instituições financeiras públicas;</li>
      <li>Suspensão ou interdição parcial das atividades da empresa;</li>
      <li>Extinção dos bens, direitos e valores decorrentes da realização do ato ilícito;</li>
      <li>Multa de valores significativos.</li>
  </ul>`,
    done: false,
  },
];

type Question = {
  question: string;
  answer: string;
  done: boolean;
};

type Props = {
  onCompleteStep: (step: string) => void;
};

const Monitor: React.FC<Props> = ({ onCompleteStep }) => {
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(
    null
  );

  const [questions, setQuestions] = useState<Question[]>(QUESTIONS);

  const handleQuestionSelection = (i: number) => {
    setSelectedQuestion(questions[i]);
    const newQuestions = [...questions];
    newQuestions[i].done = true;

    setQuestions(newQuestions);
  };

  return (
    <div className="monitor">
      <Header />

      <div className="monitor__content">
        <div className="monitor__bgCol" />
        <div className="monitor__titles">
          <div className="monitor__title1"> CLIQUE NAS PERGUNTAS </div>
          <div className="monitor__title2">
            <span>A LEI ANTICORRUPÇÃO É PARA TODOS</span>
            <div className="monitor__mark" />
          </div>
        </div>
        <div className="monitor__imgContainer">
          <img src={imacImg} alt="imac" />
          {!selectedQuestion ? (
            <div className="monitor__questionContainer">
              <div
                onClick={() => handleQuestionSelection(0)}
                className={`monitor__question ${
                  questions[0].done ? "done" : ""
                }`}
              >
                {questions[0].question}
                {questions[0].done && <img src={checkIcn} alt="check" />}
              </div>
              <div
                onClick={() => handleQuestionSelection(1)}
                className={`monitor__question ${
                  questions[1].done ? "done" : ""
                }`}
              >
                {questions[1].question}
                {questions[1].done && <img src={checkIcn} alt="check" />}
              </div>
              <div
                onClick={() => handleQuestionSelection(2)}
                className={`monitor__question ${
                  questions[2].done ? "done" : ""
                }`}
              >
                {questions[2].question}
                {questions[2].done && <img src={checkIcn} alt="check" />}
              </div>
            </div>
          ) : (
            <div className="monitor__questionContainer">
              <img
                onClick={() => setSelectedQuestion(null)}
                src={closeIcn}
                alt="close"
              />
              <div className="monitor__mainQuestion">
                {selectedQuestion?.question}
              </div>
              <div
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: selectedQuestion?.answer }}
                className="monitor__answer"
              />
            </div>
          )}
        </div>
        {!questions.find((q) => {
          return q.done === false;
        }) && (
          <div className="monitor__actions">
            <PaginationButton
              mode="forward"
              clickPaginateButton={() => onCompleteStep("monitor")}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Monitor;
