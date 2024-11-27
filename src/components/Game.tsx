import { useState } from "react";
import QuestionDisplay from "./QuestionDisplay";
import ScoreDisplay from "./ScoreDisplay";
import questionsData from "../data/questions.json";
import { Questions } from "../types/QuestionTypes";
import "../styles/Game.css";

const Game: React.FC = () => {
    const questions: Questions = questionsData;
    const drawTime = 1500;
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState<string | null>(null);
    const [questionType, setQuestionType] = useState<"heavy" | "light" | "challenge" | null>(null);
    const [turn, setTurn] = useState(1);
    const [isChallengeMode, setIsChallengeMode] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Dostępne pytania, dynamicznie zarządzanie pulą
    const [availableQuestions, setAvailableQuestions] = useState<{
        heavy: string[];
        light: string[];
        challenge: string[];
    }>({
        heavy: [...questions.heavyQuestions],
        light: [...questions.lightQuestions],
        challenge: [...questions.challenges],
    });

    const getRandomQuestion = (type: "heavy" | "light" | "challenge") => {
        const questionsForType = availableQuestions[type];
        if (questionsForType.length === 0) return null;

        const randomIndex = Math.floor(Math.random() * questionsForType.length);
        const question = questionsForType[randomIndex];

        // Usuń wylosowane pytanie z dostępnej puli
        const updatedQuestions = [...questionsForType];
        updatedQuestions.splice(randomIndex, 1);

        setAvailableQuestions((prev) => ({
            ...prev,
            [type]: updatedQuestions,
        }));

        return question;
    };

    // Wybór pytania trudnego lub lekkiego
    const handleQuestionSelection = (type: "heavy" | "light") => {
        setQuestionType(type);
        setIsLoading(true);

        setTimeout(() => {
            const question = getRandomQuestion(type);
            if (!question) {
                alert("Nie ma więcej pytań w tej kategorii!");
                setIsLoading(false);
                return;
            }

            setCurrentQuestion(question);
            setIsLoading(false);
            setIsChallengeMode(false);
        }, drawTime);
    };

    // Przejście do wyzwania
    const handleChallenge = () => {
        setQuestionType("challenge");
        setIsLoading(true);

        setTimeout(() => {
            const challenge = getRandomQuestion("challenge");
            if (!challenge) {
                alert("Nie ma więcej wyzwań!");
                setIsLoading(false);
                return;
            }

            setCurrentQuestion(challenge);
            setIsLoading(false);
            setIsChallengeMode(true);
        }, drawTime);
    };

    // Obsługa odpowiedzi na pytanie
    const handleAnswer = (success: boolean) => {
        if (questionType === "heavy") setScore((prev) => prev + (success ? 15 : 0));
        else if (questionType === "light")
            setScore((prev) => prev + (success ? 5 : 0));
        else if (questionType === "challenge")
            setScore((prev) => prev + (success ? 10 : 0));

        if (isChallengeMode || success) {
            setCurrentQuestion(null);
            setQuestionType(null);
            setTurn((prev) => prev + 1);
        } else {
            handleChallenge();
        }
    };

    return (
        <div className="game-container">
            {turn <= 10 ? (
                <>
                    {!currentQuestion && !isLoading ? (
                        <>
                            <h2>Pytanie czy wyzwanie?</h2>
                        <div className="options multi-button">
                            <button
                                className="btn-primary"
                                onClick={() => handleQuestionSelection("heavy")}
                            >
                                Pytanie Trudne
                            </button>
                            <button
                                className="btn-secondary"
                                onClick={() => handleQuestionSelection("light")}
                            >
                                Pytanie Lekkie
                            </button>
                        </div>
                        </>
                    ) : null}

                    {isLoading && (
                        <>
                            <h2>Trwa losowanie</h2>
                        <div className="gif-background-container">
                            <div className="gif-background"></div>
                        </div>
                        </>
                    )}

                    {currentQuestion && !isLoading && (
                        <QuestionDisplay
                            question={currentQuestion}
                            onAnswer={handleAnswer}
                            isChallengeMode={isChallengeMode}
                        />
                    )}

                    <ScoreDisplay score={score} turn={turn} />
                </>
            ) : (
                <div className="game-over">
                    <div className="gif-end"></div>
                    <p>Twój wynik: {score}</p>
                </div>
            )}
        </div>
    );
};

export default Game;
