import React from "react";
import { connect } from "react-redux";
import {Redirect} from 'react-router-dom';
import { addGroupThunk } from "../../store/allGroups";

/*TODOS:
1. allow group creator to choose whether private/public group? (can be changed later when we make settings) like invite only? or anyone can just join.. etc
2. option to invite members when creating
3. redirect to new group page onsubmit
*/

class CreateGroup extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      description: "",
      redirectTo: null,
      // showError: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  //clears boxes after submit
  async handleSubmit(event) {
    event.preventDefault();
    try {
      await this.props.addGroup(this.state);
      if(this.state.name === ""){
        alert("group name can't be empty!")
      }
      this.setState({
        redirectTo: '/groups'
      });
      alert(`Your group "${this.state.name}" was created! Redirecting you to your groups page..`)
    } catch (err) {
      console.log("error creating group", err);
    }
  }

  render() {
      if (this.state.redirectTo) {
        return <Redirect to={{pathname: this.state.redirectTo}} />;
      } else {
        return(
      <div className="group-wrapper">
        <h1>Create Group</h1>

        <form id="add-group-form" onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            name="name"
            type="text"
            placeholder="Your new group's name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <label htmlFor="name">Description:</label>
          <input
            name="description"
            type="textarea"
            placeholder="Write a description"
            onChange={this.handleChange}
            value={this.state.description}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
}

const mapDispatch = (dispatch) => ({
  addGroup: (group) => dispatch(addGroupThunk(group)),
});

export default connect(null, mapDispatch)(CreateGroup);
