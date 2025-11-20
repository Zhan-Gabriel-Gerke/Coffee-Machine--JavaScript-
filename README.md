# Coffee Machine Simulator ☕️

A console-based coffee machine application written in **JavaScript**.
This pet project was created to practice core programming concepts, control flow, and state management in a Node.js environment.

## 🚀 Features

The program simulates a real coffee machine with the following capabilities:

* **Buy Coffee**: Choose from 3 types of coffee (Espresso, Latte, Cappuccino). The machine checks if there are enough resources before making a drink.
* **Fill**: Replenish the machine's supplies (Water, Milk, Coffee Beans, Disposable Cups).
* **Take**: Withdraw the money earned from selling coffee.
* **Remaining**: Check the current status of resources and cash.
* **Exit**: Gracefully terminate the program.

## 🛠 Tech Stack

* **Language**: JavaScript (ES6+)
* **Environment**: Node.js
* **Input Handling**: `sync-input` library

## ⚙️ How to Run

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/Zhan-Gabriel-Gerke/Coffee-Machine--JavaScript-.git](https://github.com/Zhan-Gabriel-Gerke/Coffee-Machine--JavaScript-.git)
    ```

2.  **Install dependencies**
    This project uses `sync-input` for console input.
    ```bash
    npm install sync-input
    ```

3.  **Run the application**
    ```bash
    node main.js
    ```

## 📋 Usage Example

```text
Write action (buy, fill, take, remaining, exit): 
> buy
What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:
> 2
I have enough resources, making you a coffee!

Write action (buy, fill, take, remaining, exit): 
> remaining
The coffee machine has:
350 ml of water
465 ml of milk
100 g of coffee beans
8 disposable cups
$557 of money