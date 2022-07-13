export const convertObjectToQueryString = (obj: any) => {
  const copyObj = { ...obj };
  for (let key in copyObj) {
    if (!copyObj[key]) {
      delete copyObj[key];
    }
  }
  const result = new URLSearchParams(copyObj).toString();
  return result;
};
