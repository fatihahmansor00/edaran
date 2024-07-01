import React from 'react';

const DefinitionDisplay = ({ definition }) => {
  return (
    definition && (
      <div>
        <h2>{definition.word}</h2>
        {definition.meanings.map((meaning, index) => (
          <div key={index}>
            <h3>{meaning.partOfSpeech}</h3>
            {meaning.definitions.map((def, idx) => (
              <p key={idx}>{def.definition}</p>
            ))}
          </div>
        ))}
      </div>
    )
  );
};

export default DefinitionDisplay;
