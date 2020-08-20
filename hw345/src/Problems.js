import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Problems() {
  useEffect(() => {
    getProblems();
  }, []);

  const [problems, setProblems] = useState([]);
  const getProblems = async () => {
    try {
      const data = await fetch(`http://api.haochuan.io/oj/problems`);
      const problems = await data.json();
      setProblems(problems.questions);
    } catch (error) {
      console.log("something wrror when getting the data", error);
    }
  };

  return (
    <div>
      {problems.map(problem => (
        <h1 key={problem.id}>
          <Link to={`/${problem.id}`}>{problem.title}</Link>
        </h1>
      ))}
    </div>
  );
}

export default Problems;
