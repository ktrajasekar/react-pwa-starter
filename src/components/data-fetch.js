import React, { Component } from "react";

class DataFetch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 9,
      data: [],
      isLoading: false,
    };
  }
  componentDidMount() {
    console.log("component mounting");
    this.setState((state) => ({
      count: state.count + 11,
    }));
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((data) => this.setState({ data: data, isLoading: true }))
      .catch((e) => console.log("Error while fetch data", e));
  }
  render() {
    let dataToDisplay;
    if (this.state.data.length > 0) {
      dataToDisplay = this.state.data.map((item, i) => {
        return (
          <div key={item.id}>
            {i + 1}. {item.title}
          </div>
        );
      });
    } else {
      dataToDisplay = <div className="">No Data Found</div>;
    }
    return (
      <div>

        {this.state.isLoading ? (
          <><h2>Data Count {this.state.data.length}</h2>{dataToDisplay}</>
        ) : (
          <div className="loader"></div>
        )}
      </div>
    );
  }
}

export default DataFetch;
