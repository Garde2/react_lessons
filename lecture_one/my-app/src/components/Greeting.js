function Greeting() {
  const now = new Date().toLocaleTimeString();
  const hour = new Date().getHours();
  return (
    <div>
      {hour < 12 ? (
        <h2 className="heading">Доброе утро, время нынче: {now}</h2>
      ) : (
        <h2 className="heading">Добрый вечер, время нынче: {now}</h2>
      )}
    </div>
  );
}

export default Greeting;
