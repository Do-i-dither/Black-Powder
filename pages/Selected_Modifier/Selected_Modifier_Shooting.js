import Head from 'next/head';
import styles from '../../styles/Shooting.module.css'; // Adjust path as needed


const modifierSelectionShooting = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>BP - Quick Reference</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>Shooting</h1>
        <div className={styles.grid}>
          
            <div className={styles.card}>
                <h3>Ranges &rarr;</h3>
                <p>Pistols, Shotguns and Thrown Weapons: 6 inches</p>
                <p>Bow and Arrow: 12 inches</p>
                <p>Smoothbore Carbines: 12 inches</p>
                <p>Smoothbore Muskets: 18 inches</p>
                <p>Rifled Carbines: 18 inches</p>
                <p>Rifled Muskets: 24 inches</p>
                <p>Breech-loading Carbines: 24 inches</p>
                <p>Breech-loading Rifles: 30 inches</p>
                <p>Bolt-action Carbines: 30 inches</p>
                <p>Bolt-action Rifles: 36 inches</p>
                <p>Light smoothbore artillery: 36 inches</p>
                <p>Smoothbore artillery: 48 inches</p>
            </div>
          

            <div className={styles.cardShooting}>
                <h3>Shooting To Hit &rarr;</h3><img className={styles.icon}src="/images/icons/shootingIcon.png"></img>
                <p className={styles.cardModifiers}><span className={styles.modifierPlus}>+1 </span>Artillery shooting at Column or Square</p>
                <p className={styles.cardModifiers}><span className={styles.modifierPlus}>+1 </span>Close Range (6"), Closing Fire or Skirmishers</p>
                <p className={styles.cardModifiers}><span className={styles.modifierMinus}>-1 </span>Shooters shaken or disordered</p>
                <p className={styles.cardModifiers}><span className={styles.modifierMinus}>-1 </span>Target is Skirmishers,Deployed Artillery, or not clear</p>
                <p className={styles.cardModifiers}><span className={styles.modifierMinus}>-1 </span>Artillery at over half range</p>
                <p className={styles.cardModifiers}><span className={styles.modifierMinus}>-1 </span>Cannon Shooting Overhead</p>
                
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

export default modifierSelectionShooting;
