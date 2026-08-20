import { useState, useEffect } from "react";
import "./App.css";
import type { Lead } from "./types/lead";
import { initialLeads } from "./data/leads";
import Header from "./components/Header";
import FilterBar from "./components/FilterBar";
import Pipeline from "./components/Pipeline";
import LeadDetails from "./components/LeadDetails";
import CreateLead from "./components/CreateLead";

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
  const [showCreateLead, setShowCreateLead] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

const [leads, setLeads] = useState<Lead[]>(() => {
  const savedLeads = localStorage.getItem("crmLeads");
      return savedLeads
        ? JSON.parse(savedLeads)
        : initialLeads;
    });
    useEffect(() => {
      localStorage.setItem(
        "crmLeads",
        JSON.stringify(leads)
      );
}, [leads]);
    const handleCreateLead = (newLead: Lead) => {
      setLeads((prevLeads) => [...prevLeads, newLead]);

      setShowCreateLead(false);

      setSuccessMessage("Lead created successfully!");

      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    };
const handleUpdateLeadStage = async (
  leadId: number,
  newStage: string
) => {
  const draggedLead = leads.find(
    (lead) => lead.id === leadId
  );

  if (!draggedLead) {
    return;
  }

  const oldStage = draggedLead.stage;

  // Optimistic UI update
  setLeads((currentLeads) =>
    currentLeads.map((lead) =>
      lead.id === leadId
        ? {
            ...lead,
            stage: newStage,
          }
        : lead
    )
  );

  try {
    // API call
    await updateLeadStageApi(
      leadId,
      newStage
    );

    console.log(
      "Lead stage updated successfully"
    );

  } catch (error) {
    console.error(
      "Failed to update lead stage:",
      error
    );

    // Rollback
    setLeads((currentLeads) =>
      currentLeads.map((lead) =>
        lead.id === leadId
          ? {
              ...lead,
              stage: oldStage,
            }
          : lead
      )
    );
  }
};

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

const handleAddLead = (newLead: Lead) => {
  setLeads((prevLeads) => [...prevLeads, newLead]);

  setSuccessMessage("Lead created successfully!");

  setTimeout(() => {
    setSuccessMessage("");
  }, 3000);
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

   const updateLeadStageApi = (
      leadId: number,
      newStage: string
    ): Promise<void> => {
      return new Promise((resolve, reject) => {
        setTimeout(() => { 
          const success = true;

          if (success) {
            resolve();
          } else {
            reject(new Error("Failed to update lead stage"));
          }
        }, 1000);
      });
    };


  return (
    <>
      <Header onCreateLead={() => setShowCreateLead(true)} />

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
          onUpdateLeadStage={handleUpdateLeadStage}
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
            {successMessage && (
              <div className="success-message">
                {successMessage}
              </div>
    )}
      </main>
    {showCreateLead && (
      <CreateLead
        onAddLead={handleAddLead}
        onClose={() => setShowCreateLead(false)}
      />
    )}
    </>
  );
}

export default App;