import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>BP - Quick Reference</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Black Powder
        </h1>

        <div className={styles.grid}>
          <a href="/Unit_Selection" className={styles.card}>
            <h3>Units &rarr;</h3>
            <p>Find out all information on each units stats.</p>
          </a>

          <a href="/Modifiers_Selection" className={styles.card}>
            <h3>Modifiers &rarr;</h3>
            <p>Check the shooting & Hand-to-Hand modifiers here.</p>
          </a>

          <a
            href="/Breaktest"
            className={styles.card}
          >
            <h3>Breaktest &rarr;</h3>
            <p>Unsure about your breaktest? check here!</p>
          </a>

          <a
            href="/Supports"
            className={styles.card}
          >
            <h3>Supports &rarr;</h3>
            <p>
              Check the rules on units that support.
            </p>
          </a>

          <a href="Scenarios" className={styles.card}>
            <h3>Scenarios &rarr;</h3>
            <p>Unsual situation? Check if the scenario is here!</p>
          </a>

          <a href="/ShakenUnits" className={styles.card}>
            <h3>Shaken Units &rarr;</h3>
            <p>Find out all information on shaken units</p>
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
}
