/**
 * Класс TransactionsWidget отвечает за
 * открытие всплывающих окон для
 * создания нового дохода или расхода
 * */

class TransactionsWidget {
  /**
   * Устанавливает полученный элемент
   * в свойство element.
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor(element) {
    if (element) {
      this.element = element;
      this.registerEvents();
    } else {
      throw new Error("Переданный элемент не существует");
    }
  }
  /**
   * Регистрирует обработчики нажатия на
   * кнопки «Новый доход» и «Новый расход».
   * При нажатии вызывает Modal.open() для
   * экземпляра окна
   * */
  registerEvents() {
    const btnIncome = document.querySelector(".create-income-button");
    btnIncome.addEventListener("click", (event) => {
      event.preventDefault();
      App.getModal("newIncome").open();
    });
    const btnExpense = document.querySelector(".create-expense-button");
    btnExpense.addEventListener("click", (event) => {
      event.preventDefault();
      App.getModal("newExpense").open();
    });
  }
}
