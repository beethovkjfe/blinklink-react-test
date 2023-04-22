import React from 'react';
import { Header as MantineHeader, Container, Text } from '@mantine/core';
import { HeaderProps } from './types';

const Header = ({ pageTitle }: HeaderProps) => {
  return (
    <MantineHeader height={60}>
      <Container size="xl" sx={{ alignItems: 'center', display: 'flex', height: '100%' }}>
        <Text component="h2">{pageTitle}</Text>
      </Container>
    </MantineHeader>
  );
};

export default Header;
