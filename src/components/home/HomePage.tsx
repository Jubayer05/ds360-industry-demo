import React from "react";
import { AboutDepartment } from "./AboutDepartment";
import AnalyticsChart from "./AnalyticsChart";
import { CoreActivities } from "./CoreActivities";
import { DepartmentStructure } from "./DepartmentStructure";
import { FuturePlan } from "./FuturePlan";
import { HeroSection } from "./HeroSection";
import { OngoingActivities } from "./OngoingActivities";
import { StatsSection } from "./StatsSection";
import { TrainersHome } from "./TrainersHome";
import { TrainingCatalog } from "./TrainingCatelog";

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutDepartment />
      <TrainersHome />
      <DepartmentStructure />
      <StatsSection />
      <CoreActivities />
      <TrainingCatalog />
      <OngoingActivities />
      <AnalyticsChart />
      <FuturePlan />
    </div>
  );
};
