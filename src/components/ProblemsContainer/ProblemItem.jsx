import React from "react";
import { Link } from "react-router-dom";

import Chevron from "../Common/Chevron";
import styles from "./ProblemsContainer.module.css";

export default function ProblemItem({ problem = {} }) {
  const { title, subtitile, background, color, url } = problem;

  return (
    <div className={styles.itemContainer} style={{ background, color }}>
      <Link to={url} className={styles.itemLink}>
        <div className={styles.itemTitle}>{title}</div>
        <div className={styles.itemSubtitle}>{subtitile}</div>
      </Link>
      <Chevron />
    </div>
  );
}
