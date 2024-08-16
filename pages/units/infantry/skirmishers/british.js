import fs from 'fs';
import path from 'path';

export async function getStaticProps() {
  // Define the path to your JSON file
  const filePath = path.resolve(process.cwd(), 'data/infantryStats.json');
  
  // Read the JSON file
  const jsonData = fs.readFileSync(filePath, 'utf8');
  
  // Parse the JSON data
  const infantryStats = JSON.parse(jsonData);
  
  // Access the correct path in the JSON structure
  const britishSkirmishers = infantryStats.Infantry.Skirmishers.British;
  console.log(britishSkirmishers);
  
  // Return the data as props
  return {
    props: {
      britishSkirmishers
    }
  };
}

const BritishSkirmishers = ({ britishSkirmishers }) => {
  return (
    <div className="card">
      <h1>British Skirmishers</h1>
      <div className="divider"></div>
      
      <div className="skirmisherSection">
        <h4>{britishSkirmishers.Description}</h4>
        <div className="divider"></div>
        <div className="topRight">
          <div className="moraleContainer">
            <img src="/images/morale/moraleIcon.png" alt="Morale Icon" className="moraleIcon" />
            <p className="iconText">{britishSkirmishers.Morale}</p>
          </div>
          <div className="staminaContainer">
            <img src="/images/stamina/staminaIcon.png" alt="Stamina Icon" className="staminaIcon" />
            <p className="iconText">{britishSkirmishers.Stamina}</p>
          </div>
        </div>
        <div className="content">
          <div className="stats">
            <div className="headingWithIcon">
              <h2>Movement</h2>
              <img src="/images/icons/movementIcon.png" alt="Movement Icon" className="movementIcon" />
            </div>
            <p><b>Skirmish Formation:</b> {britishSkirmishers.Movement["Skirmish Formation"]}</p>
            <p><b>Disordered:</b> {britishSkirmishers.Movement.Disordered}</p>

            <div className="headingWithIcon">
              <h2>Shooting</h2>
              <img src="/images/icons/shootingIcon.png" alt="Shooting Icon" className="shootingIcon" />
            </div>
            <p><b>Range (Smoothbore Carbines):</b> {britishSkirmishers.Shooting.Range["Smoothbore Carbines"]}</p>
            <p><b>Range (Rifled Carbines):</b> {britishSkirmishers.Shooting.Range["Rifled Carbines"]}</p>
            <p><b>Skirmish Formation:</b> {britishSkirmishers.Shooting["Attack Dice"]["Skirmish Formation"]} attack dice</p>
            <p><b>Specialised Skirmishers:</b> {britishSkirmishers.Shooting["Attack Dice"]["Specialised Skirmishers"]}</p>

            <div className="headingWithIcon">
              <h2>Hand to Hand Combat</h2>
              <img src="/images/icons/combatIcon.png" alt="Combat Icon" className="combatIcon" />
            </div>
            <p><b>Combat Value:</b> {britishSkirmishers["Hand-to-Hand"]["Combat Value"]}</p>
            <p><b>Large Unit:</b> {britishSkirmishers["Hand-to-Hand"].Modifiers["Large Unit"]}</p>
            <p><b>Small Unit:</b> {britishSkirmishers["Hand-to-Hand"].Modifiers["Small Unit"]}</p>
            <p><b>Tiny Unit:</b> {britishSkirmishers["Hand-to-Hand"].Modifiers["Tiny Unit"]}</p>
          </div>
          <div className="imageContainer">
            <img style={{width:300}} src="/images/infantry/skirmishers/british-skirmisher.jpg" alt="British Skirmishers" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BritishSkirmishers;
