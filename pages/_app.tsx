import React from 'react';
import {NextPageContext} from 'next';
import {AppProps} from 'next/app';
import {ThemeProvider} from '../src/theme';
import {theme} from '../src/theme/theme';
import {AppWrapper, AppContainer, Children} from '../src/components';
import {GlobalStyle} from '../src/theme/global';
import client from '../apollo-client';
import {ApolloProvider} from '@apollo/client';
import 'src/theme/fonts.css';

interface Props extends AppProps {
  ctx: NextPageContext;
}

const GlobalLayout = ({children}: {children: React.ReactNode}): React.ReactElement => {
  return (
    <AppWrapper>
      <GlobalStyle />
      <AppContainer>
        <Children>{children}</Children>
      </AppContainer>
    </AppWrapper>
  );
};

const Application = ({Component, pageProps}: Props): React.ReactElement => (
  <ThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      <GlobalLayout>
        <Component {...pageProps} />
      </GlobalLayout>
    </ApolloProvider>
  </ThemeProvider>
);

export default Application;
