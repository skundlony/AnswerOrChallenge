interface Props {
    score: number;
    turn: number;
}

const ScoreDisplay: React.FC<Props> = ({ score, turn }) => {
    return (
        <div className="score-display">
            <p>Wynik: <span>{score}</span> </p>
            <p>Kolejka: <span>{turn} z 10</span> </p>
        </div>
    );
};

export default ScoreDisplay;
