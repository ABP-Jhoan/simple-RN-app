import { Button,TextInput,Text,TouchableOpacity,Image,StyleSheet, View } from 'react-native';
import { useState } from 'react';

export default function LoginForm({setIsLoggedIn}) {
    //? Creando el estado donde tenemos un objeto que serán las credenciales del usuario.
    const [formData, setFormData] = useState({
        user: '',
        pass: '',
    })
    /**
     * ? Seteando el state con lo que se escribe en los input's.
    **/ 
    const handleChange = (field, value) => {
        setFormData({
          ...formData,
          [field]: value,
        });
    }
    //? Función donde se realiza el procesamiento de las credenciales
    function login() {
        let usuario = formData.user
        let contrasena = formData.pass
        if (usuario == 'admin' && contrasena == '12345') {
            alert('Login exitoso')
            //? Cambiando el estado que evalúa si se inició sesión correctamente para redireccinar.
            setIsLoggedIn(true)
        }
        else{
            alert('Credenciales incorrectas')
        }
    }
    return(
        <View style={styles.container}>
            <Image style={styles.formImage} source={require('../assets/OrionLogo.png')}/>
            <Text style={{ color: '#fff' }}>Usuario: admin</Text>
            <Text style={{ color: '#fff' }}>Contraseña: 12345</Text>
            <TextInput
                style={styles.textInpu}
                placeholder="User"
                value={formData.name}
                onChangeText={(text) => handleChange('user', text)}
            />
            <TextInput
                style={styles.textInpu}
                placeholder="Password"
                secureTextEntry={true}
                value={formData.name}
                onChangeText={(text) => handleChange('pass', text)}
            />
            <Button style={styles.loginButton} title='Iniciar sesión' onPress={login}/>
            <View style={styles.legend}>
                <Text style={{ color: 'white' }}>Problemas al iniciar sesión?, </Text>
                <TouchableOpacity>
                    <Text style={{ color: '#000' }} onpress={() => Linking.openURL('https://www.example.com')} >
                        contactenos.
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 865,
        paddingTop: 100,
        padding: 20,
        backgroundColor: '#0061c9',
    },
    formImage: {
        alignSelf: 'center'
    },
    textInpu: {
        marginBottom: 20,
        backgroundColor: 'white',
        borderRadius: 5,
        height: 40,
        textAlign: 'center'
    },
    legend: {
        textAlign: 'center',
        width: '100%',
        marginTop: 20,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
})