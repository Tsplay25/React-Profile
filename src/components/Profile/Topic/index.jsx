import './style.css';

export default function Topic(props) {
    return (
        <div className="topic">
            <p className="text">{props.children}</p>
        </div>
    );
}
