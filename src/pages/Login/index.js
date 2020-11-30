import React, { useState, useContext, useEffect } from 'react';
import { Button } from 'react-native';
import api from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppContext from '../../Context/AppContext';

import * as S from './styles';

const Login = ({ navigation }) => {
  const [values, onChangeValues] = useState({
    grant_type: 'password',
    username: '',
    password: '',
    refresh_token: 'string'
  });
  const [error, setError] = useState(null);
  const {token , setToken } = useContext(AppContext);

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('token', value)
      getData();
    } catch (e) {
      // saving error
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('token')
      if(value !== null) {
          setToken(value);
      }
    } catch(e) {
      // error reading value
    }};


  const handleLogin = async () => {
    try {
      await api.post('/auth/login', values)
        .then(resp => {
          const tokenData = resp.data.value.token;
          storeData(tokenData);          
          console.log(tokenData)
            //navigation.navigate('Dashboard')
            
        })
        .catch((err) => {
          if(err.response.status == 400){
            setError('Usuário ou senha inválido ')
          } 
          // setError(null)
        })
    }
    catch (errorr) {
    
    }    
  }


  // console.log(token)
  

  return (
    <S.Container>
      <S.Title >Dividendos</S.Title>

      <S.BoxInputs>
        <S.Input
          onChangeText={username => onChangeValues({ ...values, username: username })}
          placeholder='email'
          value={values.username}
          onFocus={() => setError(null)}
          // autoFocus={true}
        />
        <S.Input
          onChangeText={password => onChangeValues({ ...values, password: password })}
          placeholder='senha'
          value={values.password}
          onFocus={() => setError(null)}
        />
      </S.BoxInputs>
      <S.ErrorMessage>{error}</S.ErrorMessage>
      <Button
        onPress={() => handleLogin()}
        title="Entrar"
        color="#00b300"
        accessibilityLabel="Learn more about this purple button"
      />
    </S.Container>
  );
}

export default Login;