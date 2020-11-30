import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const BoxInputs = styled.View`
  background: #BEBEBE;
  width: 80%;
  height: 200px;
  justify-content: center;
  padding: 10px;
  margin-bottom: 20px;
  margin-top: 10px;
  border-radius: 5px;

`;

export const Input = styled.TextInput`
  background: #606060;
  margin: 5px 0;
  border-radius: 5px;
`;

export const Title = styled.Text`
  font-size: 30px;

`;

export const ErrorMessage = styled.Text`
  text-align:  center;
  font-size: 15px;
  color: red;
  margin-bottom: 15px;

`;
