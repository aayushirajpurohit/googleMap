/** @format */
import {
  PermissionsAndroid,
  PermissionStatus,
  Platform,
  Rationale,
} from "react-native";

class Utilities {
  formatMVR = (amount: any) => {
    return parseFloat(amount)
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, "$&,");
    // return parseInt(amount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  };

  //method to return
  checkNoSpecialCharacters = (value: string) => {
    if (/^[^!-\/:-@\[-`{-~ ]+$/.test(value) || value === "") {
      return true;
    }
    return false;
  };
}

export const emailValidation = (email: string) => {
  let regexText = new RegExp(
    "^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$"
  );
  return regexText.test(email);
};

export const passwordValidation = (password: string) => {
  let regex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$"
  );
  return regex.test(password);
};
export const numberValidation = (mobileNo: any) => {
  return mobileNo.length == 7;
};
export const matchPasswordValidation = (password: any, password2: any) => {
  return password == password2;
};

const utils = new Utilities();

export default utils;
