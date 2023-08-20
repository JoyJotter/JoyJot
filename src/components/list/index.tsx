import React from 'react';
import { useStore } from '@/state/index';
import styles from './index.module.scss';

function List(): React.JSX.Element {
  const docList = useStore((state) => state.docList);
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1 className={styles.title}>我的文档</h1>
        <button className={styles.create} type="button">新建</button>
      </div>
      <div className={styles.list}>
        {
          docList.map(item => (
            <div className={styles.item}>
              <h2 className={styles.itemTitle}>{item.title}</h2>
              <p className={styles.content}>{item.content}</p>
              <div className={styles.created}>{item.created_at}</div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default List;
