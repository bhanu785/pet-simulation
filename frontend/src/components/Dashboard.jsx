import { useState, useEffect } from "react";
import useLanguage from "../useTranslation.js";
import PetAnimation from "./PetDisplay";
import ActionButtons from "./ActionButtons";
import StatBar from "./StatBar";

function Dashboard({ setPet, pet, setScreen, isDying }) {
  const [isPaused, setIsPaused] = useState(false);
  const [advice, setAdvice] = useState("");
  const [advicePopup, setAdvicePopup] = useState(false);
  const [lastAdviceDay, setLastAdviceDay] = useState(-1);

  const { t } = useLanguage();

  // Day progression system
  useEffect(() => {
    if (!pet) return;

    if (pet.day === lastAdviceDay) return;

    let message = "";

    if (pet.health < 50) {
      message = t("healthLow");
    } else if (pet.energy < 30) {
      message = t("exhausted");
    } else if (pet.happiness < 40) {
      message = t("feelingDown");
    } else if (pet.hunger > 60) {
      message = t("veryHungry");
    }

    if (message !== "") {
      setAdvice(message);
      setAdvicePopup(true);
      setLastAdviceDay(pet.day); // pause game when showing hint
    }
  }, [pet, lastAdviceDay, t]);

  useEffect(() => {
    let interval;

    if (!isDying && !isPaused) {
      interval = setInterval(async () => {
        try {
          const response = await fetch("http://localhost:8000/pet/next-day", {
            method: "POST",
          });

          if (response.ok) {
            const data = await response.json();
            setPet(data);
          }
        } catch (error) {
          console.error("Day update failed:", error);
        }
      }, 3000); // adjust day duration
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isDying, isPaused, setPet]);

  // Handle transition to Game Over
  useEffect(() => {
    if (!isDying) return;

    const timer = setTimeout(() => {
      setScreen("gameover");
    }, 2000);

    return () => clearTimeout(timer);
  }, [isDying, setScreen]);

  if (!pet) return <div>{t("loading")}</div>;

  const getAnimation = () => {
    if (!pet || !pet.is_alive) return "Dead";
    if (pet.health <= 30) return "Hurt";
    if (pet.energy <= 20) return "Fall";
    if (pet.happiness <= 25) return "Slide";
    if (pet.hunger <= 30) return "Walk";
    if (pet.happiness >= 80 && pet.energy >= 60) return "Run";
    return "Idle";
  };

  return (
    <div id="dashboard">
      <h1 className="dashboardWelcome">{pet.name}</h1>

      <div id="petDisplay">
        <div className="pet-display"></div>
        <PetAnimation pet={pet} animation={getAnimation()} />
      </div>

      {!isDying && (
        <div id="buttons">
          <ActionButtons setPet={setPet} setScreen={setScreen} />
        </div>
      )}

      <div id="statBars">
        <div className="statColumn left">
          <StatBar label={t("hunger")} value={pet.hunger} isReversed={true} />
          <StatBar label={t("happiness")} value={pet.happiness} />
        </div>
        <div className="statColumn right">
          <StatBar label={t("health")} value={pet.health} />
          <StatBar label={t("energy")} value={pet.energy} />
        </div>
      </div>

      <p className="day-counter">
        {t("days")}: {pet.day}
      </p>

      <button onClick={() => setIsPaused(true)} className="help-button">
        {t("help")}
      </button>

      {isPaused && (
        <div className="helpOverlay">
          <div className="helpBox">
            <h2>{t("howToPlay")}</h2>
            <ul>
              <li>{t("feedTip")}</li>
              <li>{t("playTip")}</li>
              <li>{t("restTip")}</li>
              <li>{t("shopTip")}</li>
              <li>{t("deathTip")}</li>
            </ul>
            <button
              onClick={() => setIsPaused(false)}
              className="close-help-button"
            >
              {t("close")}
            </button>
          </div>
        </div>
      )}

      <p className="money-display">
        {t("money")}: ${pet.money}
      </p>
      <p className="food-display">
        {t("food")}: {pet.food_stock}
      </p>
      <p className="toy-display">
        {t("toys")}: {pet.toy_stock}
      </p>
      <p className="medicine-display">
        {t("medicine")}: {pet.medicine_stock}
      </p>

      {advicePopup && (
        <div className="hint-popup-overlay">
          <div className="hint-popup">
            <h3>{t("hint")}</h3>
            <p>{advice}</p>
            <button
              onClick={() => {
                setAdvicePopup(false);
              }}
              className="ok-button"
            >
              {t("ok")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;