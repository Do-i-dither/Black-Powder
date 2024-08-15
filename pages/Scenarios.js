import Head from 'next/head';
import styles from '../styles/Scenarios.module.css'; // Adjust path as needed

const ScenariosSelection = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>BP - Quick Reference</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>Scenarios</h1>

        <div className={styles.grid}>
          {/* Victorious Units Card */}
          <div className={styles.card}>
            <h3>Victorious Units (Hand-to-Hand)</h3>
            <ul>
              <li>If units on one side either retire or break, the victorious unit can:
                <ul>
                  <li>&rarr; Nothing</li>
                  <li>&rarr; Change formation</li>
                  <li>&rarr; Fall Back</li>
                  <li>&rarr; Make a sweeping advance (cavalry only)</li>
                  <li>&rarr; Occupy buildings</li>
                </ul>
              </li>
              <li>If all the enemy touching a unit retires or breaks, but other enemies are still engaged in the same combat:
                <ul>
                  <li>&rarr; Nothing</li>
                  <li>&rarr; Change formation</li>
                  <li>&rarr; Fall Back</li>
                  <li>&rarr; Move back into combat</li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Drawn Combat Card */}
          <div className={styles.card}>
            <h3>Drawn Combat</h3>
            <ul>
              <li>All engaged units that were already shaken must do a break test.</li>
              <li>If the combat is a draw:
                <ul>
                  <li>&rarr; All cavalry on both sides that are not shaken must automatically retire one full move.</li>
                  <li>&rarr; Infantry units that are not shaken will hold their ground and fight again next round.</li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Sweeping Advance Card */}
          <div className={styles.card}>
            <h3>Sweeping Advance</h3>
            <p>If a unit is victorious in combat and the enemy unit either breaks or retires, the victorious unit can perform a sweeping advance:</p>
            <ul>
              <li>&rarr; Up to one move to its front.</li>
              <li>&rarr; If the unit is cavalry, they may charge once more as an attack.</li>
              <li>&rarr; If successful in their second charge, cavalry can only perform a sweeping advance again; they cannot charge again in that turn.</li>
            </ul>
          </div>

          {/* Units Not Clear Targets Card */}
          <div className={styles.card}>
            <h3>Units That Are Not Clear Targets</h3>
            <ul>
              <li>&rarr; All units in Skirmish formation</li>
              <li>&rarr; All deployed Artillery</li>
              <li>&rarr; Units partly within the shooter’s front quarter</li>
              <li>&rarr; Units partly in sight (could be covered by another unit or structure)</li>
              <li>&rarr; Units occupying buildings or cover</li>
              <li>&rarr; Units seen through narrow gaps</li>
            </ul>
          </div>

          {/* Units Cannot Intentionally Fall Short of Movement Card */}
          <div className={styles.card}>
            <h3>Units Cannot Intentionally Fall Short of Movement</h3>
            <p>Infantry units cannot intentionally fall short of an enemy without taking closing fire (6 inches).</p>
          </div>

          {/* Skirmishers Card */}
          <div className={styles.card}>
            <h3>Skirmishers</h3>
            <ul>
              <li>&rarr; Must choose a model to nominate as their 'shooting model'.</li>
              <li>&rarr; If a target is not in clear sight from all skirmishers from the 'shooting model', divide your attack dice into thirds depending on the visibility of the target.</li>
            </ul>
          </div>

          {/* Cannon Fire Card */}
          <div className={styles.card}>
            <h3>Cannon Fire</h3>
            <ul>
              <li><strong>Bouncing Ball:</strong> If a cannon is fired at a target and there is a unit directly behind the target within 3 inches, the unit behind is also treated as a new target.</li>
              <li><strong>Closing Fire:</strong> Cannons shoot closing fire as normal, always using canister or grapeshot at their closest range.</li>
              <li><strong>Firing Overhead:</strong> If a friendly unit is 6 inches away from the cannon and the cannon is on elevated ground, they can fire an overhead shot with a -1 to hit.</li>
            </ul>
          </div>

          {/* Traversing Targets Card */}
          <div className={styles.card}>
            <h3>Traversing Targets</h3>
            <p>If a unit traverses across an enemy within 12 inches, the traversed unit may shoot if the chargers have traversed at least half the size of the traversed unit. This also applies to Cannons.</p>
          </div>

          {/* Charging Card */}
          <div className={styles.card}>
            <h3>Charging</h3>
            <ul>
              <li>A unit can be charged from all sides, but only by one unit on each side. The charging units are allowed to be supported.</li>
              <li>Responses:
                <ul>
                  <li><strong>Infantry:</strong>
                    <ul>
                      <li>&rarr; Closing fire and holds its ground</li>
                      <li>&rarr; Evade (Infantry Skirmishers can evade up to one full move to home)</li>
                    </ul>
                  </li>
                  <li><strong>Cavalry:</strong>
                    <ul>
                      <li>&rarr; Evade (up to one full move to home if charged by infantry while in march formation)</li>
                      <li>&rarr; Turn to face: Cavalry can turn to face any unit charging it.</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
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

export default ScenariosSelection;
