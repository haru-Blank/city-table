import React from 'react';

const TableRow = (data, colums) => {
  const keyNames = Object.values(colums);
  return (
    <tr>
      {keyNames.map((city) => (
        <td key={data.id}>{data.city}</td>
      ))}
      ;
    </tr>
  );
};

export default TableRow;
