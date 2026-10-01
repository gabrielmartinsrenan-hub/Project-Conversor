DEVClub Currency Converter

A simple currency converter that converts Brazilian Real (BRL) into US Dollar, Euro, Bitcoin, or Canadian Dollar, with dynamic icons and real-time formatted values.

Mostrar Imagem

✨ Features
Currency selection — choose the target currency from a dropdown (USD, EUR, BTC, CAD)
Live Real value — the BRL amount updates as you type
One-click conversion — click "Converter" to calculate and display the converted value
Dynamic currency name and icon — switching the dropdown updates both the displayed currency name and its flag/icon automatically
Localized currency formatting — values are formatted using Intl.NumberFormat (e.g. R$ 50,00, $9.62, €8.93, C$13.16)
Bitcoin support — displayed with 8 decimal places instead of standard currency formatting
Clean, centered card layout with custom styling
🛠️ Built With
HTML5
CSS3
JavaScript (DOM manipulation, Intl.NumberFormat)
🚀 Getting Started
Clone the repository:
bash
   git clone https://github.com/your-username/your-repo-name.git
Open the project folder:
bash
   cd your-repo-name
Open index.html in your browser, or run it with a live server extension (e.g. Live Server in VS Code).
📂 Project Structure
├── index.html
├── index.css
├── arquivo.js
└── assets/
    ├── logo.gif
    ├── brasil 2.png
    ├── estados-unidos (1) 1.png
    ├── euro.png
    ├── bitcoin.png
    ├── dolar-canadense.png
    └── Vector.png
⚙️ How It Works
The user types an amount in the input field — the Real (BRL) value updates live.
The user selects a target currency from the dropdown.
Clicking "Converter" calculates the converted value using fixed exchange rates and displays it with proper currency formatting.
Changing the dropdown also updates the displayed currency name and icon to match the selected option.

Note: Exchange rates are currently hardcoded as constants in the JavaScript file for demonstration purposes. For real-world use, consider integrating a live exchange rate API.

📸 Preview

Add a real screenshot of your project here so visitors can see it without running the code.

📄 License

This project is open source and available under the MIT License.
