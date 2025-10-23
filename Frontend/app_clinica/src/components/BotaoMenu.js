import {
    TouchableOpacity, //usado para criar botoes customizado
    Text, Image, View, StyleSheet, Dimensions} from 'react-native';


const screendWidth = Dimensions.get('window').width;

const BUTTON_WIDTH_PERCENTAGE = 0.9;
const buttonWidth = screendWidth * BUTTON_WIDTH_PERCENTAGE;

const buttonHeight = buttonWidth * 0.5;

const BotaoMenu = ({icone, titulo, onpress}) => {
    return(
        <TouchableOpacity style={styles.botao} onPress={onpress} activeOpacity={0.7}>
            {icone &&(
            <Image source={icone} style={styles.icone} resizeMode="contain"/>
            )}
            <Text style={styles.titulo}>{titulo}</Text>
        </TouchableOpacity>
    )

};


const styles = StyleSheet.create({
    botao:{
        width: buttonWidth,
        height: buttonHeight,
        borderRadius : 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#007aff',
        padding: 10,
        marginVertical: 5,
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: {width:0, height:2},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    }, 
    icone: {
        width: '40%',
        height: '40%',
        marginBottom: 5,
    },
    titulo:{
        color: '#ffffff',
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold'
    }
});
export default BotaoMenu;