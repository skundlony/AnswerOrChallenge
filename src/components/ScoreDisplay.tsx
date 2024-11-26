interface Props {
    score: number;
    turn: number;
}

const ScoreDisplay: React.FC<Props> = ({ score, turn }) => {
    return (
        <div className="score-display">
            <p>Wynik: {score}</p>
            <p>Kolejka: {turn} z 10</p>
        </div>
    );
};

export default ScoreDisplay;
