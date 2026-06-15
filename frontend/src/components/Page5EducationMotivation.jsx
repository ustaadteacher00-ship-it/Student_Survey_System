import { Form } from "react-bootstrap";

function Page5EducationMotivation({ formData, handleChange }) {
  return (
    <>
      <h3 className="mb-4">
        SECTION E: EDUCATION & MOTIVATION
      </h3>

      {/* Q20 */}
      <Form.Group className="mb-4">
        <Form.Label className="fw-bold">
          20. What motivates you to learn and study more?
        </Form.Label>

        {[
          "Good Grades",
          "Competitive Exams",
          "Career Goals",
          "Parents",
          "Personal Interest",
          "Rewards & Recognition",
        ].map((option) => (
          <Form.Check
            key={option}
            type="radio"
            label={option}
            name="motivation"
            value={option}
            checked={formData.motivation === option}
            onChange={handleChange}
          />
        ))}
      </Form.Group>

      {/* Q21 */}
      <Form.Group className="mb-4">
        <Form.Label className="fw-bold">
          21. What would motivate you to spend more time studying?
        </Form.Label>

        {[
          "Better understanding of concepts",
          "Better grades and exam performance",
          "Clear career goals",
          "More engaging learning methods",
          "Real-world applications of topics",
          "Faster doubt solving",
          "Personalized learning support",
          "Rewards and recognition",
          "Study groups / learning with friends",
          "Better teachers and explanations",
          "Reduced academic stress",
          "Better time management support",
          "Scholarships or academic opportunities",
          "Seeing measurable progress in my learning",
          "Other",
        ].map((option) => (
          <Form.Check
            key={option}
            type="radio"
            label={option}
            name="moreMotivation"
            value={option}
            checked={formData.moreMotivation === option}
            onChange={handleChange}
          />
        ))}
      </Form.Group>

      {/* Q22 */}
      <Form.Group className="mb-4">
        <Form.Label className="fw-bold">
          22. Do you feel that school provides adequate knowledge and understanding of subjects?
        </Form.Label>

        {["Yes", "Somewhat", "No"].map((option) => (
          <Form.Check
            key={option}
            type="radio"
            label={option}
            name="schoolKnowledge"
            value={option}
            checked={formData.schoolKnowledge === option}
            onChange={handleChange}
          />
        ))}
      </Form.Group>

      {/* Q23 */}
      <Form.Group className="mb-4">
        <Form.Label className="fw-bold">
          23. How often do you wonder, "Why am I learning this?"
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
            name="learningPurpose"
            value={option}
            checked={formData.learningPurpose === option}
            onChange={handleChange}
          />
        ))}
      </Form.Group>
    </>
  );
}

export default Page5EducationMotivation;