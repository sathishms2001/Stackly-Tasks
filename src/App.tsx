import "./App.css";
function App() {
  return (
    <>
      <header>
        <h1>CRM Pipeline</h1>

        <p>Track and manage your leads and opportunities.</p>

        <button type="button">Create Lead</button>
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
      />
    </div>

    <div>
      <label htmlFor="stage">Stage</label>
      <select id="stage" name="stage">
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
      <select id="salesperson" name="salesperson">
        <option value="">All Salespersons</option>
        <option value="ravi">Ravi Kumar</option>
        <option value="priya">Priya Singh</option>
        <option value="amit">Amit Verma</option>
      </select>
    </div>

    <div>
      <label htmlFor="priority">Priority</label>
      <select id="priority" name="priority">
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
      />
    </div>

    <div>
      <label htmlFor="date-range">Expected Close Date</label>
      <input
        type="date"
        id="date-range"
        name="dateRange"
      />
    </div>

    <button type="submit">Apply Filters</button>
    <button type="reset">Reset Filters</button>
  </form>
</section>

        <section aria-labelledby="pipeline-heading">
  {/* <h2 id="pipeline-heading">Sales Pipeline</h2> */}

  {/* <section aria-labelledby="new-lead-heading">
    <h3 id="new-lead-heading">New Lead</h3>

    <article>
      <h4>ABC Technologies</h4>

      <p>
        <strong>Contact:</strong> Arun Kumar
      </p>

      <p>
        <strong>Deal Value:</strong> ₹50,000
      </p>

      <p>
        <strong>Priority:</strong> High
      </p>

      <p>
        <strong>Expected Close:</strong> 20 August 2026
      </p>

      <button type="button">View Details</button>
    </article>

    <article>
      <h4>Global Solutions</h4>

      <p>
        <strong>Contact:</strong> Priya Sharma
      </p>

      <p>
        <strong>Deal Value:</strong> ₹75,000
      </p>

      <p>
        <strong>Priority:</strong> Medium
      </p>

      <p>
        <strong>Expected Close:</strong> 25 August 2026
      </p>

      <button type="button">View Details</button>
    </article>
  </section> */}
</section>
<section aria-labelledby="pipeline-heading">
  <h2 id="pipeline-heading">Sales Pipeline</h2>

  {/* New Lead */}
  <section aria-labelledby="new-lead-heading">
    <h3 id="new-lead-heading">New Lead</h3>

    <article>
      <h4>ABC Technologies</h4>
      <p><strong>Contact:</strong> Arun Kumar</p>
      <p><strong>Deal Value:</strong> ₹50,000</p>
      <p><strong>Priority:</strong> High</p>
      <p><strong>Expected Close:</strong> 20 August 2026</p>
      <button type="button">View Details</button>
    </article>

    <article>
      <h4>Global Solutions</h4>
      <p><strong>Contact:</strong> Priya Sharma</p>
      <p><strong>Deal Value:</strong> ₹75,000</p>
      <p><strong>Priority:</strong> Medium</p>
      <p><strong>Expected Close:</strong> 25 August 2026</p>
      <button type="button">View Details</button>
    </article>
  </section>

  {/* Contacted */}
  <section aria-labelledby="contacted-heading">
    <h3 id="contacted-heading">Contacted</h3>

    <article>
      <h4>Tech Solutions Pvt Ltd</h4>
      <p><strong>Contact:</strong> Ravi Kumar</p>
      <p><strong>Deal Value:</strong> ₹1,20,000</p>
      <p><strong>Priority:</strong> High</p>
      <p><strong>Expected Close:</strong> 28 August 2026</p>
      <button type="button">View Details</button>
    </article>

    <article>
      <h4>Bright Industries</h4>
      <p><strong>Contact:</strong> Meena Raj</p>
      <p><strong>Deal Value:</strong> ₹90,000</p>
      <p><strong>Priority:</strong> Medium</p>
      <p><strong>Expected Close:</strong> 30 August 2026</p>
      <button type="button">View Details</button>
    </article>
  </section>

  {/* Qualified */}
  <section aria-labelledby="qualified-heading">
    <h3 id="qualified-heading">Qualified</h3>

    <article>
      <h4>Star Enterprises</h4>
      <p><strong>Contact:</strong> Karthik Raj</p>
      <p><strong>Deal Value:</strong> ₹1,50,000</p>
      <p><strong>Priority:</strong> High</p>
      <p><strong>Expected Close:</strong> 5 September 2026</p>
      <button type="button">View Details</button>
    </article>

    <article>
      <h4>NextGen Technologies</h4>
      <p><strong>Contact:</strong> Divya Kumar</p>
      <p><strong>Deal Value:</strong> ₹1,10,000</p>
      <p><strong>Priority:</strong> Low</p>
      <p><strong>Expected Close:</strong> 8 September 2026</p>
      <button type="button">View Details</button>
    </article>
  </section>

  {/* Proposal */}
  <section aria-labelledby="proposal-heading">
    <h3 id="proposal-heading">Proposal</h3>

    <article>
      <h4>Global Tech Corp</h4>
      <p><strong>Contact:</strong> Suresh Kumar</p>
      <p><strong>Deal Value:</strong> ₹2,00,000</p>
      <p><strong>Priority:</strong> High</p>
      <p><strong>Expected Close:</strong> 12 September 2026</p>
      <button type="button">View Details</button>
    </article>

    <article>
      <h4>Innovative Systems</h4>
      <p><strong>Contact:</strong> Anitha Devi</p>
      <p><strong>Deal Value:</strong> ₹1,75,000</p>
      <p><strong>Priority:</strong> Medium</p>
      <p><strong>Expected Close:</strong> 15 September 2026</p>
      <button type="button">View Details</button>
    </article>
  </section>

  {/* Negotiation */}
  <section aria-labelledby="negotiation-heading">
    <h3 id="negotiation-heading">Negotiation</h3>

    <article>
      <h4>Star Corporation</h4>
      <p><strong>Contact:</strong> Manoj Kumar</p>
      <p><strong>Deal Value:</strong> ₹3,00,000</p>
      <p><strong>Priority:</strong> High</p>
      <p><strong>Expected Close:</strong> 20 September 2026</p>
      <button type="button">View Details</button>
    </article>

    <article>
      <h4>Future Enterprises</h4>
      <p><strong>Contact:</strong> Lakshmi Priya</p>
      <p><strong>Deal Value:</strong> ₹2,50,000</p>
      <p><strong>Priority:</strong> Medium</p>
      <p><strong>Expected Close:</strong> 22 September 2026</p>
      <button type="button">View Details</button>
    </article>
  </section>

  {/* Won */}
  <section aria-labelledby="won-heading">
    <h3 id="won-heading">Won</h3>

    <article>
      <h4>Prime Solutions</h4>
      <p><strong>Contact:</strong> Vignesh Kumar</p>
      <p><strong>Deal Value:</strong> ₹2,75,000</p>
      <p><strong>Priority:</strong> High</p>
      <p><strong>Closed Date:</strong> 8 August 2026</p>
      <button type="button">View Details</button>
    </article>
  </section>

  {/* Lost */}
  <section aria-labelledby="lost-heading">
    <h3 id="lost-heading">Lost</h3>

    <article>
      <h4>Digital Works</h4>
      <p><strong>Contact:</strong> Rajesh Kumar</p>
      <p><strong>Deal Value:</strong> ₹80,000</p>
      <p><strong>Reason:</strong> Budget constraints</p>
      <button type="button">View Details</button>
    </article>
  </section>
</section>

        <aside aria-labelledby="lead-details-heading">
  <header>
    <h2 id="lead-details-heading">Lead Details</h2>

    <button type="button" aria-label="Close lead details">
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
      <strong>Email:</strong> arun@abctechnologies.com
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

{/* <section aria-labelledby="semantic-patterns-heading">
  <h2 id="semantic-patterns-heading">
    Reusable Semantic Patterns
  </h2> */}

  {/* <section id="navigation" aria-labelledby="navigation-heading">
    <h3 id="navigation-heading">Navigation</h3>

    <nav aria-label="Pattern navigation">
      <ul>
        <li>
          <a href="#buttons">Buttons</a>
        </li>
        <li> */}
          {/* <a href="#cards">Cards</a>
        </li>
        <li>
          <a href="#alerts">Alerts</a>
        </li>
        <li>
          <a href="#forms">Forms</a>
        </li>
        <li>
          <a href="#tables">Tables</a>
        </li>
      </ul> */}
    {/* </nav>
  </section>

  <section id="buttons" aria-labelledby="buttons-heading">
    <h3 id="buttons-heading">Buttons</h3> */}

    {/* <button type="button">Primary Action</button>
    <button type="button">Secondary Action</button>
    <button type="button">Delete</button>
    <button type="button" disabled>Disabled</button>
  </section> */}

  {/* Cards
  <section id="cards" aria-labelledby="cards-heading">
    <h3 id="cards-heading">Cards</h3>

    <article>
      <h4>Customer Card</h4>

      <p>
        This card contains customer information.
      </p>

      <p>
        <strong>Customer:</strong> Arun Kumar
      </p>

      <button type="button">View Customer</button>
    </article>

    <article>
      <h4>Opportunity Card</h4>

      <p>
        This card contains opportunity information.
      </p>

      <p>
        <strong>Deal Value:</strong> ₹1,00,000
      </p>

      <button type="button">View Opportunity</button>
    </article>
  </section> */}

  {/* Alerts */}
  {/* <section id="alerts" aria-labelledby="alerts-heading">
    <h3 id="alerts-heading">Alerts</h3>

    <div role="status">
      <strong>Success:</strong>
      Your changes have been saved successfully.
    </div>

    <div role="alert">
      <strong>Error:</strong>
      Something went wrong. Please try again.
    </div> */}

    {/* <div role="status">
      <strong>Information:</strong>
      Your account information is up to date.
    </div>

    <div role="alert">
      <strong>Warning:</strong>
      Your session will expire soon.
    </div>
  </section> */}

  {/* Forms */}
  {/* <section id="forms" aria-labelledby="forms-heading">
    <h3 id="forms-heading">Forms</h3>

    <form>
      <div>
        <label htmlFor="full-name">
          Full Name
        </label> */}

        {/* <input
          type="text"
          id="full-name"
          name="fullName"
          required
        />
      </div>

      <div>
        <label htmlFor="email">
          Email
        </label>

        <input
          type="email"
          id="email"
          name="email"
          required
        />
      </div> */}

      {/* <div>
        <label htmlFor="country">
          Country
        </label> */}

        {/* <select
          id="country"
          name="country"
          required
        >
          <option value="">
            Select Country
          </option>

          <option value="india">
            India
          </option>

          <option value="usa">
            United States
          </option> */}

          {/* <option value="uk">
            United Kingdom
          </option>
        </select>
      </div> */}

      {/* <fieldset>
        <legend>Preferred Contact Method</legend>

        <div>
          <input
            type="radio"
            id="contact-email"
            name="contactMethod"
            value="email"
          />

          <label htmlFor="contact-email">
            Email
          </label>
        </div> */}

        {/* <div>
          <input
            type="radio"
            id="contact-phone"
            name="contactMethod"
            value="phone"
          />

          <label htmlFor="contact-phone">
            Phone
          </label>
        </div>
      </fieldset> */}

      {/* <div>
        <input
          type="checkbox"
          id="terms"
          name="terms"
          value="accepted"
          required
        />

        <label htmlFor="terms">
          I agree to the terms and conditions
        </label>
      </div> */}

      {/* <div>
        <label htmlFor="message">
          Message
        </label>

        <textarea
          id="message"
          name="message"
          rows={4}
        />
      </div>

      <button type="submit">
        Submit Form
      </button> */}

      {/* <button type="reset">
        Reset Form
      </button>
    </form>
  </section> */}

  {/* Tables */}
  {/* <section id="tables" aria-labelledby="tables-heading">
    <h3 id="tables-heading">Tables</h3>

    <table>
      <caption>
        Customer information table
      </caption> */}

      {/* <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Status</th>
          <th scope="col">Action</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Arun Kumar</td>
          <td>arun@example.com</td>
          <td>Active</td>
          <td>
            <button type="button">View</button>
          </td>
        </tr> */}

        {/* <tr>
          <td>Priya Singh</td>
          <td>priya@example.com</td>
          <td>Pending</td>
          <td>
            <button type="button">View</button>
          </td>
        </tr>

        <tr>
          <td>Amit Verma</td>
          <td>amit@example.com</td>
          <td>Inactive</td>
          <td>
            <button type="button">View</button>
          </td> */}
        {/* </tr>
      </tbody>
    </table>
  </section>
</section> */}






      </main>
    </>
  )
  
}


export default App