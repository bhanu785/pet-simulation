// first thing the user sees; allows them to customize their pet before starting the game (aka choosing cat/dog and name)
import { useState } from 'react';
import useLanguage from "../useTranslation.js";
import catIdle from '../assets/spriteSheets/cat/Idle (1).png';
import dogIdle from '../assets/spriteSheets/dog/Idle (1).png';

function PetCustomizer({ onStart }) {

    const [petType, setPetType] = useState("");
    const [petName, setPetName] = useState("");
    const { language, setLanguage, t } = useLanguage();

    async function selectedPet(e) {
        e.preventDefault();
    
        try {
          const response = await fetch(
            `http://localhost:8000/pet/create?type=${petType}&name=${petName.trim()}`,
            { method: "POST" }
          );
    
          if (!response.ok) {
            const error = await response.json();
            alert(error.detail || "Something went wrong");
            return;
          }
    
          const data = await response.json();
          onStart(data);
    
        } catch (error) {
          console.error("Error creating pet:", error);
        }
    }

    return (
        <div className="background">

            <h1 className="customizePetHeader">{t("title")}</h1>

            <form onSubmit={selectedPet}>

                <div className='petTypeSection'></div>

                <p className='choosePetLabel'>{t("choosePet")}</p>

                <button
                    type="button"
                    onClick={() => setPetType("Cat")}
                    className='catButton'
                >
                    <img src={catIdle} width={150} height={150} />
                    {t("cat")}
                </button>

                <button
                    type="button"
                    onClick={() => setPetType("Dog")}
                    className='dogButton'
                >
                    <img src={dogIdle} width={150} height={150} />
                    {t("dog")}
                </button>

                <div className='petNameSection'></div>

                <p className='petNameLabel'>{t("enterName")}</p>

                <input
                    type="text"
                    id="pet-name"
                    name="pet-name"
                    className='petNameText'
                    onChange={(e) => setPetName(e.target.value)}
                    minLength={1}
                    maxLength={15}
                    placeholder={t("namePlaceholder")}
                />

                <button
                    type="submit"
                    className='startGame'
                    disabled={!petName || !petType}
                >
                    {t("startGame")}
                </button>

            </form>

            <div className="languageSelector">
                <label className="languageLabel">{t("language")}:</label>

                <select
                    className="languageDropdown"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                >
                    <option value="en">English</option>
                    <option value="es">Español</option>
                    <option value="fr">Français</option>
                    <option value="de">Deutsch</option>
                </select>
            </div>

        </div>
    );
}

export default PetCustomizer;