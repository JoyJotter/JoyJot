import React from 'react';
import classnames from 'classnames';
import styles from './index.module.scss';

const chat = [
  {
    type: 'system',
    content: '😉 你好，我可以根据提问，为你检索内容',
  },
  {
    type: 'user',
    content: '白切鸡咋做啊？',
  },
  {
    type: 'system',
    content: `吃白切鸡就是为了吃到原汁原味的鸡肉。以下是他的制作步骤：
    
    去腥。用姜、料酒等配料腌制 20 分钟，最好不要再加入其他东西。
    锅中水烧开，放入姜片、小葱、适量的米酒、食盐。
    放入鸡，烫一下，大概烫至五秒钟捞起，如此反复三次，三浸三提。
    放入冷水中泡一下，这样煮出来的鸡皮不容易烂，而且口感更脆。
    冷凉后，再次放入鸡，同样三提三放，然后改为小火，煮至二十五分钟。
    煮好了捞出，放入凉水中过凉。`,
  },
];
function Chat(): React.JSX.Element {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>知识问答</p>
      <div className={styles.list}>
        {chat.map((item) => (
          <div className={classnames(styles.item, item.type === 'system' ? styles.system : styles.user)}>
            <div className={styles.avatar}>
              {item.type === 'system' ? 'J' : 'A'}
            </div>
            <div className={styles.content}>{item.content}</div>
          </div>
        ))}
        <div className={styles.relativeDoc}>
          📖 相关文档 2
        </div>
      </div>
      <div className={styles.ask}>
        <input className={styles.input} type="text" placeholder="👋 向我提问：P" />
        <span className={styles.key}>⌘</span>
        <span className={styles.key}>K</span>
      </div>
    </div>
  );
}

export default Chat;
