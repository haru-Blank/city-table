import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Container from './Components/Container/Container';
import City from './route/City';
import Home from './route/Home';
const apiEndPoint = 'https://secure.drivezy.com/city';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

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

    fetchApi(apiEndPoint);
  }, []);

  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Home isLoading={isLoading} data={data} />
        </Route>

        <Route path="/city">
          <Container>
            <City apiEndPoint={apiEndPoint} />{' '}
          </Container>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
