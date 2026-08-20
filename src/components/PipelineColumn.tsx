import type { Lead } from "../types/lead";

interface PipelineColumnProps {
  headingId: string;
  title: string;
  value: string;
  leads: Lead[];
  getLeadScore: (priority: Lead["priority"]) => number;
  getProbability: (stage: string) => number;
  onViewDetails: (lead: Lead) => void;
  onDragStart: (leadId: number) => void;
  onDrop: (stage: string) => void;
}

function PipelineColumn({
  headingId,
  title,
  value,
  leads,
  getLeadScore,
  getProbability,
  onViewDetails,
  onDragStart,
  onDrop,
}: PipelineColumnProps) {

  const handleDragOver = (
    event: React.DragEvent<HTMLElement>
  ) => {
    event.preventDefault();
  };

  const handleDrop = (
    event: React.DragEvent<HTMLElement>
  ) => {
    event.preventDefault();

    // Send actual stage value
    // Example: "qualified"
    onDrop(value);
  };

  return (
    <section
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      aria-labelledby={headingId}
    >
      <h3 id={headingId}>{title}</h3>

      {leads.length === 0 && (
        <p className="empty-stage">No leads</p>
      )}

      {leads.map((lead) => (
        <article
          key={lead.id}
          className="lead-card"
          draggable
          onDragStart={() => onDragStart(lead.id)}
        >
          <h4>{lead.company}</h4>

          <p>
            <strong>Contact:</strong>{" "}
            {lead.contact}
          </p>

          <p>
            <strong>Deal Value:</strong>{" "}
            ₹{lead.dealValue.toLocaleString("en-IN")}
          </p>

          <p>
            <strong>Priority:</strong>{" "}
            {lead.priority}
          </p>

          <p>
            <strong>Lead Score:</strong>{" "}
            {getLeadScore(lead.priority)}
          </p>

          <p>
            <strong>Probability:</strong>{" "}
            {getProbability(lead.stage)}%
          </p>

          <button
            type="button"
            onClick={() => {
              console.log(
                "BUTTON CLICKED:",
                lead
              );

              onViewDetails(lead);
            }}
          >
            View Details
          </button>
        </article>
      ))}
    </section>
  );
}

export default PipelineColumn;