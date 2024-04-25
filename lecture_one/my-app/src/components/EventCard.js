function EventCard({ eventId, eventName, eventPlace, eventTime }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{eventName}</h5>
        <p className="card-id">{eventId}</p>
        <p className="card-text">{eventPlace}</p>
        <p className="card-text">{eventTime}</p>
      </div>
    </div>
  );
}

export default EventCard;
