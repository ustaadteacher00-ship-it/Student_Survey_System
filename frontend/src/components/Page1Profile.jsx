import { Form } from "react-bootstrap";

function Page1Profile({ formData, handleChange }) {
  return (
    <>
      <h3 className="mb-4">SECTION A: STUDENT PROFILE</h3>

      {/* Q1 */}
      <Form.Group className="mb-4">
        <Form.Label className="fw-bold">
          1. Which grade are you currently studying in?
        </Form.Label>

        <Form.Check
          type="radio"
          label="Grade 10"
          name="grade"
          value="Grade 10"
          checked={formData.grade === "Grade 10"}
          onChange={handleChange}
        />

        <Form.Check
          type="radio"
          label="Grade 11"
          name="grade"
          value="Grade 11"
          checked={formData.grade === "Grade 11"}
          onChange={handleChange}
        />

        <Form.Check
          type="radio"
          label="Grade 12"
          name="grade"
          value="Grade 12"
          checked={formData.grade === "Grade 12"}
          onChange={handleChange}
        />
      </Form.Group>

      {/* Q2 */}
      <Form.Group className="mb-4">
        <Form.Label className="fw-bold">
          2. Which city are you studying in?
        </Form.Label>

        <Form.Check
          type="radio"
          label="KSA"
          name="city"
          value="KSA"
          checked={formData.city === "KSA"}
          onChange={handleChange}
        />

        <Form.Check
          type="radio"
          label="Telangana"
          name="city"
          value="Telangana"
          checked={formData.city === "Telangana"}
          onChange={handleChange}
        />
      </Form.Group>

      {/* Q3 */}
      <Form.Group className="mb-4">
        <Form.Label className="fw-bold">
          3. What are your future academic goals?
        </Form.Label>

        {[
          "JEE",
          "SAT",
          "Engineering in India",
          "Engineering Abroad",
          "Other Professional Course",
          "Undecided",
        ].map((option) => (
          <Form.Check
            key={option}
            type="radio"
            label={option}
            name="academicGoal"
            value={option}
            checked={formData.academicGoal === option}
            onChange={handleChange}
          />
        ))}
      </Form.Group>

      {/* Q4 */}
      <Form.Group className="mb-4">
        <Form.Label className="fw-bold">
          4. How would you rate your academic performance?
        </Form.Label>

        {[
          "Excellent",
          "Good",
          "Average",
          "Below Average",
        ].map((option) => (
          <Form.Check
            key={option}
            type="radio"
            label={option}
            name="performance"
            value={option}
            checked={formData.performance === option}
            onChange={handleChange}
          />
        ))}
      </Form.Group>

      {/* Q5 */}
      <Form.Group className="mb-4">
        <Form.Label className="fw-bold">
          5. How many hours do you spend studying outside school daily?
        </Form.Label>

        {[
          "Less than 1 hour",
          "1–2 hours",
          "2–4 hours",
          "More than 4 hours",
        ].map((option) => (
          <Form.Check
            key={option}
            type="radio"
            label={option}
            name="studyHours"
            value={option}
            checked={formData.studyHours === option}
            onChange={handleChange}
          />
        ))}
      </Form.Group>
    </>
  );
}

export default Page1Profile;