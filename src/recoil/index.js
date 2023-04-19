import { atom } from 'recoil';

const userAtom = atom({
  key: 'userAtom',
  default: {
    auth: false,
    difficulty: 100,
    user: {},
  },
});

export default userAtom;
