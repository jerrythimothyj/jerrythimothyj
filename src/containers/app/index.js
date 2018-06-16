import React from 'react';
import { Header, Profile, About, Resume, Works, Blog, Contacts } from '../../containers'
import { Background, Loader } from '../../components'

const App = () => <div className="page">
    <Loader />
    <Background />
    <div className="container opened" data-animation-in="fadeInUp" data-animation-out="fadeOutUp">
        <Header />
        <Profile />
        <About />
        <Resume />
        <Works />
        <Blog />
        <Contacts />
    </div>
</div>;

export default App;