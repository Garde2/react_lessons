function CurrentTime() {
  const now = new Date().toLocaleTimeString();
  return <p className="heading2">{now}, вот!</p>;
}

export default CurrentTime;
