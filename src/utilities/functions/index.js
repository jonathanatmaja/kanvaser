import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

export const wp = (val) => {
  return widthPercentageToDP(val);
};

export const hp = (val) => {
  return heightPercentageToDP(val);
};
