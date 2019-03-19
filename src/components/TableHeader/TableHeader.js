import React from "react";
import Aux from "../../hoc/Aux";

const TableHeader = props => {
  return (
    <Aux>
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
        </tr>
      </thead>
    </Aux>
  );
};

export default TableHeader;
