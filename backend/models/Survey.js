const mongoose = require("mongoose");

const surveySchema = new mongoose.Schema(
  {
    // Page 1
    grade: String,
    city: String,
    academicGoal: String,
    performance: String,
    studyHours: String,

    // Page 2
    difficultSubject: String,
    biggestChallenge: String,
    difficultReason: String,
    stopStudying: String,
    distraction: String,

    // Page 3
    learningSource: String,
    bestPlatform: String,
    platformSuggestion: String,
    studySchedule: String,
    timeWaste: String,
    learningMethod: String,

    // Page 4
    unresolvedDoubts: String,
    doubtResolutionTime: String,
    askDoubtTo: String,
    teacherExpectation: String,

    // Page 5
    motivation: String,
    moreMotivation: String,
    schoolKnowledge: String,
    learningPurpose: String,

    // Page 6
    careerConnection: String,
    educationChange: String,
    missingNeed: String,
    perfectLearning: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Survey", surveySchema);