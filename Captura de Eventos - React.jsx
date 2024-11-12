import React, { useState } from 'react';

function App() {
    const [inputText, setInputText] = useState('');

 
    const countVowels = (text) => {
        const vowels = text.match(/[aeiouáéíóúAEIOUÁÉÍÓÚ]/g); 
        return vowels ? vowels.length : 0;
  };

    const handleButtonClick = () => {
        const vowelCount = countVowels(inputText);
        alert(`La cantidad de vocales es: ${vowelCount}`);
  };

  return (
    <div>
      <h1>Contador de Vocales</h1>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Escribe algo aquí"
      />
      <button onClick={handleButtonClick}>Contar Vocales</button>
    </div>
  );
}

export default App;
