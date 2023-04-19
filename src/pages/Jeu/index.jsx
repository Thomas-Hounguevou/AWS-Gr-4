import React, { useEffect, useState } from 'react';
import './jeu.css';
import Header from '../../components/Header';
import Figure from '../../components/Figure';
import WrongLetters from '../../components/WrongLetters';
import Word from '../../components/Word';
import Popup from '../../components/PopUp';
import NotificationComp from '../../components/Notification';
import { db, dbRef } from '../../config/firebase';
import { collection, getDoc, getDocs } from 'firebase/firestore';
import { child, get } from 'firebase/database';
import { showNotification as show, checkWin } from '../../helper/herlper';
import { Circles } from 'react-loader-spinner';
import Countdown from 'react-countdown';

// const words = ['helloworld'];
// let selectedWord = words[Math.floor(Math.random() * words.length)].trim();

function remplacerCaracteresSpeciaux(chaine) {
  let nouvelleChaine = chaine;
  nouvelleChaine = nouvelleChaine.replace(/[éèêë]/g, 'e');
  nouvelleChaine = nouvelleChaine.replace(/[àâæ]/g, 'a');
  nouvelleChaine = nouvelleChaine.replace(/[ïî]/g, 'i');
  nouvelleChaine = nouvelleChaine.replace(/[ôœ]/g, 'o');
  nouvelleChaine = nouvelleChaine.replace(/[ùûü]/g, 'u');
  nouvelleChaine = nouvelleChaine.replace(/[ç]/g, 'c');
  nouvelleChaine = nouvelleChaine.replace(/[Ññ]/g, 'n');
  nouvelleChaine = nouvelleChaine.replace(/[á]/g, 'a');
  nouvelleChaine = nouvelleChaine.replace(/[í]/g, 'i');
  nouvelleChaine = nouvelleChaine.replace(/[ó]/g, 'o');
  nouvelleChaine = nouvelleChaine.replace(/[úü]/g, 'u');
  return nouvelleChaine;
}

const Jeu = () => {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [selectedWord, setSelectedWord] = useState('');
  const [words, setWords] = useState([]);
  const [timer, setTimer] = useState(Date.now() + 120000);

  useEffect(() => {
    const handleKeydown = event => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }
    };
    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  function playAgain() {
    setPlayable(true);

    // Empty Arrays
    setCorrectLetters([]);
    setWrongLetters([]);

    const random = Math.floor(Math.random() * words.length);
    setSelectedWord(words[random]);
  }

  // useEffect(() => {
  //   setWords(oldVal => {
  //     return [...oldVal, 'test'];
  //   });
  // }, []);

  useEffect(() => {
    get(child(dbRef, `couleurs`)).then(snapshot => {
      if (snapshot.exists()) {
        setWords(() => [...snapshot.val()]);
        setSelectedWord(
          remplacerCaracteresSpeciaux(
            snapshot.val()[Math.floor(Math.random() * snapshot.val().length)].toLowerCase(),
          ),
        );
      } else {
        setWords(() => ['helloworld'.toLowerCase()]);
      }
    });
  }, []);

  return (
    <>
      {words.length ? (
        <>
          <Header />
          <div className="game-countdown">
            <Countdown
              renderer={({ hours, minutes, seconds, completed }) => {
                if (completed) {
                  // Render a completed state
                  return <span>le temps est dépassé</span>;
                } else {
                  // Render a countdown
                  return <span>{`${minutes}mm : ${seconds}ss`}</span>;
                }
              }}
              onComplete={() => {
                setPlayable(false);
                show(setShowNotification);
              }}
              date={timer}
              autoStart
            >
              <span>le temps est dépassé</span>
            </Countdown>
          </div>
          <div className="game-container">
            <Figure wrongLetters={wrongLetters} />
            <WrongLetters wrongLetters={wrongLetters} />
            <Word selectedWord={selectedWord} correctLetters={correctLetters} />
          </div>
          <Popup
            correctLetters={correctLetters}
            wrongLetters={wrongLetters}
            selectedWord={selectedWord}
            setPlayable={setPlayable}
            playAgain={playAgain}
          />
          <NotificationComp showNotification={showNotification} />
        </>
      ) : (
        <div className="loader">
          <Circles
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      )}
    </>
  );
};

export default Jeu;
