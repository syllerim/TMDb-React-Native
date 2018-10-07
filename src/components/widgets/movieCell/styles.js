import { StyleSheet, Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    cellContainer: {
        width: '50%',
        height: 300,
        backgroundColor: 'rgb(30,30,30)',
        paddingHorizontal: 0,
        paddingVertical: 0,
        borderColor: 'black',
        borderWidth: 0
    },
    image: {
        width: '100%', 
        height: '100%'
    }
})
