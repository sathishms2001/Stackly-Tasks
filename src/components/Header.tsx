interface HeaderProps {
  onCreateLead: () => void;
}

function Header({ onCreateLead }: HeaderProps) {
  return (
    <header className="crm-header">
      <div>
        <h1>CRM Pipeline</h1>

        <p>
          Track and manage your leads and opportunities.
        </p>
      </div>

      <button
        type="button"
        className="create-lead-btn"
        onClick={onCreateLead}
      >
        Create Lead
      </button>
    </header>
  );
}

export default Header;