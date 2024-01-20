import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);

  // Tri des données par date en ordre décroissant
  const byDateDesc = data?.focus.sort((evtA, evtB) =>
    new Date(evtA.date) > new Date(evtB.date) ? 1 : -1
  );

  // Utilisation de useEffect pour créer un timer qui change le slide
  useEffect(() => {
    // Création d'un timer qui change l'index après un délai
    const timer = setTimeout(() => {
      // Mise à jour de l'index, retour à 0 si on atteint la fin
      setIndex((prevIndex) => (prevIndex < byDateDesc.length - 1 ? prevIndex + 1 : 0));
    }, 5000);

    // Nettoyage du timer à la fin du cycle de vie du composant
    return () => clearTimeout(timer);
  }, [index, byDateDesc]); // Dépendances du useEffect

  return (
    <div className="SlideCardList">
      {byDateDesc?.map((event, idx) => (
        <div
          key={event.title} // Utilisation de l'id de l'événement comme clé unique
          className={`SlideCard SlideCard--${index === idx ? "display" : "hide"}`} // Affichage conditionnel basé sur l'index
        >
          <img src={event.cover} alt="forum" />
          <div className="SlideCard__descriptionContainer">
            <div className="SlideCard__description">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <div>{getMonth(new Date(event.date))}</div>
            </div>
          </div>
        </div>
      ))}
      <div className="SlideCard__paginationContainer">
        <div className="SlideCard__pagination">
          {byDateDesc?.map((event, radioIdx) => (
            <input
              key={event.title} // Clé unique pour chaque bouton radio
              type="radio"
              name="radio-button"
              checked={index === radioIdx} // Détermine quel bouton radio est sélectionné
              readOnly // Rend le bouton radio en lecture seule pour éviter les avertissements
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
