/* eslint-disable import/no-cycle */
import React, { useState } from "react";
import { motion } from "framer-motion";
import Welcome from "./views/Welcome";
import Home from "./views/Home";
import Mobile from "./views/Mobile";
import Pencils from "./views/Pencils";
import Paper from "./views/Paper";
import "./App.scss";
import Monitor from "./views/Monitor";

export type Steps = {
  mobile: boolean;
  monitor: boolean;
  pencils: boolean;
  paper: boolean;
  phone: boolean;
};

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState("welcome");
  const [steps, setSteps] = useState<Steps>({
    mobile: false,
    monitor: false,
    pencils: false,
    paper: false,
    phone: false,
  });

  const completedStep = (step: string) => {
    setCurrentView("home");
    setSteps({
      ...steps,
      [step]: true,
    });
  };

  return (
    <div>
      {currentView === "welcome" && (
        <Welcome handleClickIniciar={() => setCurrentView("home")} />
      )}
      {currentView === "home" && (
        <motion.div
          animate={{ opacity: 1, transition: { duration: 1.2 } }}
          initial={{ opacity: 0 }}
        >
          <Home steps={steps} clickedItem={(a: string) => setCurrentView(a)} />
        </motion.div>
      )}
      {currentView === "mobile" && (
        <motion.div
          animate={{ opacity: 1, transition: { duration: 1.2 } }}
          initial={{ opacity: 0 }}
        >
          <Mobile
            onCompleteSmartPhone={(step) => completedStep(step)}
            returnHomeClick={() => setCurrentView("home")}
          />
        </motion.div>
      )}
      {currentView === "monitor" && (
        <motion.div
          animate={{ opacity: 1, transition: { duration: 1.2 } }}
          initial={{ opacity: 0 }}
        >
          <Monitor onCompleteStep={(step) => completedStep(step)} />
        </motion.div>
      )}
      {currentView === "pencils" && (
        <motion.div
          animate={{ opacity: 1, transition: { duration: 1.2 } }}
          initial={{ opacity: 0 }}
        >
          <Pencils
            onReturnHome={() => setCurrentView("home")}
            onCompleteStep={(step) => completedStep(step)}
          />
        </motion.div>
      )}

      {currentView === "paper" && (
        <motion.div>
          <Paper onCompleteStep={(step) => completedStep(step)} />
        </motion.div>
      )}
    </div>
  );
};

export default App;
