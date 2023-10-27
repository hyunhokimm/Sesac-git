let user = [
  {
    dbId: 'kim',
    dbPw: '111',
  },
  {
    dbId: 'lee',
    dbPw: '222',
  },
  {
    dbId: 'oh',
    dbPw: '333',
  },
];

export const userCheck = (req) => {
  for (let i = 0; i < user.length; i++) {
    console.log(i);
    console.log(user[i].dbId, user[i].dbPw);
    console.log(req.id, req.password);
    if (user[i].dbId === req.id && user[i].dbPw === req.password) {
      return '신원이 확인되었습니다.';
    }
  }
  return '신원 확인이 필요합니다.';
};

export const userAll = () => {};
export const userOne = () => {};
