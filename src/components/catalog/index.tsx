import React from 'react';
import classnames from 'classnames';
import styles from './index.module.scss';

function Catalog(): React.JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div className={styles.tab}>
        <div className={styles.item}>目录</div>
        <div className={classnames(styles.item, styles.selected)}>标签</div>
      </div>
      <div className={styles.tagList}>
        <div className={styles.item}>
          <span className={styles.icon}>#</span>
          <span className={styles.name}>今日晚餐</span>
        </div>
      </div>
    </div>
  );
}

export default Catalog;
