import { useState } from "react";
import PipelineColumn from "./PipelineColumn";
import type { Lead } from "../types/lead";

interface PipelineProps {
  filteredLeads: Lead[];
  getLeadScore: (priority: Lead["priority"]) => number;
  getProbability: (stage: string) => number;
  onViewDetails: (lead: Lead) => void;
  onUpdateLeadStage: (
    leadId: number,
    newStage: string
  ) => void;
}



function Pipeline({
  filteredLeads,
  getLeadScore,
  getProbability,
  onViewDetails,
  onUpdateLeadStage,
}: PipelineProps) {
  const [draggedLeadId, setDraggedLeadId] =
    useState<number | null>(null);

  const stages = [
    {
      id: "new-lead-heading",
      title: "New Lead",
      value: "new",
    },
    {
      id: "contacted-heading",
      title: "Contacted",
      value: "contacted",
    },
    {
      id: "qualified-heading",
      title: "Qualified",
      value: "qualified",
    },
    {
      id: "proposal-heading",
      title: "Proposal",
      value: "proposal",
    },
    {
      id: "negotiation-heading",
      title: "Negotiation",
      value: "negotiation",
    },
    {
      id: "won-heading",
      title: "Won",
      value: "won",
    },
    {
      id: "lost-heading",
      title: "Lost",
      value: "lost",
    },
  ];

  // Store the lead that is being dragged
  const handleDragStart = (leadId: number) => {
    setDraggedLeadId(leadId);
  };

  // Handle dropped lead
    const handleDrop = (newStage: string) => {
      if (draggedLeadId === null) {
        return;
      }

      onUpdateLeadStage(
        draggedLeadId,
        newStage
      );

      setDraggedLeadId(null);
    };

  return (
    <section aria-labelledby="pipeline-heading">
      <h2 id="pipeline-heading">
        Sales Pipeline
      </h2>

      {filteredLeads.length === 0 && (
        <p>
          No leads found for the selected stage.
        </p>
      )}

      {stages.map((stage) => {
        const stageLeads = filteredLeads.filter(
          (lead) => lead.stage === stage.value
        );

        return (
          <PipelineColumn
            key={stage.value}
            headingId={stage.id}
            title={stage.title}
            leads={stageLeads}
            getLeadScore={getLeadScore}
            getProbability={getProbability}
            onViewDetails={onViewDetails}
            onDragStart={handleDragStart}
            onDrop={handleDrop}
            value={stage.value}
          />
        );
      })}
    </section>
  );
}

export default Pipeline;