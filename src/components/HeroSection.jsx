import { ArrowDown, Infinity } from "lucide-react";



export const HeroSection = () => {
    return (
        <section 
        id="hero" 
        className="min-h-screen flex items-center pt-20 pb-16 "
        >
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
                {/*left side content */}
                <div className="md:w-1/2 mb-10 md:mb-0 space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-light">
                        <span className="opacity-0 animate-fade-in"> Hi,I am </span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1">
                            {""} 
                             Mohamed Jahid
                            </span>
                        <span className="text-gradient opacity-0 animate-fade-in-delay-2 ml-2">
                            {""} 
                            Riyan
                            </span>
                        </h1>
                     
                            <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                                I’m a front-end web developer specializing in creating responsive, user-friendly, and visually engaging web interfaces.
                                I bring designs to life using HTML, CSS, and JavaScript frameworks like React and Angular.
                                My focus is on delivering seamless user experiences with clean, efficient, and modern code.
                            </p>

                            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                                <a href="#projects"className="cosmic-button">
                                    View My Projects
                                </a>
                            </div>
                </div>
                {/*right side image */}
                <div className="md:w-1/2 flex justify-center">
                    <div className="relative w-64 h-64 md:w-90 md:h-90">
                            <div className="absolute inset-0 rounded-full bg-primary animate-pluse-slow opacity-100">
                                <img  
                                className= "relative rounded-full w-64 h-64 md:w-90 md:h-90 object-cover z-10 animate-float " src="src\assets\WhatsApp Image 2023-12-02 at 12.19.58_fb68b6d3.jpg" alt="profile"/>
                            </div>                
                    </div>
                </div>                
            </div>
            
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
              <span className="text-sm text-muted-foreground mb-2">
                Scroll
              </span>
              <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
        
        );
};
