import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Welcome = ({ navigation }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const descriptions = [
    "Experience the best features and seamless experience.",
    "Find your current location.",
    "Find your Nearby Train and Bus Stations."
  ];

  return (
    <Container>
      <Logo source={require('../assets/logo.png')} />
      <WelcomeText>Welcome to Our App!</WelcomeText>
      <Description>{descriptions[activeIndex]}</Description>

      <PageIndicator>
        {[0, 1, 2].map((index) => (
          <TouchableOpacity key={index} onPress={() => setActiveIndex(index)}>
            <Dot active={activeIndex === index} />
          </TouchableOpacity>
        ))}
      </PageIndicator>

      <GetStartedButton onPress={() => navigation.navigate('FindLocation')}>
        <ButtonText>Get Started</ButtonText>
      </GetStartedButton>
    </Container>
  );
};

export default Welcome;

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #f9f9f9;
    padding: 20px;
`;

const Logo = styled.Image`
    width: 420px;
    height: 320px;
    margin-bottom: 20px;
`;

const WelcomeText = styled.Text`
    font-size: 28px;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
`;

const Description = styled.Text`
    font-size: 16px;
    color: #666;
    text-align: center;
    margin-bottom: 30px;
    padding: 0 20px;
`;

const PageIndicator = styled.View`
    flex-direction: row;
    margin-bottom: 40px;
`;

const Dot = styled.View`
    width: 18px;
    height: 18px;
    margin: 0 12px;
    border-radius: 5px;
    background-color: ${({ active }) => (active ? '#007AFF' : '#ccc')};
`;

const GetStartedButton = styled(TouchableOpacity)`
    background-color: #007AFF;
    padding: 15px 30px;
    border-radius: 8px;
`;

const ButtonText = styled.Text`
    font-size: 18px;
    color: #fff;
    font-weight: bold;
`;
