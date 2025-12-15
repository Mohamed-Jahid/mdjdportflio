import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects  = [
    {
      id:1,
      title:"A simple Tour Front Page",
      description: "developed a multi-page tour website using AngularJS, TypeScript, and Bootstrap to provide users with an interactive travel browsing experience.the project features a clean and responsive layout, ensuring seamless accessibility across different devices and screen sizes.Each page highlights tour packages, destinations, and booking options, designed for easy navigation and user engagement.",
      Image: "/projects/Screenshot (329).png",
      tags: ["Angularjs", "Typescript", "Netlify"],
      demoUrl:"https://jj-tours.netlify.app/",
      githubUrl:"https://github.com/Mohamed-Jahid/New-Repository.git",
    },
    {
      id:2,
      title:"Instagram Clone Front Page",
      description: "simple Instagram front-page clone built using React.js for the frontend and a JSON database (using json-server) for storing and managing post data.The application is in its early (halfway) development stage, meaning that the UI and data fetching logic are working, but features like likes, comments, uploads, and user authentication are yet to be implemented, 'In Progress'.",
      Image: "/projects/Screenshot (330).png",
      tags: ["React", "Javascript", "JsonDB"],
      githubUrl:"https://github.com/Mohamed-Jahid/Instaclone.git",
    },
    {
      id:3,
      title:"TicTacToe",
      description: "simple 3×3 Tic-Tac-Toe game using React with Vite as the development environment for fast and efficient setup. The game logic is handled using React Hooks, mainly useState, to manage player turns, board updates, and winner detection. The interface is styled using CSS, giving the board a clean and responsive layout.",
      Image: "projects/1763142415125.jpeg",
      tags: ["React + Vite", "Javascript", "vercel"],
      demoUrl:"https://game01-psi.vercel.app/",
      githubUrl:"https://github.com/Mohamed-Jahid/Instaclone.git",
    },
    {
      id:4,
      title:"SignIn Form",
      description: "Built a simple and responsive sign-up form using React and Tailwind CSS. Implemented component-based structure, state management for form inputs, and clean UI design using utility-first styling. Focused on responsiveness, usability, and modern frontend development practices.",
      Image: "public/projects/signinform.png",
      tags: ["React", "TailwindCSS", "vercel"],
      demoUrl:"https://signinform-roan.vercel.app/",
      githubUrl:"https://github.com/Mohamed-Jahid/signinform.git",
    },
];

export const ProjectsSection = () => {

    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Featured<span className="text-primary"> Projects</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my projects,Each project was carefully 
                crafted with attention to detail, performance, and user experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project , key) => (
                    <div 
                      key={key} 
                      className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                    >
                         <div className="h-48 overflow-hidden">
                            <img src={project.Image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                         </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>          
                           <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                           <p className="text-muted-foreground text-sm mb-4">
                             {project.description}
                           </p>

                           <div className="flex-justify-between items-center">
                               <div className="flex space-x-3">
                                <a 
                                  href={project.demoUrl}
                                  target="_blank" 
                                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                >
                                    <ExternalLink size={20}/>
                                </a>
                                <a 
                                  href={project.githubUrl}
                                  target="_blank"
                                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                 >
                                    <Github size={20}/>
                                </a>
                               </div>
                            </div>       
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a 
                  className="cosmic-button w-fit flex items-center mx-auto gap-2"
                  target="_blank" 
                  href="https://github.com/Mohamed-Jahid"
                >
                    Check My GitHub <ArrowRight size={16}/>
                </a>

            </div>

        </div>
    </section>;
};