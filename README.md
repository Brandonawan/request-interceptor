# Request Interceptor

This repository contains a simple script that demonstrates how to intercept and log network requests using Puppeteer's request interception feature. It's useful for debugging and monitoring network activity during web scraping or automated testing.

## Requirements

- Node.js
- Puppeteer

## Installation

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/Brandonawan/request-interceptor.git
    ```

2. Navigate into the cloned directory:

    ```bash
    cd request-interceptor
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Usage

1. Ensure your web application is running locally on `http://localhost:3000` or modify the script to navigate to your desired URL.

2. Run the script:

    ```bash
    node interceptor.js
    ```

3. Puppeteer will launch a headless browser, navigate to the specified URL, and intercept and log all network requests.

4. You can modify the script to suit your specific use case, such as filtering requests or performing actions based on intercepted requests.

## License

This project is licensed under the [MIT License](LICENSE).
