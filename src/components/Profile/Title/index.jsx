import './style.css';

export default function Title(props) {
    return (
        <h1 {...props} className={props.className}>
            {props.children}
        </h1>
    );
}
