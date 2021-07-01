import React from "react";
import {
  AnimationControls,
  motion,
  TargetAndTransition,
  VariantLabels,
} from "framer-motion";
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
      {mode === "return" ? "<" : ">"}
    </motion.button>
  );
};

export default PaginationButton;
