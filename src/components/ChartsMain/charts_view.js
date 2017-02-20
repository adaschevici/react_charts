import React from 'react';

const ChartsView = function (props) {
  return (
    <table>
      <tbody>
        <tr>
          <th>Ancient Name</th>
          <th>Superpower</th>
        </tr>
          {props.ancients ? props.ancients.map(props.renderItem) : <tr><td>'Loading'</td></tr>}
      </tbody>
    </table>
  );
};

export default ChartsView;
