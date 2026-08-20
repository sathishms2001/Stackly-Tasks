import type { Lead } from "../types/lead";

interface LeadCardProps {
  lead: Lead;
  leadScore: number;
  probability: number;
  onViewDetails: (lead: Lead) => void;
  onDragStart: (leadId: number) => void;
}

function LeadCard({
  lead,
  leadScore,
  probability,
  onViewDetails,
  onDragStart,
}: LeadCardProps) {
  return (
    <article
      draggable
      onDragStart={() => onDragStart(lead.id)}
    >
      
      <h4>{lead.company}</h4>

      <p>
        <strong>Contact:</strong> {lead.contact}
      </p>

      <p>
        <strong>Deal Value:</strong> ₹
        {lead.dealValue.toLocaleString("en-IN")}
      </p>

      <p>
        <strong>Priority:</strong> {lead.priority}
      </p>

      <p>
        <strong>Lead Score:</strong> {leadScore}
      </p>

      <p>
        <strong>Probability:</strong> {probability}%
      </p>

      <p>
        <strong>Expected Close:</strong>{" "}
        {lead.expectedClose}
      </p>

      <button
        type="button"
        onClick={() => onViewDetails(lead)}
      >
        View Details
      </button>
    </article>
  );
}

export default LeadCard;