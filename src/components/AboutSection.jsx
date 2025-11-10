import { Briefcase, Code, User } from "lucide-react";


export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              About <span className="text-primary">Me</span>  
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">
                        Passionate and Detail Oriented Front-End Web Developer
                    </h3>

                    <p className="text-muted-foreground">
                        with 1 year of experience in creating visually appealing 
                        and highly responsive user interfaces.Proficient in HTML,
                        CSS, and JavaScript,with expertise in modern frameworks ReactJs, 
                        AngularJS, Adept at translating design concepts into interactive 
                        and user-friendly websites while ensuring cross-browser compatibility 
                        and mobile responsiveness. Skilled in optimizing performance, debugging,
                        and implementing best practices for web development. Strong collaborative
                        abilities to deliver seamless and engaging web experiences.
                    </p>

                    <p className="text-muted-foreground">
                        Passionate about turning ideas into interactive web experiences
                        that look great on any device.
                    </p>

                    <div className="flex flex-coloumn sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact"className="cosmic-button">
                            Contect Me
                        </a>
                        <a href="https://drive.google.com/file/d/10JB6Wybmo3E2DZyarJIR34GlNeN8VqRZ/view?usp=drive_link"className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                             Resume
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">
                                  Front End Web Development
                                </h4>
                                <p className="text-muted-foreground">
                                  Creating responsive websites and web applications 
                                  with modern frameworks.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <User className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">
                                  UI/UX Design
                                </h4>
                                <p className="text-muted-foreground">
                                  Building intuitive user interfaces and seamless user
                                  experiences.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Briefcase className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">
                                  Project Management
                                </h4>
                                <p className="text-muted-foreground">
                                  Project completion with GitHub and
                                  deploy using Netlify
                                </p>
                            </div>
                        </div>
                    </div>                
                </div>
            </div>
        </div>
    </section>
};