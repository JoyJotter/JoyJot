import React from 'react';
import Sidebar from './components/sidebar';
import List from './components/list';
import Chat from './components/chat';
import styles from './App.module.scss';

function App(): React.JSX.Element {
  return (
    <div className={styles.root}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.main}>
        <List />
      </div>
      <div className={styles.rightBar}>
        <Chat />
      </div>
    </div>
  );
}

export default App;
