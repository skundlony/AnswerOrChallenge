import Game from "./components/Game";
import "./styles/App.css";

const App: React.FC = () => {
    return (
        <>
            <div className="background">
                <div className="scanlines"></div>
                <div className="intro-wrap">
                    <div className="noise"></div>
                    <div className="noise noise-moving"></div>
                    <div className="play" data-splitting>PYTANIE CZY WYZWANIE?</div>
                    <div className="time">--:--</div>
                    <div className="recordSpeed">00:00:00</div>
                </div>
            </div>

            {/* Karta aplikacji */}
            <div className="App">
                <Game/>
            </div>
        </>
    );
};
export default App;
