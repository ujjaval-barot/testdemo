# Sample Page Component Definition

## Props

If there are any shared props, please import from the interfaces folder, and extend if neccessary.

## Route

This example will create a route under `/`, if a file named `index.tsx` exists in`/pages` directory.

## Head

Every page should import Head, to be able to set meta data per page.

## Definition

```javascript
import React from 'react';
import {GetServerSideProps, NextPage} from 'next';
import Head from '../components/core/head';
import {Page} from '../components/layouts/containers';

interface IndexPageProps {
  message?: string;
}

const Index: NextPage<IndexPageProps> = ({message}) => {
  return (
    <Page>
      <Head title="Home" />
      {message}
    </Page>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  return {
    props: {
      message: 'Hello World',
    },
  };
};

export default Index;
```
