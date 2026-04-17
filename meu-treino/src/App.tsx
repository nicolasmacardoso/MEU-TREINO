import { useState } from "react";

function App() {
  const [isTraining, setIsTraining] = useState(false);
  const [treinosFeitos, setTreinosFeitos] = useState(0);

  function handleTrainButton() {
    setIsTraining(prev => !prev);
    !isTraining && setTreinosFeitos(prev => prev + 1);
  }

  return (
    <div>
      <h1>Meu treino</h1>
      {treinosFeitos > 0 && <h2>Treinos feitos: {treinosFeitos}</h2>}

      <p>{isTraining ? "Treino em andamento" : "Você não está treinando"}</p>
      <button onClick={handleTrainButton}>
        {isTraining ? "Parar" : "Treinar"}
      </button>
    </div>
  );
}

export default App
