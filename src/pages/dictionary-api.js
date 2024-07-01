import React, { useState } from 'react';
import Layout from '@theme/Layout';
import DictionaryForm from '../components/DictionaryForm';
import DefinitionDisplay from '../components/DefinitionDisplay';

function Dictionary() {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState(null);

  const fetchDefinition = async (word) => {
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setDefinition(data[0]);
    } catch (error) {
      console.error('Error fetching the definition:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchDefinition(word);
  };

  return (
    
      <div className="container">
        
        <DictionaryForm word={word} setWord={setWord} handleSubmit={handleSubmit} />
        <DefinitionDisplay definition={definition} />
      </div>
    
  );
}

export default Dictionary;
