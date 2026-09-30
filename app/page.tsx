import Image from "next/image";
import type { ReactNode } from "react";
import { Briefcase, ChevronsDown, Download, GraduationCap, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import { education, experience, highlights, languages, profile, projects, skills, status } from "@/lib/data";

const chip = "rounded-full border border-edge bg-accent/10 px-3 py-1 text-xs text-slate-200";

function Section({ id, title, sub, children }: { id: string; title: string; sub: string; children: ReactNode }) {
  return (
    <section id={id} className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-14 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-400">{sub}</p>
          <div className="bar" />
        </Reveal>
        {children}
      </div>
    </section>
  );
}

function Timeline({ items }: { items: typeof experience }) {
  return (
    <ol className="ml-2 border-l border-edge">
      {items.map((x, i) => (
        <li key={x.org + x.period} className="relative pb-10 pl-8 last:pb-0">
          <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-ink" />
          <Reveal delay={i * 70}>
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="rounded-full bg-accent/15 px-3 py-1 font-medium text-accent">{x.period}</span>
              {x.place && <span className="inline-flex items-center gap-1 text-slate-400"><MapPin size={12} />{x.place}</span>}
            </div>
            <h4 className="mt-3 text-lg font-semibold text-white">{x.role}</h4>
            <p className="text-slate-400">{x.org}</p>
            {x.points && (
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm marker:text-accent">
                {x.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            )}
            {x.tags && <div className="mt-3 flex flex-wrap gap-2">{x.tags.map((t) => <span key={t} className={chip}>{t}</span>)}</div>}
          </Reveal>
        </li>
      ))}
    </ol>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section id="top" className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-28">
          <div className="grid-bg absolute inset-0" />
          <div className="animate-float absolute -left-24 top-28 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
          <div className="animate-float absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-glow/10 blur-3xl [animation-delay:-4s]" />
          <div className="relative mx-auto w-full max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm text-accent">
              <span className="h-2 w-2 animate-pulse rounded-full bg-glow" /> Open to a PFE from February 2027
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] text-white sm:text-6xl">
              Securing systems, <br className="hidden sm:block" />detecting threats.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
              Hi, I&apos;m {profile.name}, an IT Security &amp; Digital Trust engineering student at ENSIASD. I build and monitor SOC/SIEM environments, analyze network attacks and work on ISO 27001 compliance.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <a href="#projects" className="rounded-lg bg-accent px-6 py-3 font-semibold text-ink transition hover:brightness-110">View My Projects</a>
              <a href={profile.cv} download className="inline-flex items-center gap-2 rounded-lg border border-edge bg-panel px-6 py-3 font-semibold text-white transition hover:border-accent">
                <Download size={18} /> Download CV
              </a>
            </div>
            <div className="mx-auto mt-12 max-w-xl overflow-hidden rounded-xl border border-edge bg-panel/80 text-left shadow-2xl shadow-black/30 backdrop-blur">
              <div className="flex items-center gap-1.5 border-b border-edge px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" /><span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" /><span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                <span className="ml-3 font-mono text-xs text-slate-500">status</span>
              </div>
              <dl className="space-y-1.5 p-4 font-mono text-sm">
                {status.map(([k, v]) => (
                  <div key={k} className="flex gap-3"><dt className="w-16 shrink-0 text-glow">{k}</dt><dd className="text-slate-300">{v}</dd></div>
                ))}
                <div className="pt-1 text-glow">$<span className="caret" /></div>
              </dl>
            </div>
            <a href="#about" aria-label="Scroll to About" className="mt-12 inline-block text-accent"><ChevronsDown size={34} className="animate-bounce" /></a>
          </div>
        </section>

        {/* About */}
        <Section id="about" title="About Me" sub="Cybersecurity engineering student with hands-on SOC, SIEM and network security experience.">
          <div className="grid items-start gap-12 md:grid-cols-[300px_1fr] lg:grid-cols-[340px_1fr]">
            <Reveal className="mx-auto w-full max-w-xs">
              <div className="rounded-2xl bg-gradient-to-br from-accent to-glow p-[2px]">
                <Image src="/photo.jpg" alt={`Portrait of ${profile.name}`} width={1024} height={1280} priority className="h-auto w-full rounded-2xl" />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-lg leading-relaxed text-slate-300">
                I&apos;m an engineering student in IT Security &amp; Digital Trust at ENSIASD, specializing in the cybersecurity of systems and infrastructures. I have practical experience in SOC/SIEM, security monitoring, event analysis, detection, incident response and network security.
              </p>
              <p className="mt-4 leading-relaxed">
                My path started with a DUT in Computer Engineering and led to the engineering cycle at ENSIASD. My projects revolve around Wazuh, Splunk, Snort, threat intelligence and ISO 27001.
              </p>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {highlights.map(({ icon: Icon, title, text }) => (
                  <div key={title} className="flex gap-3">
                    <Icon className="mt-1 shrink-0 text-accent" size={20} />
                    <div><h3 className="font-semibold text-white">{title}</h3><p className="text-sm text-slate-400">{text}</p></div>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-xl border border-accent/30 bg-accent/10 p-5">
                <h3 className="font-semibold text-white">Career objective</h3>
                <p className="mt-1 text-sm text-slate-300">{profile.objective}</p>
              </div>
              <p className="mt-6 flex items-center gap-2 text-slate-400"><MapPin size={16} className="text-accent" /> Based in {profile.location}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-edge bg-panel px-4 py-2 text-sm text-white hover:border-accent"><Linkedin size={16} />LinkedIn</a>
                <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-lg border border-edge bg-panel px-4 py-2 text-sm text-white hover:border-accent"><Mail size={16} />Email</a>
              </div>
            </Reveal>
          </div>
        </Section>

        {/* Experience & Education */}
        <Section id="experience" title="Experience & Education" sub="Internships in cybersecurity and web development, and my academic path.">
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <h3 className="mb-8 flex items-center gap-2 text-xl font-semibold text-white"><Briefcase className="text-accent" size={22} />Internships</h3>
              <Timeline items={experience} />
            </div>
            <div>
              <h3 className="mb-8 flex items-center gap-2 text-xl font-semibold text-white"><GraduationCap className="text-accent" size={24} />Education</h3>
              <Timeline items={education} />
            </div>
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects" title="Featured Projects" sub="Academic projects across security monitoring, intrusion detection, compliance and web development.">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 90} className="h-full">
                <article className="flex h-full flex-col rounded-2xl border border-edge bg-panel p-6 transition hover:-translate-y-1 hover:border-accent/60">
                  <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{p.text}</p>
                  <div className="mt-5 flex flex-wrap gap-2">{p.tags.map((t) => <span key={t} className={chip}>{t}</span>)}</div>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" title="Skills & Technologies" sub="Tools and domains I work with, grouped by area.">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map(({ icon: Icon, title, items }, i) => (
              <Reveal key={title} delay={(i % 4) * 80} className="h-full">
                <div className="h-full rounded-2xl border border-edge bg-panel p-5">
                  <h3 className="flex items-center gap-2 font-semibold text-white"><Icon size={18} className="text-accent" />{title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">{items.map((s) => <span key={s} className={chip}>{s}</span>)}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 flex flex-wrap justify-center gap-4">
            {languages.map((l) => (
              <div key={l.name} className="rounded-xl border border-edge bg-panel px-6 py-3 text-center">
                <p className="font-semibold text-white">{l.name}</p><p className="text-sm text-slate-400">{l.level}</p>
              </div>
            ))}
          </Reveal>
        </Section>

        {/* Contact */}
        <Section id="contact" title="Get In Touch" sub="Looking for a PFE from February 2027 ? Let's talk.">
          <Reveal className="mx-auto max-w-2xl rounded-2xl border border-edge bg-panel p-6 sm:p-8">
            <ul className="space-y-5">
              <li className="flex items-center gap-4"><Mail className="text-accent" /><div><p className="text-sm text-slate-400">Email</p><a className="text-white hover:text-glow break-all" href={`mailto:${profile.email}`}>{profile.email}</a></div></li>
              {profile.phones.map((p) => (
                <li key={p.href} className="flex items-center gap-4"><Phone className="text-accent" /><div><p className="text-sm text-slate-400">Phone ({p.label})</p><a className="text-white hover:text-glow" href={p.href}>{p.display}</a></div></li>
              ))}
              <li className="flex items-center gap-4"><Linkedin className="text-accent" /><div><p className="text-sm text-slate-400">LinkedIn</p><a className="text-white hover:text-glow break-all" href={profile.linkedin} target="_blank" rel="noopener noreferrer">linkedin.com/in/mohamed-ait-lakhdar-810391263</a></div></li>
              <li className="flex items-center gap-4"><MapPin className="text-accent" /><div><p className="text-sm text-slate-400">Location</p><p className="text-white">{profile.location}</p></div></li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`mailto:${profile.email}`} className="rounded-lg bg-accent px-6 py-3 font-semibold text-ink hover:brightness-110">Send an email</a>
              <a href={profile.cv} download className="inline-flex items-center gap-2 rounded-lg border border-edge px-6 py-3 font-semibold text-white hover:border-accent"><Download size={18} />Download CV</a>
            </div>
          </Reveal>
        </Section>
      </main>

      <footer className="border-t border-edge px-5 py-10 text-center text-sm text-slate-500">
        <p className="font-display text-lg font-bold text-white"><span className="text-accent">A</span>it Lakhdar</p>
        <p className="mt-2">{profile.name}, {profile.role}</p>
        <p className="mt-4">&copy; {new Date().getFullYear()} {profile.name}</p>
      </footer>
    </>
  );
}
