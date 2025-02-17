const Hero = () => {
    return (
        <>
            <div className="flex bg-bg-KUMANIME justify-evenly items-center m-auto h-[80vh] font-poppins">
                <div className="hero-text max-w-[40%] text-white">
                    <h3 className="font-bold text-xl md:text-2xl lg:text-4xl text-center md:text-left">
                    <span className="text-KUMANIME">Welcome to </span>
                        <span className="text-KUMANIME">KUMANIME</span>
                    </h3>
                    <p className="text-xs md:text-sm mt-3 mb-6 text-center md:text-left"> The place to stream free anime with Indonesian subtitles! Enjoy the thrill of watching your favorite anime anytime, anywhere. With the latest and classic collections, KumaAnime is ready to provide non-stop entertainment. 🐾🎉</p>
                    
                </div>
                <img src="yuna-kuma.png" alt="yuna kuma bear" className="w-[200px] hidden md:block" />
            </div>
        </>
    )
}

export default Hero;