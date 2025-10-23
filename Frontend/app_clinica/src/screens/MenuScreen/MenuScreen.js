import { View, Text, Image, StyleSheet } from "react-native";
import BotaoMenu from "../../components/BotaoMenu";
import { Header } from "@react-navigation/stack";

const Logo = require('../../../assets/logo.png')
const IconeMedic = require('../../../assets/usuario-md.png')
const IconePaciente = require('../../../assets/utilizador.png')
const IconeConsulta = require('../../../assets/calendario.png')

const MenuScreen = ({navigation}) => {
    return(
        <view style={styles.container}>
            <Image style={styles.logo} source={Logo}/>
            <Text style={styles.header}>gerenciando sua clinica</Text>
            <view style={styles.btns}>
                <Text>Escolha qual seçaõ deseja inicar</Text>
                <BotaoMenu 
                    icone={IconeMedic}
                    titulo="médicos"
                    onPress={() => navigation.navigate('medicos')}
                    />
                    <BotaoMenu 
                    icone={IconePaciente}
                    titulo="pacientes"
                    onPress={() => navigation.navigate('pacientes')}
                    />
                    <BotaoMenu 
                    icone={IconeConsulta}
                    titulo="consulta"
                    onPress={() => navigation.navigate('consulta')}
                    />
            </view>
        </view>
    )
}

const styles=StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column',
        padding: 20,
        backgroundColor: '#fff'
    },
    logo:{
        width:'50%',
        height:'50%',
        alignSelf:'center',
        marginBottom: 1
    },
    header: {
        fontSize: 12,
        textAlign: 'left',
        fontWeight: 'bold'
    },
    btns : {
        marginTop:60,
        flex: 1
    }
})

export default MenuScreen;