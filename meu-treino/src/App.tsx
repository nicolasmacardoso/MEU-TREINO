import { useState } from "react";

function App() {
  const [isTraining, setIsTraining] = useState(false);
  const [treinosFeitos, setTreinosFeitos] = useState(0);

  function handleTrainButton() {
    setIsTraining(prev => !prev);
    !isTraining && setTreinosFeitos(prev => prev + 1);
  }

  type trainButtonProps = {
    isTraining: boolean,
    onClick: () => void
  }

  function TrainButton({ isTraining, onClick }: trainButtonProps) {
    return (
      <button onClick={onClick}>
        {isTraining ? "Parar" : "Treinar"}
      </button>
    );
  }

  return (
    <div>
      <h1>Meu treino</h1>
      {treinosFeitos > 0 && <h2>Treinos feitos: {treinosFeitos}</h2>}

      <p>{isTraining ? "Treino em andamento" : "Você não está treinando"}</p>
      <TrainButton isTraining={isTraining} onClick={handleTrainButton}/>
    </div>
  );
}

export default App
