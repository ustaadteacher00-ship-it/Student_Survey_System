import { Form } from "react-bootstrap";

function Page2Challenges({ formData, handleChange }) {
  return (
    <>
      <h3 className="mb-4">SECTION B: LEARNING CHALLENGES</h3>

      {/* Q6 */}
      <Form.Group className="mb-4">
        <Form.Label className="fw-bold">
          6. Which subject do you find most difficult?
        </Form.Label>

        {["Physics", "Chemistry", "Mathematics"].map((option) => (
          <Form.Check
            key={option}
            type="radio"
            label={option}
            name="difficultSubject"
            value={option}
            checked={formData.difficultSubject === option}
            onChange={handleChange}
          />
        ))}
      </Form.Group>

      {/* Q7 */}
      <Form.Group className="mb-4">
        <Form.Label className="fw-bold">
          7. What is the biggest challenge stopping you from learning effectively?
        </Form.Label>

        {[
          "Understanding concepts",
          "Solving problems",
          "Staying consistent",
          "Managing time",
          "Exam pressure",
          "Lack of guidance",
          "Lack of motivation",
        ].map((option) => (
          <Form.Check
            key={option}
            type="radio"
            label={option}
            name="biggestChallenge"
            value={option}
            checked={formData.biggestChallenge === option}
            onChange={handleChange}
          />
        ))}
      </Form.Group>

      {/* Q8 */}
      <Form.Group className="mb-4">
        <Form.Label className="fw-bold">
          8. Why do you find that subject difficult?
        </Form.Label>

        {[
          "Concepts are difficult",
          "Too many formulas",
          "Numerical problems are difficult",
          "Lack of interest",
          "Teaching methods",
          "Lack of practice",
        ].map((option) => (
          <Form.Check
            key={option}
            type="radio"
            label={option}
            name="difficultReason"
            value={option}
            checked={formData.difficultReason === option}
            onChange={handleChange}
          />
        ))}
      </Form.Group>

      {/* Q9 */}
      <Form.Group className="mb-4">
        <Form.Label className="fw-bold">
          9. What usually makes you stop studying?
        </Form.Label>

        {[
          "Boredom",
          "Difficulty of the topic",
          "Lack of progress",
          "Social media/distractions",
          "Stress or anxiety",
          "Lack of interest",
        ].map((option) => (
          <Form.Check
            key={option}
            type="radio"
            label={option}
            name="stopStudying"
            value={option}
            checked={formData.stopStudying === option}
            onChange={handleChange}
          />
        ))}
      </Form.Group>

      {/* Q10 */}
      <Form.Group className="mb-4">
        <Form.Label className="fw-bold">
          10. What is the single biggest distraction preventing you from studying effectively?
        </Form.Label>

        {[
          "Social Media",
          "Mobile Phone",
          "Gaming",
          "Friends",
          "Family Commitments",
          "Lack of Motivation",
          "Other",
        ].map((option) => (
          <Form.Check
            key={option}
            type="radio"
            label={option}
            name="distraction"
            value={option}
            checked={formData.distraction === option}
            onChange={handleChange}
          />
        ))}
      </Form.Group>
    </>
  );
}

export default Page2Challenges;