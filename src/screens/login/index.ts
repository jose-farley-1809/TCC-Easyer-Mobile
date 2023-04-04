import {StyleSheet} from 'react-native'

export const style = StyleSheet.create({
    
    container:{
      flex:1,
      justifyContent:'center',
      alignContent:'center',
      alignItems:'center',
      backgroundColor:'white',
      
    },
    title:{
      color:'#1CBFAC',
      fontSize:24,
      fontWeight:'800'
    },
    subtitle:{
      fontSize:16,
      color:'black',
      opacity:0.5,
      marginBottom:30,
    },
    input: {
    borderWidth:0.2,
    backgroundColor: 'white',
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 25,
    width: 350,
    marginVertical: 10,
    textAlign:'center'
    },
    elevation: {
    elevation: 8,
    shadowColor: 'black',
    },
    buttonSignIn:{
        borderWidth:0.2,
        backgroundColor: '#1FCBAC',
        borderRadius: 24,
        paddingVertical: 12,
        paddingHorizontal: 25,
        width: 350,
        marginVertical: 10,
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
    },
    btnText:{
        color:'white',
        fontWeight:'bold'
    },
    containerCadastro:{
        display:'flex',
        flexDirection:'row',
    },
    btnSignUp:{
        color:'#119A8A',
        fontWeight:'bold'
    }
})