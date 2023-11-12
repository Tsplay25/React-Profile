import './style.css';

export default function Button({ link, socialNetwork }) {
    return (
        <>
            <a href={link} target="_blank" className="button">
                {socialNetwork}
            </a>
        </>
    );
}
