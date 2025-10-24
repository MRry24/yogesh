import { Button } from "@/components/ui/button";
import { Download, Wrench, Compass } from "lucide-react";

export default function HeroSection() {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadResume = () => {
    // TODO: Implement actual resume download
    alert("Resume download would start here.");
  };

  return (
    <section id="home" className="bg-gradient-to-br from-slate-50 to-blue-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Yogesh R
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mt-4 font-medium">
              Mechanical Engineering Student
            </p>
            <p className="text-lg text-slate-600 mt-6 leading-relaxed">
              Passionate about innovative design solutions and advanced CAD modeling. Currently pursuing my final year in Mechanical Engineering with hands-on experience in product development and manufacturing processes.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToProjects}
                className="px-8 py-3 text-center"
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                onClick={downloadResume}
                className="px-8 py-3 text-center border-2 border-primary text-primary hover:bg-primary hover:text-white"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-6 mt-12 lg:mt-0">
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <img
                  src="@assets/Screenshot (521)_1753766864555.png"
                  alt="Yogesh R - Mechanical Engineering Student"
                  className="w-full h-80 object-cover rounded-xl"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-primary text-white p-4 rounded-xl shadow-lg">
                <Wrench className="h-8 w-8" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
                <Compass className="h-8 w-8 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
