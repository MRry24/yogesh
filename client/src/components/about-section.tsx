export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">About Me</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            A dedicated mechanical engineering student with a passion for innovation and problem-solving
          </p>
        </div>
        
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="mb-8 lg:mb-0">
            <img
              src="@assets/Screenshot (521)_1753766864555.png"
              alt="Yogesh R - Mechanical Engineering Student"
              className="rounded-2xl shadow-xl w-full object-cover h-96"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">Mechanical Engineering Student</h3>
            <p className="text-slate-600 leading-relaxed">
              I am currently pursuing my Bachelor of Technology in Mechanical Engineering at Kalasalingam Academy of Research and Education, building upon my strong foundation from a Diploma in Automobile Engineering. My academic journey combines theoretical knowledge with hands-on project experience.
            </p>
            <p className="text-slate-600 leading-relaxed">
              My expertise lies in CAD design, topology optimization, and automotive systems. I've worked on projects ranging from robotic arm optimization to V6 engine design, and actively contribute as Vice Captain of our electric bike racing team.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-slate-600 font-medium">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-2xl font-bold text-primary">8.45</div>
                <div className="text-slate-600 font-medium">Current CGPA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
