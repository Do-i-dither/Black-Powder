import Head from 'next/head';
import styles from '../../../../styles/Home.module.css'; // Adjust path as needed


const unitRoyalGuardCavalryNation = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>BP - Quick Reference</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Select a Nation
        </h1>
        <div className={styles.grid}>
          
          <a href="/units/royal-guard/cavalry/british" className={styles.card}>
            <h3>British &rarr;</h3>
          </a>

          <a href="/units/royal-guard/cavalry/french" className={styles.card}>
            <h3>French &rarr;</h3>
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

export default unitRoyalGuardCavalryNation;
