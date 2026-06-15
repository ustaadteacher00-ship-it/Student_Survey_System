const express = require("express");
const router = express.Router();

const Survey = require("../models/Survey");
const XLSX = require("xlsx");

// Submit Survey
router.post("/submit", async (req, res) => {
  try {
    const survey = await Survey.create(req.body);

    res.status(201).json({
      success: true,
      message: "Survey submitted successfully",
      data: survey,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// Get All Responses
router.get("/responses", async (req, res) => {
  try {
    const responses = await Survey.find().sort({
      createdAt: -1,
    });

    res.json(responses);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
});

// Export Excel
router.get("/export", async (req, res) => {
  try {
    const responses = await Survey.find().lean();

    const formattedData = responses.map((item, index) => ({
      "Sr No": index + 1,

      "Q1 Grade": item.grade,
      "Q2 City": item.city,
      "Q3 Academic Goal": item.academicGoal,
      "Q4 Performance": item.performance,
      "Q5 Study Hours": item.studyHours,

      "Q6 Difficult Subject": item.difficultSubject,
      "Q7 Biggest Challenge": item.biggestChallenge,
      "Q8 Difficult Reason": item.difficultReason,
      "Q9 Stop Studying": item.stopStudying,
      "Q10 Distraction": item.distraction,

      "Q11 Learning Source": item.learningSource,
      "Q12A Best Platform": item.bestPlatform,
      "Q12B Platform Suggestion": item.platformSuggestion,
      "Q13 Study Schedule": item.studySchedule,
      "Q14 Time Waste": item.timeWaste,
      "Q15 Learning Method": item.learningMethod,

      "Q16 Unresolved Doubts": item.unresolvedDoubts,
      "Q17 Doubt Resolution Time": item.doubtResolutionTime,
      "Q18 Ask Doubts To": item.askDoubtTo,
      "Q19 Teacher Expectation": item.teacherExpectation,

      "Q20 Motivation": item.motivation,
      "Q21 More Motivation": item.moreMotivation,
      "Q22 School Knowledge": item.schoolKnowledge,
      "Q23 Learning Purpose": item.learningPurpose,

      "Q24 Career Connection": item.careerConnection,
      "Q25 Education Change": item.educationChange,
      "Q26 Missing Need": item.missingNeed,
      "Q27 Perfect Learning": item.perfectLearning,

      SubmittedOn: new Date(
        item.createdAt
      ).toLocaleString("en-IN"),
    }));

    const workbook = XLSX.utils.book_new();

    const worksheet =
      XLSX.utils.json_to_sheet(formattedData);

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "Survey Responses"
    );

    const buffer = XLSX.write(workbook, {
      type: "buffer",
      bookType: "xlsx",
    });

    res.setHeader(
      "Content-Disposition",
      "attachment; filename=survey-responses.xlsx"
    );

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );

    res.send(buffer);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Export Failed",
    });
  }
});

module.exports = router;