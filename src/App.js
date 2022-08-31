import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import CardContainer from "./components/CardContainer";

import styles from "./styles/App.module.css";

function App() {
  return (
    <div>
      <div className={styles.header}>
        <Header />
        <Scoreboard />
      </div>
      <CardContainer />
    </div>
  );
}

export default App;
