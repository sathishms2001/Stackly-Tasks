import { useState } from "react";
import "./App.css";
import type { Lead } from "./types/lead";
import { initialLeads } from "./data/leads";
import Header from "./components/Header";
import FilterBar from "./components/FilterBar";
import Pipeline from "./components/Pipeline";
import LeadDetails from "./components/LeadDetails";

function App() {
  const [selectedStage, setSelectedStage] = useState<string>("");
  const [appliedStage, setAppliedStage] = useState<string>("");
  const [dealValue, setDealValue] = useState<string>("");
  const [appliedDealValue, setAppliedDealValue] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [appliedSearch, setAppliedSearch] = useState<string>("");
  const [selectedPriority, setSelectedPriority] = useState<string>("");
  const [appliedPriority, setAppliedPriority] = useState<string>("");
  const [closeDate, setCloseDate] = useState<string>("");
  const [appliedCloseDate, setAppliedCloseDate] = useState<string>("");
  const [selectedSalesperson, setSelectedSalesperson] = useState<string>("");
  const [appliedSalesperson, setAppliedSalesperson] = useState<string>("");
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  const [leads, setLeads] = useState<Lead[]>(initialLeads);

  const getLeadScore = (priority: string): number => {
    switch (priority) {
      case "high":
        return 100;

      case "medium":
        return 70;

      case "low":
        return 40;

      default:
        return 0;
    }
  };

  const getProbability = (stage: string): number => {
    switch (stage) {
      case "new":
        return 10;

      case "contacted":
        return 20;

      case "qualified":
        return 40;

      case "proposal":
        return 60;

      case "negotiation":
        return 80;

      case "won":
        return 100;

      case "lost":
        return 0;

      default:
        return 0;
    }
  };

  const filteredLeads = leads.filter((lead) => {
    const matchesStage =
      !appliedStage || lead.stage === appliedStage;

    const matchesSalesperson =
      appliedSalesperson === "" ||
      lead.salesperson === appliedSalesperson;

    const matchesSearch =
      !appliedSearch ||
      lead.company
        .toLowerCase()
        .includes(appliedSearch.toLowerCase()) ||
      lead.contact
        .toLowerCase()
        .includes(appliedSearch.toLowerCase());

    const matchesPriority =
      !appliedPriority ||
      lead.priority === appliedPriority;

    const matchesDealValue =
      appliedDealValue === null ||
      lead.dealValue >= appliedDealValue;

    const matchesCloseDate =
      !appliedCloseDate ||
      lead.expectedClose === appliedCloseDate;

    return (
      matchesStage &&
      matchesSearch &&
      matchesPriority &&
      matchesDealValue &&
      matchesSalesperson &&
      matchesCloseDate
    );
  });

  const totalLeads: number = filteredLeads.length;

  const totalDealValue: number = filteredLeads.reduce(
    (total, lead) => total + lead.dealValue,
    0
  );

  const weightedPipelineValue: number = filteredLeads.reduce(
    (total, lead) =>
      total +
      (lead.dealValue * getProbability(lead.stage)) / 100,
    0
  );

  return (
    <>
      <Header onCreateLead={() => {}} />

      <main>
        <FilterBar
          searchTerm={searchTerm}
          selectedStage={selectedStage}
          selectedSalesperson={selectedSalesperson}
          selectedPriority={selectedPriority}
          dealValue={dealValue}
          closeDate={closeDate}
          errorMessage={errorMessage}
          setSearchTerm={setSearchTerm}
          setSelectedStage={setSelectedStage}
          setSelectedSalesperson={setSelectedSalesperson}
          setSelectedPriority={setSelectedPriority}
          setAppliedCloseDate={setAppliedCloseDate}
          setDealValue={setDealValue}
          setCloseDate={setCloseDate}
          setErrorMessage={setErrorMessage}
          setAppliedStage={setAppliedStage}
          setAppliedSearch={setAppliedSearch}
          setAppliedPriority={setAppliedPriority}
          setAppliedSalesperson={setAppliedSalesperson}
          setAppliedDealValue={setAppliedDealValue}
        />

        <section aria-labelledby="pipeline-summary-heading">
          <h2 id="pipeline-summary-heading">
            Pipeline Summary
          </h2>

          <p>
            <strong>Total Leads</strong>
            {totalLeads}
          </p>

          <p>
            <strong>Total Deal Value</strong>
            ₹{totalDealValue.toLocaleString("en-IN")}
          </p>

          <p>
            <strong>Weighted Pipeline Value</strong>
            ₹{weightedPipelineValue.toLocaleString("en-IN")}
          </p>
        </section>

        <Pipeline
          filteredLeads={filteredLeads}
          getLeadScore={getLeadScore}
          getProbability={getProbability}
          onViewDetails={(lead) => {
            setSelectedLead(lead);
          }}
        />

        <LeadDetails
          lead={selectedLead}
          onClose={() => {
            setSelectedLead(null);
          }}
        />
      </main>
    </>
  );
}

export default App;