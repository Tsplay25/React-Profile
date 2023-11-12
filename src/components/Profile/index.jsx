import Button from '../Button';
import Topic from '../Topic';
import './style.css';

export default function Profile({
    avatar,
    name,
    bio,
    email,
    phone,
    githubUrl,
    linkedinUrl,
    instagramUrl,
}) {
    return (
        <section className="container">
            <img className="avatar" src={avatar} alt={name} />
            <h1>{name}</h1>
            <section className="description">
                <Topic text={bio} />
                <Topic text={email} />
                <Topic text={phone} />
            </section>
            <section className="social">
                <Button link={githubUrl} socialNetwork="Github" />
                <Button link={linkedinUrl} socialNetwork="Linkedin" />
                <Button link={instagramUrl} socialNetwork="Instagram" />
            </section>
        </section>
    );
}
