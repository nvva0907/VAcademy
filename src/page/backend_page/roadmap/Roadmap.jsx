import roadmap from "../../../assets/roadmap.svg";
import './roadmap.css'

export default function Roadmap() {
    return (
        <div className="roadmap-container">
            <h1>BACKEND DEVELOPER ROADMAP</h1>
            <i>Step by step guide to becoming a backend developer</i>
            <img src={roadmap} alt="ROADMAP" style={{width:'70%'}}/>
        </div>
    );
}