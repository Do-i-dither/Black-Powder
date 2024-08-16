import fs from 'fs';
import path from 'path';

export async function getStaticProps() {
  // Define the path to your JSON file
  const filePath = path.resolve(process.cwd(), 'data/infantryStats.json');
  
  // Read the JSON file
  const jsonData = fs.readFileSync(filePath);
  
  // Parse the JSON data
  const infantryStats = JSON.parse(jsonData);
  
  // Access the correct path in the JSON structure
  const frenchSkirmishers = infantryStats.Infantry.Skirmishers.French;
  console.log(frenchSkirmishers);
  
  // Return the data as props
  return {
    props: {
      frenchSkirmishers
    }
  };
}

const FrenchSkirmishers = ({ frenchSkirmishers }) => {
  return (
    <div className="card">
      <h1>French Skirmishers</h1>
      <div className="divider"></div>
      
      <div className="skirmisherSection">
        <h4>{frenchSkirmishers.Description}</h4>
        <div className="divider"></div>
        <div className="topRight">
          <div className="moraleContainer">
            <img src="/images/morale/moraleIcon.png" alt="Morale Icon" className="moraleIcon" />
            <p className="iconText">{frenchSkirmishers.Morale}</p>
          </div>
          <div className="staminaContainer">
            <img src="/images/stamina/staminaIcon.png" alt="Stamina Icon" className="staminaIcon" />
            <p className="iconText">{frenchSkirmishers.Stamina}</p>
          </div>
        </div>
        <div className="content">
          <div className="stats">
            <div className="headingWithIcon">
              <h2>Movement</h2>
              <img src="/images/icons/movementIcon.png" alt="Movement Icon" className="movementIcon" />
            </div>
            <p><b>Skirmish Formation:</b> {frenchSkirmishers.Movement["Skirmish Formation"]}</p>
            <p><b>Disordered:</b> {frenchSkirmishers.Movement.Disordered}</p>

            <div className="headingWithIcon">
              <h2>Shooting</h2>
              <img src="/images/icons/shootingIcon.png" alt="Shooting Icon" className="shootingIcon" />
            </div>
            <p><b>Range:</b> {frenchSkirmishers.Shooting.Range["Smoothbore Carbines"]}</p>
            <p><b>Rifled Carbines:</b> {frenchSkirmishers.Shooting.Range["Rifled Carbines"]}</p>
            <p><b>Skirmish Formation:</b> {frenchSkirmishers.Shooting["Attack Dice"]["Skirmish Formation"]} attack dice</p>
            <p><b>Specialised Skirmishers:</b> {frenchSkirmishers.Shooting["Attack Dice"]["Specialised Skirmishers"]}</p>

            <div className="headingWithIcon">
              <h2>Hand to Hand Combat</h2>
              <img src="/images/icons/combatIcon.png" alt="Combat Icon" className="combatIcon" />
            </div>
            <p><b>Combat Value:</b> {frenchSkirmishers["Hand-to-Hand"]["Combat Value"]}</p>
            <p><b>Large Unit:</b> {frenchSkirmishers["Hand-to-Hand"].Modifiers["Large Unit"]}</p>
            <p><b>Small Unit:</b> {frenchSkirmishers["Hand-to-Hand"].Modifiers["Small Unit"]}</p>
            <p><b>Tiny Unit:</b> {frenchSkirmishers["Hand-to-Hand"].Modifiers["Tiny Unit"]}</p>
          </div>
          <div className="imageContainer">
            <img style={{width:300}} src="/images/infantry/skirmishers/french-skirmisher.jpg" alt="French Skirmishers" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrenchSkirmishers;
