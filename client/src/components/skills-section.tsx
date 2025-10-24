import { Progress } from "@/components/ui/progress";
import { Check, Box, TrendingUp, Code, Factory, Users, ArrowDown01, Award } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface SkillProgress {
  name: string;
  percentage: number;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: SkillProgress[] | string[];
  hasProgress: boolean;
}

function getProficiencyLevel(percentage: number): { label: string; color: string; bgColor: string } {
  if (percentage >= 85) return { label: "Expert", color: "text-purple-700", bgColor: "bg-purple-100" };
  if (percentage >= 75) return { label: "Advanced", color: "text-blue-700", bgColor: "bg-blue-100" };
  if (percentage >= 60) return { label: "Intermediate", color: "text-green-700", bgColor: "bg-green-100" };
  return { label: "Beginner", color: "text-yellow-700", bgColor: "bg-yellow-100" };
}

function AnimatedSkillBar({ skill, delay }: { skill: SkillProgress; delay: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValue, setAnimatedValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const proficiency = getProficiencyLevel(skill.percentage);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          setTimeout(() => {
            setAnimatedValue(skill.percentage);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay, isVisible, skill.percentage]);

  return (
    <div ref={ref} data-testid={`skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <span className="text-slate-700 font-medium" data-testid={`text-skill-name-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}>
            {skill.name}
          </span>
          <span 
            className={`text-xs px-2 py-0.5 rounded-full ${proficiency.bgColor} ${proficiency.color} font-semibold`}
            data-testid={`badge-proficiency-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
          >
            {proficiency.label}
          </span>
        </div>
        <span className="text-slate-600 font-semibold" data-testid={`text-percentage-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}>
          {animatedValue}%
        </span>
      </div>
      <Progress 
        value={animatedValue} 
        className="h-2.5 bg-slate-200"
        data-testid={`progress-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
      />
    </div>
  );
}

export default function SkillsSection() {
  const skillCategories: SkillCategory[] = [
    {
      title: "CAD Design",
      icon: <Box className="text-2xl text-primary" />,
      hasProgress: true,
      skills: [
        { name: "SolidWorks", percentage: 85 },
        { name: "AutoCAD", percentage: 80 },
        { name: "Fusion 360", percentage: 75 },
      ] as SkillProgress[],
    },
    {
      title: "Analysis & Simulation",
      icon: <TrendingUp className="text-2xl text-primary" />,
      hasProgress: true,
      skills: [
        { name: "ANSYS", percentage: 70 },
        { name: "MATLAB", percentage: 75 },
        { name: "Simulink", percentage: 65 },
      ] as SkillProgress[],
    },
    {
      title: "Programming",
      icon: <Code className="text-2xl text-primary" />,
      hasProgress: true,
      skills: [
        { name: "Python", percentage: 80 },
        { name: "C++", percentage: 70 },
        { name: "LabVIEW", percentage: 60 },
      ] as SkillProgress[],
    },
    {
      title: "Manufacturing",
      icon: <Factory className="text-2xl text-primary" />,
      hasProgress: false,
      skills: ["3D Printing", "CNC Machining", "Welding Basics", "Quality Control"] as string[],
    },
    {
      title: "Project Management",
      icon: <ArrowDown01 className="text-2xl text-primary" />,
      hasProgress: false,
      skills: ["Agile Methodology", "Team Leadership", "Documentation", "Risk Assessment"] as string[],
    },
    {
      title: "Soft Skills",
      icon: <Users className="text-2xl text-primary" />,
      hasProgress: false,
      skills: ["Problem Solving", "Critical Thinking", "Communication", "Collaboration"] as string[],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Technical Skills</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Proficient in various engineering tools and technologies with intermediate to advanced capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-lg font-semibold text-slate-900 ml-3">{category.title}</h3>
              </div>
              
              {category.hasProgress ? (
                <div className="space-y-4">
                  {(category.skills as SkillProgress[]).map((skill, skillIndex) => (
                    <AnimatedSkillBar 
                      key={skillIndex} 
                      skill={skill} 
                      delay={skillIndex * 150}
                    />
                  ))}
                </div>
              ) : (
                <div className="space-y-3">
                  {(category.skills as string[]).map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center" data-testid={`skill-item-${skill.toLowerCase().replace(/\s+/g, '-')}`}>
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                      <span className="text-slate-700">{skill}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
