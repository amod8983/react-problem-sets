import ProblemItem from "./ProblemItem";
import styles from "./ProblemsContainer.module.css";
export default function ProblemsConatiner({ problems = [] }) {
  return (
    <div className={styles.container}>
      {problems.map((problem, idx) => {
        return <ProblemItem key={idx} problem={problem} />;
      })}
    </div>
  );
}
