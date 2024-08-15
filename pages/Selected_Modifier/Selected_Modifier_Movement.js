import Head from 'next/head';
import styles from '../../styles/Movement.module.css'; // Adjust path as needed


const modifierSelectionMovement = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>BP - Quick Reference</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>Movement</h1>
        <div className={styles.grid}>
          
            <div className={styles.card}>
                <h3>Move Distances</h3><img className={styles.icon}src="/images/icons/sizeIcon.png"></img>
                <p className={styles.cardModifiers}>Infantry, Limbered Foot Artillery,Wagons<span className={styles.modifierPlus}> 12 inches</span></p>
                <p className={styles.cardModifiers}>Cavalry, Limbered Horse Artillery<span className={styles.modifierPlus}> 18 inches</span></p>
                <p className={styles.cardModifiers}>Manhandled Artillery<span className={styles.modifierMinus}> 6 inches</span></p>
                <p className={styles.cardModifiers}>Manhandled Battalion guns<span className={styles.modifierPlus}> 12 inches</span></p>
                <p className={styles.cardModifiers}>Commanders on foot<span className={styles.modifierPlus}> 36 inches</span></p>
                <p className={styles.cardModifiers}>Commanders on horseback<span className={styles.modifierPlus}> 48 inches</span></p>
            </div>       
            <div className={styles.card}>
                <h3>Move Modifiers</h3><img className={styles.icon}src="/images/icons/movementIcon.png"></img>
                <p className={styles.cardModifiers}>Woods:<span className={styles.modifierMinus}> Half pace skirmish infantry only</span></p>
                <p className={styles.cardModifiers}>Rough Ground:<span className={styles.modifierMinus}> Half pace Infantry/Cavalry.</span><span className={styles.modifierPlus}> Skirmishers as normal only</span></p>
                <p className={styles.cardModifiers}>Crossing Obstacle:<span className={styles.modifierMinus}> 6 inch penalty</span></p>
                <p className={styles.cardModifiers}>Entering Building:<span className={styles.modifierMinus}> 6 inch penalty</span></p>
                <p className={styles.cardModifiers}>March Column:<span className={styles.modifierPlus}> Free move if command roll failed</span></p>
                <p className={styles.cardModifiers}>Limbered Artillery:<span className={styles.modifierPlus}> Free move if command roll failed</span></p>
                <p className={styles.cardModifiers}>Square:<span className={styles.modifierPlus}> 'One' Free move if command roll failed</span></p>
            </div>       
                
        </div>
      </main>

      <footer>
       
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>

    </div>
  );
};

export default modifierSelectionMovement;
