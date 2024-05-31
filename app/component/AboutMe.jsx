const AboutMe = () => {
    return (
        <section className="mt-4 md:mt-10 mx-2 md:mx-auto text-center">
            <h2 className="text-xl md:text-2xl font-semibold mb-2 text-amber-50">About Me</h2>
            <div className="max-w-2xl mx-auto">
                <p className="mb-4 text-amber-50 text-sm md:text-base">
                    I have a hard time deciding what I want to make, but when I finally decide I will probably never
                    finish it. I'm moving on my fourth year of programming here are the languages I'm not totally fucking retarded in. (Fucking hate Javascript)
                </p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4">
                {['c++', 'c', 'rust', 'py', 'js', 'lua'].map((language, i) =>
                    (<img key={i} src={`/${language}.png`} alt={`${language} logo`} className="w-8 md:w-16 h-8 md:h-16"/>)
                )}
            </div>
        </section>
    );
};

export default AboutMe;