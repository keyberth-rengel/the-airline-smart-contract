import React, { Fragment } from "react";
import Panel from "./component/Panel";
function App() {
  return (
    <Fragment>
      <div className="jumbotron">
        <h4 className="display-4">Welcome to the Airline!</h4>
      </div>

      <div className="row">
        <div className="col-sm">
          <Panel title="Balance"></Panel>
        </div>
        <div className="col-sm">
          <Panel title="Loyalty points - refundable ether"></Panel>
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <Panel title="Available flights"></Panel>
        </div>
        <div className="col-sm">
          <Panel title="Your flights"></Panel>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
