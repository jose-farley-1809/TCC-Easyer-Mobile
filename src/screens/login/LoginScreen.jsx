import { style } from "."
import { View, Text, TextInput, TouchableOpacity } from "react-native"

export function LoginScreen(){
    return (
        <View style={style.container}> 
            <Text style={style.title}>Bem-vindo ao TCC Easyer!</Text>
            <Text style={style.subtitle}>Faça o seu login e aproveite a plataforma.</Text>
            <TextInput style={[style.input, style.elevation]} placeholder="E-mail" keyboardType="email-address"/>
            <TextInput style={[style.input, style.elevation]} placeholder="Senha" secureTextEntry={true}/>
            <TouchableOpacity style={style.buttonSignIn} onPress={handleBtnEntrar}>
                <Text style={style.btnText}>Entrar</Text>
            </TouchableOpacity>
            <View style={style.containerCadastro}>
                <Text style={style.subtitle}>Não possui uma conta? </Text>
                <TouchableOpacity>
                    <Text style={style.btnSignUp}>Cadastre-se</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
  
}
async function handleBtnEntrar(){
   try {
    let result = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    let conv = await result.json()
    console.log(conv.name)
   } catch (error) {
        console.log(error.message)
   } 
}