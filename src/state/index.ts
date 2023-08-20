import { create } from 'zustand';
import { Tab } from '@/util/constant';
// const data = {
//   tab: '',
//   showChat: '',
//   docList: [
//     { id: '', title: '', content: '', created_at: '' },
//     { id: '', title: '', content: '', created_at: '' },
//     { id: '', title: '', content: '', created_at: '' },
//   ],
//   tags: [
//     { id: '1', name: '1' },
//   ],
//   tagMaps: {
//     1: [],
//     2: [],
//   },
// };

interface IDoc {
  id: string;
  title: string;
  content: string;
  created_at: string;
}

interface ITag {
  id: string;
  name: string;
}

interface ITagMap {
  [key: string]: string[];
}

type State = {
  tab: Tab;
  showChat: boolean;
  docList: IDoc[];
  tag: ITag[];
  tagMap: ITagMap;
};

type Action = {
  setTab: (tab: State['tab']) => void;
};

export const useStore = create<State & Action>((set) => ({
  tab: Tab.docList,
  showChat: false,
  docList: [
    {
      id: '1',
      title: '🐮 干炒牛河',
      content: '干炒牛河的制法是先把嫩牛肉炒至半熟。然后下油,炒香芽菜及洋葱，下河粉快炒，加入酱油及熟油,最后放入牛肉炒匀。干炒牛河讲究“镬气”，必须猛火快炒。要炒匀之余，手势不能太快，不然粉会碎掉。油的...',
      created_at: '2023-04-24',
    },
    {
      id: '2',
      title: '🐔 白切鸡',
      content: '吃白切鸡就是为了吃到原汁原味的鸡肉，所以除了去腥时要用到姜、料酒等配料，最好不要再加入其他东西。即使有酱汁，也不要淋到鸡肉上，容易让鸡肉变味，最好是把酱汁放碗里，要吃的...',
      created_at: '2023-04-24',
    },
    {
      id: '3',
      title: '🐟 清蒸东星斑',
      content: '清蒸东星斑的做法。1. 食材新鲜很重要，清洗干净去内脏，鱼身划几刀。2. 鱼身抹些细盐和黄酒稍稍腌制。3. 水开后将鱼放入蒸锅蒸 12 到 15 分钟左右。4. 蒸好的鱼另外换盘,放些姜丝。蒸鱼豉油...',
      created_at: '2023-04-24',
    },
  ],
  tag: [],
  tagMap: {},
  setTab: (tab) => set(() => ({ tab })),
}));
