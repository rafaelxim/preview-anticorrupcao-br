import React from "react";
import Header from "../../components/Header";
import lapisImg from "../../assets/lapis.png";
import moneyHandImg from "../../assets/money_hand.svg";
import stakeholders from "../../assets/stakeholders.svg";
import trofeuImg from "../../assets/trofeu.svg";
import "./styles.scss";

const Pencils: React.FC = () => {
  return (
    <div className="pencils">
      <img className="pencils__lapis" src={lapisImg} alt="lapis" />
      <Header />
      <div className="pencils__content">
        <div className="pencils__titles">
          <div className="pencils__title2">
            <span>COMBATENDO A CORRUPÇÃO NA brMalls</span>
            <div className="pencils__mark" />
          </div>
        </div>
        <div className="pencils__bookContainer">
          {/* ------------------------- PART 1 ------------------------ */}
          {/* <div className="pencils__part">
            <div className="pencils__page left">
              <div className="pencils__pageTitle">Mas e na brMalls?</div>
              <div className="pencils__pageParagraph">
                Como será que nós atuamos no combate e prevenção à corrupção?
              </div>
              <div className="pencils__pageImgContainer">
                <img src={moneyHandImg} alt="money hand" />
              </div>
            </div>
            <div className="pencils__page right">
              <div className="pencils__pageParagraph">
                Praticamos os mais altos padrões éticos e nos preocupamos e
                cuidamos para sermos reconhecidos como uma empresa que preza
                pela ética e integridade em suas operações. <br />
                <br /> Por isso, temos tolerância zero para práticas ilícitas em
                nossas operações.
              </div>
            </div>
          </div> */}
          {/* ------------------------- END PART 1 ------------------------ */}

          {/* ------------------------- PART 2 ------------------------ */}
          <div className="pencils__part">
            <div className="pencils__page left">
              <div className="pencils__pageImgContainer">
                <img src={trofeuImg} alt="money hand" />
              </div>
              <div className="pencils__pageParagraph">
                Além disso acreditamos que nossos resultados devem ser baseados
                na qualidade dos serviços que oferecemos aos nossos clientes e
                não em práticas de negócios antiéticas ou ilegais.
              </div>
            </div>
            <div className="pencils__page right">
              <div className="pencils__pageParagraph">
                E por fim, valorizamos nossa reputação frente aos nossos
                stakeholders* e por isso não toleramos práticas corruptas em
                nossos negócios e relacionamentos.
              </div>
              <div className="pencils__pageImgContainer">
                <img src={stakeholders} alt="money hand" />
              </div>
              <div className="pencils__pageParagraph small">
                <b>*Stakeholders:</b> Agentes internos ou externos que
                influenciam ou sofrem influência da empresa.
              </div>
            </div>
          </div>
          {/* ------------------------- END PART 2 ------------------------ */}
        </div>
      </div>
    </div>
  );
};

export default Pencils;
