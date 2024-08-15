import Head from 'next/head';
import styles from '../styles/ShakenUnits.module.css'; // Adjust path as needed

const shakenUnitsSelection = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>BP - Quick Reference</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>Shaken Units</h1>

        <div className={styles.grid}>
        <p className={styles.cardModifiers}><span className={styles.modifierMinus}>&rarr; </span>Shaken units are removed from battle for good if they leave the table - they will not return!</p>
                <p className={styles.cardModifiers}><span className={styles.modifierMinus}>&rarr;</span>Shaken units suffer a -1 to hit penalty in shooting</p>
                <p className={styles.cardModifiers}><span className={styles.modifierMinus}>&rarr;</span>Shaken units suffer a -1 to hit penalty in hand-to-hand combat</p>
                <p className={styles.cardModifiers}><span className={styles.modifierMinus}>&rarr;</span>Shaken units cannot charge or counter-charge an enemy unit</p>
                <p className={styles.cardModifiers}><span className={styles.modifierMinus}>&rarr;</span>Shaken Cavalry units cannot perform a sweeping advance, even if they were victorious.</p>
        </div>
      </main>

      <footer>
        {/* Footer content here */}
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

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default shakenUnitsSelection;
