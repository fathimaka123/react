import Student from "./student";
import StudentClass from "./StudentClass";

const About = () => {
  return (
    <div>
      <h1>This is a About Page</h1>
      <Student/>
      <StudentClass name={"fathima"} age={25} email={"fathima@gmail.com"}/>
    </div>
  );
};

export default About;