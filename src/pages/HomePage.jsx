import "../App.css";

import ProblemsConatiner from "../components/ProblemsContainer/ProblemsContainer";
import { problemsSetConfig } from "../configs/problemsSetConfig";

export default function HomePage() {
  return (
    <div className="home-container">
      <h1 className="header-text">React problems set</h1>
      <ProblemsConatiner problems={problemsSetConfig} />
    </div>
  );
}
