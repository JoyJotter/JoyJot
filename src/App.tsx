import React from 'react';
import { useStore } from '@/state';
import { Tab } from './util/constant';
import Sidebar from './components/sidebar';
import List from './components/list';
import Chat from './components/chat';
import styles from './App.module.scss';

function App(): React.JSX.Element {
  const tab = useStore(
    (state) => state.tab,
  );
  return (
    <div className={styles.root}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.main}>
        {tab === Tab.docList && <List />}
      </div>
      <div className={styles.rightBar}>
        <Chat />
      </div>
    </div>
  );
}

export default App;
