import { useState } from "react";
import "./App.css";

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
const [selectedLead, setSelectedLead] = useState<any>(null);

const leads = [
    {
      id: 1,
      company: "ABC Technologies",
      contact: "Arun Kumar",
      stage: "new",
      dealValue: 50000,
      priority: "high",
      expectedClose: "20 August 2026",
      salesperson: "ravi",
    },
    {
      id: 2,
      company: "Global Solutions",
      contact: "Priya Sharma",
      stage: "new",
      dealValue: 75000,
      priority: "medium",
      expectedClose: "25 August 2026",
      salesperson: "priya",

    },
    {
      id: 3,
      company: "Tech Solutions Pvt Ltd",
      contact: "Ravi Kumar",
      stage: "contacted",
      dealValue: 120000,
      priority: "high",
      expectedClose: "28 August 2026",
    },
    {
      id: 4,
      company: "Bright Industries",
      contact: "Meena Raj",
      stage: "contacted",
      dealValue: 90000,
      priority: "medium",
      expectedClose: "30 August 2026",
    },
    {
      id: 5,
      company: "Star Enterprises",
      contact: "Karthik Raj",
      stage: "qualified",
      dealValue: 150000,
      priority: "high",
      expectedClose: "5 September 2026",
    },
    {
      id: 6,
      company: "NextGen Technologies",
      contact: "Divya Kumar",
      stage: "qualified",
      dealValue: 110000,
      priority: "low",
      expectedClose: "8 September 2026",
    },
    {
      id: 7,
      company: "Global Tech Corp",
      contact: "Suresh Kumar",
      stage: "proposal",
      dealValue: 200000,
      priority: "high",
      expectedClose: "12 September 2026",
    },
    {
      id: 8,
      company: "Innovative Systems",
      contact: "Anitha Devi",
      stage: "proposal",
      dealValue: 175000,
      priority: "medium",
      expectedClose: "15 September 2026",
    },
    {
      id: 9,
      company: "Star Corporation",
      contact: "Manoj Kumar",
      stage: "negotiation",
      dealValue: 300000,
      priority: "high",
      expectedClose: "20 September 2026",
    },
    {
      id: 10,
      company: "Future Enterprises",
      contact: "Lakshmi Priya",
      stage: "negotiation",
      dealValue: 250000,
      priority: "medium",
      expectedClose: "22 September 2026",
    },
    {
      id: 11,
      company: "Prime Solutions",
      contact: "Vignesh Kumar",
      stage: "won",
      dealValue: 275000,
      priority: "high",
      expectedClose: "8 August 2026",
    },
    {
      id: 12,
      company: "Digital Works",
      contact: "Rajesh Kumar",
      stage: "lost",
      dealValue: 80000,
      priority: "medium",
      expectedClose: "",
    },
  ];

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
    lead.company.toLowerCase().includes(appliedSearch.toLowerCase()) ||
    lead.contact.toLowerCase().includes(appliedSearch.toLowerCase());

  const matchesPriority =
    !appliedPriority || lead.priority === appliedPriority;

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
        matchesSalesperson
      );
});

  const totalLeads: number = filteredLeads.length;

  const totalDealValue: number = filteredLeads.reduce(
    (total, lead) => total + lead.dealValue,
    0
  );

  const weightedPipelineValue: number = filteredLeads.reduce(
    (total, lead) =>
      total + (lead.dealValue * getProbability(lead.stage)) / 100,
    0
  );

  return (
    <>
      <header className="crm-header">
        <div>
          <h1>CRM Pipeline</h1>
          <p>Track and manage your leads and opportunities.</p>
        </div>

        <button type="button" className="create-lead-btn">
          Create Lead
        </button>
      </header>

      <main>
        <section aria-labelledby="filter-heading">
          <h2 id="filter-heading">Pipeline Filters</h2>

          <form>
            <div>
              <label htmlFor="search">Search Leads</label>

            <input
              type="search"
              id="search"
              name="search"
              placeholder="Search by lead or company"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
            </div>

            <div>
              <label htmlFor="stage">Stage</label>

              <select
                id="stage"
                name="stage"
                value={selectedStage}
                onChange={(event) =>
                  setSelectedStage(event.target.value)
                }
              >
                <option value="">All Stages</option>
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
  <label htmlFor="salesperson">Salesperson</label>

  <select
    id="salesperson"
    name="salesperson"
    value={selectedSalesperson}
    onChange={(event) =>
      setSelectedSalesperson(event.target.value)
    }
  >
    <option value="">All Salespersons</option>
    <option value="ravi">Ravi Kumar</option>
    <option value="priya">Priya Singh</option>
    <option value="amit">Amit Verma</option>
  </select>
</div>

            <div>
              <label htmlFor="priority">Priority</label>

                  <select
                    id="priority"
                    name="priority"
                    value={selectedPriority}
                    onChange={(event) => setSelectedPriority(event.target.value)}
                  >               
                   <option value="">All Priorities</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>

          <div>
            <label htmlFor="deal-value">Deal Value</label>

          <input
            type="number"
            id="deal-value"
            name="dealValue"
            min="0"
            placeholder="Enter deal value"
            value={dealValue}
            onChange={(event) => {
              const value = event.target.value;

              setDealValue(value);

              if (Number(value) < 0) {
                setErrorMessage("Deal value cannot be negative.");
              } else {
                setErrorMessage("");
              }
            }}
          />

          {errorMessage && (
            <p role="alert">{errorMessage}</p>
          )}

            {errorMessage && (
              <p role="alert">{errorMessage}</p>
            )}
          </div>

            <div>
              <label htmlFor="date-range">
                Expected Close Date
              </label>

            <input
              type="date"
              id="date-range"
              name="dateRange"
              value={closeDate}
              onChange={(event) => setCloseDate(event.target.value)}
            />
            </div>

<button
  type="button"
onClick={() => {
  if (Number(dealValue) < 0) {
    setErrorMessage("Deal value cannot be negative.");
    return;
  }

  setAppliedStage(selectedStage);
  setAppliedSearch(searchTerm.trim());
  setAppliedPriority(selectedPriority);
  setAppliedSalesperson(selectedSalesperson);

  setAppliedDealValue(
    dealValue === "" ? null : Number(dealValue)
  );
}}
>
  Apply Filters
</button>

            <button
              type="button"
             onClick={() => {
  setSelectedStage("");
  setAppliedStage("");

  setSearchTerm("");
  setAppliedSearch("");

  setSelectedPriority("");
  setAppliedPriority("");

  setSelectedSalesperson("");
  setAppliedSalesperson("");

  setDealValue("");
  setAppliedDealValue(null);

  setErrorMessage("");
}}
            >
              Reset Filters
            </button>
          </form>
        </section>

        <section aria-labelledby="pipeline-summary-heading">
          <h2 id="pipeline-summary-heading">Pipeline Summary</h2>

          <p>
            <strong>Total Leads:</strong> {totalLeads}
          </p>

          <p>
            <strong>Total Deal Value:</strong> ₹
            {totalDealValue.toLocaleString("en-IN")}
          </p>

          <p>
            <strong>Weighted Pipeline Value:</strong> ₹
            {weightedPipelineValue.toLocaleString("en-IN")}
          </p>
        </section>

        <section aria-labelledby="pipeline-heading">
          <h2 id="pipeline-heading">Sales Pipeline</h2>
          {filteredLeads.length === 0 && (
            <p>No leads found for the selected stage.</p>
            )}

          <section aria-labelledby="new-lead-heading">
            <h3 id="new-lead-heading">New Lead</h3>

            {filteredLeads
              .filter((lead) => lead.stage === "new")
              .map((lead) => (
                <article key={lead.id}>
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
                    <strong>Lead Score:</strong>{" "}
                    {getLeadScore(lead.priority)}
                  </p>

                  <p>
                    <strong>Probability:</strong>{" "}
                    {getProbability(lead.stage)}%
                  </p>

                  <p>
                    <strong>Expected Close:</strong>{" "}
                    {lead.expectedClose}
                  </p>

                  <button type="button"  
                   onClick={() => setSelectedLead(lead)}
                    >
                 View Details
                 </button>
                
                </article>
              ))}
          </section>

          <section aria-labelledby="contacted-heading">
            <h3 id="contacted-heading">Contacted</h3>

            {filteredLeads
              .filter((lead) => lead.stage === "contacted")
              .map((lead) => (
                          <article key={lead.id}>
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
                <strong>Lead Score:</strong>{" "}
                {getLeadScore(lead.priority)}
              </p>

              <p>
                <strong>Probability:</strong>{" "}
                {getProbability(lead.stage)}%
              </p>

              <p>
                <strong>Expected Close:</strong>{" "}
                {lead.expectedClose}
              </p>

              <button
                type="button"
                onClick={() => setSelectedLead(lead)}
              >
                View Details
              </button>
            </article>
              ))}
          </section>

          <section aria-labelledby="qualified-heading">
            <h3 id="qualified-heading">Qualified</h3>

            {filteredLeads
              .filter((lead) => lead.stage === "qualified")
              .map((lead) => (
                <article key={lead.id}>
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
                    <strong>Lead Score:</strong>{" "}
                    {getLeadScore(lead.priority)}
                  </p>

                  <p>
                    <strong>Probability:</strong>{" "}
                    {getProbability(lead.stage)}%
                  </p>

                  <p>
                    <strong>Expected Close:</strong>{" "}
                    {lead.expectedClose}
                  </p>

                  <button 
                    type="button"
                    onClick={() => setSelectedLead(lead)}
                    >
                      View Details
                  </button>
                </article>
              ))}
          </section>

          <section aria-labelledby="proposal-heading">
            <h3 id="proposal-heading">Proposal</h3>

            {filteredLeads
              .filter((lead) => lead.stage === "proposal")
              .map((lead) => (
                <article key={lead.id}>
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
                    <strong>Lead Score:</strong>{" "}
                    {getLeadScore(lead.priority)}
                  </p>

                  <p>
                    <strong>Probability:</strong>{" "}
                    {getProbability(lead.stage)}%
                  </p>

                  <p>
                    <strong>Expected Close:</strong>{" "}
                    {lead.expectedClose}
                  </p>

                  <button 
                    type="button"
                    onClick={() => setSelectedLead(lead)}
                  >
                    View Details
                  </button>
                </article>
              ))}
          </section>

          <section aria-labelledby="negotiation-heading">
            <h3 id="negotiation-heading">Negotiation</h3>

            {filteredLeads
              .filter((lead) => lead.stage === "negotiation")
              .map((lead) => (
                <article key={lead.id}>
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
                    <strong>Lead Score:</strong>{" "}
                    {getLeadScore(lead.priority)}
                  </p>

                  <p>
                    <strong>Probability:</strong>{" "}
                    {getProbability(lead.stage)}%
                  </p>

                  <p>
                    <strong>Expected Close:</strong>{" "}
                    {lead.expectedClose}
                  </p>

                  <button 
                    type="button"
                    onClick={() => setSelectedLead(lead)}
                  >
                    View Details
                  </button>
                </article>
              ))}
          </section>

          <section aria-labelledby="won-heading">
            <h3 id="won-heading">Won</h3>

            {filteredLeads
              .filter((lead) => lead.stage === "won")
              .map((lead) => (
                <article key={lead.id}>
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
                    <strong>Lead Score:</strong>{" "}
                    {getLeadScore(lead.priority)}
                  </p>

                  <p>
                    <strong>Probability:</strong>{" "}
                    {getProbability(lead.stage)}%
                  </p>

                  <p>
                    <strong>Closed Date:</strong>{" "}
                    {lead.expectedClose}
                  </p>

                  <button 
                    type="button" 
                    onClick={() => setSelectedLead(lead)}
                  >
                    View Details
                  </button>
                </article>
              ))}
          </section>

          <section aria-labelledby="lost-heading">
            <h3 id="lost-heading">Lost</h3>

            {filteredLeads
              .filter((lead) => lead.stage === "lost")
              .map((lead) => (
                <article key={lead.id}>
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
                    <strong>Lead Score:</strong>{" "}
                    {getLeadScore(lead.priority)}
                  </p>

                  <p>
                    <strong>Probability:</strong>{" "}
                    {getProbability(lead.stage)}%
                  </p>

                  <p>
                    <strong>Reason:</strong> Budget constraints
                  </p>

                  <button 
                    type="button"                
                    onClick={() => setSelectedLead(lead)}
                  >
                    View Details
                  </button>
                </article>
              ))}
          </section>
        </section>

        <aside aria-labelledby="lead-details-heading">
          <header>
            <h2 id="lead-details-heading">Lead Details</h2>

            <button
              type="button"
              aria-label="Close lead details"
            >
              Close
            </button>
          </header>

          <section aria-labelledby="customer-information-heading">
            <h3 id="customer-information-heading">
              Customer Information
            </h3>

            <p>
              <strong>Company:</strong> ABC Technologies
            </p>

            <p>
              <strong>Contact Person:</strong> Arun Kumar
            </p>
          </section>

          <section aria-labelledby="contact-information-heading">
            <h3 id="contact-information-heading">
              Contact Information
            </h3>

            <p>
              <strong>Email:</strong>{" "}
              arun@abctechnologies.com
            </p>

            <p>
              <strong>Phone:</strong> +91 9876543210
            </p>
          </section>

          <section aria-labelledby="deal-information-heading">
            <h3 id="deal-information-heading">
              Deal Information
            </h3>

            <dl>
              <div>
                <dt>Deal Value</dt>
                <dd>₹50,000</dd>
              </div>

              <div>
                <dt>Current Stage</dt>
                <dd>New Lead</dd>
              </div>

              <div>
                <dt>Priority</dt>
                <dd>High</dd>
              </div>

              <div>
                <dt>Expected Close Date</dt>
                <dd>20 August 2026</dd>
              </div>
            </dl>
          </section>

          <section aria-labelledby="sales-information-heading">
            <h3 id="sales-information-heading">
              Sales Information
            </h3>

            <p>
              <strong>Assigned To:</strong> Ravi Kumar
            </p>

            <p>
              <strong>Lead Source:</strong> Website
            </p>
          </section>

          <section aria-labelledby="notes-heading">
            <h3 id="notes-heading">Notes</h3>

            <p>
              Customer is interested in the enterprise package.
              Follow-up required before the proposal stage.
            </p>
          </section>

          <section aria-labelledby="activity-heading">
            <h3 id="activity-heading">Activity History</h3>

            <table>
              <caption>Lead Activity History</caption>

              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Activity</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>10 August 2026</td>
                  <td>Initial Call</td>
                  <td>Completed</td>
                </tr>

                <tr>
                  <td>11 August 2026</td>
                  <td>Requirement Discussion</td>
                  <td>Completed</td>
                </tr>

                <tr>
                  <td>12 August 2026</td>
                  <td>Follow-up Call</td>
                  <td>Scheduled</td>
                </tr>
              </tbody>
            </table>
          </section>

          <footer>
            <button type="button">Edit Lead</button>
            <button type="button">Move Stage</button>
          </footer>
        </aside>
        {selectedLead && (
          <div className="modal-overlay">
            <div className="lead-modal">

              <button
                type="button"
                className="close-btn"
                onClick={() => setSelectedLead(null)}
              >
                ×
              </button>

              <h2>Lead Details</h2>

              <div className="lead-details">

                <p>
                  <strong>Company:</strong>{" "}
                  {selectedLead.company}
                </p>

                <p>
                  <strong>Contact:</strong>{" "}
                  {selectedLead.contact}
                </p>

                <p>
                  <strong>Stage:</strong>{" "}
                  {selectedLead.stage}
                </p>

                <p>
                  <strong>Deal Value:</strong>{" "}
                  ₹{selectedLead.dealValue.toLocaleString("en-IN")}
                </p>

                <p>
                  <strong>Priority:</strong>{" "}
                  {selectedLead.priority}
                </p>

                <p>
                  <strong>Lead Score:</strong>{" "}
                  {getLeadScore(selectedLead.priority)}
                </p>

                <p>
                  <strong>Probability:</strong>{" "}
                  {getProbability(selectedLead.stage)}%
                </p>

                <p>
                  <strong>Expected Close:</strong>{" "}
                  {selectedLead.expectedClose || "N/A"}
                </p>

                <p>
                  <strong>Salesperson:</strong>{" "}
                  {selectedLead.salesperson || "Not Assigned"}
                </p>

              </div>

              <button
                type="button"
                className="close-modal-btn"
                onClick={() => setSelectedLead(null)}
              >
                Close
              </button>

            </div>
          </div>
        )}
      </main>
    </>
  );
}

export default App;