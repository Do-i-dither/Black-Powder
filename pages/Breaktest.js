import Head from 'next/head';
import styles from '../styles/Breaktest.module.css'; // Adjust path as needed

const breaktestSelection = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>BP - Quick Reference</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>Breaktests</h1>

        <div className={styles.grid}>
        <div className={styles.card}>
          <h3>When to test?</h3>
          <p className={styles.cardModifiers}><span className={styles.modifierLetter}>a. </span>Test if excess hits suffered from shooting</p>
          <p className={styles.cardModifiers}><span className={styles.modifierLetter}>b. </span>Test if shaken or suffering artillery casualties by closing fire</p>
          <p className={styles.cardModifiers}><span className={styles.modifierLetter}>c. </span>Test if defeated in hand-to-hand combat</p>
          <p className={styles.cardModifiers}><span className={styles.modifierLetter}>d. </span>Test if shaken by drawn hand-to-hand combat</p>
          <p className={styles.cardModifiers}><span className={styles.modifierLetter}>e. </span>Test supporting units if supported unit breaks and flees</p>
        </div>
          <div className={styles.card}>
            <h3>Modifiers</h3>
            <img className={styles.icon} src="/images/morale/moraleIcon.png" alt="Morale Icon" />
            <p className={styles.cardModifiers}><span className={styles.modifierMinus}>-1 </span>Per excess casualy</p>
            <p className={styles.cardModifiers}><span className={styles.modifierMinus}>-1 </span>For being Disordered</p>
            <p className={styles.cardModifiers}><span className={styles.modifierMinus}>-1 </span>If Suffered Cassualties from artillery for tests 'a' or 'b'</p>
          </div>

          <div className={styles.card}>
  <h3>Break Test Results</h3>
  <img className={styles.icon} src="/images/icons/specialRuleIcon.png" alt="breaktest Icon" />
  <div className={styles.tableResponsive}>
    <table>
      <thead>
        <tr>
          <th>Modified Dice Roll</th>
          <th>Combat Type</th>
          <th>Outcome</th>
        </tr>
      </thead>
      <tbody>
        {/* Row for Dice Roll 4 or less */}
        <tr>
          <td>4 or less</td>
          <td>Shooting and Hand-to-Hand</td>
          <td>
            <strong>Infantry, Cavalry & Artillery:</strong> Unit breaks and is deemed destroyed (remove from the field).
          </td>
        </tr>

        {/* Row for Dice Roll 5 */}
        <tr>
          <td>5</td>
          <td>Shooting and Hand-to-Hand</td>
          <td>
            <strong>Infantry & Cavalry:</strong> The unit retires one full move without changing formation and becomes disordered. If unable to comply, use two full moves. If still unable to comply, the unit is deemed destroyed.
          </td>
        </tr>
        <tr>
          <td>5</td>
          <td>Shooting and Hand-to-Hand</td>
          <td>
            <strong>Artillery:</strong> The unit is deemed destroyed (remove from the field).
          </td>
        </tr>

        {/* Row for Dice Roll 6 - Shooting */}
        <tr>
          <td>6</td>
          <td>Shooting</td>
          <td>
            <strong>Infantry & Cavalry:</strong> The unit holds its ground.
          </td>
        </tr>

        {/* Row for Dice Roll 6 - Hand-to-Hand */}
        <tr>
          <td>6</td>
          <td>Hand-to-Hand</td>
          <td>
            <strong>Infantry & Cavalry:</strong> The unit retires one full move without changing formation and becomes disordered. If unable to comply, use two full moves. If still unable to comply, the unit is deemed destroyed.
          </td>
        </tr>

        {/* Row for Dice Roll 7 or more - Shooting */}
        <tr>
          <td>7 or more</td>
          <td>Shooting</td>
          <td>
            <strong>Infantry & Cavalry:</strong> The unit holds its ground.
          </td>
        </tr>

        {/* Row for Dice Roll 7 or more - Hand-to-Hand */}
        <tr>
          <td>7 or more</td>
          <td>Hand-to-Hand</td>
          <td>
            <strong>Infantry:</strong> The unit holds its ground and continues fighting in the following combat round.
          </td>
        </tr>
        <tr>
          <td>7 or more</td>
          <td>Hand-to-Hand</td>
          <td>
            <strong>Cavalry:</strong> The unit retires one full move without changing formation. If unable to comply, use two full moves and become disordered. If still unable to comply, the unit is deemed destroyed.
          </td>
        </tr>
        <tr>
          <td>7 or more</td>
          <td>Hand-to-Hand</td>
          <td>
            <strong>Artillery:</strong> The unit is deemed destroyed (remove from the field).
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

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

export default breaktestSelection;
