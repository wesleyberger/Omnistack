import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'; /* para isso necessário instalar: expo install expo-constants */

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
},

headerText: {
    fontSize: 15,
    color: '#737380'
},

headerTextBold: {
    fontWeight: 'bold',
},

title: {
    fontSize: 30,
    marginBottom: 16,
    marginTop: 48,
    color: '#13131a',
    fontWeight: 'bold'
},

description: {
    fontSize: 16,
    lineHeight: 29,
    color: '#737380' 
},


incidentList: {
    marginTop: 32,
}


});
