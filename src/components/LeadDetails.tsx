import type { Lead } from "../types/lead";

interface LeadDetailsProps {
  lead: Lead | null;
  onClose: () => void;
}

function LeadDetails({
  lead,
  onClose,
}: LeadDetailsProps) {
  if (!lead) {
    return null;
  }

  return (
    <div className="lead-modal-overlay">
      <aside
        className="lead-details-modal"
        aria-labelledby="lead-details-heading"
      >
        {/* Header */}
        <header className="lead-modal-header">
          <div>
            <h2 id="lead-details-heading">
              Lead Details
            </h2>

            <p>
              Complete information about this lead
            </p>
          </div>

          <button
            type="button"
            className="close-modal-btn"
            onClick={onClose}
            aria-label="Close lead details"
          >
            ×
          </button>
        </header>

        {/* Content */}
        <div className="lead-modal-content">
          {/* Customer Information */}
          <section className="lead-details-section">
            <h3>Customer Information</h3>

            <div className="details-grid">
              <div className="detail-card">
                <span>Company</span>

                <strong>
                  {lead.company}
                </strong>
              </div>

              <div className="detail-card">
                <span>Contact Person</span>

                <strong>
                  {lead.contact}
                </strong>
              </div>
            </div>
          </section>

          {/* Deal Information */}
          <section className="lead-details-section">
            <h3>Deal Information</h3>

            <div className="details-grid">
              <div className="detail-card">
                <span>Deal Value</span>

                <strong className="deal-value">
                  ₹{lead.dealValue.toLocaleString("en-IN")}
                </strong>
              </div>

              <div className="detail-card">
                <span>Current Stage</span>

                <span
                  className={`stage-badge stage-${lead.stage}`}
                >
                  {lead.stage}
                </span>
              </div>

              <div className="detail-card">
                <span>Priority</span>

                <span
                  className={`priority-badge priority-${lead.priority}`}
                >
                  {lead.priority}
                </span>
              </div>

              <div className="detail-card">
                <span>Expected Close Date</span>

                <strong>
                  {lead.expectedClose}
                </strong>
              </div>
            </div>
          </section>

          {/* Sales Information */}
          <section className="lead-details-section">
            <h3>Sales Information</h3>

            <div className="details-grid">
              <div className="detail-card">
                <span>Assigned To</span>

                <strong>
                  {lead.salesperson || "Not Assigned"}
                </strong>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="lead-details-footer">
          <button
            type="button"
            className="secondary-action-btn"
            onClick={onClose}
          >
            Close
          </button>

          <button
            type="button"
            className="primary-action-btn"
          >
            Move Stage
          </button>
        </footer>
      </aside>
    </div>
  );
}

export default LeadDetails;