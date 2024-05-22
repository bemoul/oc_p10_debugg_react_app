import { Fragment, useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);

  // Display the events in descending order
  const byDateDesc = data?.focus.sort(
    (evtA, evtB) => new Date(evtB.date) - new Date(evtA.date)
  )
  const nextCard = () => {
    setIndex(index < byDateDesc.length - 1 ? index + 1 : 0);
  };

  const handleClick = (slideIndex) => {
    setIndex(slideIndex)
  }

  useEffect(() => {
    const timeout = setTimeout(() => nextCard(), 5000);
    return () => window.clearInterval(timeout);
  });
  
  return (
    <div className="SlideCardList">
      {byDateDesc?.map((event, idx) => (
        <Fragment key={event.date}>
          <div
            key={event.title}
            className={`SlideCard SlideCard--${
              index === idx ? "display" : "hide"
            }`}
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
          <div className="SlideCard__paginationContainer">
            <div className="SlideCard__pagination">
              {byDateDesc.map((_, radioIdx) => (
                <input
                  data-testid = "bullet-testid"
                  key={`${_.date}`}
                  type="radio"
                  name="radio-button"
                  checked={index === radioIdx}
		              readOnly
                  onClick={() => handleClick(radioIdx)}
                />
              ))}
            </div>
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default Slider;
