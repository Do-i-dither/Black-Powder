// components/Navbar.js
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { useRouter } from 'next/router';
import { ReactSVG } from 'react-svg';

const Navbar = () => {
  const [menuStack, setMenuStack] = useState(['main']);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const router = useRouter(); // Hook to get the current route

  // Data structure for menu
  const menuData = {
    main: [
      { name: 'Units', submenu: 'units' },
      { name: 'Modifiers', href: '/Modifiers_Selection' },
      { name: 'Breaktest', href: '/Breaktest' },
      { name: 'Supports', href: '/Supports' },
      { name: 'Scenarios', href: '/Scenarios' },
      { name: 'Shaken Units', href: '/ShakenUnits' },
    ],
    units: [
      { name: 'Artillery', submenu: 'artillery' },
      { name: 'Cavalry', submenu: 'cavalry' },
      { name: 'Infantry', submenu: 'infantry' },
      { name: 'Royal Guard', submenu: 'royalGuard' },
    ],
    artillery: [
      { name: 'Field Artillery', href: '/units/artillery/field-artillery' },
      { name: 'Horse Artillery', href: '/units/artillery/horse-artillery' },
      { name: 'Siege Artillery', href: '/units/artillery/siege-artillery' },
    ],
    cavalry: [
      { name: 'Dragoons', submenu: 'cavalryDragoons' },
      { name: 'Heavy Cavalry', submenu: 'cavalryHeavy' },
      { name: 'Light Cavalry', submenu: 'cavalryLight' },
    ],
    infantry: [
      { name: 'Grenadiers', submenu: 'infantryGrenadiers' },
      { name: 'Light Infantry', submenu: 'infantryLight' },
      { name: 'Line Infantry', submenu: 'infantryLine' },
      { name: 'Militia', submenu: 'infantryMilitia' },
      { name: 'Skirmishers', submenu: 'infantrySkirmishers' },
    ],
    royalGuard: [
      { name: 'Cavalry', submenu: 'royalGuardCavalry' },
      { name: 'Infantry', submenu: 'royalGuardInfantry' },
    ],
    cavalryDragoons: [
      { name: 'French', href: '/units/cavalry/dragoons/french' },
      { name: 'British', href: '/units/cavalry/dragoons/british' },
    ],
    cavalryHeavy: [
      { name: 'French', href: '/units/cavalry/heavy-cavalry/french' },
      { name: 'British', href: '/units/cavalry/heavy-cavalry/british' },
    ],
    cavalryLight: [
      { name: 'French', href: '/units/cavalry/light-cavalry/french' },
      { name: 'British', href: '/units/cavalry/light-cavalry/british' },
    ],
    infantryGrenadiers: [
      { name: 'French', href: '/units/infantry/grenadiers/french' },
      { name: 'British', href: '/units/infantry/grenadiers/british' },
    ],
    infantryLight: [
      { name: 'French', href: '/units/infantry/light-infantry/french' },
      { name: 'British', href: '/units/infantry/light-infantry/british' },
    ],
    infantryLine: [
      { name: 'French', href: '/units/infantry/line-infantry/french' },
      { name: 'British', href: '/units/infantry/line-infantry/british' },
    ],
    infantryMilitia: [
      { name: 'French', href: '/units/infantry/militia/french' },
      { name: 'British', href: '/units/infantry/militia/british' },
    ],
    infantrySkirmishers: [
      { name: 'French', href: '/units/infantry/skirmishers/french' },
      { name: 'British', href: '/units/infantry/skirmishers/british' },
    ],
    royalGuardCavalry: [
      { name: 'French', href: '/units/royal-guard/cavalry/french' },
      { name: 'British', href: '/units/royal-guard/cavalry/british' },
    ],
    royalGuardInfantry: [
      { name: 'French', href: '/units/royal-guard/infantry/french' },
      { name: 'British', href: '/units/royal-guard/infantry/british' },
    ],
  };

  const handleMenuClick = (menu) => {
    setMenuStack((prev) => [...prev, menu]);
  };

  const handleBackClick = () => {
    setMenuStack((prev) => prev.slice(0, -1));
  };

  const toggleMenuVisibility = () => {
    setIsMenuVisible((prev) => !prev);
  };

  const currentMenu = menuStack[menuStack.length - 1];
  const previousMenu = menuStack[menuStack.length - 2] || 'main';

  useEffect(() => {
    // Check if we're in the browser
    if (typeof window !== 'undefined') {
      // Load menu state from localStorage
      const savedMenuStack = localStorage.getItem('menuStack');
      if (savedMenuStack) {
        setMenuStack(JSON.parse(savedMenuStack));
      }

      // Save menu state to localStorage
      const handleBeforeUnload = () => {
        localStorage.setItem('menuStack', JSON.stringify(menuStack));
      };

      window.addEventListener('beforeunload', handleBeforeUnload);

      return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
      };
    }
  }, []);

  useEffect(() => {
    // Check if we're in the browser
    if (typeof window !== 'undefined') {
      // Save the menu stack to localStorage whenever it changes
      localStorage.setItem('menuStack', JSON.stringify(menuStack));
    }
  }, [menuStack]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const menu = document.querySelector(`.${styles.navDrill}`);
      const hamburger = document.querySelector(`.${styles.hamburgerIcon}`);
      if (isMenuVisible && menu && !menu.contains(event.target) && !hamburger.contains(event.target)) {
        setIsMenuVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuVisible]);

  return (
    <>
      <header className={styles.navTop}>
        <span
          className={`${styles.hamburgerIcon} ${isMenuVisible ? styles.hamburgerIconHidden : ''}`}
          onClick={toggleMenuVisibility}
        >
          <ReactSVG src="/images/icons/HamburgerIcon.svg" />
        </span>
      </header>

      <nav className={`${styles.navDrill} ${isMenuVisible ? styles.navDrillVisible : ''}`}>
      <a href="/"><div className={styles.mobileMenuTitle}>
          <h1>Black Powder</h1>
          <p>Quick references whilst playing your game.</p> 
        </div></a>
        
        <span className={styles.closeButton} onClick={toggleMenuVisibility}>✖</span>
        <ul className={styles.navItems}>
          {menuStack.length > 1 && (
            <li className={styles.navItem}>
              <a className={styles.navBackButton} onClick={handleBackClick}>Back</a>
            </li>
          )}

          {menuData[currentMenu]?.map((item) => (
            <li key={item.name} className={styles.navItem}>
              {item.href ? (
                <a className={styles.navLink} href={item.href} onClick={() => { setIsMenuVisible(false); router.push(item.href); }}>{item.name}</a>
              ) : (
                <a className={styles.navLink} onClick={() => handleMenuClick(item.submenu)}>{item.name}</a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
