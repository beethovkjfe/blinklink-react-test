import { Container, Grid, LoadingOverlay, Pagination, TextInput } from '@mantine/core';
import React, { useCallback, useEffect, useState } from 'react';
import { localRedirect, useInjectReducer, useInjectSaga } from 'utils';
import { createStructuredSelector } from 'reselect';
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from 'lodash';
import { CountryCard } from 'components';
import Header from 'containers/Header';

import * as Selectors from './selectors';
import reducer from './reducer';
import saga from './saga';
import * as Actions from './actions';

const key = 'home';
const RECORDS_PER_PAGE = 12;

const stateSelector = createStructuredSelector({
  data: Selectors.makeSelectData(),
  loading: Selectors.makeSelectLoading()
});

const Home = () => {
  const { data, loading } = useSelector(stateSelector);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastRecord = currentPage * RECORDS_PER_PAGE;
  const indexOfFirstRecord = indexOfLastRecord - RECORDS_PER_PAGE;

  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const total = Math.ceil(data.length / RECORDS_PER_PAGE);

  const dispatch = useDispatch();
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    setTimeout(() => {
      dispatch(Actions.getCountryData());
    });
  }, []);

  useEffect(() => {
    if (searchTerm) {
      dispatch(Actions.getSearchData(searchTerm));
    } else {
      dispatch(Actions.getCountryData());
      setCurrentPage(1);
    }
  }, [searchTerm]);

  const handleOnChange = useCallback(
    debounce(event => {
      setSearchTerm(event.target.value);
    }, 300),
    [searchTerm]
  );

  const handleCountryClick = (name: string) => {
    localRedirect(`/country/${name}`);
  };

  const handlePagination = (value: number) => {
    setCurrentPage(value);
  };

  return (
    <>
      <LoadingOverlay visible={loading} overlayBlur={2} />
      <Header pageTitle="Country List" />
      <Container size="xl">
        <Grid py={16}>
          <Grid.Col xs={12} sm={6}>
            <TextInput label="Search Country" onChange={handleOnChange} />
          </Grid.Col>
        </Grid>
        <CountryCard handleClick={handleCountryClick} data={currentRecords} />
        <Pagination value={currentPage} onChange={handlePagination} total={total} />;
      </Container>
    </>
  );
};

export default Home;
