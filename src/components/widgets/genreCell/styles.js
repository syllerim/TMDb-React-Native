import { StyleSheet, Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    cellContainer: {
        width: '100%',
        height: 40,
        backgroundColor: 'black',
        paddingHorizontal: 60,
        borderColor: 'white',
        borderWidth: 0,
        justifyContent: 'center', 
        flex: 1
    },
    label: {
        alignItems: 'center',
        color: 'white',
        fontWeight: '400',
        fontSize: 18,
        alignItems: 'center' 
    },
})
