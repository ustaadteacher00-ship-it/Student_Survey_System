import { Form } from "react-bootstrap";

function Page3StudyHabits({ formData, handleChange }) {
  return (
    <>
      <h3 className="mb-4">SECTION C: STUDY HABITS</h3>

      {/* Q11 */}
      <Form.Group className="mb-4">
        <Form.Label className="fw-bold">
          11. What do you mainly use for learning?
        </Form.Label>

        {[
          "School Notes",
          "Textbooks",
          "Coaching Material",
          "YouTube",
          "Educational Apps",
          "AI Tools",
          "Friends",
        ].map((option) => (
          <Form.Check
            key={option}
            type="radio"
            label={option}
            name="learningSource"
            value={option}
            checked={formData.learningSource === option}
            onChange={handleChange}
          />
        ))}
      </Form.Group>

      {/* Q12A */}
      <Form.Group className="mb-4">
        <Form.Label className="fw-bold">
          12A. Which platform helps you the most in learning?
        </Form.Label>

        {[
          "YouTube",
          "School Teacher",
          "Coaching Institute",
          "Physics Wallah (PW)",
          "BYJU'S",
          "Vedantu",
          "Unacademy",
          "Khan Academy",
          "ChatGPT",
          "Gemini",
          "Textbooks / NCERT",
          "School Notes",
          "Friends / Study Groups",
          "Other",
        ].map((option) => (
          <Form.Check
            key={option}
            type="radio"
            label={option}
            name="bestPlatform"
            value={option}
            checked={formData.bestPlatform === option}
            onChange={handleChange}
          />
        ))}
      </Form.Group>

      {/* Q12B */}
      <Form.Group className="mb-4">
        <Form.Label className="fw-bold">
          12B. Explain how a new platform should help you.
        </Form.Label>

        <Form.Control
          as="textarea"
          rows={4}
          placeholder="Write your answer here..."
          name="platformSuggestion"
          value={formData.platformSuggestion}
          onChange={handleChange}
        />
      </Form.Group>

      {/* Q13 */}
      <Form.Group className="mb-4">
        <Form.Label className="fw-bold">
          13. How many days per week do you actually follow your study schedule?
        </Form.Label>

        {[
          "0–1 Days",
          "2–3 Days",
          "4–5 Days",
          "6–7 Days",
        ].map((option) => (
          <Form.Check
            key={option}
            type="radio"
            label={option}
            name="studySchedule"
            value={option}
            checked={formData.studySchedule === option}
            onChange={handleChange}
          />
        ))}
      </Form.Group>

      {/* Q14 */}
      <Form.Group className="mb-4">
        <Form.Label className="fw-bold">
          14. When studying a chapter, what wastes the most time?
        </Form.Label>

        {[
          "Finding explanations",
          "Searching for questions",
          "Making notes",
          "Revision",
          "Solving doubts",
          "Staying focused",
        ].map((option) => (
          <Form.Check
            key={option}
            type="radio"
            label={option}
            name="timeWaste"
            value={option}
            checked={formData.timeWaste === option}
            onChange={handleChange}
          />
        ))}
      </Form.Group>

      {/* Q15 */}
      <Form.Group className="mb-4">
        <Form.Label className="fw-bold">
          15. What helps you understand a difficult concept best?
        </Form.Label>

        {[
          "Video Explanations",
          "Visual Diagrams",
          "Real-Life Examples",
          "Teacher Explanations",
          "Solved Examples",
          "Interactive Practice",
        ].map((option) => (
          <Form.Check
            key={option}
            type="radio"
            label={option}
            name="learningMethod"
            value={option}
            checked={formData.learningMethod === option}
            onChange={handleChange}
          />
        ))}
      </Form.Group>
    </>
  );
}

export default Page3StudyHabits;