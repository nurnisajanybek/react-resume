import Card from "react-bootstrap/Card";
import StyleEdu from "../Education/StyleEdu.css";
import Row from "react-bootstrap/Row";

function Education() {
  return (
    <Row xs={2} md={3} className="g-4 stylerow" class="mx-auto">
      {["Dark"].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === "light" ? "dark" : "white"}
          style={{
            width: "25rem",
            height: "14rem",
            marginTop: "10%",
            marginLeft: "15%",
          }}
          className="mb-2"
        >
          <Card.Header> 2017-2022</Card.Header>
          <Card.Body>
            <Card.Title className="title ">
              Bishkek Girl’s High School “Aichirok ”
            </Card.Title>
            <Card.Text>
              I completed this degree from this prestigious institution. I
              successfully completed all the credits without any fallout and got
              A grade overall .
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
      {["Dark"].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === "light" ? "dark" : "white"}
          style={{
            width: "25rem",
            height: "14rem",
            marginTop: "10%",
            marginLeft: "15%",
          }}
          className="mb-2"
        >
          <Card.Header>2020-2021</Card.Header>
          <Card.Body>
            <Card.Title className="title">Samadhi Yoga</Card.Title>
            <Card.Text>
              I completed this degree from this prestigious institution. I
              successfully completed all the credits without any fallout and got
              A grade overall .
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
      {["Dark"].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === "light" ? "dark" : "white"}
          style={{
            width: "25rem",
            height: "14rem",
            marginTop: "10%",
            marginLeft: "15%",
          }}
          className="mb-2"
        >
          <Card.Header>2022</Card.Header>
          <Card.Body>
            <Card.Title className="title">Diadema Academy</Card.Title>
            <Card.Text>
              I completed this degree from this prestigious institution. I
              successfully completed all the credits without any fallout and got
              A grade overall .
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
      {["Dark"].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === "light" ? "dark" : "white"}
          style={{
            width: "25rem",
            height: "14rem",
            marginTop: "10%",
            marginLeft: "15%",
          }}
          className="mb-2"
        >
          <Card.Header>2022-2023</Card.Header>
          <Card.Body>
            <Card.Title className="title">Makers</Card.Title>
            <Card.Text>
              I completed this degree from this prestigious institution. I
              successfully completed all the credits without any fallout and got
              A grade overall .
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Row>
  );
}

export default Education;
