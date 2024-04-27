function Greeting2() {
  return function Greeting() {
    // Получаем текущий час
    const hour = new Date().getHours();
    let greeting;

    // Определяем приветствие в зависимости от времени суток
    if (hour < 12) {
      greeting = "Доброе утро";
    } else if (hour < 18) {
      greeting = "Добрый день";
    } else {
      greeting = "Добрый вечер";
    }

    // Возвращаем JSX с соответствующим приветствием
    return <h1>{greeting}, React!</h1>;
  };
}

export default Greeting2;
