import Head from 'next/head';
import styles from '../styles/Supports.module.css'; // Adjust path as needed

const supportsSelection = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>BP - Quick Reference</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>Supports</h1>

        <div className={styles.grid}>
        <p className={styles.cardModifiers}><span className={styles.modifierMinus}>&rarr; </span>Artillery cannot be supported</p>
                <p className={styles.cardModifiers}><span className={styles.modifierMinus}>&rarr;</span>Skirmishing Units cannot be supported</p>
                <p className={styles.cardModifiers}><span className={styles.modifierMinus}>&rarr;</span>Squares cannot be supported because they have no sides or side quarters</p>
                <p className={styles.cardModifiers}><span className={styles.modifierMinus}>&rarr;</span>Units within buildings cannot be supported.</p>
                <p className={styles.cardModifiers}><span className={styles.modifierMinus}>&rarr;</span>Units engaged to the side or rear cannot be supported, even if they are also engaged to the front.</p>
                <p className={styles.cardModifiers}><span className={styles.modifierMinus}>&rarr;</span>Supporting units only take a break test if the unit they are supporting gets broken</p>
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

export default supportsSelection;
