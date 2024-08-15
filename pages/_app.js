// pages/_app.js
import '../styles/global.css';
import '../styles/infantry/infantry.css'
import Navbar from '../components/Navbar';
import '../styles/fonts/aquiline/fonts.css';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;