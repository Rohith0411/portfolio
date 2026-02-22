import {
  Code2,
  FileCode,
  Palette,
  Server,
  Globe,
  Smartphone,
  Rocket
} from "lucide-react";

export const skills = [
  // FRONTEND
  { id: 1, name: "React.js", icon: Code2, level: "Expert", category: "Frontend" },
  { id: 2, name: "JavaScript", icon: FileCode, level: "Expert",  category: "Frontend" },
  { id: 3, name: "HTML", icon: FileCode, level: "Expert",  category: "Frontend" },
  { id: 4, name: "CSS", icon: FileCode, level: "Advanced", category: "Frontend" },
  { id: 5, name: "Tailwind CSS", icon: Palette, level: "Expert",  category: "Frontend" },

  // BACKEND
  { id: 6, name: "Node.js", icon: Server, level: "Intermediate",  category: "Backend" },
  { id: 7, name: "Express.js", icon: Server, level: "Intermediate", category: "Backend" },
  { id: 8, name: "MongoDB", icon: Server, level: "Intermediate",  category: "Backend" },
  { id: 9, name: "REST API", icon: Globe, level: "Advanced",  category: "Backend" },

  // TOOLS
  { id: 10, name: "Git & GitHub", icon: Code2, level: "Advanced", category: "Tools" },
  { id: 11, name: "Responsive Design", icon: Smartphone, level: "Expert",  category: "Tools" },
  { id: 12, name: "Vite", icon: Rocket, level: "Advanced",category: "Tools" }
];
