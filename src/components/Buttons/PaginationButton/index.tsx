import React from "react";
import {
  AnimationControls,
  motion,
  TargetAndTransition,
  VariantLabels,
} from "framer-motion";
import forwardIcon from "../../../assets/ic-avan.svg";
import returnIcon from "../../../assets/ic-voltar.svg";
import "./styles.scss";

type Props = {
  mode: "return" | "forward";
  clickPaginateButton?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  animation?:
    | boolean
    | AnimationControls
    | TargetAndTransition
    | VariantLabels
    | undefined;
};

const PaginationButton: React.FC<Props> = ({
  mode,
  clickPaginateButton,
  animation,
}) => {
  return (
    <motion.button
      animate={animation}
      onClick={clickPaginateButton}
      type="button"
      className="paginationButton"
    >
      {mode === "return" ? (
        <img src={returnIcon} alt="retornar" />
      ) : (
        <img src={forwardIcon} alt="avancar" />
      )}
    </motion.button>
  );
};

export default PaginationButton;
