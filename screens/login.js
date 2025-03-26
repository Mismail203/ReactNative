import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';

import {
  StyledContainer,  // Updated import
  InnerContainer,
  LoginPageLogo,
  PageTitle,
  SubTitle,
  StyledFormArea,
  LeftIcon,
  StyledInputLabel,
  StyledTextInput,
  Colors,
  RightIcon,
  StyledButton,
  ButtonText,
  MsgBox,
  Line,
} from '../components/style';

import { View } from 'react-native';
import { Octicons, Ionicons } from '@expo/vector-icons';  // Corrected import

const { brand } = Colors;

const Login = () => {
    const [hidePassword, setHidePassword] = useState(true);
  return (
    <StyledContainer>  {/* Corrected component */}
      <StatusBar style='dark' />
      <InnerContainer>
        <LoginPageLogo resizeMode="cover" source={require('../assets/logo.png')} />
        <PageTitle> Your Travel Friend </PageTitle>
        <SubTitle> Account Login </SubTitle>
        <Formik
          initialValues={{ email: '', password: '' }}  // Corrected typo
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <StyledFormArea>
              <MyTextInput
                label="Email Address"
                icon="mail"
                placeholder="abc@gmail.com"
                placeholderTextColor="#9CA3AF"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email} 
                keyboardType="email-address"
              />
              <MyTextInput
                label="Password"
                icon="lock"
                placeholder="* * * * * * *"
                placeholderTextColor="#9CA3AF"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('email')}
                value={values.password} 
                secureTextEntry = {hidePassword}
                isPassword = {true}
                hidePassword = {hidePassword}
                setHidePassword = {setHidePassword}
              />
              <MsgBox>
                ...
              </MsgBox>
              <StyledButton onPress = {handleSubmit}>
                <ButtonText>
                    Login
                </ButtonText>
              </StyledButton>
              <Line />
              <StyledButton onPress = {handleSubmit}>
                <ButtonText>
                    Sign in with Google
                </ButtonText>
              </StyledButton>
            </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>
  );
};

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon onPress = {() => setHidePassword(!hidePassword)}>
            <Ionicons name={hidePassword ? 'eye-off' : 'eye'} size={30} color="#9CA3AF" />
        </RightIcon>
      )}
    </View>
  );
};

export default Login;  // Corrected component name
