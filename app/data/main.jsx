import { FaFigma } from "react-icons/fa";
import { SiTableau, SiPowerbi, SiLooker } from "react-icons/si";
import { figmaReports, lookerStudioReports, tableuReports } from "./Reports";

export const mainData = [
  { title: "Tableau", icon: <SiTableau />, reports: tableuReports },
  {
    title: "PowerBI",
    icon: <SiPowerbi />,
  },
  {
    title: "Looker Studio",
    icon: <SiLooker />,
    reports: lookerStudioReports,
  },
  {
    title: "Figma Mock-ups",
    icon: <FaFigma />,
    reports: figmaReports,
  },
];
