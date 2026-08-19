interface FilterBarProps {
  searchTerm: string;
  selectedStage: string;
  selectedSalesperson: string;
  selectedPriority: string;
  dealValue: string;
  closeDate: string;
  errorMessage: string;

  setSearchTerm: (value: string) => void;
  setSelectedStage: (value: string) => void;
  setSelectedSalesperson: (value: string) => void;
  setSelectedPriority: (value: string) => void;
  setDealValue: (value: string) => void;
  setCloseDate: (value: string) => void;
  setErrorMessage: (value: string) => void;

  setAppliedStage: (value: string) => void;
  setAppliedSearch: (value: string) => void;
  setAppliedPriority: (value: string) => void;
  setAppliedSalesperson: (value: string) => void;
  setAppliedDealValue: (value: number | null) => void;
  setAppliedCloseDate: (value: string) => void;
}

function FilterBar({
  searchTerm,
  selectedStage,
  selectedSalesperson,
  selectedPriority,
  dealValue,
  closeDate,
  errorMessage,

  setSearchTerm,
  setSelectedStage,
  setSelectedSalesperson,
  setSelectedPriority,
  setDealValue,
  setCloseDate,
  setErrorMessage,

  setAppliedStage,
  setAppliedSearch,
  setAppliedPriority,
  setAppliedSalesperson,
  setAppliedDealValue,
  setAppliedCloseDate,
}: FilterBarProps) {
  return (
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
            onChange={(event) =>
              setSearchTerm(event.target.value)
            }
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
          <label htmlFor="salesperson">
            Salesperson
          </label>

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
            onChange={(event) =>
              setSelectedPriority(event.target.value)
            }
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
                setErrorMessage(
                  "Deal value cannot be negative."
                );
              } else {
                setErrorMessage("");
              }
            }}
          />

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
            onChange={(event) =>
              setCloseDate(event.target.value)
            }
          />
        </div>

        <button
          type="button"
          onClick={() => {
            if (Number(dealValue) < 0) {
              setErrorMessage(
                "Deal value cannot be negative."
              );
              return;
            }

            setAppliedStage(selectedStage);
            setAppliedSearch(searchTerm.trim());
            setAppliedPriority(selectedPriority);

            setAppliedSalesperson(
              selectedSalesperson
            );

            setAppliedDealValue(
              dealValue === ""
                ? null
                : Number(dealValue)
            );

            setAppliedCloseDate(closeDate);
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

            setCloseDate("");
            setAppliedCloseDate("");

            setErrorMessage("");
          }}
        >
          Reset Filters
        </button>
      </form>
    </section>
  );
}

export default FilterBar;