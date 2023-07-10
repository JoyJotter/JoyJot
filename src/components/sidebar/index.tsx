import React from 'react';
import classnames from 'classnames';
import Catalog from '../catalog';
import styles from './index.module.scss';

function sidebar():React.JSX.Element {
  return (
    <div className={styles.sidebar}>
      <div className={styles.tab}>
        <div className={classnames(styles.item, styles.selected)}>我的文档</div>
        <div className={styles.item}>我的提问</div>
        <div className={styles.item}>知识网络</div>
      </div>
      <Catalog />
      <div className={styles.logo}>A</div>
    </div>
  );
}

export default sidebar;
