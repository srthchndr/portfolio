export default function IntroComponent() {
    return (
        <div className={'flex flex-col-reverse md:flex-row h-screen items-center'}>
            <div className={'w-full md:w-8/12'}>
                <h1 className={'text-5xl text-grey-primary'}>Hi &#x1F590;, I am Sarath Madala</h1>
                <p className={'text-grey-darker'}>Hi there! I am a fullstack web developer with experience in frontend and backend technologies such as <span className={'text-neongreen-default'}>React, Next JS, Node Js, Express</span>. I am interested in freelancing and am available for new projects. As a fullstack developer, I have a strong understanding of web development best practices and am skilled in delivering successful solutions from start to finish. Thank you for considering me for your project.</p>
            </div>
            <div className={'text-center md:flex-1 md:center md:w-4/12'}>Image goes here</div>
        </div>
    );
}
