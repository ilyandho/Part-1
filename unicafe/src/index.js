import React, { useState } from "react";
import ReactDOM from "react-dom";

const Statistic = ({ text, value }) => {
  return (
    <td>
      {text} {value}
    </td>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = total / 3;
  const percentage =
    (good + neutral + bad === 0 ? 0 : (good / (good + neutral + bad)) * 100) +
    " %";
  if (total === 0) {
    return <p> No feedback given </p>;
  }

  return (
    <div>
      <h2>statistics</h2>
      <table>
        <tbody>
          <tr>
            <Statistic text="good" value={good} />
          </tr>
          <tr>
            <Statistic text="neutral" value={neutral} />
          </tr>
          <tr>
            <Statistic text="bad" value={bad} />
          </tr>
          <tr>
            <Statistic text="all" value={total} />
          </tr>
          <tr>
            <Statistic text="average" value={average} />
          </tr>
          <tr>
            <Statistic text="positive" value={percentage} />
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>

      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
