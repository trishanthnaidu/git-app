import "./App.css";
import audio from "./horse.ogv";

function App() {
    return (
        <div>
            <h1>My First Application Deployment on Vercel</h1>
            <audio controls>
                <source src={audio} type="audio/ogg" />
                Your browser does not support the audio element.
            </audio>
        </div>
    );
}

export default App;
