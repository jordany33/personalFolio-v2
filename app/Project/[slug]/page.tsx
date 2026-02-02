import { config } from "@/lib/config";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

export default async function ProjectPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const project = config.projects.list.find(
    (p) => p.slug === slug
  );

  if (!project) {
    return (
      <div className="container-custom py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Project not found</h1>
        <Link href="/#projects" className="text-primary-500 hover:underline">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="container-custom py-20">
      {/* Back Button */}
      <div className="mb-8 text-left">
        <Link 
          href="/#projects"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Projects
        </Link>
      </div>

      {/* Project Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl tracking-tight mb-4">
          <span className="gradient-text">{project.title}</span>
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full mb-6" />
        <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">{project.description}</p>
        
        {/* Project Links */}
        <div className="flex gap-4 mb-6 justify-center">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-transparent border-2 border-gray-800 text-gray-800 rounded-none font-semibold hover:bg-gray-800 hover:text-white transition-colors inline-flex items-center gap-2"
            >
              <ExternalLink size={18} />
              Live Site
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-transparent border-2 border-gray-800 text-gray-800 rounded-none font-semibold hover:bg-gray-800 hover:text-white transition-colors inline-flex items-center gap-2"
            >
              <Github size={18} />
              GitHub
            </a>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 justify-center">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-primary-500/20 text-primary-800 rounded-full text-sm border border-primary-500/30"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Project Details - Add your detailed content here */}
      <div className="prose max-w-none text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Project Details</h2>
        <p className="text-gray-600 mb-4">
          Add more details about this project here. You can include:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2 inline-block text-left">
          <li>Project overview and goals</li>
          <li>Technical challenges and solutions</li>
          <li>Key features and functionality</li>
          <li>Technologies and tools used</li>
          <li>Lessons learned</li>
        </ul>
      </div>
    </div>
  );
}
