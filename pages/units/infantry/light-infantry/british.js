// pages/units/infantry/light-infantry/british.js
import fs from 'fs';
import path from 'path';

export async function getStaticProps() {
  const filePath = path.resolve('C:/Users/Scott/Desktop/Black-Powder-Rules/data/infantryStats.json');
  const jsonData = fs.readFileSync(filePath);
  const infantryStats = JSON.parse(jsonData);

  return {
    props: {
        unit: infantryStats.Infantry["Light Infantry"].British
    }
  };
}

const BritishLightInfantry = ({ unit }) => {
  const shootingRange = unit.Shooting.Range;
  const attackDice = unit.Shooting["Attack Dice"];
  const handToHandModifiers = unit["Hand-to-Hand"].Modifiers;

  return (
    <div className="card">
      <h1>British Light Infantry</h1>
      <h4>{unit.Description}</h4>
      <div className="divider"></div>
      <div className="topRight">
        <div className="moraleContainer">
          <img src="/images/morale/moraleIcon.png" alt="Morale Icon" className="moraleIcon" />
          <p className="iconText">{unit.Morale}</p>
        </div>
        <div className="staminaContainer">
          <img src="/images/stamina/staminaIcon.png" alt="Stamina Icon" className="staminaIcon" />
          <p className="iconText">{unit.Stamina}</p>
        </div>
      </div>
      <div className="content">
        <div className="stats">
          <div className="headingWithIcon">
            <h2>Movement</h2>
            <img src="/images/icons/movementIcon.png" alt="Movement Icon" className="movementIcon" />
          </div>
          <p><b>Line Formation:</b> {unit.Movement["Line Formation"]}</p>
          <p><b>Double Line:</b> {unit.Movement["Double Line"]}</p>
          <p><b>March Column Formation:</b> {unit.Movement["March Column Formation"]}</p>
          <p><b>Square Formation:</b> {unit.Movement["Square Formation"]}</p>
          <p><b>Skirmish Formation:</b> {unit.Movement["Skirmish Formation"]}</p>
          <p><b>Disordered:</b> {unit.Movement.Disordered}</p>
          <div className="headingWithIcon">
            <h2>Shooting</h2>
            <img src="/images/icons/shootingIcon.png" alt="Shooting Icon" className="shootingIcon" />
          </div>
          <p><b>Range:</b> Smoothbore Carbines: {shootingRange["Smoothbore Carbines"]}, Rifled Carbines: {shootingRange["Rifled Carbines"]}</p>
          <p><b>Line Formation:</b> {attackDice["Line Formation"]} attack dice</p>
          <p><b>Double Line:</b> {attackDice["Double Line"]} attack dice</p>
          <p><b>Skirmish Formation:</b> {attackDice["Skirmish Formation"]} attack dice</p>
          <p><b>March Column or Square:</b> {attackDice["March Column or Square"]} attack dice</p>
          <p><b>Mixed Formation:</b> {attackDice["Mixed Formation"]} attack dice</p>
          <div className="headingWithIcon">
            <h2>Hand to Hand Combat</h2>
            <img src="/images/icons/combatIcon.png" alt="Combat Icon" className="combatIcon" />
          </div>
          <p><b>Combat Value:</b> {unit["Hand-to-Hand"]["Combat Value"]}</p>
          <p><b>Large Unit:</b> {handToHandModifiers["Large Unit"]}</p>
          <p><b>Small Unit:</b> {handToHandModifiers["Small Unit"]}</p>
          <p><b>Tiny Unit:</b> {handToHandModifiers["Tiny Unit"]}</p>
        </div>
        <div className="imageContainer">
          <img src="/images/infantry/light-infantry/British-Light-Infantry.jpeg" alt="British Light Infantry" />
        </div>
      </div>
    </div>
  );
};

export default BritishLightInfantry;
