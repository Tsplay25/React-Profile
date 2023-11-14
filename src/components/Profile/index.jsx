import Button from '../Button';
import Title from './Title';
import Topic from './Topic';
import './style.css';

// não depende das props, portanto não precisa estar dentro do componente
function handleClick(ev) {
    console.log(ev);
    alert('Você agora está seguindo!');
}

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
            <Title className="title">
                <span>{name}</span>
                <button className="followButton" onClick={handleClick}>
                    Follow
                </button>
            </Title>
            <section className="description">
                <Topic>{bio}</Topic>
                <Topic>{email}</Topic>
                <Topic>{phone}</Topic>
            </section>
            <section className="social">
                <Button link={githubUrl} socialNetwork="Github" />
                <Button link={linkedinUrl} socialNetwork="Linkedin" />
                <Button link={instagramUrl} socialNetwork="Instagram" />
            </section>
        </section>
    );
}
