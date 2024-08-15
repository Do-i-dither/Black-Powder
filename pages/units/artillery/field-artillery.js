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
  const fieldArtillery = artilleryStats.Artillery.FieldArtillery;
  
  // Return the data as props
  return {
    props: {
      fieldArtillery
    }
  };
}

const ArtilleryField = ({ fieldArtillery }) => {
  return (
    <div className={styles.card}>
      <h1>Field Artillery</h1>
      <div className={styles.divider}></div>
      
      <div className={styles.cavalrySection}>
        <h4>{fieldArtillery.Description}</h4>
        <div className={styles.divider}></div>
        <div className={styles.topRight}>
          <div className={styles.moraleContainer}>
            <img src="/images/morale/moraleIcon.png" alt="Morale Icon" className={styles.moraleIcon} />
            <p className={styles.iconText}>{fieldArtillery.Morale}</p>
          </div>
          <div className={styles.staminaContainer}>
            <img src="/images/stamina/staminaIcon.png" alt="Stamina Icon" className={styles.staminaIcon} />
            <p className={styles.iconText}>{fieldArtillery.Stamina}</p>
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
                    <p><b>Limbered Movement (Towed by Horses):</b> {fieldArtillery.Movement.LimberedMovementTowedByHorses}</p>
                    <p><b>Unlimbered Movement (deployed for firing):</b> {fieldArtillery.Movement.UnlimberedMovementDeployedForFiring}</p>
                    <p><b>Manhandled:</b> {fieldArtillery.Movement.Manhandled}</p>
                    <p><b>Disordered:</b> {fieldArtillery.Movement.Disordered}</p>
                </div>
                <div className="movementColumn"></div>
                    <div className="imageContainer">
                    <img style={{width:200}} src="/images/artillery/field-artillery/field-artillery.png" alt="Field Artillery" />
            </div>
          </div>
            <div className={styles.headingWithIcon}>
              <h2>Shooting</h2>
              <img src="/images/icons/shootingIcon.png" alt="Shooting Icon" className={styles.shootingIcon} />
            </div>

            <div className={styles.artilleryColumns}>
              <div className={styles.artilleryColumn}>
                <h3>Smoothbore Battalion Guns</h3>
                <p><b>Range:</b> {fieldArtillery.Shooting.Range.SmoothboreBattalionGuns}</p>
                <p><b>Short Range (up to 12 inches):</b> {fieldArtillery.Shooting.AttackDice.SmoothboreBattalionGuns.ShortRangeUpTo12Inches} attack dice</p>
                <p><b>Effective Range (12 - 24 inches):</b> {fieldArtillery.Shooting.AttackDice.SmoothboreBattalionGuns.EffectiveRange12To24Inches} attack dice</p>
                <p><b>Long Range (24 - 36 inches):</b> {fieldArtillery.Shooting.AttackDice.SmoothboreBattalionGuns.LongRange24To36Inches} attack dice</p>
              </div>
              
              <div className={styles.artilleryColumn}>
                <h3>Smoothbore Field Guns</h3>
                <p><b>Range:</b> {fieldArtillery.Shooting.Range.SmoothboreFieldGuns}</p>
                <p><b>Short Range (up to 18 inches):</b> {fieldArtillery.Shooting.AttackDice.SmoothboreFieldGuns.ShortRangeUpTo18Inches} attack dice</p>
                <p><b>Effective Range (18 - 36 inches):</b> {fieldArtillery.Shooting.AttackDice.SmoothboreFieldGuns.EffectiveRange18To36Inches} attack dice</p>
                <p><b>Long Range (36 - 48 inches):</b> {fieldArtillery.Shooting.AttackDice.SmoothboreFieldGuns.LongRange36To48Inches} attack dice</p>
              </div>
              
              <div className={styles.artilleryColumn}>
                <h3>Smoothbore Heavy Guns</h3>
                <p><b>Range:</b> {fieldArtillery.Shooting.Range.SmoothboreHeavyGuns}</p>
                <p><b>Short Range (up to 24 inches):</b> {fieldArtillery.Shooting.AttackDice.SmoothboreHeavyGuns.ShortRangeUpTo24Inches} attack dice</p>
                <p><b>Effective Range (24 - 48 inches):</b> {fieldArtillery.Shooting.AttackDice.SmoothboreHeavyGuns.EffectiveRange24To48Inches} attack dice</p>
                <p><b>Long Range (48 - 60 inches):</b> {fieldArtillery.Shooting.AttackDice.SmoothboreHeavyGuns.LongRange48To60Inches} attack dice</p>
              </div>
            </div>

            <div className={styles.headingWithIcon}>
              <h2>Hand to Hand Combat</h2>
              <img src="/images/icons/combatIcon.png" alt="Combat Icon" className={styles.combatIcon} />
            </div>
            <p><b>Combat Value:</b> {fieldArtillery.HandToHand.CombatValue}</p>

            <div className={styles.headingWithIcon}>
              <h2>Special Rules</h2>
              <img src="/images/icons/specialRuleIcon.png" alt="Special Rule Icon" className={styles.specialRuleIcon} />
            </div>
            <p><b>Special Rule:</b> {fieldArtillery.SpecialRuleOne}</p>
            <p><b>Special Rule:</b> {fieldArtillery.SpecialRuleTwo}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtilleryField;
