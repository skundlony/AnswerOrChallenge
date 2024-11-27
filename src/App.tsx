import Game from "./components/Game";
import "./styles/App.css";

const App: React.FC = () => {
    return (
        <>
            <div className="App">
                <Game/>
            </div>
            <div className="area">
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>


        </>
    );
};
export default App;
