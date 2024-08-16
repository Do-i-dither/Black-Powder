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
  const britishMilitia = infantryStats.Infantry.Militia.British;
  
  // Return the data as props
  return {
    props: {
      britishMilitia
    }
  };
}

const BritishMilitia = ({ britishMilitia }) => {
  return (
    <div className="card">
      <h1>British Militia</h1>
      <div className="divider"></div>
      
      <div className="militiaSection">
        <h4>{britishMilitia.Description}</h4>
        <div className="divider"></div>
        <div className="topRight">
          <div className="moraleContainer">
            <img src="/images/morale/moraleIcon.png" alt="Morale Icon" className="moraleIcon" />
            <p className="iconText">{britishMilitia.Morale}</p>
          </div>
          <div className="staminaContainer">
            <img src="/images/stamina/staminaIcon.png" alt="Stamina Icon" className="staminaIcon" />
            <p className="iconText">{britishMilitia.Stamina}</p>
          </div>
        </div>
        <div className="content">
          <div className="stats">
            <div className="headingWithIcon">
              <h2>Movement</h2>
              <img src="/images/icons/movementIcon.png" alt="Movement Icon" className="movementIcon" />
            </div>
            <p><b>Line Formation:</b> {britishMilitia.Movement["Line Formation"]}</p>
            <p><b>Double Line:</b> {britishMilitia.Movement["Double Line"]}</p>
            <p><b>March Column Formation:</b> {britishMilitia.Movement["March Column Formation"]}</p>
            <p><b>Square Formation:</b> {britishMilitia.Movement["Square Formation"]}</p>
            <p><b>Disordered:</b> {britishMilitia.Movement.Disordered}</p>

            <div className="headingWithIcon">
              <h2>Shooting</h2>
              <img src="/images/icons/shootingIcon.png" alt="Shooting Icon" className="shootingIcon" />
            </div>
            <p><b>Range:</b> {britishMilitia.Shooting.Range}</p>
            <p><b>Line Formation:</b> {britishMilitia.Shooting["Attack Dice"]["Line Formation"]} attack dice</p>
            <p><b>Double Line:</b> {britishMilitia.Shooting["Attack Dice"]["Double Line"]} attack dice</p>
            <p><b>March Column or Square:</b> {britishMilitia.Shooting["Attack Dice"]["March Column or Square"]} attack die</p>
            <p><b>Mixed Formation:</b> {britishMilitia.Shooting["Attack Dice"]["Mixed Formation"]} attack die</p>

            <div className="headingWithIcon">
              <h2>Hand to Hand Combat</h2>
              <img src="/images/icons/combatIcon.png" alt="Combat Icon" className="combatIcon" />
            </div>
            <p><b>Combat Value:</b> {britishMilitia["Hand-to-Hand"]["Combat Value"]}</p>
            <p><b>Skirmish Formation Combat Value:</b> {britishMilitia["Hand-to-Hand"]["Skirmish Formation Combat Value"]}</p>
            <p><b>Large Unit:</b> {britishMilitia["Hand-to-Hand"].Modifiers["Large Unit"]}</p>
            <p><b>Small Unit:</b> {britishMilitia["Hand-to-Hand"].Modifiers["Small Unit"]}</p>
            <p><b>Tiny Unit:</b> {britishMilitia["Hand-to-Hand"].Modifiers["Tiny Unit"]}</p>
          </div>
          <div className="imageContainer">
            <img src="/images/infantry/militia/Militia.jpeg" alt="British Militia" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BritishMilitia;
