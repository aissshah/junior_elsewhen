import React from 'react';

const Table = ({headers, data}) => {
  return (
    <table>
      <thead>
        {headers}
      </thead>
      <tbody>
        {data}
      </tbody>
    </table>
  )
}

export default Table;