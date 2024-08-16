// pages/units/infantry/grenadiers/french.js
import fs from 'fs';
import path from 'path';

export async function getStaticProps() {
    const filePath = path.resolve(process.cwd(), 'data/infantryStats.json');
    const jsonData = fs.readFileSync(filePath);
    const infantryStats = JSON.parse(jsonData);

    return {
        props: {
            unit: infantryStats.Infantry["Grenadiers/95th Rifles"].French
        }
    };
}

const FrenchGrenadiersInfantry = ({ unit }) => {
    const shootingRange = unit.Shooting.Range;
    const attackDice = unit.Shooting["Attack Dice"];
    const handToHandModifiers = unit["Hand-to-Hand"].Modifiers;
    const movement = unit.Movement;

    return (
        <div className="card">
            <h1>French Grenadiers</h1>
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
                    <p><b>Line Formation:</b> {movement["Line Formation"]}</p>
                    <p><b>Attack Column:</b> {movement["Attack Column"]}</p>
                    <p><b>March Column Formation:</b> {movement["March Column Formation"]}</p>
                    <p><b>Skirmish Formation:</b> {movement["Skirmish Formation"]}</p>
                    <p><b>Disordered:</b> {movement.Disordered}</p>
                    
                    <div className="headingWithIcon">
                        <h2>Shooting</h2>
                        <img src="/images/icons/shootingIcon.png" alt="Shooting Icon" className="shootingIcon" />
                    </div>
                    <p><b>Range:</b> Smoothbore Muskets: {shootingRange["Smoothbore Muskets"]}, Rifled Muskets: {shootingRange["Rifled Muskets"]}</p>
                    <p><b>Line Formation:</b> {attackDice["Line Formation"]} attack dice</p>
                    <p><b>Attack Column:</b> {attackDice["Attack Column"]} attack dice</p>
                    <p><b>March Column or Square:</b> {attackDice["March Column or Square"]} attack die</p>
                    <p><b>Mixed Formation:</b> {attackDice["Mixed Formation"]} attack die</p>
                    
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
                    <img src="/images/infantry/grenadiers/french-grenadiers.jpeg" alt="French Grenadiers Infantry" />
                </div>
            </div>
        </div>
    );
};

export default FrenchGrenadiersInfantry;
