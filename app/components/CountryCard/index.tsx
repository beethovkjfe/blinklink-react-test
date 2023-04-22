import React from 'react';
import { Grid, Card, Group, Text, Box, Image } from '@mantine/core';
import { isEmpty } from 'lodash';

import { CountryCardProps } from './types';

const CountryCard = ({ data, handleClick }: CountryCardProps) => {
  return (
    <Grid py={16}>
      {isEmpty(data) ? (
        <Grid.Col sm={6} md={4} xs={12}>
          <Text>No data found</Text>
        </Grid.Col>
      ) : (
        data.map((item, key) => (
          <Grid.Col key={key} sm={6} md={4} xs={12}>
            <Card
              onClick={() => handleClick(item.cca3)}
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              sx={{ cursor: 'pointer' }}
            >
              <Group noWrap>
                <Image height={80} width={80} fit="contain" src={item.flags.png} alt={item.flags.alt || ''} />
                <Box>
                  <Text>{item.name.common}</Text>
                  <Text>{item.region}</Text>
                </Box>
              </Group>
            </Card>
          </Grid.Col>
        ))
      )}
      {}
    </Grid>
  );
};

export default CountryCard;
