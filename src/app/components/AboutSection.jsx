"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-3 border border-blue-500/30">
          <span className="text-blue-300 font-medium">Python</span>
        </div>
        <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-lg p-3 border border-green-500/30">
          <span className="text-green-300 font-medium">DBMS</span>
        </div>
        <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg p-3 border border-orange-500/30">
          <span className="text-orange-300 font-medium">Rust</span>
        </div>
        <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg p-3 border border-yellow-500/30">
          <span className="text-yellow-300 font-medium">Smart Contracts</span>
        </div>
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-3 border border-purple-500/30">
          <span className="text-purple-300 font-medium">AI</span>
        </div>
        <div className="bg-gradient-to-r from-indigo-500/20 to-blue-500/20 rounded-lg p-3 border border-indigo-500/30">
          <span className="text-indigo-300 font-medium">ML</span>
        </div>
        <div className="bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-lg p-3 border border-teal-500/30">
          <span className="text-teal-300 font-medium">Distributed Systems</span>
        </div>
        <div className="bg-gradient-to-r from-rose-500/20 to-pink-500/20 rounded-lg p-3 border border-rose-500/30">
          <span className="text-rose-300 font-medium">DevOps</span>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="space-y-4">
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <h3 className="text-lg font-semibold text-white">Integral University</h3>
          </div>
          <p className="text-slate-300 ml-6">Lucknow, India</p>
        </div>
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <h3 className="text-lg font-semibold text-white">Kendriya Vidyalaya</h3>
          </div>
          <p className="text-slate-300 ml-6">Patna, India</p>
        </div>
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className="space-y-4">
        <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/30 rounded-xl p-5 border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h4 className="font-medium text-emerald-300">Google</h4>
              <p className="text-slate-300 text-sm">Introduction To Generative AI</p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 rounded-xl p-5 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h4 className="font-medium text-blue-300">IBM</h4>
              <p className="text-slate-300 text-sm">Python For Data Science, AI & Development</p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-purple-900/30 to-violet-900/30 rounded-xl p-5 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h4 className="font-medium text-purple-300">IBM</h4>
              <p className="text-slate-300 text-sm">Generative AI</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="max-w-7xl mx-auto py-16 px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full px-4 py-2 border border-blue-500/20 mb-6">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-blue-300 font-medium">Get to know me</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
        </div>

        {/* Content Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Description */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/30 rounded-2xl p-8 border border-slate-600/30 backdrop-blur-sm">
              <p className="text-lg leading-relaxed text-slate-300">
                Your <span className="text-blue-400 font-semibold">AI/ML Engineer</span> at your service, ready to turn innovative ideas into smart, AI-driven solutions. Expert in <span className="text-purple-400">Python, TensorFlow, PyTorch</span>, and cutting-edge frameworks.
              </p>
              <p className="text-lg leading-relaxed text-slate-300 mt-4">
                From <span className="text-emerald-400">predictive modeling</span> and <span className="text-teal-400">natural language processing</span> to <span className="text-orange-400">computer vision</span>, I handle complex machine learning challenges and integrate AI seamlessly into your products.
              </p>
              <p className="text-lg leading-relaxed text-slate-300 mt-4">
                <span className="text-yellow-400 font-medium">Your vision + my AI expertise = innovative, impactful solutions.</span> Let&apos;s create something revolutionary!
              </p>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="space-y-8">
            {/* Tab Buttons */}
            <div className="flex flex-wrap gap-2 p-2 bg-slate-800/50 rounded-2xl border border-slate-600/30">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                Skills
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                Education
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("certifications")}
                active={tab === "certifications"}
              >
                Certifications
              </TabButton>
            </div>

            {/* Tab Content */}
            <div className="min-h-[400px] bg-gradient-to-br from-slate-800/30 to-slate-700/20 rounded-2xl p-6 border border-slate-600/30 backdrop-blur-sm">
              <div className="opacity-100 transition-opacity duration-300">
                {TAB_DATA.find((t) => t.id === tab).content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;