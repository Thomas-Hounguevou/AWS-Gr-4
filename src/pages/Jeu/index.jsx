import React, { useEffect, useState } from 'react';
import './jeu.css';
import Header from '../../components/Header';
import Figure from '../../components/Figure';
import WrongLetters from '../../components/WrongLetters';
import Word from '../../components/Word';
import Popup from '../../components/PopUp';
import NotificationComp from '../../components/Notification';

const words = ['Hello World'];
let selectedWord = words[Math.floor(Math.random() * words.length)];

const Jeu = () => {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  // useEffect(() => {
  //   var countDownDate = new Date().getTime() + 5 * 60 * 1000;

  //   // Mettre à jour le compte à rebours toutes les secondes
  //   var x = setInterval(function () {
  //     // Récupérer la date et l'heure actuelles
  //     var now = new Date().getTime();

  //     // Calculer la distance entre maintenant et la date limite
  //     var distance = countDownDate - now;

  //     // Calculer les minutes et secondes restantes
  //     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //     var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //     // Afficher le compte à rebours dans l'élément avec l'id "countdown"
  //     document.getElementById('countdown').innerHTML = minutes + 'm ' + seconds + 's ';

  //     // Si la date limite est dépassée, afficher "EXPIRÉ"
  //     if (distance < 0) {
  //       clearInterval(x);
  //       document.getElementById('countdown').innerHTML = 'EXPIRÉ';
  //     }
  //   }, 1000);
  // }, []);

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
    selectedWord = words[random];
  }

  return (
    <>
      <Header />
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
    </>
  );
};

export default Jeu;
