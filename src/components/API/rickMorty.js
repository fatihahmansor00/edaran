import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';


const RickMortyDetails = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        if (data.results) {
          const characterPromises = data.results.map(character => {
            return fetch(character.episode[0])
              .then(response => response.json())
              .then(episodeData => ({
                ...character,
                firstEpisodeName: episodeData.name
              }));
          });

          Promise.all(characterPromises).then(charactersWithEpisodes => {
            setCharacters(charactersWithEpisodes);
            setLoading(false);
          });
        } else {
          throw new Error('Unexpected response structure');
        }
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading data: {error.message}</p>;
  }

  return (
      <div className="container">
      <div className="characters-list">
        {characters.map(character => (
          <div key={character.id} className="character-card">
            <img src={character.image} alt={character.name} />
            <h3>{character.name}</h3>
            <div>{character.status} - {character.species}</div>
            <h4 className='grey-text'>Last known location:</h4>
            <p>{character.location.name}</p>
            <h4 className='grey-text'>First seen in:</h4>
            <p>{character.firstEpisodeName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RickMortyDetails;
