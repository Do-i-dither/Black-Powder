import fs from 'fs';
import path from 'path';

export async function getStaticProps() {
  // Define the path to your JSON file
  const filePath = path.resolve(process.cwd(), 'data/infantryStats.json');
  
  // Read the JSON file
  const jsonData = fs.readFileSync(filePath);
  
  // Parse the JSON data
  const infantryStats = JSON.parse(jsonData);
  
  // Access the English Royal Guard data
  const englishRoyalGuard = infantryStats.Infantry["Royal Guard Infantry"].British;
  console.log(englishRoyalGuard);
  
  // Return the data as props
  return {
    props: {
      englishRoyalGuard
    }
  };
}

const EnglishRoyalGuard = ({ englishRoyalGuard }) => {
  return (
    <div className="card">
      <h1>British Royal Guard Infantry</h1>
      <div className="divider"></div>
      
      <div className="skirmisherSection">
        <h4>{englishRoyalGuard.Description}</h4>
        <div className="divider"></div>
        <div className="topRight">
          <div className="moraleContainer">
            <img src="/images/morale/moraleIcon.png" alt="Morale Icon" className="moraleIcon" />
            <p className="iconText">{englishRoyalGuard.Morale}</p>
          </div>
          <div className="staminaContainer">
            <img src="/images/stamina/staminaIcon.png" alt="Stamina Icon" className="staminaIcon" />
            <p className="iconText">{englishRoyalGuard.Stamina}</p>
          </div>
        </div>
        <div className="content">
          <div className="stats">
            <div className="headingWithIcon">
              <h2>Movement</h2>
              <img src="/images/icons/movementIcon.png" alt="Movement Icon" className="movementIcon" />
            </div>
            <p><b>Line Formation:</b> {englishRoyalGuard.Movement["Line Formation"]}</p>
            <p><b>March Column Formation:</b> {englishRoyalGuard.Movement["March Column Formation"]}</p>
            <p><b>Square Formation:</b> {englishRoyalGuard.Movement["Square Formation"]}</p>
            <p><b>Disordered:</b> {englishRoyalGuard.Movement.Disordered}</p>

            <div className="headingWithIcon">
              <h2>Shooting</h2>
              <img src="/images/icons/shootingIcon.png" alt="Shooting Icon" className="shootingIcon" />
            </div>
            <p><b>Range:</b> {englishRoyalGuard.Shooting.Range["Smoothbore Muskets"]}</p>
            <p><b>Line Formation:</b> {englishRoyalGuard.Shooting["Attack Dice"]["Line Formation"]} attack dice</p>
            <p><b>Double Line Formation:</b> {englishRoyalGuard.Shooting["Attack Dice"]["Double Line Formation"]} attack dice</p>
            <p><b>March Column or Square:</b> {englishRoyalGuard.Shooting["Attack Dice"]["March Column or Square"]}</p>
            <p><b>Mixed Formation:</b> {englishRoyalGuard.Shooting["Attack Dice"]["Mixed Formation"]}</p>

            <div className="headingWithIcon">
              <h2>Hand to Hand Combat</h2>
              <img src="/images/icons/combatIcon.png" alt="Combat Icon" className="combatIcon" />
            </div>
            <p><b>Combat Value:</b> {englishRoyalGuard["Hand-to-Hand"]["Combat Value"]}</p>
            <p><b>Large Unit:</b> {englishRoyalGuard["Hand-to-Hand"].Modifiers["Large Unit"]}</p>
            <p><b>Small Unit:</b> {englishRoyalGuard["Hand-to-Hand"].Modifiers["Small Unit"]}</p>
            <p><b>Tiny Unit:</b> {englishRoyalGuard["Hand-to-Hand"].Modifiers["Tiny Unit"]}</p>

          </div>
          <div className="imageContainer">
            <img style={{width:400}} src="/images/infantry/royal-Guard/british-royal-guard.jpeg" alt="English Royal Guard Infantry" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnglishRoyalGuard;
