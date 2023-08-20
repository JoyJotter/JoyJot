import React from 'react';
import classnames from 'classnames';
import { Tab } from '@/util/constant';
import { useStore } from '@/state';
import Catalog from '../catalog';
import styles from './index.module.scss';

function sidebar():React.JSX.Element {
  const [tab, setTab] = useStore(
    (state) => [state.tab, state.setTab],
  );
  return (
    <div className={styles.sidebar}>
      <div className={styles.tab}>
        <div
          className={classnames(styles.item, { [styles.selected]: tab === Tab.docList })}
          onClick={() => setTab(Tab.docList)}
        >
          我的文档
        </div>
        <div
          className={classnames(styles.item, { [styles.selected]: tab === Tab.questionList })}
          onClick={() => setTab(Tab.questionList)}
        >
          我的提问
        </div>
      </div>
      <Catalog />
      <div className={styles.logo}>A</div>
    </div>
  );
}

export default sidebar;
