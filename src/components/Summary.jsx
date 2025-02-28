import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";
export default function Summary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => QUESTIONS[index].answers[0] === answer
  );
  const wrongAnswers = userAnswers.filter(
    (answer, index) => QUESTIONS[index].answers[0] !== answer && answer !== null
  );
  const skippedAnswerShare = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );
  const correctAnswerShare = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );
  const wrongAnswerShare = Math.round(
    (wrongAnswers.length / userAnswers.length) * 100
  );
  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Trophy Icon" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswerShare}%</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswerShare}%</span>
          <span className="text">Correct</span>
        </p>
        <p>
          <span className="number">{wrongAnswerShare}%</span>
          <span className="text">Incorrect</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = "user-answer";
          if (answer === null) {
            cssClass = cssClass + " skipped";
          } else if (QUESTIONS[index].answers[0] === answer) {
            cssClass = cssClass + " correct";
          } else {
            cssClass = cssClass + " wrong";
          }
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClass}>{answer ?? "Not Answered"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
