import useDate from "./useDate";

function App() {
  const { date, time } = useDate();

  return (
    <div>
      <h1>Data e ora attuali:</h1>
      <p>Data: {date}</p>
      <p>Ora: {time}</p>
    </div>
  );
}

export default App;

