import { Badge } from "@/components/ui/badge";
import { Calendar, Award, Trophy, Medal, Tag } from "lucide-react";

interface TimelineItem {
  title: string;
  institution: string;
  period: string;
  description: string;
  status: "current" | "completed";
  additionalInfo?: string;
  technologies?: string[];
}

export default function EducationSection() {
  const education: TimelineItem[] = [
    {
      title: "Bachelor of Technology - Mechanical Engineering",
      institution: "Kalasalingam Academy of Research and Education",
      period: "2023 - 2026",
      description: "Currently pursuing B.Tech in Mechanical Engineering with focus on CAD design, topology optimization, and automotive systems. Active member of electric bike racing team and involved in various engineering projects.",
      status: "current",
      additionalInfo: "Current CGPA: 8.45/10",
    },
    {
      title: "Diploma in Automobile Engineering",
      institution: "Ammaiapper Polytechnic College",
      period: "2019 - 2022",
      description: "Completed diploma in Automobile Engineering with comprehensive study of automotive systems, engines, and mechanical components. Strong foundation in automotive technology and engineering principles.",
      status: "completed",
      additionalInfo: "Percentage: 91%",
    },
  ];

  const experience: TimelineItem[] = [
    {
      title: "Design Engineering Intern",
      institution: "TechnoMech Industries",
      period: "Jun 2024 - Aug 2024",
      description: "Worked on CAD modeling and design optimization for industrial machinery components. Gained hands-on experience with SolidWorks and manufacturing processes.",
      status: "completed",
      technologies: ["SolidWorks", "Design", "Manufacturing"],
    },
    {
      title: "Research Assistant",
      institution: "University Research Lab",
      period: "Jan 2024 - May 2024",
      description: "Assisted in research on renewable energy systems and heat transfer optimization. Conducted CFD analysis and experimental validation of thermal systems.",
      status: "completed",
      technologies: ["ANSYS", "CFD", "Research"],
    },
    {
      title: "Workshop Coordinator",
      institution: "Engineering Society",
      period: "Sep 2023 - Dec 2023",
      description: "Organized technical workshops on CAD software and 3D printing for junior students. Led team of 10 volunteers and coordinated with industry professionals.",
      status: "completed",
      technologies: ["Leadership", "Teaching", "Organization"],
    },
  ];

  const certifications = [
    { title: "SolidWorks Professional", description: "Certified in advanced 3D CAD design", icon: <Tag className="h-8 w-8 text-primary" /> },
    { title: "Best Project Award", description: "Department recognition for innovation", icon: <Award className="h-8 w-8 text-primary" /> },
    { title: "Dean's List", description: "Academic excellence recognition", icon: <Trophy className="h-8 w-8 text-primary" /> },
    { title: "CAD Competition", description: "2nd place in state-level competition", icon: <Medal className="h-8 w-8 text-primary" /> },
  ];

  const techColors: { [key: string]: string } = {
    "SolidWorks": "bg-blue-100 text-blue-800",
    "Design": "bg-green-100 text-green-800",
    "Manufacturing": "bg-purple-100 text-purple-800",
    "ANSYS": "bg-red-100 text-red-800",
    "CFD": "bg-yellow-100 text-yellow-800",
    "Research": "bg-teal-100 text-teal-800",
    "Leadership": "bg-orange-100 text-orange-800",
    "Teaching": "bg-indigo-100 text-indigo-800",
    "Organization": "bg-pink-100 text-pink-800",
  };

  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Education & Experience</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            My academic journey and professional development in mechanical engineering
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-12">
          {/* Education Timeline */}
          <div className="mb-12 lg:mb-0">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Education</h3>
            <div className="space-y-8">
              {education.map((item, index) => (
                <div key={index} className="relative pl-8">
                  <div className={`absolute left-0 top-2 w-4 h-4 rounded-full border-4 border-white shadow ${
                    item.status === "current" ? "bg-primary" : "bg-slate-400"
                  }`}></div>
                  {index < education.length - 1 && (
                    <div className="absolute left-2 top-6 w-0.5 h-full bg-slate-200"></div>
                  )}
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-lg font-semibold text-slate-900">{item.title}</h4>
                      <span className="text-sm text-slate-500 flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {item.period}
                      </span>
                    </div>
                    <p className="text-primary font-medium mb-2">{item.institution}</p>
                    <p className="text-slate-600 mb-3">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">{item.additionalInfo}</span>
                      <Badge variant={item.status === "current" ? "default" : "secondary"}>
                        {item.status === "current" ? "In Progress" : "Completed"}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Experience</h3>
            <div className="space-y-8">
              {experience.map((item, index) => (
                <div key={index} className="relative pl-8">
                  <div className={`absolute left-0 top-2 w-4 h-4 rounded-full border-4 border-white shadow ${
                    index === 0 ? "bg-primary" : "bg-slate-400"
                  }`}></div>
                  {index < experience.length - 1 && (
                    <div className="absolute left-2 top-6 w-0.5 h-full bg-slate-200"></div>
                  )}
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-lg font-semibold text-slate-900">{item.title}</h4>
                      <span className="text-sm text-slate-500 flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {item.period}
                      </span>
                    </div>
                    <p className="text-primary font-medium mb-2">{item.institution}</p>
                    <p className="text-slate-600 mb-3">{item.description}</p>
                    {item.technologies && (
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className={techColors[tech] || "bg-gray-100 text-gray-800"}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Certifications & Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="mb-4">{cert.icon}</div>
                <h4 className="font-semibold text-slate-900 mb-2">{cert.title}</h4>
                <p className="text-sm text-slate-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
