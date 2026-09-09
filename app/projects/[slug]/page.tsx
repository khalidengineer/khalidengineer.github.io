import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectsList } from "@/lib/data";
import { ArrowLeft, ExternalLink, Github, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return projectsList.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const project = projectsList.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} — MD Khalid Case Study`,
    description: project.subtitle,
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projectsList.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-28 sm:pt-36 pb-16 px-4 sm:px-6 w-full">
      <div className="max-w-[1220px] mx-auto flex flex-col gap-8">
        {/* Back Link */}
        <div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-semibold text-text-secondary hover:text-gold-bright transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to all projects</span>
          </Link>
        </div>

        {/* Hero Card */}
        <div className="rounded-[24px] bg-[#11110E]/80 border border-white/[0.08] p-4 sm:p-8 lg:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md relative overflow-hidden">
          {/* Tags & Metadata Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] sm:text-xs font-semibold text-gold-primary bg-gold-primary/[0.08] border border-gold-primary/20 px-2.5 sm:px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2.5 sm:gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-gold-primary hover:bg-gold-bright text-black font-bold text-xs shadow-sm transition-all"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#181813] hover:bg-[#1f1f18] text-text-main border border-white/[0.1] text-xs font-semibold transition-all"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Code</span>
              </a>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-text-main leading-tight mb-4">
            {project.title}
          </h1>

          <p className="text-xs sm:text-base text-text-secondary leading-relaxed mb-8 max-w-3xl">
            {project.subtitle}
          </p>

          {/* Quick Specs Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 p-3 sm:p-4 rounded-xl bg-[#141410] border border-white/[0.06] mb-8">
            <div>
              <div className="text-[10px] sm:text-[11px] text-text-muted">Client</div>
              <div className="text-xs font-bold text-text-main">{project.client}</div>
            </div>
            <div>
              <div className="text-[10px] sm:text-[11px] text-text-muted">Role</div>
              <div className="text-xs font-bold text-text-main">{project.role}</div>
            </div>
            <div>
              <div className="text-[10px] sm:text-[11px] text-text-muted">Year</div>
              <div className="text-xs font-bold text-text-main">{project.year}</div>
            </div>
            <div>
              <div className="text-[10px] sm:text-[11px] text-text-muted">Deliverable</div>
              <div className="text-xs font-bold text-text-main">Web Application</div>
            </div>
          </div>

          {/* Large Hero Showcase Image */}
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl bg-[#090908] mb-10 sm:mb-12">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>

          {/* Metrics Row */}
          {project.metrics && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 mb-10 sm:mb-12">
              {project.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="p-3.5 sm:p-5 rounded-2xl bg-[#141410] border border-white/[0.06] text-center"
                >
                  <div className="text-xl sm:text-3xl font-extrabold text-gold-bright font-mono mb-1">
                    {metric.value}
                  </div>
                  <div className="text-[11px] sm:text-xs text-text-muted">{metric.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Case Study Deep Dive: Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mb-10 sm:mb-12">
            <div className="p-4 sm:p-6 lg:p-8 rounded-2xl bg-[#141410] border border-white/[0.06]">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-red-950/40 border border-red-800/40 text-red-400 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-text-main mb-2 sm:mb-3">The Challenge</h3>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-4 sm:p-6 lg:p-8 rounded-2xl bg-[#141410] border border-white/[0.06]">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gold-primary/10 border border-gold-primary/30 text-gold-primary flex items-center justify-center mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-text-main mb-2 sm:mb-3">The Engineering Solution</h3>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features */}
          {project.keyFeatures && (
            <div className="p-4 sm:p-6 lg:p-8 rounded-2xl bg-[#141410] border border-white/[0.06] mb-10 sm:mb-12">
              <h3 className="text-base sm:text-lg font-bold text-text-main mb-4">Key Architectural Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-secondary">
                    <CheckCircle2 className="w-4 h-4 text-gold-primary shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/[0.08]">
            <div>
              <h4 className="text-base font-bold text-text-main mb-1">
                Have a similar product to build?
              </h4>
              <p className="text-xs text-text-secondary">
                Let&apos;s discuss technical requirements and system architecture.
              </p>
            </div>

            <Link href="/contact">
              <MagneticButton className="px-6 py-2.5 rounded-xl bg-gold-primary hover:bg-gold-bright text-black font-bold text-xs sm:text-sm tracking-wide shadow-[0_0_20px_rgba(244,184,63,0.3)] transition-all">
                <span>Start a Project</span>
              </MagneticButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
