import { useState } from "react";
import { addEachEvent as addEventToDb } from "../services/eventsService";
import useEventsStore from "../store";
import { Link, Navigate } from "@tanstack/react-router";

const AddEvents = () => {
  const [eventName, setName] = useState("");
  const [eventDesc, setDesc] = useState("");
  const [eventDate, setDate] = useState("");
  const [eventLocation, setLocation] = useState("");
  const { addEvent } = useEventsStore();

  const handleEventSubmit = (e) => {
    e.preventDefault();
    console.log({ eventName, eventDate, eventDesc, eventLocation });

    // Create the event object to add to the DB
    const newEvent = {
      event_name: eventName,
      event_date: eventDate,
      event_description: eventDesc,
      location: eventLocation,
    };

    // Add the event to Supabase
    addEventToDb(newEvent)
      .then((newEventData) => {
        addEvent(newEventData[0]);
        alert("Event created!");
        setName("");
        setLocation("");
        setDesc("");
        setDate("");
      })
      .catch((error) => console.error("Error adding event:", error));
  };
  return (
    <div className="flex flex-col justify-center items-center mt-24 h-full">
      <Link
        to="/"
        className="flex mr-auto border-2 border-sky-500 p-2 rounded-md"
      >
        Back
      </Link>
      <h2 className="font-bold text-3xl">Create a new event</h2>
      <form
        onSubmit={handleEventSubmit}
        className="flex flex-col items-center mt-16 bg-sky-300 w-96 rounded-lg"
      >
        <label className="font-semibold text-lg">Event name</label>
        <br />
        <input
          type="text"
          placeholder="event title"
          onChange={(e) => setName(e.target.value)}
          className="border-3 border-pink-100 p-1 rounded-md"
        />
        <br />
        <label className="font-semibold text-lg">Event Description</label>
        <br />
        <input
          type="text"
          placeholder="event title"
          onChange={(e) => setDesc(e.target.value)}
          className="border-3 border-pink-100 p-1 rounded-md"
        />
        <br />
        <label className="font-semibold text-lg">Event Date</label>
        <br />
        <input
          type="date"
          placeholder="event title"
          onChange={(e) => setDate(e.target.value)}
          className="border-3 border-pink-100 p-1 rounded-md"
        />
        <br />
        <label className="font-semibold text-lg">Event Location</label>
        <br />
        <input
          type="text"
          placeholder="event title"
          onChange={(e) => setLocation(e.target.value)}
          className="border-3 border-pink-100 p-1 rounded-md"
        />
        <br />
        <button
          type="submit"
          value="add event"
          name="add Event"
          className="border-2 bg-orange-400 border-orange-500 p-2 rounded-md mt-3"
        >
          {" "}
          Add Event
        </button>
      </form>
    </div>
  );
};

export default AddEvents;
