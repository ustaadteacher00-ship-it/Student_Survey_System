import { Form } from "react-bootstrap";

function Page6CareerFuture({ formData, handleChange }) {
  return (
    <>
      <h3 className="mb-4">
        SECTION F: CAREER & FUTURE
      </h3>

      {/* Q24 */}
      <Form.Group className="mb-4">
        <Form.Label className="fw-bold">
          24. Do you understand how your current subjects connect to future careers?
        </Form.Label>

        {[
          "Completely",
          "Somewhat",
          "Very Little",
          "Not at All",
        ].map((option) => (
          <Form.Check
            key={option}
            type="radio"
            label={option}
            name="careerConnection"
            value={option}
            checked={formData.careerConnection === option}
            onChange={handleChange}
          />
        ))}
      </Form.Group>

      {/* Q25 */}
      <Form.Group className="mb-4">
        <Form.Label className="fw-bold">
          25. If you could change ONE thing about your learning experience or education system, what would it be?
        </Form.Label>

        <Form.Control
          as="textarea"
          rows={4}
          name="educationChange"
          value={formData.educationChange}
          onChange={handleChange}
          placeholder="Write your answer here..."
        />
      </Form.Group>

      {/* Q26 */}
      <Form.Group className="mb-4">
        <Form.Label className="fw-bold">
          26. What do current educational platforms, schools, coaching institutes,
          or learning resources fail to provide that students genuinely need?
        </Form.Label>

        <Form.Control
          as="textarea"
          rows={5}
          name="missingNeed"
          value={formData.missingNeed}
          onChange={handleChange}
          placeholder="Write your answer here..."
        />
      </Form.Group>

      {/* Q27 */}
      <Form.Group className="mb-4">
        <Form.Label className="fw-bold">
          27. If you had a magic wand and could create the perfect learning
          experience for students, what would it look like?
        </Form.Label>

        <Form.Control
          as="textarea"
          rows={5}
          name="perfectLearning"
          value={formData.perfectLearning}
          onChange={handleChange}
          placeholder="Write your answer here..."
        />
      </Form.Group>
    </>
  );
}

export default Page6CareerFuture;