import Profile from './components/Profile';
import avatar from './assets/insta_profile.jpg';
import './App.css';

function App() {
    let links = {
        github: 'https://github.com/Tsplay25',
        linkedin: 'https://www.linkedin.com/in/t-alvesdm/',
        instagram: 'https://www.instagram.com/t.alves02/',
    };

    return (
        <>
            <Profile
                avatar={avatar}
                name={'Talles Alves'}
                bio={'Full-Stack JavaScript student at OneBitCode'}
                phone={'+55 24 99999-0987'}
                email={'tallito@gmail.com'}
                githubUrl={links.github}
                linkedinUrl={links.linkedin}
                instagramUrl={links.instagram}
            />
        </>
    );
}

export default App;
