import fs from 'fs';
import path from 'path';
import styles from './artillery.module.css'; // Adjust path as needed

export async function getStaticProps() {
  // Define the path to your JSON file
  const filePath = path.resolve('C:/Users/Scott/Desktop/Black-Powder-Rules/data/artilleryStats.json');
  
  // Read the JSON file
  const jsonData = fs.readFileSync(filePath);
  
  // Parse the JSON data
  const artilleryStats = JSON.parse(jsonData);
  
  // Access the correct path in the JSON structure
  const siegeArtillery = artilleryStats.Artillery["SiegeArtillery"];
  
  // Return the data as props
  return {
    props: {
      siegeArtillery
    }
  };
}

const SiegeGuns = ({ siegeArtillery }) => {
  return (
    <div className={styles.card}>
      <h1>Siege Artillery</h1>
      <div className={styles.divider}></div>
      
      <div className={styles.cavalrySection}>
        <h4>{siegeArtillery.Description}</h4>
        <div className={styles.divider}></div>
        <div className={styles.topRight}>
          <div className={styles.moraleContainer}>
            <img src="/images/morale/moraleIcon.png" alt="Morale Icon" className={styles.moraleIcon} />
            <p className={styles.iconText}>{siegeArtillery.Morale}</p>
          </div>
          <div className={styles.staminaContainer}>
            <img src="/images/stamina/staminaIcon.png" alt="Stamina Icon" className={styles.staminaIcon} />
            <p className={styles.iconText}>{siegeArtillery.Stamina}</p>
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
                <p><b>Limbered Movement (Towed by Horses):</b> {siegeArtillery.Movement["LimberedMovementTowedByHorses"]}</p>
                <p><b>Unlimbered Movement (Deployed for Firing):</b> {siegeArtillery.Movement["UnlimberedMovementDeployedForFiring"]}</p>
                <p><b>Manhandled:</b> {siegeArtillery.Movement["Manhandled"]}</p>
                <p><b>Disordered:</b> {siegeArtillery.Movement.Disordered}</p>
              </div>
              <div className="movementColumn"></div>
              <div className="imageContainer">
                <img style={{width:200}} src="/images/artillery/siege-artillery/field-artillery.png" alt="Siege Artillery" />
              </div>
            </div>

            <div className={styles.headingWithIcon}>
              <h2>Shooting</h2>
              <img src="/images/icons/shootingIcon.png" alt="Shooting Icon" className={styles.shootingIcon} />
            </div>

            <div className={styles.artilleryColumns}>
              <div className={styles.artilleryColumn}>
                <h3>Siege Guns</h3>
                <p><b>Range:</b> {siegeArtillery.Shooting.Range["SiegeGuns"]}</p>
                <p><b>Short Range (up to 24 inches):</b> {siegeArtillery.Shooting["AttackDice"]["SiegeGuns"]["ShortRangeUpTo24Inches"]} attack dice</p>
                <p><b>Effective Range (24 - 48 inches):</b> {siegeArtillery.Shooting["AttackDice"]["SiegeGuns"]["EffectiveRange24To48Inches"]} attack dice</p>
                <p><b>Long Range (48 - 60 inches):</b> {siegeArtillery.Shooting["AttackDice"]["SiegeGuns"]["LongRange48To60Inches"]} attack dice</p>
              </div>

              <div className={styles.artilleryColumn}>
                <h3>Mortars</h3>
                <p><b>Range:</b> {siegeArtillery.Shooting.Range["Mortars"]}</p>
                <p><b>Short Range (up to 12 inches):</b> {siegeArtillery.Shooting["AttackDice"]["Mortars"]["ShortRangeUpTo12Inches"]} attack dice</p>
                <p><b>Effective Range (12 - 36 inches):</b> {siegeArtillery.Shooting["AttackDice"]["Mortars"]["EffectiveRange12To36Inches"]} attack dice</p>
                <p><b>Long Range (36 - 48 inches):</b> {siegeArtillery.Shooting["AttackDice"]["Mortars"]["LongRange36To48Inches"]} attack dice</p>
              </div>
            </div>

            <div className={styles.headingWithIcon}>
              <h2>Hand to Hand Combat</h2>
              <img src="/images/icons/combatIcon.png" alt="Combat Icon" className={styles.combatIcon} />
            </div>
            <p><b>Combat Value:</b> {siegeArtillery["HandToHand"]["CombatValue"]}</p>

            <div className={styles.headingWithIcon}>
              <h2>Special Rules</h2>
              <img src="/images/icons/specialRuleIcon.png" alt="Special Rule Icon" className={styles.specialRuleIcon} />
            </div>
            <p><b>Special Rule (Siege Guns):</b> {siegeArtillery.SpecialRules.SiegeGuns}</p>
            <p><b>Special Rule (Disorder):</b> {siegeArtillery.SpecialRules.Disorder}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiegeGuns;
