import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Download, Send } from "lucide-react";

export default function ContactSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema.extend({
      privacy: insertContactSchema.shape.subject.transform(() => true)
    })),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: (data: InsertContact) => apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contacts"] });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  const downloadResume = () => {
    // TODO: Implement actual resume download
    toast({
      title: "Resume download",
      description: "Resume download would start here.",
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="text-primary" />,
      title: "Email",
      value: "ryogesh2024@gmail.com",
    },
    {
      icon: <Phone className="text-primary" />,
      title: "Phone",
      value: "+91 9345773759",
    },
    {
      icon: <MapPin className="text-primary" />,
      title: "Location",
      value: "Chennai, TN, India",
    },
    {
      icon: <Linkedin className="text-primary" />,
      title: "LinkedIn",
      value: "www.linkedin.com/in/yogesh-ramasubramanian-941453276",
      isLink: true,
    },
  ];

  const socialLinks = [
    { icon: <Linkedin className="text-xl" />, href: "https://www.linkedin.com/in/yogesh-ramasubramanian-941453276" },
    { icon: <Github className="text-xl" />, href: "#" },
    { icon: <Twitter className="text-xl" />, href: "#" },
    { icon: <Mail className="text-xl" />, href: "mailto:ryogesh2024@gmail.com" },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or answering any questions about my work
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-start">
          {/* Contact Information */}
          <div className="mb-12 lg:mb-0">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    {info.icon}
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-slate-900">{info.title}</h4>
                    {info.isLink ? (
                      <a href={`https://${info.value}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-blue-700">{info.value}</a>
                    ) : (
                      <p className="text-slate-600">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-slate-900 mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-colors duration-300"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Resume Download */}
            <div className="mt-8 p-6 bg-slate-50 rounded-lg">
              <h4 className="text-lg font-semibold text-slate-900 mb-2">Download My Resume</h4>
              <p className="text-slate-600 mb-4">Get a comprehensive overview of my skills, experience, and projects</p>
              <Button onClick={downloadResume} className="inline-flex items-center">
                <Download className="mr-2 h-4 w-4" />
                Download PDF Resume
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="john.doe@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company/Organization (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Company" {...field} value={field.value || ""} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="job-opportunity">Job Opportunity</SelectItem>
                          <SelectItem value="collaboration">Collaboration</SelectItem>
                          <SelectItem value="project-inquiry">Project Inquiry</SelectItem>
                          <SelectItem value="general">General Question</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={6}
                          placeholder="Tell me about your project or opportunity..."
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex items-start space-x-3">
                  <Checkbox id="privacy" required />
                  <label htmlFor="privacy" className="text-sm text-slate-600 leading-relaxed">
                    I agree to the privacy policy and consent to having my information stored and processed.
                  </label>
                </div>

                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={contactMutation.isPending}
                >
                  <Send className="mr-2 h-4 w-4" />
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
