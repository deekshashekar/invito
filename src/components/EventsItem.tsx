import React from "react";

const EventsItem = ({ events }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {events?.map((el) => (
        <div
          key={el.eventDate}
          className="bg-sky-200 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {el.event_name}
          </h3>
          <p className="text-gray-600 mb-4">{el.event_description}</p>
          <div className="text-sm text-gray-500 mb-2">{el.event_date}</div>
          <i className="text-sm text-gray-500">{el.location}</i>
        </div>
      ))}
    </div>
  );
};

export default EventsItem;
