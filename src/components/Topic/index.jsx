import './style.css';

export default function Topic({ text }) {
    return (
        <div className="topic">
            <p className="text">{text}</p>
        </div>
    );
}
