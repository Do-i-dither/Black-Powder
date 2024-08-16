// pages/units/infantry/line-infantry/british.js
import fs from 'fs';
import path from 'path';

export async function getStaticProps() {
  const filePath = path.resolve(process.cwd(), 'data/infantryStats.json');
  const jsonData = fs.readFileSync(filePath);
  const infantryStats = JSON.parse(jsonData);

  return {
    props: {
      unit: infantryStats.Infantry["Line Infantry"].British
    }
  };
}

const BritishLineInfantry = ({ unit }) => {
  return (
    <div className="card">
      <h1>British Line Infantry</h1>
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
          <p><b>Disordered:</b> {unit.Movement.Disordered}</p>
          <div className="headingWithIcon">
            <h2>Shooting</h2>
            <img src="/images/icons/shootingIcon.png" alt="Shooting Icon" className="shootingIcon" />
          </div>
          <p><b>Range:</b> {unit.Shooting.Range}</p>
          <p><b>Line Formation:</b> {unit.Shooting["Attack Dice"]["Line Formation"]} attack dice</p>
          <p><b>Double Line:</b> {unit.Shooting["Attack Dice"]["Double Line"]} attack dice</p>
          <p><b>March Column or Square:</b> {unit.Shooting["Attack Dice"]["March Column or Square"]} attack die</p>
          <p><b>Mixed Formation:</b> {unit.Shooting["Attack Dice"]["Mixed Formation"]} attack die</p>
          <div className="headingWithIcon">
            <h2>Hand to Hand Combat</h2>
            <img src="/images/icons/combatIcon.png" alt="Combat Icon" className="combatIcon" />
          </div>
          <p><b>Combat Value:</b> {unit["Hand-to-Hand"]["Combat Value"]}</p>
          <p><b>Large Unit:</b> {unit["Hand-to-Hand"].Modifiers["Large Unit"]}</p>
          <p><b>Small Unit:</b> {unit["Hand-to-Hand"].Modifiers["Small Unit"]}</p>
          <p><b>Tiny Unit:</b> {unit["Hand-to-Hand"].Modifiers["Tiny Unit"]}</p>
        </div>
        <div className="imageContainer">
          <img src="/images/infantry/line-infantry/British-Line-Infantry.jpg" alt="British Line Infantry" />
        </div>
      </div>
    </div>
    
  );
};

export default BritishLineInfantry;
