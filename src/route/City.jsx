import React, { useEffect, useState } from 'react';
import Header from '../Components/Header/Header';
import Loader from '../Components/Loader/Loader';
import Navbar from '../Components/NavBar/Navbar';
import Table from '../Components/Table/Table';
import { useQuery } from '../utilities/useQuery';

const City = ({ apiEndPoint }) => {
  let [data, setData] = useState({});
  let [isLoading, setIsLoading] = useState(true);
  let query = useQuery().get('id');
  let cityPoint = apiEndPoint + '/' + query;

  useEffect(() => {
    const fetchApi = async (apiEndPoint) => {
      const response = await fetch(apiEndPoint);

      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }

      const data = await response.json();
      setData(data.response);
      setIsLoading(false);
    };

    fetchApi(cityPoint);
  }, [cityPoint]);

  const columnsToShow = {
    name: 'name',
    latitude: 'latitude',
    'contact person': 'contact_person',
    'allow home pickup': 'allow_home_pickup',
    'booking notification dl': 'booking_notification_dl',
  };

  return (
    <div className="city">
      <Navbar />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header type="secondary">City of {data.name}</Header>
          <figure className="city--image">
            <img src={data.image} alt={data.name} />
            <figcaption>{data.name}</figcaption>
          </figure>

          <Table data={[data]} columns={columnsToShow} title="Detail of City" />
        </>
      )}
    </div>
  );
};

export default City;
