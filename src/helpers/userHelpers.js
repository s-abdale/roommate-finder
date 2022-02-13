
// convert raw data to Array;
export const prepareUserData = (tempUserData) => {
  console.log('tempUserData parsing');
  console.log(Object.values(tempUserData));
  return Object.values(tempUserData);
};



// input user data
export const getBasicInfo = (userDataArray) => {
  console.log('user data array...');
  console.log(userDataArray);
  return userDataArray
}
// output name, image, bio