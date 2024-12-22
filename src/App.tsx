import { Link } from "@tanstack/react-router";

function App() {
  return (
    <>
      <h1 className="flex justify-center font-semibold text-3xl mt-24">
        Welcome to Invito!
      </h1>
      <div className="flex justify-around items-center h-96 border-solid ">
        <Link
          to="/add-event"
          className="border-2 border-sky-500 p-4 rounded-md"
        >
          Add Event
        </Link>
        <Link
          to="/view-events"
          className="border-2 border-pink-500 p-4 rounded-md"
        >
          View Events
        </Link>
      </div>
    </>
  );
}

export default App;
