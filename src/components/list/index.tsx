import React from 'react';
import styles from './index.module.scss';

const list = [
  {
    title: '🐮 干炒牛河',
    content: '干炒牛河的制法是先把嫩牛肉炒至半熟。然后下油,炒香芽菜及洋葱，下河粉快炒，加入酱油及熟油,最后放入牛肉炒匀。干炒牛河讲究“镬气”，必须猛火快炒。要炒匀之余，手势不能太快，不然粉会碎掉。油的...',
    created_at: '2023-04-24',
  },
  {
    title: '🐔 白切鸡',
    content: '吃白切鸡就是为了吃到原汁原味的鸡肉，所以除了去腥时要用到姜、料酒等配料，最好不要再加入其他东西。即使有酱汁，也不要淋到鸡肉上，容易让鸡肉变味，最好是把酱汁放碗里，要吃的...',
    created_at: '2023-04-24',
  },
  {
    title: '🐟 清蒸东星斑',
    content: '清蒸东星斑的做法。1. 食材新鲜很重要，清洗干净去内脏，鱼身划几刀。2. 鱼身抹些细盐和黄酒稍稍腌制。3. 水开后将鱼放入蒸锅蒸 12 到 15 分钟左右。4. 蒸好的鱼另外换盘,放些姜丝。蒸鱼豉油...',
    created_at: '2023-04-24',
  },
];

function List(): React.JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1 className={styles.title}>我的文档</h1>
        <button className={styles.create} type="button">新建</button>
      </div>
      <div className={styles.list}>
        {
          list.map(item => (
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
