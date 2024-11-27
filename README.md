# Quiz Game with Spinner Animation

A simple and fun quiz game built in React, featuring a spinner animation to randomly select questions. Players can choose between "Hard" and "Easy" questions, and if they skip a question, they must complete a "Challenge". The game ensures no repeated questions or challenges within the same game session.

## Features

- Choose between **Hard (Trudne)** or **Easy (Lekkie)** questions.
- If a question is skipped, a random **Challenge (Wyzwanie)** is assigned.
- Spinner animation displays before revealing the selected question or challenge.
- Ensures no repeated questions or challenges in a single game.
- Tracks player score based on question difficulty and challenge completion.

## Demo

[Game Preview](https://answer-or-challenge.vercel.app/)


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Available Commands](#available-commands)
- [Components Overview](#components-overview)
- [Contributing](#contributing)
- [License](#license)

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/yourusername/quiz-game.git
cd quiz-game
npm install
``` 

## Usage
## Usage

Start the development server:

```bash
npm start
```

Visit http://localhost:5174 in your browser to play the game.

## Available Commands

- `npm start` - Start the development server.
- `npm run build` - Create a production build.
- `npm test` - Run tests.

## Components Overview

This project uses several reusable components. Here's an explanation of their functionality and the meaning of key terms:

### `Game`

The main component controlling the game logic and state. Handles user interactions, scoring, and rendering appropriate components.

- **Trudne (Hard)**: Questions that are more challenging, awarding 15 points.
- **Lekkie (Easy)**: Questions that are simpler, awarding 5 points.
- **Wyzwanie (Challenge)**: Tasks assigned if a player skips a question, awarding 10 points if completed.

### `QuestionDisplay`

Displays the selected question or challenge and provides buttons to mark completion or skipping.

### `ScoreDisplay`

Displays the current score and the turn number out of 10.

### Spinner Animation

A GIF spinner displayed before revealing a selected question or challenge.

### JSON Data

Contains the questions and challenges in the following format:

```json
{
  "heavyQuestions": ["What is your greatest achievement?", "Describe your happiest moment."],
  "lightQuestions": ["What is your favorite color?", "What is your go-to comfort food?"],
  "challenges": ["Do 20 push-ups.", "Sing a song in front of others."]
}
```
## Contributing

Contributions are welcome!

### Guidelines

- Ensure your code follows the existing coding style.
- Write clear, concise commit messages.
- Add comments where necessary to explain your code.
- If you're fixing a bug, link to the issue in your PR description.

## License

This project is open-source and free to use under the MIT License. See the [LICENSE](LICENSE) file for details.
