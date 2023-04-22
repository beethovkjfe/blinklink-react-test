import { Anchor, Box, Card, Container, Grid, Group, LoadingOverlay, Text } from '@mantine/core';
import React, { useEffect } from 'react';
import { useInjectReducer, useInjectSaga } from 'utils';
import { createStructuredSelector } from 'reselect';
import { useDispatch, useSelector } from 'react-redux';
import Header from 'containers/Header';
import { isEmpty } from 'lodash';

import * as Selectors from './selectors';
import reducer from './reducer';
import saga from './saga';
import * as Actions from './actions';

const key = 'country';

const stateSelector = createStructuredSelector({
  data: Selectors.makeSelectData(),
  loading: Selectors.makeSelectLoading()
});
const CountryPage = props => {
  const { data, loading } = useSelector(stateSelector);

  const {
    match: {
      params: { code }
    }
  } = props;

  const dispatch = useDispatch();
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    setTimeout(() => {
      if (code) {
        dispatch(Actions.getSingleData(code));
      }
    });
  }, [code]);

  return (
    <>
      <LoadingOverlay visible={loading} overlayBlur={2} />
      <Header pageTitle="Country" />
      <Container size="xl">
        <Grid py={16}>
          <Grid.Col xs={12} sm={12}>
            <Anchor href="/">Go to Country list</Anchor>
            {isEmpty(data) ? (
              <Text>No Data Found</Text>
            ) : (
              <Card shadow="sm" padding="lg" radius="md" withBorder mt={32}>
                <Group spacing={32}>
                  <img src={data[0].flags.png} alt={data[0].flags?.alt || ''} />
                  <Box>
                    <Text component="h3" size="lg">
                      {data[0].name.common}
                    </Text>
                    <Group spacing={32} mt={4}>
                      <Box>
                        <Text component="p">
                          Capital :
                          <Text component="span" ml={4} weight={600}>
                            {data[0].capital.join(', ')}
                          </Text>
                        </Text>
                        <Text component="p">
                          Population :
                          <Text component="span" ml={4} weight={600}>
                            {data[0].population}
                          </Text>
                        </Text>
                        <Text component="p">
                          Languages :
                          <Text component="span" ml={4} weight={600}>
                            {Object.values(data[0].languages)
                              .map(item => item)
                              .join(', ')}
                          </Text>
                        </Text>
                      </Box>
                      <Box>
                        <Text component="p">
                          Currency :
                          <Text component="span" ml={4} weight={600}>
                            {Object.values(data[0].currencies)
                              .map(item => `${item.symbol} - ${item.name}`)
                              .join(', ')}
                          </Text>
                        </Text>
                        <Text component="p">
                          Continent :
                          <Text component="span" ml={4} weight={600}>
                            {data[0].continents.map(item => item).join(', ')}
                          </Text>
                        </Text>
                        <Text component="p">
                          Map Link :
                          <Anchor component="a" ml={4} target="_blank" weight={600} href={data[0].maps.googleMaps}>
                            Google Maps
                          </Anchor>
                        </Text>
                      </Box>
                    </Group>
                  </Box>
                </Group>
              </Card>
            )}
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
};

export default CountryPage;
