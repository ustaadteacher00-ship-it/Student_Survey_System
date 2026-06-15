import { useState } from "react";
import { Container, Card, ProgressBar, Button } from "react-bootstrap";
import axios from "axios";

import Page1Profile from "./Page1Profile";
import Page2Challenges from "./Page2Challenges";
import Page3StudyHabits from "./Page3StudyHabits";
import Page4Doubts from "./Page4Doubts";
import Page5EducationMotivation from "./Page5EducationMotivation";
import Page6CareerFuture from "./Page6CareerFuture";



function SurveyForm() {
  const [page, setPage] = useState(1);

  const [formData, setFormData] = useState({
    // Page 1
    grade: "",
    city: "",
    academicGoal: "",
    performance: "",
    studyHours: "",

    // Page 2
    difficultSubject: "",
    biggestChallenge: "",
    difficultReason: "",
    stopStudying: "",
    distraction: "",

    // Page 3
    learningSource: "",
    bestPlatform: "",
    platformSuggestion: "",
    studySchedule: "",
    timeWaste: "",
    learningMethod: "",

    // Page 4
    unresolvedDoubts: "",
    doubtResolutionTime: "",
    askDoubtTo: "",
    teacherExpectation: "",

    // Page 5
    motivation: "",
    moreMotivation: "",
    schoolKnowledge: "",
    learningPurpose: "",

    // Page 6
    careerConnection: "",
    educationChange: "",
    missingNeed: "",
    perfectLearning: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const nextPage = () => {
    if (page < 6) {
      setPage(page + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleSubmit = async () => {
  try {
await axios.post(
  `${import.meta.env.VITE_API_URL}/api/survey/submit`,
  formData
);
    alert("Survey Submitted Successfully!");

    console.log(formData);
  } catch (error) {
    console.error(error);
    alert("Submission Failed");
  }
};

  const progress = Math.round((page / 6) * 100);

  return (
    <Container className="mt-5 mb-5">
      <Card className="shadow border-0">
        <Card.Header className="bg-primary text-white text-center p-4">
          <h2 className="mb-1">
            STUDENT LEARNING & EDUCATION SURVEY
          </h2>
          <p className="mb-0">
            (For CBSE Grade 11 & 12 PCM Students)
          </p>
        </Card.Header>

        <Card.Body className="p-4">

          {/* Progress Info */}
          <div className="d-flex justify-content-between mb-2">
            <strong>Page {page} of 6</strong>
            <strong>{progress}% Complete</strong>
          </div>

          {/* Progress Bar */}
          <ProgressBar
            now={progress}
            animated
            striped
            variant="success"
            className="mb-4"
          />

          {/* Pages */}

          {page === 1 && (
            <Page1Profile
              formData={formData}
              handleChange={handleChange}
            />
          )}

          {page === 2 && (
            <Page2Challenges
              formData={formData}
              handleChange={handleChange}
            />
          )}

          {page === 3 && (
            <Page3StudyHabits
              formData={formData}
              handleChange={handleChange}
            />
          )}

          {page === 4 && (
            <Page4Doubts
              formData={formData}
              handleChange={handleChange}
            />
          )}

          {page === 5 && (
            <Page5EducationMotivation
              formData={formData}
              handleChange={handleChange}
            />
          )}

          {page === 6 && (
            <Page6CareerFuture
              formData={formData}
              handleChange={handleChange}
            />
          )}

          {/* Navigation Buttons */}

          <div className="d-flex justify-content-between mt-5">
            {page > 1 ? (
              <Button
                variant="secondary"
                onClick={prevPage}
              >
                ← Previous
              </Button>
            ) : (
              <div></div>
            )}

            {page < 6 ? (
              <Button
                variant="primary"
                onClick={nextPage}
              >
                Next →
              </Button>
            ) : (
              <Button
                variant="success"
                size="lg"
                onClick={handleSubmit}
              >
                Submit Survey
              </Button>
            )}
          </div>

        </Card.Body>
      </Card>
    </Container>
  );
}

export default SurveyForm;