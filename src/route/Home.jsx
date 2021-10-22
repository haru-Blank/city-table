import React from 'react';
import Container from '../Components/Container/Container';
import Header from '../Components/Header/Header';
import Loader from '../Components/Loader/Loader';
import Table from '../Components/Table/Table';

const HomeRoute = ({ isLoading, data }) => {
  const columnsToShow = {
    name: 'name',
    'contact person': 'contact_person',
    'contact number': 'contact_number',
    'minimum fuelless hours': 'minimum_fuelless_hours',
  };
  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header type="primary">List of Cities</Header>
          <Table data={data} columns={columnsToShow} title="List of Cities" />
        </>
      )}
    </Container>
  );
};

export default HomeRoute;
