import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Table, Button, Spinner } from "react-bootstrap";

function Admin() {
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetchResponses();
  }, []);

  const fetchResponses = async () => {
    try {
      const res = await axios.get(
        `${API_URL}/api/survey/responses`
      );

      console.log("Survey Responses:", res.data);

      setResponses(res.data);
    } catch (error) {
      console.error("Error fetching responses:", error);
    } finally {
      setLoading(false);
    }
  };

  const exportExcel = () => {
    window.open(
      `${API_URL}/api/survey/export`,
      "_blank"
    );
  };

  if (loading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" />
        <h5 className="mt-3">Loading Responses...</h5>
      </Container>
    );
  }

  return (
    <Container fluid className="mt-4">

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Survey Responses ({responses.length})</h2>

        <Button
          variant="success"
          onClick={exportExcel}
        >
          Export Excel
        </Button>
      </div>

      <div style={{ overflowX: "auto" }}>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>

              <th>Grade</th>
              <th>City</th>
              <th>Academic Goal</th>
              <th>Performance</th>
              <th>Study Hours</th>

              <th>Difficult Subject</th>
              <th>Biggest Challenge</th>
              <th>Difficult Reason</th>
              <th>Stop Studying</th>
              <th>Distraction</th>

              <th>Learning Source</th>
              <th>Best Platform</th>
              <th>Platform Suggestion</th>
              <th>Study Schedule</th>
              <th>Time Waste</th>
              <th>Learning Method</th>

              <th>Unresolved Doubts</th>
              <th>Doubt Resolution Time</th>
              <th>Ask Doubt To</th>
              <th>Teacher Expectation</th>

              <th>Motivation</th>
              <th>More Motivation</th>
              <th>School Knowledge</th>
              <th>Learning Purpose</th>

              <th>Career Connection</th>
              <th>Education Change</th>
              <th>Missing Need</th>
              <th>Perfect Learning</th>

              <th>Submitted At</th>
            </tr>
          </thead>

          <tbody>
            {responses.length > 0 ? (
              responses.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>

                  <td>{item.grade}</td>
                  <td>{item.city}</td>
                  <td>{item.academicGoal}</td>
                  <td>{item.performance}</td>
                  <td>{item.studyHours}</td>

                  <td>{item.difficultSubject}</td>
                  <td>{item.biggestChallenge}</td>
                  <td>{item.difficultReason}</td>
                  <td>{item.stopStudying}</td>
                  <td>{item.distraction}</td>

                  <td>{item.learningSource}</td>
                  <td>{item.bestPlatform}</td>
                  <td>{item.platformSuggestion}</td>
                  <td>{item.studySchedule}</td>
                  <td>{item.timeWaste}</td>
                  <td>{item.learningMethod}</td>

                  <td>{item.unresolvedDoubts}</td>
                  <td>{item.doubtResolutionTime}</td>
                  <td>{item.askDoubtTo}</td>
                  <td>{item.teacherExpectation}</td>

                  <td>{item.motivation}</td>
                  <td>{item.moreMotivation}</td>
                  <td>{item.schoolKnowledge}</td>
                  <td>{item.learningPurpose}</td>

                  <td>{item.careerConnection}</td>
                  <td>{item.educationChange}</td>
                  <td>{item.missingNeed}</td>
                  <td>{item.perfectLearning}</td>

                  <td>
                    {new Date(
                      item.createdAt
                    ).toLocaleString("en-IN")}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="30" className="text-center">
                  No Responses Found
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>

    </Container>
  );
}

export default Admin;


