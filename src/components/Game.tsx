import { useState } from "react";
import QuestionDisplay from "./QuestionDisplay";
import ScoreDisplay from "./ScoreDisplay";
import questionsData from "../data/questions.json";
import { Questions } from "../types/QuestionTypes";
import "../styles/Game.css";

const Game: React.FC = () => {
    const questions: Questions = questionsData;

    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState<string | null>(null);
    const [questionType, setQuestionType] = useState<"heavy" | "light" | "challenge" | null>(null);
    const [turn, setTurn] = useState(1);

    const handleQuestionSelection = (type: "heavy" | "light") => {
        setQuestionType(type);
        const question =
            type === "heavy"
                ? questions.heavyQuestions[
                    Math.floor(Math.random() * questions.heavyQuestions.length)
                    ]
                : questions.lightQuestions[
                    Math.floor(Math.random() * questions.lightQuestions.length)
                    ];
        setCurrentQuestion(question);
    };

    const handleChallenge = () => {
        setQuestionType("challenge");
        const challenge =
            questions.challenges[
                Math.floor(Math.random() * questions.challenges.length)
                ];
        setCurrentQuestion(challenge);
    };

    const handleAnswer = (success: boolean) => {
        if (questionType === "heavy") setScore((prev) => prev + (success ? 15 : 0));
        else if (questionType === "light")
            setScore((prev) => prev + (success ? 5 : 0));
        else if (questionType === "challenge")
            setScore((prev) => prev + (success ? 10 : 0));

        setCurrentQuestion(null);
        setQuestionType(null);
        setTurn((prev) => prev + 1);
    };

    return (
        <div className="game-container">
            <h1>Gra: Pytania i Wyzwania</h1>
            {turn <= 10 ? (
                <>
                    {!currentQuestion ? (
                        <div className="options">
                            <button onClick={() => handleQuestionSelection("heavy")}>
                                Pytanie Trudne
                            </button>
                            <button onClick={() => handleQuestionSelection("light")}>
                                Pytanie Lekkie
                            </button>
                            <button onClick={handleChallenge}>Wyzwanie</button>
                        </div>
                    ) : (
                        <QuestionDisplay
                            question={currentQuestion}
                            onAnswer={handleAnswer}
                        />
                    )}
                    <ScoreDisplay score={score} turn={turn} />
                </>
            ) : (
                <div className="game-over">
                    <h2>Gra zakończona!</h2>
                    <p>Twój wynik: {score}</p>
                </div>
            )}
        </div>
    );
};

export default Game;
