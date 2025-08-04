import { ROUTES } from "../constants/routes";

export const DIFFICULTY_STYLES = {
  easy: {
    background: "linear-gradient(135deg, #a8ff78, #78ffd6)",
    color: "#004d40",
  },
  medium: {
    background: "linear-gradient(135deg, #f6d365, #fda085)",
    color: "#4a1c00",
  },
  hard: {
    background: "linear-gradient(135deg, #f85032, #e73827)",
    color: "#ffffff",
  },
};

export const problemsSetConfig = [
  {
    title: "Lorem ipsum",
    subtitile:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do" +
      "eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut" +
      "enim ad minim veniam, quis nostrud exercitation.",
    background: DIFFICULTY_STYLES.easy.background,
    color: DIFFICULTY_STYLES.easy.color,
    url: ROUTES.HOME,
  },
  {
    title: "Lorem ipsum",
    subtitile:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do" +
      "eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut" +
      "enim ad minim veniam, quis nostrud exercitation.",
    background: DIFFICULTY_STYLES.medium.background,
    color: DIFFICULTY_STYLES.medium.color,
    url: ROUTES.HOME,
  },
  {
    title: "Lorem ipsum",
    subtitile:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do" +
      "eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut" +
      "enim ad minim veniam, quis nostrud exercitation.",
    background: DIFFICULTY_STYLES.hard.background,
    color: DIFFICULTY_STYLES.hard.color,
    url: ROUTES.HOME,
  },
  {
    title: "Lorem ipsum",
    subtitile:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do" +
      "eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut" +
      "enim ad minim veniam, quis nostrud exercitation.",
    background: DIFFICULTY_STYLES.hard.background,
    color: DIFFICULTY_STYLES.hard.color,
    url: ROUTES.HOME,
  },
];
