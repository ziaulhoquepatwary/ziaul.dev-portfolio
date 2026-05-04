import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaGithub, FaExternalLinkAlt, FaTh, FaList, FaServer, } from "react-icons/fa";
import { HiOutlineCode } from "react-icons/hi";
import SectionTitle from "../shared/SectionTitle";
import { Link } from "react-router";
import { projects } from "../data/projects-data";

/* ── Type badge color map ── */
const TYPE_COLORS = {
    "MERN Stack": "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    "Next.js": "bg-violet-500/15 text-violet-400 border-violet-500/30",
    "React": "bg-sky-500/15 text-sky-400 border-sky-500/30",
    "JavaScript": "bg-yellow-400/15 text-yellow-400 border-yellow-400/30",
    "Design": "bg-pink-500/15 text-pink-400 border-pink-500/30",
    "Role-Based System": "bg-orange-500/15 text-orange-400 border-orange-500/30",
    "Multi-Role System": "bg-orange-500/15 text-orange-400 border-orange-500/30",
    "CRUD Practice": "bg-gray-400/15 text-gray-400 border-gray-400/30",
    "API Integration": "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
    "User Authentication": "bg-rose-500/15 text-rose-400 border-rose-500/30",
    "Frontend": "bg-indigo-500/15 text-indigo-400 border-indigo-500/30",
    "DOM Manipulation": "bg-amber-500/15 text-amber-400 border-amber-500/30",
    "Animation": "bg-fuchsia-500/15 text-fuchsia-400 border-fuchsia-500/30",
};
const defaultBadge = "bg-gray-700/40 text-gray-400 border-gray-600/40";

const TypeBadge = ({ label }) => (
    <span
        className={`text-[10px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full border ${TYPE_COLORS[label] ?? defaultBadge
            }`}
    >
        {label}
    </span>
);

/* ── GitHub button group ── */
const GithubButtons = ({ clientUrl, serverUrl, size = "sm" }) => {
    const base =
        size === "sm"
            ? "px-3 py-2 text-xs gap-1.5"
            : "px-5 py-3 text-sm gap-2";

    return (
        <div className="flex flex-wrap gap-2">
            {clientUrl && (
                <a
                    href={clientUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${base} rounded-lg bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-cyan-500/60 text-gray-300 hover:text-cyan-300 flex items-center transition-all duration-200`}
                >
                    <FaGithub size={size === "sm" ? 13 : 16} />
                    Client
                </a>
            )}
            {serverUrl && (
                <a
                    href={serverUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${base} rounded-lg bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-cyan-500/60 text-gray-300 hover:text-cyan-300 flex items-center transition-all duration-200`}
                >
                    <FaServer size={size === "sm" ? 12 : 15} />
                    Server
                </a>
            )}
            {!clientUrl && !serverUrl && null}
        </div>
    );
};

/* ── Live button ── */
const LiveButton = ({ href, size = "sm" }) => {
    const base =
        size === "sm"
            ? "px-4 py-2 text-xs gap-1.5"
            : "px-6 py-3 text-sm gap-2";

    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ boxShadow: "0 0 18px rgba(6,182,212,0.45)", scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className={`${base} rounded-lg font-semibold flex items-center bg-gradient-to-r from-cyan-600 to-cyan-400 hover:from-cyan-400 hover:to-cyan-600 text-slate-950 shadow-md shadow-cyan-500/30 transition-all duration-300`}
        >
            Live
            <FaExternalLinkAlt size={size === "sm" ? 11 : 13} />
        </motion.a>
    );
};


const ProjectsWithToggle = ({ showAll = true }) => {
    const [viewMode, setViewMode] = useState("grid");
    const displayedProjects = showAll ? projects : projects.slice(0, 3);

    return (
        <div id="projects" className="py-12 md:py-16 lg:pb-24 rounded-xl">
            {/* Header */}
            <div className="mb-12">
                <SectionTitle title={showAll ? "All Projects" : "Featured Projects"} />

                {/* View Toggle */}
                <div className="flex justify-center gap-3 mt-8">
                    {[
                        { mode: "grid", Icon: FaTh, label: "Grid" },
                        { mode: "list", Icon: FaList, label: "List" },
                    ].map(({ mode, Icon, label }) => (
                        <motion.button
                            key={mode}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setViewMode(mode)}
                            className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 text-sm ${viewMode === mode
                                ? "bg-gradient-to-r from-cyan-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/40"
                                : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white border border-gray-700"
                                }`}
                        >
                            <Icon size={15} />
                            {label} View
                        </motion.button>
                    ))}
                </div>
            </div>

            {/* ── Projects ── */}
            <AnimatePresence mode="wait">

                {/* ════ GRID VIEW ════ */}
                {viewMode === "grid" && (
                    <motion.div
                        key="grid"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
                    >
                        {displayedProjects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.45, delay: index * 0.1 }}
                                className="group flex flex-col bg-gray-900/60 rounded-2xl overflow-hidden border border-gray-700/80 hover:border-cyan-500/60 transition-all duration-400 shadow-lg hover:shadow-cyan-500/10"
                            >
                                {/* Image */}
                                <div className="relative h-52 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />

                                    {/* Gradient overlay always present (subtle) */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />

                                    {/* Type badges — bottom-left of image */}
                                    <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
                                        {project.type.map((t) => (
                                            <TypeBadge key={t} label={t} />
                                        ))}
                                    </div>

                                    {/* Hover overlay with quick-action buttons (lg) */}
                                    <div className="hidden lg:flex absolute inset-0 bg-gray-900/70 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-400 items-center justify-center gap-3">
                                        {project.github_client && (
                                            <motion.a
                                                href={project.github_client}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-800/90 border border-gray-600 hover:border-cyan-500 text-gray-300 hover:text-cyan-300 text-xs font-medium transition-all"
                                            >
                                                <FaGithub size={14} /> Client
                                            </motion.a>
                                        )}
                                        {project.github_server && (
                                            <motion.a
                                                href={project.github_server}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-800/90 border border-gray-600 hover:border-cyan-500 text-gray-300 hover:text-cyan-300 text-xs font-medium transition-all"
                                            >
                                                <FaServer size={13} /> Server
                                            </motion.a>
                                        )}
                                        <motion.a
                                            href={project.live_link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1, boxShadow: "0 0 16px rgba(6,182,212,0.5)" }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold transition-all"
                                        >
                                            <FaExternalLinkAlt size={12} /> Live
                                        </motion.a>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex flex-col flex-1 p-5 gap-3">
                                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug">
                                        {project.name}
                                    </h3>

                                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 flex-1">
                                        {project.description}
                                    </p>

                                    {/* Tech stack */}
                                    <div className="flex flex-wrap gap-1.5 pt-1">
                                        {project.technologies.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="text-[11px] bg-gray-800/70 text-gray-400 px-2.5 py-1 rounded-md border border-gray-700/60"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Mobile / tablet buttons */}
                                    <div className="flex flex-wrap items-center gap-2 pt-2 lg:hidden">
                                        <GithubButtons
                                            clientUrl={project.github_client}
                                            serverUrl={project.github_server}
                                            size="sm"
                                        />
                                        <LiveButton href={project.live_link} size="sm" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}

                {/* ════ LIST VIEW ════ */}
                {viewMode === "list" && (
                    <motion.div
                        key="list"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col gap-14 max-w-6xl mx-auto"
                    >
                        {displayedProjects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                                className={`flex flex-col md:flex-row ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                                    } gap-8 lg:gap-12 items-center group`}
                            >
                                {/* Image */}
                                <div className="flex-1 w-full overflow-hidden rounded-2xl border-2 border-gray-700/80 group-hover:border-cyan-500/60 transition-all duration-400 shadow-xl relative">
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="w-full h-60 md:h-72 object-cover group-hover:scale-[1.03] transition-transform duration-500"
                                    />
                                    {/* Number badge */}
                                    <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-900/80 border border-gray-600 flex items-center justify-center text-gray-400 text-xs font-bold backdrop-blur-sm">
                                        {String(index + 1).padStart(2, "0")}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 space-y-4">
                                    {/* Title row */}
                                    <div className="flex items-start gap-3">
                                        <div className="w-11 h-11 shrink-0 rounded-xl bg-cyan-600/15 border border-cyan-500/20 flex items-center justify-center mt-0.5">
                                            <HiOutlineCode className="text-cyan-400 text-xl" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl md:text-3xl font-extrabold text-white group-hover:text-cyan-300 transition-colors leading-tight">
                                                {project.name}
                                            </h3>
                                            {/* Type badges */}
                                            <div className="flex flex-wrap gap-1.5 mt-2">
                                                {project.type.map((t) => (
                                                    <TypeBadge key={t} label={t} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                        {project.description}
                                    </p>

                                    {/* Tech stack */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="text-xs bg-gray-800 text-gray-300 px-3 py-1.5 rounded-lg border border-gray-700 hover:border-cyan-500/50 hover:text-cyan-300 transition-all duration-200"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action buttons */}
                                    <div className="flex flex-wrap items-center gap-2.5 pt-2">
                                        <GithubButtons
                                            clientUrl={project.github_client}
                                            serverUrl={project.github_server}
                                            size="md"
                                        />
                                        <LiveButton href={project.live_link} size="md" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* View All Button */}
            {!showAll && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-center mt-14"
                >
                    <Link to="/projects">
                        <motion.button
                            whileHover={{
                                boxShadow: "0 0 24px rgba(6,182,212,0.5)",
                                scale: 1.03,
                            }}
                            whileTap={{ scale: 0.96 }}
                            className="px-7 py-3.5 bg-gradient-to-r from-cyan-600 to-cyan-400 hover:from-cyan-400 hover:to-cyan-600 text-slate-950 rounded-xl rounded-tl-3xl rounded-br-3xl font-bold flex items-center gap-2.5 shadow-lg shadow-cyan-500/30 transition-all duration-300 cursor-pointer"
                        >
                            View All Projects
                            <motion.span
                                animate={{ x: [0, 4, 0] }}
                                transition={{ repeat: Infinity, duration: 1.8 }}
                            >
                                <FaArrowRight size={16} />
                            </motion.span>
                        </motion.button>
                    </Link>
                </motion.div>
            )}
        </div>
    );
};

export default ProjectsWithToggle;