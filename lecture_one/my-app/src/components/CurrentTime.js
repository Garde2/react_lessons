function CurrentTime() {
  const now = new Date().toLocaleTimeString();
  return <h2 className="heading2">А время нынче такое: {now}</h2>;
}

export default CurrentTime;
