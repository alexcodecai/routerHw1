import React, { Component, useState, useEffect } from "react";
import "./App.css";

function ProblemsDetail({ match }) {
  useEffect(() => {
    getProblemsDetail();
  }, []);
  const [detail, setDetail] = useState({});

  const getProblemsDetail = async () => {
    try {
      const data = await fetch(
        `http://api.haochuan.io/oj/problems/${match.params.id}`
      );
      const detail = await data.json();
      setDetail(detail.question);
    } catch (error) {
      console.log("something wrror when getting the detail", error);
    }
  };
  return <div className="content">{detail.content}</div>;
}

export default ProblemsDetail;
