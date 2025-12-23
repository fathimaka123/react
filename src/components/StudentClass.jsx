import React from "react";
class StudentClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mark: 85,
    };
  }
  render() {
    const { name, age, email } = this.props;
    return (
      <div>
        <h3>name:{name}</h3>
        <h3>age:{age}</h3>
        <h3>email:{email}</h3>
        <h3>mark:{this.state.mark}</h3>
        <button className="increment-mark-btn"
          onClick={() => {
            this.setState({ mark: this.state.mark + 1 });
          }}
        >
          increment-mark
        </button>
      </div>
    );
  }
}

export default StudentClass;
