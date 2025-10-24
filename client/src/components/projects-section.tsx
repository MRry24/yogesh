import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  type: string;
}

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      title: "Topology Optimization in Robotic Arm",
      description: "Performed comprehensive topology optimization analysis on robotic arm components achieving 40% weight reduction while maintaining structural integrity and performance requirements.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Topology Optimization", "SolidWorks", "FEA", "Weight Reduction"],
      type: "Academic Project",
    },
    {
      title: "Electric Bike Racing Team Leadership",
      description: "Vice Captain (2025) and Manager (2024) of electric bike racing team. Led design optimization, team coordination, and strategic planning for competitive electric vehicle racing.",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Team Leadership", "Electric Vehicles", "Project Management", "Racing"],
      type: "Team Leadership",
    },
    {
      title: "Coupling Design for Overload Protection",
      description: "Design and development of an innovative coupling system to reduce failures during overload conditions. Focused on improving reliability and preventing mechanical failures in industrial applications.",
      image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Mechanical Design", "Failure Analysis", "SolidWorks", "Industrial Applications"],
      type: "Engineering Project",
    },
    {
      title: "6-Cylinder V6 Engine Design",
      description: "Comprehensive guided design and modeling of a 6-cylinder V6 engine using SolidWorks. Complete assembly with detailed component design, including pistons, crankshaft, valves, and engine block.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["SolidWorks", "Engine Design", "3D Modeling", "Assembly"],
      type: "Guided Project",
    },
  ];

  const techColors: { [key: string]: string } = {
    "SolidWorks": "bg-blue-100 text-blue-800",
    "FEA": "bg-blue-100 text-blue-800",
    "Topology Optimization": "bg-purple-100 text-purple-800",
    "Weight Reduction": "bg-green-100 text-green-800",
    "Team Leadership": "bg-orange-100 text-orange-800",
    "Electric Vehicles": "bg-yellow-100 text-yellow-800",
    "Project Management": "bg-indigo-100 text-indigo-800",
    "Racing": "bg-red-100 text-red-800",
    "Mechanical Design": "bg-teal-100 text-teal-800",
    "Failure Analysis": "bg-pink-100 text-pink-800",
    "Industrial Applications": "bg-gray-100 text-gray-800",
    "Engine Design": "bg-emerald-100 text-emerald-800",
    "3D Modeling": "bg-cyan-100 text-cyan-800",
    "Assembly": "bg-violet-100 text-violet-800",
  };

  const viewProjectDetails = () => {
    alert("Project details would be shown here.");
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            A showcase of my mechanical engineering projects demonstrating CAD design, analysis, and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-slate-100">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className={techColors[tech] || "bg-gray-100 text-gray-800"}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-500">{project.type}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={viewProjectDetails}
                    className="text-primary hover:text-blue-700 font-semibold p-0"
                  >
                    View Details
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button onClick={() => alert("All projects view would be shown here.")}>
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
