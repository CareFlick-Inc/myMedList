//imports
import {StyleSheet} from 'react-native';
import { wrp ,hrp,color} from './Dim';

export default StyleSheet.create({
    singlereconcile: {
      position: "relative",
      backgroundColor: color.bgColorPrimary,
      flex:1,
    },
    bodycontainer: {
      position: "relative",
      marginTop: (hrp(10)),
      shadowColor: color.shadowColorPrimary,
      shadowOpacity: 0.2,
      elevation: (wrp(7)),
      shadowOffset: {
        width: 0,
        height: (wrp(1))
      },
      shadowRadius: (wrp(5)),
    },
   twinButtonContainer: {
  paddingLeft: "5%",
  paddingRight: "5%",
  paddingVertical: 10,
  flexDirection: "row",
  width: "100%",
  justifyContent: "space-between",
  backgroundColor: '#fff',  // match your app background
},
   hallfInputContainer: {
    opacity: 1,
    position: "relative",
    backgroundColor: "transparent",
    width: ("100%"),
    flexDirection: "row",
    justifyContent: "space-between",
  },

  //collapseable view stye
  collapseStyle:{
    position:"relative"
  }
  
  });