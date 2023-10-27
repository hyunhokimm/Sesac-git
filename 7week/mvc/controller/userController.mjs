export const userCheck = (req) => {
  const dbId = 'kim';
  const dbPw = '1111';
  if (dbId === req.id && dbPw === req.password) {
    return '신원이 확인되었습니다.';
  } else {
    return '신원 확인이 필요합니다.';
  }
};
export const userAll = () => {};
export const userOne = () => {};
