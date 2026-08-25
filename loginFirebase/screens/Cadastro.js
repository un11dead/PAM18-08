import{View, Text, TextInput, Button, Alert} from 'react-native'
import {useState} from 'react'

export default function Cadastro({navigation}) {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    return(
        <View>
        <Text>Cadastro</Text>
        <TextInput
            placeHolder='E-mail'
            value={setEmail}
            keyboardType='email-adress'
            autoCapitalize='none'
        />
        <TextInput
            placeholder='Senha'
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
        />
        <Button
            title='Cadastrar'
            onPress={()=>Alert.alert('Cadastro em construção')}
        />
            <Button
                title='Já tenho uma conta'
                onPress={()=>navigation.navigate('Login')}
        />
    </View>

    )
}