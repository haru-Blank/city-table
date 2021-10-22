import React from 'react';
import { Link } from 'react-router-dom';

const Table = ({ data, columns }) => {
  const tableHead = (
    <thead>
      <tr>
        {Object.keys(columns).map((Cname) => (
          <th key={Cname}>{Cname}</th>
        ))}
      </tr>
    </thead>
  );

  const tableBody = (
    <tbody>
      {data.map((item) => (
        <tr key={item.id}>
          {Object.values(columns).map((value) => {
            return (
              <td key={item.name}>
                {value === 'name' ? (
                  <Link to={`/city?id=${item.id}`} className="infoLink">
                    {item[value]}
                  </Link>
                ) : (
                  item[value]
                )}
              </td>
            );
          })}
        </tr>
      ))}
    </tbody>
  );

  return (
    <table className="cities">
      {tableHead}

      {tableBody}
    </table>
  );
};

export default Table;
