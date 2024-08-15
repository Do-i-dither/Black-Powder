import fs from 'fs';
import path from 'path';

export async function getStaticProps() {
  // Define the path to your JSON file
  const filePath = path.resolve('C:/Users/Scott/Desktop/Black-Powder-Rules/data/infantryStats.json');
  
  // Read the JSON file
  const jsonData = fs.readFileSync(filePath);
  
  // Parse the JSON data
  const infantryStats = JSON.parse(jsonData);
  
  // Access the correct path in the JSON structure
  const frenchMilitia = infantryStats.Infantry.Militia.French;
  console.log(frenchMilitia)
  
  // Return the data as props
  return {
    props: {
      frenchMilitia
    }
  };
}

const FrenchMilitia = ({ frenchMilitia }) => {

  
  return (
    <div className="card">
      <h1>French Militia</h1>
      <div className="divider"></div>
      
      <div className="militiaSection">
        <h4>{frenchMilitia.Description}</h4>
        <div className="divider"></div>
        <div className="topRight">
          <div className="moraleContainer">
            <img src="/images/morale/moraleIcon.png" alt="Morale Icon" className="moraleIcon" />
            <p className="iconText">{frenchMilitia.Morale}</p>
          </div>
          <div className="staminaContainer">
            <img src="/images/stamina/staminaIcon.png" alt="Stamina Icon" className="staminaIcon" />
            <p className="iconText">{frenchMilitia.Stamina}</p>
          </div>
        </div>
        <div className="content">
          <div className="stats">
            <div className="headingWithIcon">
              <h2>Movement</h2>
              <img src="/images/icons/movementIcon.png" alt="Movement Icon" className="movementIcon" />
            </div>
            <p><b>Line Formation:</b> {frenchMilitia.Movement["Line Formation"]}</p>
            <p><b>Attack Column Formation:</b> {frenchMilitia.Movement["Attack Column Formation"]}</p>
            <p><b>March Column Formation:</b> {frenchMilitia.Movement["March Column Formation"]}</p>
            <p><b>Skirmish Formation:</b> {frenchMilitia.Movement["Skirmish Formation"]}</p>
            <p><b>Disordered:</b> {frenchMilitia.Movement.Disordered}</p>

            <div className="headingWithIcon">
              <h2>Shooting</h2>
              <img src="/images/icons/shootingIcon.png" alt="Shooting Icon" className="shootingIcon" />
            </div>
            <p><b>Range:</b> {frenchMilitia.Shooting.Range}</p>
            <p><b>Line Formation:</b> {frenchMilitia.Shooting["Attack Dice"]["Line Formation"]} attack dice</p>
            <p><b>Attack Column Formation:</b> {frenchMilitia.Shooting["Attack Dice"]["Attack Column Formation"]} attack dice</p>
            <p><b>March Column or Square:</b> {frenchMilitia.Shooting["Attack Dice"]["March Column or Square"]} attack die</p>
            <p><b>Mixed Formation:</b> {frenchMilitia.Shooting["Attack Dice"]["Mixed Formation"]} attack die</p>

            <div className="headingWithIcon">
              <h2>Hand to Hand Combat</h2>
              <img src="/images/icons/combatIcon.png" alt="Combat Icon" className="combatIcon" />
            </div>
            <p><b>Combat Value:</b> {frenchMilitia["Hand-to-Hand"]["Combat Value"]}</p>
            <p><b>Skirmish Formation Combat Value:</b> {frenchMilitia["Hand-to-Hand"]["Skirmish Formation Combat Value"]}</p>
            <p><b>Large Unit:</b> {frenchMilitia["Hand-to-Hand"].Modifiers["Large Unit"]}</p>
            <p><b>Small Unit:</b> {frenchMilitia["Hand-to-Hand"].Modifiers["Small Unit"]}</p>
            <p><b>Tiny Unit:</b> {frenchMilitia["Hand-to-Hand"].Modifiers["Tiny Unit"]}</p>
          </div>
          <div className="imageContainer">
            <img src="/images/infantry/militia/militia.jpeg" alt="French Militia" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrenchMilitia;
