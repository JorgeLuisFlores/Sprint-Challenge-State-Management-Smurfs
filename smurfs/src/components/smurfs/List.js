import React, { Component } from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../../actions/Actionindex";
import SmurfCard from "./Card";

class SmurfList extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getSmurfs();
  }
  render() {
    return (
      <div>
        <h2>Added SMURFS!!</h2>
        <div>
          {this.props.smurfs.data
            ? this.props.smurfs.data.map((smurf, i) => {
                return <SmurfCard smurf={smurf} key={i} />;
              })
            : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.reducer
  };
};

export default connect(mapStateToProps, { getSmurfs })(SmurfList);
