import React from "react";
import Aux from "../../hoc/Aux";

const TableBody = props => {
  return (
    <Aux>
      <tr>
        <td>{props.name}</td>
        <td>{props.job}</td>
        <td>
          <button onClick={props.click}>Delete</button>
        </td>
      </tr>
    </Aux>
  );
};

export default TableBody;
