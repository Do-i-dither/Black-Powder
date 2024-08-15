import Head from 'next/head';
import styles from '../../styles/Command.module.css'; // Adjust path as needed


const modifierSelectionCommand = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>BP - Quick Reference</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>Command</h1><img className={styles.icon}src="/images/icons/saluteIcon.png"></img>
        <div className={styles.grid}>
          
             <div className={styles.cardShooting}>
                <h3>Command Movement Modifiers</h3>
                <p className={styles.cardModifiers}><span className={styles.modifierMinus}>-1 </span>Per 12 inches from commander unit</p>
                <p className={styles.cardModifiers}><span className={styles.modifierMinus}>-1 </span>Enemy unit within 12 inches of unit receiving order</p>
                <p className={styles.cardModifiers}><span className={styles.modifierPlus}>+1 </span>Attack Column</p>
                <p className={styles.cardModifiers}><span className={styles.modifierPlus}>+1 </span>March Column/Limbered Artillery unless on road or track</p>
                <p className={styles.cardModifiers}><span className={styles.modifierPlus}>+2 </span>March Column/Limbered Artillery on road or track</p>  
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

export default modifierSelectionCommand;
