Calculator App
Overview
This is a simple calculator application built with React. It supports basic arithmetic operations and features a user-friendly interface with interactive buttons. The calculator also supports keyboard input and visual feedback for active operations.

Features
Basic Arithmetic Operations: Addition, subtraction, multiplication, and division.
Percentage Calculation: Calculate percentages.
Sign Inversion: Toggle between positive and negative values.
Reset and Remove: Clear the current input or remove the last digit.
Keyboard Support: Use the keyboard for quick calculations.
Active Button Feedback: Highlight the currently selected operation button.
Components
Buttons
The Buttons component renders the calculator buttons and handles their interactions.

Features
Button Click Handling: Processes button clicks to perform calculations or input numbers.
Keyboard Input Handling: Supports keyboard events for operations and numbers.
Active Button State: Highlights the active operation button and handles toggling.
Persistent Number Handling: Retains the current number when toggling operation signs.
Key Functions
numClickHandler(num): Handles number button clicks and updates the display.
resetClickHandler(): Resets the calculator to its initial state.
removeClickHandler(): Removes the last digit or number.
invertClickHandler(): Toggles the sign of the current number.
percentageClickHandler(): Calculates the percentage of the current number.
signClickHandler(sign): Handles arithmetic operation signs and toggles the active state.
equalsClickHandler(): Performs the calculation based on the current operation.
commaClickHandler(): Adds a decimal point to the current number.
Keyboard Support
Enter/Equals (=): Perform the calculation.
Escape: Reset the calculator.
Backspace: Remove the last digit or number.
Arithmetic Operators (+, -, /, *): Set the operation sign.
Decimal Point (.): Add a decimal point.
Numbers (0-9): Input numbers.
Percentage (%): Calculate percentages.
Sign Inversion (+/-): Toggle the sign.
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/calculator-app.git
Navigate to the project directory:

bash
Copy code
cd calculator-app
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start

Usage
Click the buttons to perform calculations or type directly using the keyboard.
Use the AC button to reset the calculator.
Click or use keyboard operators to perform arithmetic operations.
The = button or Enter key calculates the result.
Active operation buttons will highlight to show the current operation.