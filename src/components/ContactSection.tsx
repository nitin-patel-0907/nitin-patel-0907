import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Briefcase, 
  Sparkles, 
  GitBranch, 
  Globe, 
  Share2, 
  Check, 
  Copy,
  ExternalLink
} from 'lucide-react';
import { PROFILE_INFO } from '../data/profileData';

export const ContactSection: React.FC = () => {
  const [subject, setSubject] = useState('Collaboration / Project Opportunity');
  const [senderName, setSenderName] = useState('');
  const [message, setMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PROFILE_INFO.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Hi Nitin,\n\n${message}\n\nBest regards,\n${senderName}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-20 bg-slate-900/60 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Opportunities & Networking</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            💼 Career Interests & Connect
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400">
            Open to internships, junior developer roles, machine learning research projects, and collaborative initiatives.
          </p>
        </div>

        {/* Career Interests Pills */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
            Specialization & Career Target Domains
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {PROFILE_INFO.careerInterests.map((interest, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-sm font-medium text-slate-200 hover:border-indigo-500/50 hover:text-indigo-300 transition-colors shadow-sm"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>

        {/* Contact Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          {/* Left: Contact Info & Mindset */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-2">🤝 Connect With Me</h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-5 leading-relaxed">
                Whether you have an internship opportunity, a project to collaborate on, or just want to discuss ML algorithms, feel free to reach out.
              </p>

              {/* Direct email display */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 mb-6">
                <div className="flex items-center gap-2.5 min-w-0">
                  <Mail className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                  <span className="text-xs font-mono text-slate-300 truncate">
                    {PROFILE_INFO.email}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex-shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Social Channels List */}
              <div className="space-y-2.5">
                <a
                  href={PROFILE_INFO.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 text-slate-300 hover:text-white transition-all text-xs font-medium"
                >
                  <div className="flex items-center gap-2.5">
                    <GitBranch className="w-4 h-4 text-slate-400" />
                    <span>GitHub Profile</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>

                <a
                  href={PROFILE_INFO.portfolioUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 text-slate-300 hover:text-white transition-all text-xs font-medium"
                >
                  <div className="flex items-center gap-2.5">
                    <Globe className="w-4 h-4 text-indigo-400" />
                    <span>Personal Portfolio</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>

                <a
                  href={PROFILE_INFO.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 text-slate-300 hover:text-white transition-all text-xs font-medium"
                >
                  <div className="flex items-center gap-2.5">
                    <Share2 className="w-4 h-4 text-sky-400" />
                    <span>LinkedIn Network</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>
              </div>
            </div>

            {/* Developer Mindset Card from README */}
            <div className="bg-gradient-to-br from-indigo-950/40 to-slate-900 border border-indigo-500/30 rounded-2xl p-6 text-center shadow-md">
              <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-400 font-semibold block mb-1">
                ⚡ Developer Mindset
              </span>
              <p className="text-sm font-bold text-white mb-2">
                {PROFILE_INFO.mindset.loop}
              </p>
              <p className="text-xs text-indigo-300/80 italic">
                "{PROFILE_INFO.mindset.motto}"
              </p>
            </div>
          </div>

          {/* Right: Interactive Message Composer */}
          <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white mb-1">Send a Message</h3>
            <p className="text-xs text-slate-400 mb-6">
              Compose a note to Nitin. This opens your default email client with your message pre-formatted.
            </p>

            <form onSubmit={handleSendEmail} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Your Name / Organization
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jane Doe (Tech Recruiter / Engineer)"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Hi Nitin, I came across your portfolio and wanted to connect regarding..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all shadow-lg shadow-indigo-600/20 hover:scale-[1.01] active:scale-[0.99]"
              >
                <Send className="w-4 h-4" />
                <span>Launch Email Client</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
