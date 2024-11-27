interface Props {
    question: string;
    onAnswer: (success: boolean) => void;
    isChallengeMode: boolean;
}

const QuestionDisplay: React.FC<Props> = ({ question, onAnswer, isChallengeMode }) => {
    return (
        <div className="question-display">
            <p>{question}</p>
            {isChallengeMode ? (
                <>
                    <button onClick={() => onAnswer(true)}>Wykonał</button>
                    <button onClick={() => onAnswer(false)}>Nie Wykonał</button>
                </>
            ) : (
                <>
                    <button onClick={() => onAnswer(true)}>Odpowiedział</button>
                    <button onClick={() => onAnswer(false)}>Wyzwanie</button>
                </>
            )}
        </div>
    );
};

export default QuestionDisplay;
