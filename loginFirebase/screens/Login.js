import {View, Text, TextInput, Button, Alert} from 'react-native'
import {useState} from 'react'

export default function Login({navigation}) {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    return(
        <View>
            <Text>Login</Text>
            <TextInput
                placeholder='Email'
                value={email}
                onChangeText={setEmail}
         />
            <TextInput
                plaholder="Password"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
        />
            <Button
                title="Login"
                onPress={() => Alert.alert('Login em construção')}
             />
             <Button
                title='Criar uma nova conta'
                onPress={() => navigation.navigate('Cadastro')}
             />
        </View>

    )
}
    