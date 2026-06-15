import { useEffect, useState } from "react";
import axios from "axios";

function Admin() {
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    fetchResponses();
  }, []);

  const fetchResponses = async () => {
    try {
      const res = await axios.get(
  `${process.env.REACT_APP_API_URL}/api/survey/responses`
);

      setResponses(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container-fluid mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Survey Responses</h2>

        <a
          href={`${import.meta.env.VITE_API_URL}/api/survey/export`}
          className="btn btn-success"
        >
          Export Excel
        </a>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <h5>Total Responses: {responses.length}</h5>
        </div>
      </div>

      {responses.length === 0 ? (
        <div className="alert alert-warning">
          No survey responses found.
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Grade</th>
                <th>City</th>
                <th>Academic Goal</th>
                <th>Performance</th>
                <th>Difficult Subject</th>
                <th>Biggest Challenge</th>
                <th>Best Platform</th>
                <th>Motivation</th>
                <th>Career Connection</th>
                <th>Submitted On</th>
              </tr>
            </thead>

            <tbody>
              {responses.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>

                  <td>{item.grade}</td>

                  <td>{item.city}</td>

                  <td>{item.academicGoal}</td>

                  <td>{item.performance}</td>

                  <td>{item.difficultSubject}</td>

                  <td>{item.biggestChallenge}</td>

                  <td>{item.bestPlatform}</td>

                  <td>{item.motivation}</td>

                  <td>{item.careerConnection}</td>

                  <td>
                    {new Date(
                      item.createdAt
                    ).toLocaleString("en-IN")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Admin;