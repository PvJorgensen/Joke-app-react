import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './JokeApp.module.scss';

const API_URL = 'https://official-joke-api.appspot.com/random_joke';

export const JokeApp = () => {
  const [joke, setJoke] = useState({ setup: '', punchline: '' });

  useEffect(() => {
    fetchJoke();
  }, []); // Denne effekt køres kun ved montage

  const fetchJoke = async () => {
    try {
      const response = await axios.get(API_URL);
      setJoke(response.data);
    } catch (error) {
      console.error('Fejl ved hentning af joke:', error);
    }
  };

  return (
    <div className={styles.app}>
      <div className={styles.jokeContainer}>
        <p>{joke.setup}</p>
        <p>{joke.punchline}</p>
      </div>
      <button onClick={fetchJoke}>Hent ny joke</button>
    </div>
  );
};