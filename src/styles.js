import { StyleSheet } from "react-native";
import * as Colors from '@pxblue/colors';

export default StyleSheet.create({
  checkbox: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    alignSelf: 'center'
  },
  horizontal_even: {
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  link: {
    color: Colors.blue['500'],
  },
  logo_product: {
    height: 75,
    width: '100%',
    marginBottom: 5
  },
  logo_cyber: {
    height: 75,
    width: '100%',
    marginVertical: 20
  },
  svg: {
    width: '100%',
    height: '100%',
    resizeMode: "contain",
  }
});