import Head from 'next/head';
import styles from '../../styles/HandToHand.module.css'; // Adjust path as needed


const modifierSelectionHandToHand = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>BP - Quick Reference</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>Hand To Hand</h1>
        <div className={styles.grid}>
          
            <div className={styles.card}>
                <h3>Combat to Hit modifiers</h3><img className={styles.icon}src="/images/icons/combatIcon.png"></img>
                <p className={styles.cardModifiers}><span className={styles.modifierPlus}>+1 </span>Charging</p>
                <p className={styles.cardModifiers}><span className={styles.modifierPlus}>+1 </span>Won the last round of combat</p>
                <p className={styles.cardModifiers}><span className={styles.modifierMinus}>-1 </span>Shaken or disordered</p>
                <p className={styles.cardModifiers}><span className={styles.modifierMinus}>-1 </span>Skirmishers</p>
                <p className={styles.cardModifiers}><span className={styles.modifierMinus}>-1 </span>Engaged to flank or rear.</p>
            </div>
            
            <div className={styles.card}>
                <h3>Combat Result Modifiers</h3><img className={styles.icon}src="/images/icons/specialRuleIcon.png"></img>
                <p className={styles.cardModifiers}><span className={styles.modifierPlus}>+1 </span>Support to the rear</p>
                <p className={styles.cardModifiers}><span className={styles.modifierPlus}>+1 </span>Per flank Support</p>
                <p className={styles.cardModifiers}><span className={styles.modifierPlus}>+3 </span>Square vs Cavalry</p>
                <p className={styles.cardModifiers}><span className={styles.modifierPlus}>+1-3 </span>Occupying building (size)</p>
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

export default modifierSelectionHandToHand;
