import React from 'react';

const DictionaryForm = ({ word, setWord, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        placeholder="Enter a word"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default DictionaryForm;
