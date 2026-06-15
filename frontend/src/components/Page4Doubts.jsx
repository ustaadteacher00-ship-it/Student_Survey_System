import { Form } from "react-bootstrap";

function Page4Doubts({ formData, handleChange }) {
  return (
    <>
      <h3 className="mb-4">
        SECTION D: DOUBTS & LEARNING SUPPORT
      </h3>

      {/* Q16 */}
      <Form.Group className="mb-4">
        <Form.Label className="fw-bold">
          16. How often do your doubts remain unresolved?
        </Form.Label>

        {[
          "Never",
          "Rarely",
          "Sometimes",
          "Often",
          "Very Often",
        ].map((option) => (
          <Form.Check
            key={option}
            type="radio"
            label={option}
            name="unresolvedDoubts"
            value={option}
            checked={formData.unresolvedDoubts === option}
            onChange={handleChange}
          />
        ))}
      </Form.Group>

      {/* Q17 */}
      <Form.Group className="mb-4">
        <Form.Label className="fw-bold">
          17. How long does it usually take for your doubts to get solved?
        </Form.Label>

        {[
          "Immediately",
          "Within a Few Hours",
          "Within a Day",
          "Several Days",
          "Often Never Solved",
        ].map((option) => (
          <Form.Check
            key={option}
            type="radio"
            label={option}
            name="doubtResolutionTime"
            value={option}
            checked={formData.doubtResolutionTime === option}
            onChange={handleChange}
          />
        ))}
      </Form.Group>

      {/* Q18 */}
      <Form.Group className="mb-4">
        <Form.Label className="fw-bold">
          18. When you have a doubt, who do you usually ask?
        </Form.Label>

        {[
          "School Teacher",
          "Coaching Teacher",
          "Friend",
          "Parent",
          "Internet",
          "AI Tools",
          "Nobody",
        ].map((option) => (
          <Form.Check
            key={option}
            type="radio"
            label={option}
            name="askDoubtTo"
            value={option}
            checked={formData.askDoubtTo === option}
            onChange={handleChange}
          />
        ))}
      </Form.Group>

      {/* Q19 */}
      <Form.Group className="mb-4">
        <Form.Label className="fw-bold">
          19. What do you expect from a teacher when explaining a difficult topic?
        </Form.Label>

        <Form.Control
          as="textarea"
          rows={4}
          placeholder="Write your answer here..."
          name="teacherExpectation"
          value={formData.teacherExpectation}
          onChange={handleChange}
        />
      </Form.Group>
    </>
  );
}

export default Page4Doubts;