import { useState } from "react";
import type { Lead } from "../types/lead";

interface CreateLeadProps {
  onAddLead: (lead: Lead) => void;
  onClose: () => void;
}

function CreateLead({ onAddLead, onClose }: CreateLeadProps) {
  const [company, setCompany] = useState("");
  const [contact, setContact] = useState("");
  const [stage, setStage] = useState("new");
  const [dealValue, setDealValue] = useState("");
  const [priority, setPriority] = useState<"high" | "medium" | "low">("medium");
  const [expectedClose, setExpectedClose] = useState("");
  const [salesperson, setSalesperson] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newLead: Lead = {
      id: Date.now(),
      company,
      contact,
      stage,
      dealValue: Number(dealValue),
      priority,
      expectedClose,
      salesperson,
    };

    onAddLead(newLead);

    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="create-lead-modal">
        <h2>Create Lead</h2>

        <form onSubmit={handleSubmit}>
          <div>
            <label>Company</label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Enter company name"
              required
            />
          </div>

          <div>
            <label>Contact</label>
            <input
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="Enter contact name"
              required
            />
          </div>

          <div>
            <label>Stage</label>
            <select
                value={stage}
                onChange={(e) => setStage(e.target.value)}
                >
                <option value="new">New Lead</option>
                <option value="contacted">Contacted</option>
                <option value="qualified">Qualified</option>
                <option value="proposal">Proposal</option>
                <option value="negotiation">Negotiation</option>
                <option value="won">Won</option>
                <option value="lost">Lost</option>
            </select>
          </div>

          <div>
            <label>Deal Value</label>
            <input
              type="number"
              value={dealValue}
              onChange={(e) => setDealValue(e.target.value)}
              placeholder="Enter deal value"
              required
            />
          </div>

          <div>
            <label>Priority</label>
            <select
              value={priority}
              onChange={(e) =>
                setPriority(e.target.value as "high" | "medium" | "low")
              }
            >
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>

          <div>
            <label>Expected Close</label>
            <input
              type="date"
              value={expectedClose}
              onChange={(e) => setExpectedClose(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Salesperson</label>
            <input
              type="text"
              value={salesperson}
              onChange={(e) => setSalesperson(e.target.value)}
              placeholder="Enter salesperson"
              required
            />
          </div>

          <div className="form-actions">
            <button type="button" onClick={onClose}>
              Cancel
            </button>

            <button type="submit">
              Create Lead
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateLead;