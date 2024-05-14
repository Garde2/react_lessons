function Greeting() {
  const now = new Date().toLocaleTimeString();
  const hour = new Date().getHours();
  return (
    <>
      {hour < 12 ? (
        <h2 className="heading">Доброе утро, время нынче: {now}</h2>
      ) : (
        <h2 className="heading">Добрый вечер, время нынче: {now}</h2>
      )}
    </>
  );
}

export default Greeting;
