import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { action as toggleMenu } from "redux-burger-menu";
import { DatePicker, TextBox } from "../../common/Inputs";
import API from "../../../../../apiControllers/internal";

class AddMaintenance extends React.Component {
  constructor() {
    super();
    this.state = {
      type: null,
      date: null,
      description: null,
      cost: null
    };
  }

  componentDidMount = () => {
    const { actions } = this.props;
    actions.toggleMenu(false, "left");
    actions.toggleMenu(false, "right");
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  saveAndContinue = event => {
    const { actions } = this.props;
    event.preventDefault();
  };

  render() {
    const { type, date, description, cost } = this.state;
    return (
      <div className="addMaintenance">
        <div className="addMaintenance">
          <h1>Add a Maintenance Reminder</h1>

          <form onSubmit={this.saveAndContinue}>
            <div className="column is-12">
              <TextBox
                type="text"
                name="type"
                value={type}
                // icon={["fas", "calendar-alt"]}
                placeholder="Maintenance Type"
                onChange={this.handleInputChange}
              />
            </div>
            <div className="column is-12">
              <TextBox
                type="text"
                name="description"
                value={description}
                // icon={["fas", "calendar-alt"]}
                placeholder="Description"
                onChange={this.handleInputChange}
              />
            </div>
            <div className="column is-12">
              <TextBox
                type="text"
                name="cost"
                value={cost}
                // icon={["fas", "calendar-alt"]}
                placeholder="Maintenance Cost"
                onChange={this.handleInputChange}
              />
            </div>

            <div className="column is-12">
              <DatePicker
                name="date"
                value={date}
                icon={["fas", "calendar-alt"]}
                placeholder="Maintenance Date"
                onChange={this.handleInputChange}
              />
            </div>

            <button
              type="button"
              className="button button_wide"
              onClick={this.saveAndContinue}
            >
              Add Maintenance Reminder
            </button>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state: {
      burgerMenu: state.burgerMenu
    }
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        toggleMenu
      },
      dispatch
    )
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddMaintenance);
