interface Props {
    question: string;
    onAnswer: (success: boolean) => void;
}

const QuestionDisplay: React.FC<Props> = ({ question, onAnswer }) => {
    return (
        <div className="question-display">
            <p>{question}</p>
            <button onClick={() => onAnswer(true)}>Odpowiedź/Wykonano</button>
            <button onClick={() => onAnswer(false)}>Pomiń/Nie Wykonano</button>
        </div>
    );
};

export default QuestionDisplay;
