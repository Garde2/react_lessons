import React, { useState, useEffect } from "react";
//22:40 - 30:00

const InputForm = () => {
  //не надо пихать массивы в один юзстейт!
  const [inputValue, setInputValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState("");

  //идеально в момент клика выполнять какое-то действие
  useEffect(() => {
    console.log("Input value changed: ", inputValue); //если инпутвэлью больше 8 - напиши что нельзя так длинно
  }, [inputValue]);
  //если хотим привязаться к изменеи пропса поля ввода - обязательно в квадратных указываем вторым аргументом. юзэффект выводим в консоль когда вводим в поле ввода

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedValue(inputValue);
    setInputValue("");
  };

  // при отправке выполняем хэндлСабмит
  //далее ловим поле ввода и при нажатии а - он выставляет сетинпут - присвоил и в поле ввода отображается А, и - и итд
  //а в момент нажатия на кнопку submit - видим что было в поле, когда нажали, для этого нам и нужно сабмиттед вэлью, отдельный юзстейт
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>
      {submittedValue && <p>Submitted value: {submittedValue}</p>}
    </div>
  );
};

export default InputForm;
