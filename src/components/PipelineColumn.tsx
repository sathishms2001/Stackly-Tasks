import type { Lead } from "../types/lead";

interface PipelineColumnProps {
  headingId: string;
  title: string;
  leads: Lead[];
  getLeadScore: (priority: Lead["priority"]) => number;
  getProbability: (stage: string) => number;
  onViewDetails: (lead: Lead) => void;
}

function PipelineColumn({
  headingId,
  title,
  leads,
  getLeadScore,
  getProbability,
  onViewDetails,
}: PipelineColumnProps) {
  return (
    <section aria-labelledby={headingId}>
      <h3 id={headingId}>{title}</h3>

      {leads.length === 0 && (
        <p className="empty-stage">No leads</p>
      )}

      {leads.map((lead) => (
        <article
          key={lead.id}
          className="lead-card"
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