import Head from 'next/head';
import styles from '../../styles/Morale.module.css'; // Adjust path as needed


const modifierSelectionMorale = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>BP - Quick Reference</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>Morale Save</h1>
        <div className={styles.grid}>
          
            <div className={styles.card}>
                <h3>Save Modifiers (roll on 4+)</h3><img className={styles.icon}src="/images/morale/moraleIcon.png"></img>
                <p className={styles.cardModifiers}><span className={styles.modifierPlus}>+1 </span>Infantry in Attack Column unless hit by artillery</p>
                <p className={styles.cardModifiers}><span className={styles.modifierPlus}>+1 </span>Target within wood, hedgerows or similar (light cover)</p>
                <p className={styles.cardModifiers}><span className={styles.modifierPlus}>+2 </span>Target is within buildings/fortifications (heavy cover)</p>
                <p className={styles.cardModifiers}><span className={styles.modifierMinus}>-2 </span>Target is in March Column</p>
                <p className={styles.cardModifiers}><span className={styles.modifierMinus}>-1 </span>Hit by artillery at long range</p>
                <p className={styles.cardModifiers}><span className={styles.modifierMinus}>-2 </span>Hit by artillery at short range</p>
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

export default modifierSelectionMorale;
