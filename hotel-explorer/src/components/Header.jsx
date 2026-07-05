export default function Header() {
  return (
    <header className="board">
      <div className="board__inner">
        <div className="board__mark">
          <span className="board__dot" />
          HOTEL EXPLORER
        </div>
        <h1 className="board__title">Where to next?</h1>
        <p className="board__subtitle">
          500 stays across 12 Indian cities — search, filter and compare in real time.
        </p>
      </div>
      <div className="board__strip" aria-hidden="true">
        {'AHMEDABAD · BENGALURU · CHENNAI · DELHI · GOA · GURGAON · HYDERABAD · JAIPUR · KOLKATA · MUMBAI · NOIDA · PUNE · '.repeat(2)}
      </div>
    </header>
  );
}
