import React, { useEffect } from 'react';
import './regle.css';
import { Link } from 'react-router-dom';
import { db } from '../../config/firebase';
import { collection, addDoc } from 'firebase/firestore';

const Regles = () => {
  const [word, setWord] = React.useState('');
  const [hint, showHint] = React.useState(false);

  const addWordToDB = () => {
    if (word.length > 0)
      addDoc(collection(db, 'MotsSoumis'), {
        mot: word,
      })
        .then(value => {
          setWord('');
          showHint(true);
        })
        .catch(reason => {
          alert(reason);
        });
  };

  useEffect(() => {
    if (hint) {
      setTimeout(() => {
        showHint(false);
      }, 3000);
    }
  }, [hint]);

  return (
    <div className="regle_container">
      <div className="card">
        <div>
          <h2>Règles du jeu</h2>
          <p>
            Le but du jeu est simple: il faut trouver le mot caché en devinant les lettres le
            composant, vous disposez de 10 erreurs possible et de 5 minutes pour gagner la partie,
            suite à la partie vous obtiendrez un score dépendant de votre nombre d'erreurs, de la
            difficulté du mot, ainsi que le temps mis à trouver le mot. Si vous avez compris les
            règles, cliquez sur le bouton "J'ai compris" ci-dessous pour jouer:
          </p>
          <button>
            <Link to="/jeu">J'ai Compris</Link>
          </button>
        </div>

        <div>
          <h2>Entrez le mot que vous souhaiteriez ajouter</h2>
          <input
            value={word}
            onChange={e => {
              setWord(e.target.value);
            }}
            type="text"
          />
          {hint && <p>le mot a été ajouté avec succès</p>}
          <button onClick={addWordToDB}>Confirmer</button>
        </div>
      </div>
    </div>
  );
};

export default Regles;
