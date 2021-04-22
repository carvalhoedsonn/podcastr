import "../styles/global.scss";

import { Player } from "../components/Player/index";
import { Header } from "../components/Header/index";

import styles from "../styles/app.module.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.wrapper}>
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
      <Player />
    </div>
  );
}

export default MyApp;
