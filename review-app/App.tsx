import React from 'react';
import styled from 'styled-components/native';
import { Text, View } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

export const fonts = {
  NUNITO: 'NUNITO',
  NUNITO_BOLD: 'NUNITO_BOLD',
};

const fetchFont = () => {
  console.log('bb');
  console.log('bb');
  return Font.loadAsync({
    [fonts.NUNITO]: require('./assets/fonts/Nunito-Regular.ttf'),
    [fonts.NUNITO_BOLD]: require('./assets/fonts/Nunito-Bold.ttf'),
  });
};

export default () => {
  const [isFetchingFont, setIsFetchingFont] = React.useState(true);

  if (isFetchingFont) {
    return (
      <AppLoading
        startAsync={fetchFont}
        onFinish={() => setIsFetchingFont(false)}
        onError={console.warn}
      />
    );
  }

  return (
    <StyledContainer>
      <StyledHeader>
        <StyledText>Home</StyledText>
      </StyledHeader>
    </StyledContainer>
  );
};

const StyledContainer = styled(View)`
  flex: 1;
`;

const StyledHeader = styled(View)`
  padding: 60px 20px 20px 20px;
  align-items: center;
  background-color: pink;
`;

const StyledText = styled(Text)`
  font-size: 20px;
  font-family: ${fonts.NUNITO};
`;