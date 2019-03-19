import React, { Component } from "react";
import TableBody from "../components/TableBody/TableBody";
import TableHeader from "../components/TableHeader/TableHeader";

import Aux from "../hoc/Aux";

class Table extends Component {
  state = {
    characters: [
      {
        name: "Charlie",
        job: "Janitor"
      },
      {
        name: "Mac",
        job: "Bouncer"
      },
      {
        name: "Dee",
        job: "Aspring actress"
      },
      {
        name: "Dennis",
        job: "Bartender"
      }
    ]
  };

  removePersonHandler = personIndex => {
    // const charList = [...this.state.characters];
    // charList.splice(personIndex, 1);
    // this.setState({ characters: charList });
    ///////This is the same as
    const { characters } = this.state;
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== personIndex;
      })
    });
  };
  render() {
    return (
      <Aux>
        <TableHeader />
        {this.state.characters.map((person, index) => {
          return (
            <TableBody
              name={person.name}
              job={person.job}
              click={() => this.removePersonHandler(index)}
            />
          );
        })}
      </Aux>
    );
  }
}

export default Table;
