import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import img from "../asssets/IMG_5969.PNG";
import StyleEdu from "../Education/StyleEdu.css";

{
  /* <Card.Text>
              <img style={{ width: "100%" }} src={img}></img>
            </Card.Text> */
}

function Awards() {
  return (
    <>
      <Row xs={2} md={3} className="g-6 stylerow" class="mx-auto">
        <Card
          border="dark"
          style={{
            width: "15rem",
            height: "18rem",
            marginTop: "10%",
            marginLeft: "13%",
          }}
        >
          <Card.Header className="display-3">2017</Card.Header>
          <Card.Body>
            <Card.Title className="title ">
              Genius Olympiad lnternational High School Project Fair on
              Environment; Silver medal
            </Card.Title>
          </Card.Body>
        </Card>
        <Card
          border="dark"
          style={{
            width: "15rem",
            height: "18rem",
            marginTop: "10%",
            marginLeft: "13%",
          }}
        >
          <Card.Header className="display-3">2017</Card.Header>
          <Card.Body>
            <Card.Title className="title ">
              lnternational Online Stem Olympiad
            </Card.Title>
          </Card.Body>
        </Card>
        <Card
          border="dark"
          style={{
            width: "15rem",
            height: "18rem",
            marginTop: "10%",
            marginLeft: "13%",
          }}
        >
          <Card.Header className="display-3">2019</Card.Header>
          <Card.Body>
            <Card.Title className="title ">
              Malaysia lnternational Young lnventors Olympiad ;Bronze Award
            </Card.Title>
          </Card.Body>
        </Card>
        <Card
          border="dark"
          style={{
            width: "15rem",
            height: "18rem",
            marginTop: "10%",
            marginLeft: "13%",
          }}
        >
          <Card.Header className="display-3">2020</Card.Header>
          <Card.Body>
            <Card.Title className="title ">
              Mathematics Without Borders ;Зrd place winner
            </Card.Title>
          </Card.Body>
        </Card>
        <Card
          border="dark"
          style={{
            width: "15rem",
            height: "18rem",
            marginTop: "10%",
            marginLeft: "13%",
          }}
        >
          <Card.Header className="display-3">2021</Card.Header>
          <Card.Body>
            <Card.Title className="title ">
              International Owlypia -The lntellectuals' Challenge in the subject
              Science and Technology;Bronze medal
            </Card.Title>
          </Card.Body>
        </Card>
        <Card
          border="dark"
          style={{
            width: "15rem",
            height: "18rem",
            marginTop: "10%",
            marginLeft: "13%",
          }}
        >
          <Card.Header className="display-3">2021</Card.Header>
          <Card.Body>
            <Card.Title className="title ">
              International Turkish Language Olympiad ; Gold Medal
            </Card.Title>
          </Card.Body>
        </Card>
        <br />
      </Row>{" "}
      ,
      <div>
        <h1
          className="display-1"
          style={{ color: "hotpink", marginTop: "5%", textAlign: "center" }}
        >
          LANGUAGES
        </h1>
      </div>
      <Row xs={2} md={3} className="g-6 stylerow" class="mx-auto">
        <Card
          border="dark"
          style={{
            width: "10rem",
            height: "7rem",
            marginTop: "10%",
            marginLeft: "11%",
          }}
        >
          <Card.Header
            style={{ textAlign: "center", backgroundColor: "hotpink" }}
          >
            English Language
          </Card.Header>
          <Card.Body>
            <Card.Title>
              <img src={img} style={{ width: "100%" }} />
            </Card.Title>
          </Card.Body>
        </Card>
        <Card
          border="dark"
          style={{
            width: "10rem",
            height: "7rem",
            marginTop: "10%",
            marginLeft: "11%",
          }}
        >
          <Card.Header
            style={{ textAlign: "center", backgroundColor: "hotpink" }}
          >
            Turkish Language
          </Card.Header>
          <Card.Body>
            <Card.Title>
              <img src={img} style={{ width: "100%" }} />
            </Card.Title>
          </Card.Body>
        </Card>
        <Card
          border="dark"
          style={{
            width: "10rem",
            height: "7rem",
            marginTop: "10%",
            marginLeft: "11%",
          }}
        >
          <Card.Header
            style={{ textAlign: "center", backgroundColor: "hotpink" }}
          >
            Russian Language
          </Card.Header>
          <Card.Body>
            <Card.Title>
              <img src={img} style={{ width: "100%" }} />
            </Card.Title>
          </Card.Body>
        </Card>
        <Card
          border="dark"
          style={{
            width: "10rem",
            height: "7rem",
            marginTop: "10%",
            marginLeft: "11%",
          }}
        >
          <Card.Header
            style={{ textAlign: "center", backgroundColor: "hotpink" }}
          >
            Kyrgyz Language
          </Card.Header>
          <Card.Body>
            <Card.Title>
              <img src={img} style={{ width: "100%" }} />
            </Card.Title>
          </Card.Body>
        </Card>
      </Row>
    </>
  );
}

export default Awards;
