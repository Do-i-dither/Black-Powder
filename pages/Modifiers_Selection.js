import Head from 'next/head';
import styles from '../styles/Modifiers.module.css'; // Adjust path as needed



const modifiersSelection = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>BP - Quick Reference</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Select Modifier
        </h1>

        <div className={styles.grid}>
          <a href="/Selected_Modifier/Selected_Modifier_Shooting" className={styles.card}>
            <h3>Shooting &rarr;</h3><img className={styles.icon}src="images/icons/shootingIcon.png"></img>
          </a>
          <a href="/Selected_Modifier/Selected_Modifier_HandToHand" className={styles.card}>
            <h3>Hand To Hand &rarr;</h3><img className={styles.icon}src="images/icons/combatIcon.png"></img>
          </a>
          <a href="/Selected_Modifier/Selected_Modifier_Morale_Save" className={styles.card}>
            <h3>Morale Save &rarr;</h3><img className={styles.icon}src="images/morale/moraleIcon.png"></img>
          </a>
          <a href="/Selected_Modifier/Selected_Modifier_Movement" className={styles.card}>
            <h3>Movement Modifiers &rarr;</h3><img className={styles.icon}src="images/icons/movementIcon.png"></img>
          </a>
          <a href="/Selected_Modifier/Selected_Modifier_Command" className={styles.card}>
            <h3>Command &rarr;</h3><img className={styles.icon}src="images/icons/saluteIcon.png"></img>
          </a>
          

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

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default modifiersSelection;
