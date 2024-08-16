import fs from 'fs';
import path from 'path';
import styles from './artillery.module.css'; // Adjust path as needed

export async function getStaticProps() {
// Define the path to your JSON file using a relative path
const filePath = path.resolve(process.cwd(), 'data/artilleryStats.json');
  
  // Read the JSON file
  const jsonData = fs.readFileSync(filePath);
  
  // Parse the JSON data
  const artilleryStats = JSON.parse(jsonData);
  
  // Access the correct path in the JSON structure
  const horseArtillery = artilleryStats.Artillery.HorseArtillery;
  
  // Return the data as props
  return {
    props: {
      horseArtillery
    }
  };
}

const ArtilleryHorse = ({ horseArtillery }) => {
  return (
    <div className={styles.card}>
      <h1>Horse Artillery</h1>
      <div className={styles.divider}></div>
      
      <div className={styles.cavalrySection}>
        <h4>{horseArtillery.Description}</h4>
        <div className={styles.divider}></div>
        <div className={styles.topRight}>
          <div className={styles.moraleContainer}>
            <img src="/images/morale/moraleIcon.png" alt="Morale Icon" className={styles.moraleIcon} />
            <p className={styles.iconText}>{horseArtillery.Morale}</p>
          </div>
          <div className={styles.staminaContainer}>
            <img src="/images/stamina/staminaIcon.png" alt="Stamina Icon" className={styles.staminaIcon} />
            <p className={styles.iconText}>{horseArtillery.Stamina}</p>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.stats}>

            <div className="movementContainer" style={{display:"flex"}}>
                <div className="movementColumn">
                    <div className={styles.headingWithIcon}>
                    <h2>Movement</h2>
                    <img src="/images/icons/movementIcon.png" alt="Movement Icon" className={styles.movementIcon} />
                    </div>
                    <p><b>Limbered Movement (Towed by Horses):</b> {horseArtillery.Movement.LimberedMovementTowedByHorses}</p>
                    <p><b>Unlimbered Movement (deployed for firing):</b> {horseArtillery.Movement.UnlimberedMovementDeployedForFiring}</p>
                    <p><b>Manhandled:</b> {horseArtillery.Movement.Manhandled}</p>
                    <p><b>Disordered:</b> {horseArtillery.Movement.Disordered}</p>
                </div>
                <div className="movementColumn"></div>
                    <div className="imageContainer">
                    <img style={{width:200}} src="/images/artillery/horse-artillery/field-artillery.png" alt="Horse Artillery" />
            </div>
          </div>
            <div className={styles.headingWithIcon}>
              <h2>Shooting</h2>
              <img src="/images/icons/shootingIcon.png" alt="Shooting Icon" className={styles.shootingIcon} />
            </div>

            <div className={styles.artilleryColumns}>
              <div className={styles.artilleryColumn}>
                <h3>Smoothbore Horse Artillery</h3>
                <p><b>Range:</b> {horseArtillery.Shooting.Range.SmoothboreHorseArtillery}</p>
                <p><b>Short Range (up to 12 inches):</b> {horseArtillery.Shooting.AttackDice.SmoothboreHorseArtillery.ShortRangeUpTo12Inches} attack dice</p>
                <p><b>Effective Range (12 - 24 inches):</b> {horseArtillery.Shooting.AttackDice.SmoothboreHorseArtillery.EffectiveRange12To24Inches} attack dice</p>
                <p><b>Long Range (24 - 36 inches):</b> {horseArtillery.Shooting.AttackDice.SmoothboreHorseArtillery.LongRange24To36Inches} attack dice</p>
              </div>
              
              <div className={styles.artilleryColumn}>
                <h3>Smoothbore Light Field Guns</h3>
                <p><b>Range:</b> {horseArtillery.Shooting.Range.SmoothboreLightFieldGuns}</p>
                <p><b>Short Range (up to 18 inches):</b> {horseArtillery.Shooting.AttackDice.SmoothboreLightFieldGuns.ShortRangeUpTo18Inches} attack dice</p>
                <p><b>Effective Range (18 - 36 inches):</b> {horseArtillery.Shooting.AttackDice.SmoothboreLightFieldGuns.EffectiveRange18To36Inches} attack dice</p>
                <p><b>Long Range (36 - 48 inches):</b> {horseArtillery.Shooting.AttackDice.SmoothboreLightFieldGuns.LongRange36To48Inches} attack dice</p>
              </div>
            </div>

            <div className={styles.headingWithIcon}>
              <h2>Hand to Hand Combat</h2>
              <img src="/images/icons/combatIcon.png" alt="Combat Icon" className={styles.combatIcon} />
            </div>
            <p><b>Combat Value:</b> {horseArtillery.HandToHand.CombatValue}</p>

            <div className={styles.headingWithIcon}>
              <h2>Special Rules</h2>
              <img src="/images/icons/specialRuleIcon.png" alt="Special Rule Icon" className={styles.specialRuleIcon} />
            </div>
            <p><b>Special Rule:</b> {horseArtillery.SpecialRuleOne}</p>
            <p><b>Special Rule:</b> {horseArtillery.SpecialRuleTwo}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtilleryHorse;
