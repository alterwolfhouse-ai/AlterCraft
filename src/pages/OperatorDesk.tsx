import type * as React from "react";
import { useEffect, useRef, useState } from "react";
import { createRoot, type Root } from "react-dom/client";
import operatorDeskStyles from "../styles/operator-desk-figma.css?raw";
import {
  LayoutDashboard, UserPlus, Briefcase, Wallet, FileText,
  Shield, AlertTriangle, CheckCircle2, ChevronRight,
  DollarSign, Send, Check, Circle, AlertCircle, Camera,
} from "lucide-react";

type Screen = "dashboard" | "lead" | "job" | "payment" | "report" | "dispute";

type OperatorSession = {
  name: string;
  phone: string;
  email?: string;
  token?: string;
  mode: "server" | "local";
};

const OPERATOR_SESSION_KEY = "altercraft-operator-desk-session";
const OPERATOR_API_BASE_KEY = "altercraft-operator-desk-api-base";

const readOperatorSession = (): OperatorSession | null => {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(OPERATOR_SESSION_KEY);
    return raw ? (JSON.parse(raw) as OperatorSession) : null;
  } catch {
    return null;
  }
};

const writeOperatorSession = (session: OperatorSession | null) => {
  if (typeof window === "undefined") return;
  if (!session) {
    window.localStorage.removeItem(OPERATOR_SESSION_KEY);
    return;
  }
  window.localStorage.setItem(OPERATOR_SESSION_KEY, JSON.stringify(session));
};

const operatorApiBase = () => {
  if (typeof window === "undefined") return "http://localhost:8787";
  return window.localStorage.getItem(OPERATOR_API_BASE_KEY) || "http://localhost:8787";
};

// ─── Atomic components ────────────────────────────────────────────────────────

function Chip({
  label,
  color,
}: {
  label: string;
  color: "amber" | "red" | "green" | "blue" | "gray";
}) {
  const c = {
    amber: "bg-amber-500/15 text-amber-400 border-amber-500/30",
    red: "bg-red-500/15 text-red-400 border-red-500/30",
    green: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    blue: "bg-blue-500/15 text-blue-400 border-blue-500/30",
    gray: "bg-white/5 text-white/40 border-white/10",
  }[color];
  return (
    <span
      className={`inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-['JetBrains_Mono'] font-medium border tracking-wider uppercase ${c}`}
    >
      {label}
    </span>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[9px] font-['JetBrains_Mono'] font-medium tracking-[0.18em] uppercase text-white/25 mb-2 px-0.5">
      {children}
    </div>
  );
}

function Card({
  children,
  className = "",
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <div
      className={`bg-[#131315] border border-[#1f1f23] rounded-[5px] ${onClick ? "cursor-pointer hover:border-white/15 transition-colors active:bg-white/5" : ""} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <div className="text-[9px] font-['JetBrains_Mono'] tracking-[0.15em] uppercase text-white/35 mb-1.5">
        {label}
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-[#0f0f12] border border-[#1f1f23] rounded px-3 py-2.5 text-[13px] font-['JetBrains_Mono'] text-white/75 placeholder-white/18 focus:outline-none focus:border-amber-500/50 transition-colors"
      />
    </div>
  );
}

function TextArea({
  label,
  placeholder,
  rows = 3,
  danger = false,
}: {
  label: string;
  placeholder: string;
  rows?: number;
  danger?: boolean;
}) {
  return (
    <div>
      <div className="text-[9px] font-['JetBrains_Mono'] tracking-[0.15em] uppercase text-white/35 mb-1.5">
        {label}
      </div>
      <textarea
        placeholder={placeholder}
        rows={rows}
        className={`w-full bg-[#0f0f12] border rounded px-3 py-2.5 text-[12px] font-['JetBrains_Mono'] text-white/75 placeholder-white/18 focus:outline-none resize-none transition-colors leading-relaxed ${danger ? "border-red-500/25 focus:border-red-500/50" : "border-[#1f1f23] focus:border-amber-500/50"}`}
      />
    </div>
  );
}

function WarningBanner({ text, variant = "amber" }: { text: string; variant?: "amber" | "red" }) {
  const styles = variant === "red"
    ? "bg-red-500/8 border-red-500/25 text-red-400/90"
    : "bg-amber-500/8 border-amber-500/25 text-amber-400/90";
  const Icon = variant === "red" ? Shield : AlertTriangle;
  return (
    <div className={`flex items-start gap-2.5 border rounded-[5px] px-3 py-2.5 ${styles}`}>
      <Icon className="w-3.5 h-3.5 mt-0.5 shrink-0 text-current" />
      <span className="text-[10px] font-['JetBrains_Mono'] leading-relaxed tracking-wide font-medium">
        {text}
      </span>
    </div>
  );
}

function ScreenHeader({
  brand,
  title,
  sub,
}: {
  brand: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="bg-[#0b0b0d] border-b border-[#1a1a1e] px-4 py-3.5 sticky top-0 z-10">
      <div className="text-[9px] font-['JetBrains_Mono'] tracking-[0.22em] uppercase text-amber-400/60 mb-0.5">
        {brand}
      </div>
      <h1 className="text-[18px] font-['Barlow_Condensed'] font-bold tracking-widest text-white leading-none uppercase">
        {title}
      </h1>
      {sub && (
        <div className="text-[9px] font-['JetBrains_Mono'] text-white/25 tracking-widest uppercase mt-0.5">
          {sub}
        </div>
      )}
    </div>
  );
}

function PrimaryButton({
  children,
  onClick,
  danger = false,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  danger?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full font-['Barlow_Condensed'] font-bold text-[15px] tracking-[0.12em] uppercase py-3.5 rounded-[5px] transition-colors flex items-center justify-center gap-2 ${
        danger
          ? "bg-red-600 hover:bg-red-500 text-white"
          : "bg-amber-500 hover:bg-amber-400 text-black"
      }`}
    >
      {children}
    </button>
  );
}

// ─── Screen 1: Dashboard ─────────────────────────────────────────────────────

function Dashboard({
  setScreen,
  session,
  onSignOut,
}: {
  setScreen: (s: Screen) => void;
  session: OperatorSession;
  onSignOut: () => void;
}) {
  const [checked, setChecked] = useState<number[]>([0, 2]);

  const toggle = (i: number) =>
    setChecked((p) => (p.includes(i) ? p.filter((x) => x !== i) : [...p, i]));

  const checklist = [
    "Labour attendance updated",
    "Material requirement updated",
    "Photos uploaded",
    "Payment follow-up done",
    "Written confirmation sent",
  ];

  const kpis = [
    { label: "Active Jobs", value: "3", sub: "+1 this week", color: "text-white" },
    { label: "Payment Pending", value: "₹2.1L", sub: "2 invoices due", color: "text-amber-400" },
    { label: "Labour Deployed", value: "14", sub: "Across 2 sites", color: "text-white" },
    { label: "Blocked Sites", value: "1", sub: "Devala — cash hold", color: "text-red-400" },
  ];

  const actions = [
    { label: "New Lead", icon: UserPlus, screen: "lead" as Screen },
    { label: "Create Work Order", icon: Briefcase, screen: "job" as Screen },
    { label: "Add Site Report", icon: FileText, screen: "report" as Screen },
    { label: "Log Payment", icon: DollarSign, screen: "payment" as Screen },
  ];

  const jobs = [
    {
      name: "Empro Motor Office",
      service: "Full Execution Desk",
      stage: "Site Execution",
      gate: "Gate Cleared",
      gateColor: "green" as const,
      next: "QC Inspection — 20 Jun",
      risk: "LOW",
      riskColor: "green" as const,
      value: "₹4,20,000",
    },
    {
      name: "Devala Site",
      service: "Site Control Desk",
      stage: "Material Procurement",
      gate: "Advance Pending",
      gateColor: "red" as const,
      next: "Collect 30% advance — BLOCKED",
      risk: "HIGH",
      riskColor: "red" as const,
      value: "₹1,85,000",
    },
    {
      name: "Current Shop Production",
      service: "Production Desk",
      stage: "Production",
      gate: "50% Received",
      gateColor: "amber" as const,
      next: "Submit milestone invoice",
      risk: "MED",
      riskColor: "amber" as const,
      value: "₹92,500",
    },
  ];

  return (
    <div className="flex flex-col pb-6">
      {/* Header */}
      <div className="bg-[#0b0b0d] border-b border-[#1a1a1e] px-4 py-3.5 sticky top-0 z-10">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-2.5 min-w-0">
            <span className="w-10 h-10 rounded-[8px] bg-[#f8f4ee] border border-amber-500/25 p-1.5 shrink-0 shadow-[0_10px_26px_rgba(0,0,0,0.28)]">
              <img src="/altercraft-logo-mark.png" alt="" className="w-full h-full object-contain" />
            </span>
            <div className="min-w-0">
              <div className="text-[9px] font-['JetBrains_Mono'] tracking-[0.22em] uppercase text-amber-400/60 mb-0.5">
                AlterCraft
              </div>
              <h1 className="text-[18px] font-['Barlow_Condensed'] font-bold tracking-widest text-white leading-none uppercase">
                Contractor Desk
              </h1>
              <div className="text-[9px] font-['JetBrains_Mono'] text-white/25 tracking-widest uppercase mt-0.5">
                Powered by AlterLabs
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-[9px] font-['JetBrains_Mono'] text-white/25 uppercase tracking-wider">
              18 Jun 2026
            </div>
            <div className="flex items-center gap-1.5 justify-end mt-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[9px] font-['JetBrains_Mono'] text-emerald-400 tracking-wider">ACTIVE</span>
            </div>
            <button
              type="button"
              onClick={onSignOut}
              className="text-[9px] font-['JetBrains_Mono'] text-white/35 tracking-wider uppercase mt-2"
            >
              {session.name || "Operator"} · Sign out
            </button>
          </div>
        </div>
      </div>

      <div className="px-4 pt-4 flex flex-col gap-4">
        {/* KPIs */}
        <div className="grid grid-cols-2 gap-2">
          {kpis.map((k) => (
            <Card key={k.label} className="p-3">
              <div className="text-[9px] font-['JetBrains_Mono'] tracking-[0.12em] uppercase text-white/30 mb-2">
                {k.label}
              </div>
              <div className={`text-[26px] font-['Barlow_Condensed'] font-bold leading-none ${k.color}`}>
                {k.value}
              </div>
              <div className="text-[10px] font-['JetBrains_Mono'] text-white/25 mt-1.5">{k.sub}</div>
            </Card>
          ))}
        </div>

        {/* Payment Gate Warning */}
        <WarningBanner text="NO WORK STARTS WITHOUT PAYMENT GATE" />

        {/* Quick Actions */}
        <div>
          <SectionLabel>Quick Actions</SectionLabel>
          <div className="grid grid-cols-2 gap-2">
            {actions.map((a) => (
              <button
                key={a.label}
                onClick={() => setScreen(a.screen)}
                className="flex items-center gap-2.5 bg-[#131315] border border-[#1f1f23] hover:border-amber-500/35 hover:bg-amber-500/5 rounded-[5px] px-3 py-3 transition-colors active:scale-95 text-left"
              >
                <a.icon className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-[11px] font-['JetBrains_Mono'] text-white/60 leading-tight">
                  {a.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Jobs */}
        <div>
          <SectionLabel>Active Jobs — 3 Running</SectionLabel>
          <div className="flex flex-col gap-2">
            {jobs.map((job) => (
              <Card key={job.name} onClick={() => setScreen("job")} className="p-3">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="text-[14px] font-['Barlow_Condensed'] font-bold text-white tracking-wider leading-none">
                      {job.name.toUpperCase()}
                    </div>
                    <div className="text-[10px] font-['JetBrains_Mono'] text-white/30 mt-1">
                      {job.service}
                    </div>
                  </div>
                  <span className="text-[12px] font-['JetBrains_Mono'] font-medium text-white/45 ml-2 shrink-0">
                    {job.value}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-2.5">
                  <Chip label={job.stage} color="blue" />
                  <Chip label={job.gate} color={job.gateColor} />
                  <Chip label={`RISK ${job.risk}`} color={job.riskColor} />
                </div>
                <div className="flex items-center gap-1.5 border-t border-[#1a1a1e] pt-2">
                  <ChevronRight className="w-3 h-3 text-amber-400/70 shrink-0" />
                  <span className="text-[10px] font-['JetBrains_Mono'] text-amber-400/70 leading-tight">
                    {job.next}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Dispute Alert */}
        <button
          onClick={() => setScreen("dispute")}
          className="flex items-center gap-3 bg-red-500/8 border border-red-500/25 hover:border-red-500/45 rounded-[5px] px-3 py-2.5 transition-colors w-full text-left"
        >
          <Shield className="w-4 h-4 text-red-400 shrink-0" />
          <div className="flex-1">
            <div className="text-[10px] font-['JetBrains_Mono'] font-medium text-red-400 tracking-wider">
              ACTIVE DISPUTE — Devala Site
            </div>
            <div className="text-[10px] font-['JetBrains_Mono'] text-white/30 mt-0.5">
              ₹68,000 at risk · Open dispute file →
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-red-400/50" />
        </button>

        {/* Daily Checklist */}
        <div>
          <SectionLabel>
            Daily Checklist — {checked.length}/{checklist.length} Done
          </SectionLabel>
          <Card>
            {checklist.map((item, i) => (
              <button
                key={item}
                onClick={() => toggle(i)}
                className="flex items-center gap-3 w-full px-3 py-2.5 border-b border-[#191919] last:border-0 hover:bg-white/2 transition-colors text-left"
              >
                <div
                  className={`w-3.5 h-3.5 rounded-sm border shrink-0 flex items-center justify-center transition-colors ${
                    checked.includes(i)
                      ? "bg-emerald-500 border-emerald-500"
                      : "border-white/20"
                  }`}
                >
                  {checked.includes(i) && (
                    <Check className="w-2.5 h-2.5 text-black" strokeWidth={3} />
                  )}
                </div>
                <span
                  className={`text-[11px] font-['JetBrains_Mono'] flex-1 ${
                    checked.includes(i)
                      ? "text-white/25 line-through"
                      : "text-white/60"
                  }`}
                >
                  {item}
                </span>
                {checked.includes(i) ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                ) : (
                  <Circle className="w-3.5 h-3.5 text-white/12 shrink-0" />
                )}
              </button>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
}

// ─── Screen 2: New Contractor Lead ───────────────────────────────────────────

function NewLead() {
  const [services, setServices] = useState<string[]>(["Full Execution Desk"]);
  const [leadStatus, setLeadStatus] = useState("Hot Lead");
  const [labour, setLabour] = useState("Yes");
  const [drawing, setDrawing] = useState("No");

  const allServices = [
    "Material Desk",
    "Labour Desk",
    "Production Desk",
    "Site Control Desk",
    "Full Execution Desk",
  ];
  const statuses = ["Hot Lead", "Warm", "Cold", "Follow-Up", "Converted"];

  const toggleService = (s: string) =>
    setServices((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]));

  return (
    <div className="flex flex-col pb-8">
      <ScreenHeader brand="AlterCraft · New Lead" title="New Contractor Lead" />

      <div className="px-4 pt-4 flex flex-col gap-5">
        {/* Service Selector */}
        <div>
          <SectionLabel>Select Service Desk</SectionLabel>
          <div className="flex flex-col gap-1.5">
            {allServices.map((s) => {
              const active = services.includes(s);
              return (
                <button
                  key={s}
                  onClick={() => toggleService(s)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-[5px] border text-left transition-colors ${
                    active
                      ? "bg-amber-500/10 border-amber-500/40"
                      : "bg-[#131315] border-[#1f1f23] hover:border-white/15"
                  }`}
                >
                  <div
                    className={`w-3.5 h-3.5 rounded-sm border shrink-0 flex items-center justify-center transition-colors ${
                      active ? "bg-amber-400 border-amber-400" : "border-white/25"
                    }`}
                  >
                    {active && (
                      <Check className="w-2.5 h-2.5 text-black" strokeWidth={3} />
                    )}
                  </div>
                  <span
                    className={`text-[12px] font-['JetBrains_Mono'] ${active ? "text-amber-400" : "text-white/50"}`}
                  >
                    {s}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Lead Status */}
        <div>
          <SectionLabel>Lead Status</SectionLabel>
          <div className="flex gap-1.5 flex-wrap">
            {statuses.map((s) => (
              <button
                key={s}
                onClick={() => setLeadStatus(s)}
                className={`px-2.5 py-1 rounded text-[10px] font-['JetBrains_Mono'] font-medium border tracking-wider uppercase transition-colors ${
                  leadStatus === s
                    ? "bg-amber-500/15 border-amber-500/40 text-amber-400"
                    : "bg-[#131315] border-[#1f1f23] text-white/30 hover:border-white/20"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <SectionLabel>Contact & Site Info</SectionLabel>
          <div className="flex flex-col gap-3">
            <Field label="Contractor / Client Name" placeholder="e.g. Rajan Mehta" />
            <Field label="Phone Number" placeholder="+91 98XXXXXXXX" type="tel" />
            <Field label="Site Location" placeholder="Sector 12, Navi Mumbai" />
            <Field label="Lead Source" placeholder="WhatsApp / Referral / Walk-in" />
          </div>
        </div>

        {/* Project Details */}
        <div>
          <SectionLabel>Project Details</SectionLabel>
          <div className="flex flex-col gap-3">
            <Field label="Work Type" placeholder="Flooring / False Ceiling / Full Interior" />
            <Field label="Approximate Budget" placeholder="₹ 0,00,000" />
            <Field label="Timeline" placeholder="Start: Jul 2026 · Duration: 45 days" />
            <Field label="Material Preference" placeholder="Premium / Mid-range / Client source" />
          </div>
        </div>

        {/* Labour & Docs */}
        <div>
          <SectionLabel>Labour & Documentation</SectionLabel>
          <div className="flex flex-col gap-3">
            <div>
              <div className="text-[9px] font-['JetBrains_Mono'] tracking-[0.15em] uppercase text-white/35 mb-1.5">
                Labour Required
              </div>
              <div className="flex gap-2">
                {["Yes", "No", "TBD"].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setLabour(opt)}
                    className={`flex-1 py-2 rounded-[5px] border text-[11px] font-['JetBrains_Mono'] transition-colors ${
                      labour === opt
                        ? "bg-amber-500/12 border-amber-500/40 text-amber-400"
                        : "bg-[#131315] border-[#1f1f23] text-white/35 hover:border-white/20"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[9px] font-['JetBrains_Mono'] tracking-[0.15em] uppercase text-white/35 mb-1.5">
                Drawing / Measurement Available
              </div>
              <div className="flex gap-2">
                {["Yes", "No", "Partial"].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setDrawing(opt)}
                    className={`flex-1 py-2 rounded-[5px] border text-[11px] font-['JetBrains_Mono'] transition-colors ${
                      drawing === opt
                        ? "bg-amber-500/12 border-amber-500/40 text-amber-400"
                        : "bg-[#131315] border-[#1f1f23] text-white/35 hover:border-white/20"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Notes */}
        <TextArea
          label="Notes"
          placeholder="Client expectations, sourcing notes, site access details..."
          rows={3}
        />

        <PrimaryButton>Create Lead</PrimaryButton>
      </div>
    </div>
  );
}

// ─── Screen 3: Job / Site Detail ─────────────────────────────────────────────

function JobDetail({ setScreen }: { setScreen: (s: Screen) => void }) {
  const stages = [
    "Lead", "BOQ", "Quotation", "Advance", "Work Order",
    "Material", "Production", "Site Execution", "QC", "Handover",
    "Final Payment", "Closed",
  ];
  const current = 7;

  const meta = [
    { label: "Client", value: "Empro Industries Pvt Ltd" },
    { label: "Service Type", value: "Full Execution Desk" },
    { label: "Job Owner", value: "Arjun Verma — Site Lead" },
    { label: "Deadline", value: "30 Jun 2026" },
    { label: "Blocker", value: "None" },
    { label: "Written Confirmation", value: "Signed · 10 Jun 2026", accent: "green" },
    { label: "Photos / Proof", value: "12 uploaded · Day 8", accent: "green" },
    { label: "Next Action", value: "QC Inspection — 20 Jun 2026", accent: "amber" },
  ];

  return (
    <div className="flex flex-col pb-8">
      <div className="bg-[#0b0b0d] border-b border-[#1a1a1e] px-4 py-3.5 sticky top-0 z-10">
        <div className="text-[9px] font-['JetBrains_Mono'] tracking-[0.22em] uppercase text-amber-400/60 mb-0.5">
          AlterCraft · Job Detail
        </div>
        <h1 className="text-[18px] font-['Barlow_Condensed'] font-bold tracking-widest text-white leading-none uppercase">
          Empro Motor Office
        </h1>
        <div className="flex gap-1.5 mt-2">
          <Chip label="Site Execution" color="amber" />
          <Chip label="Full Execution Desk" color="blue" />
          <Chip label="Risk: Low" color="green" />
        </div>
      </div>

      <div className="px-4 pt-4 flex flex-col gap-4">
        {/* Financial summary */}
        <div>
          <SectionLabel>Financial Summary</SectionLabel>
          <Card className="p-3">
            <div className="grid grid-cols-3 gap-3 mb-3">
              {[
                { label: "Total Value", value: "₹4,20,000", color: "text-white" },
                { label: "Advance Rcvd", value: "₹1,26,000", color: "text-emerald-400" },
                { label: "Pending", value: "₹2,94,000", color: "text-amber-400" },
              ].map((f) => (
                <div key={f.label}>
                  <div className="text-[9px] font-['JetBrains_Mono'] text-white/25 uppercase tracking-wider mb-1">
                    {f.label}
                  </div>
                  <div className={`text-[15px] font-['Barlow_Condensed'] font-bold ${f.color}`}>
                    {f.value}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-1 h-1.5 bg-[#1f1f23] rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full" style={{ width: "30%" }} />
              </div>
              <span className="text-[9px] font-['JetBrains_Mono'] text-white/30 whitespace-nowrap">
                30% RECEIVED
              </span>
            </div>
          </Card>
        </div>

        {/* Payment Gate */}
        <div className="flex items-center gap-2.5 bg-emerald-500/8 border border-emerald-500/25 rounded-[5px] px-3 py-2.5">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <div>
            <div className="text-[10px] font-['JetBrains_Mono'] font-medium text-emerald-400 tracking-wider">
              PAYMENT GATE CLEARED
            </div>
            <div className="text-[9px] font-['JetBrains_Mono'] text-emerald-400/50 mt-0.5">
              Work authorized — all deployments active
            </div>
          </div>
        </div>

        {/* Meta table */}
        <div>
          <SectionLabel>Job Details</SectionLabel>
          <Card>
            {meta.map((row) => (
              <div
                key={row.label}
                className="flex items-start justify-between px-3 py-2.5 border-b border-[#191919] last:border-0"
              >
                <span className="text-[10px] font-['JetBrains_Mono'] text-white/30">
                  {row.label}
                </span>
                <span
                  className={`text-[11px] font-['JetBrains_Mono'] font-medium text-right ml-3 ${
                    row.accent === "green"
                      ? "text-emerald-400"
                      : row.accent === "amber"
                      ? "text-amber-400"
                      : "text-white/65"
                  }`}
                >
                  {row.value}
                </span>
              </div>
            ))}
          </Card>
        </div>

        {/* Timeline */}
        <div>
          <SectionLabel>Project Timeline</SectionLabel>
          <Card className="p-3">
            <div className="flex flex-wrap gap-x-0 gap-y-1.5">
              {stages.map((stage, i) => (
                <div key={stage} className="flex items-center">
                  <span
                    className={`text-[10px] font-['JetBrains_Mono'] px-1.5 py-0.5 rounded transition-colors ${
                      i < current
                        ? "text-white/20 line-through"
                        : i === current
                        ? "bg-amber-500/20 text-amber-400 border border-amber-500/40 font-medium"
                        : "text-white/20"
                    }`}
                  >
                    {stage}
                  </span>
                  {i < stages.length - 1 && (
                    <span className="text-white/12 text-[10px] px-0.5">›</span>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setScreen("report")}
            className="flex-1 bg-[#131315] border border-[#1f1f23] hover:border-white/20 text-white/70 font-['Barlow_Condensed'] font-semibold text-[13px] tracking-wide uppercase py-3.5 rounded-[5px] transition-colors"
          >
            Add Site Report
          </button>
          <button
            onClick={() => setScreen("payment")}
            className="flex-1 bg-amber-500/12 border border-amber-500/35 hover:bg-amber-500/20 text-amber-400 font-['Barlow_Condensed'] font-semibold text-[13px] tracking-wide uppercase py-3.5 rounded-[5px] transition-colors"
          >
            Log Payment
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Screen 4: Payment Gate + Cash Allocation ────────────────────────────────

function PaymentGate() {
  const buckets = [
    { label: "Material", pct: 35, amount: "₹73,500", color: "bg-blue-500" },
    { label: "Labour", pct: 20, amount: "₹42,000", color: "bg-amber-500" },
    { label: "Transport", pct: 5, amount: "₹10,500", color: "bg-purple-500" },
    { label: "Tools", pct: 5, amount: "₹10,500", color: "bg-cyan-500" },
    { label: "Rent", pct: 8, amount: "₹16,800", color: "bg-orange-500" },
    { label: "EMI", pct: 7, amount: "₹14,700", color: "bg-pink-500" },
    { label: "Personal Survival", pct: 5, amount: "₹10,500", color: "bg-red-500" },
    { label: "Business Reserve", pct: 8, amount: "₹16,800", color: "bg-emerald-500" },
    { label: "Profit", pct: 5, amount: "₹10,500", color: "bg-green-400" },
    { label: "Debt Repayment", pct: 2, amount: "₹4,200", color: "bg-slate-400" },
  ];

  const gateRules = [
    {
      desk: "Material Desk",
      rule: "100% material cost + sourcing fee — collected before procurement",
      chip: "100% UPFRONT" as const,
    },
    {
      desk: "Labour Desk",
      rule: "1–3 days labour advance per deployment cycle",
      chip: "ROLLING ADV" as const,
    },
    {
      desk: "Production Desk",
      rule: "50% + 30% + 15% + 5% milestone gates",
      chip: "4 MILESTONES" as const,
    },
    {
      desk: "Site Control Desk",
      rule: "Weekly or monthly advance per signed agreement",
      chip: "PERIODIC" as const,
    },
    {
      desk: "Full Execution Desk",
      rule: "Custom milestone payment schedule per BOQ",
      chip: "CUSTOM" as const,
    },
  ];

  return (
    <div className="flex flex-col pb-8">
      <ScreenHeader brand="AlterCraft · Cash" title="Payment Gate + Cash" />

      <div className="px-4 pt-4 flex flex-col gap-4">
        {/* Incoming cash card */}
        <Card className="p-4">
          <div className="text-[9px] font-['JetBrains_Mono'] text-white/25 uppercase tracking-widest mb-2 text-center">
            Incoming Cash — Devala Site Advance
          </div>
          <div className="text-[32px] font-['Barlow_Condensed'] font-bold text-white text-center leading-none">
            ₹2,10,000
          </div>
          <div className="text-[10px] font-['JetBrains_Mono'] text-amber-400/60 mt-1.5 text-center">
            Received · 18 Jun 2026 · Assignment pending
          </div>
        </Card>

        <WarningBanner text="INCOMING CASH IS OXYGEN, NOT FREEDOM. ASSIGN IT BEFORE SPENDING." />

        {/* Cash Allocation */}
        <div>
          <SectionLabel>Cash Allocation Buckets</SectionLabel>
          <Card className="p-3">
            {/* Stacked bar */}
            <div className="flex h-2 rounded-full overflow-hidden mb-3.5">
              {buckets.map((b) => (
                <div
                  key={b.label}
                  className={`${b.color} opacity-85`}
                  style={{ width: `${b.pct}%` }}
                />
              ))}
            </div>
            <div className="flex flex-col divide-y divide-[#191919]">
              {buckets.map((b) => (
                <div key={b.label} className="flex items-center gap-2.5 py-2">
                  <div className={`w-2 h-2 rounded-full ${b.color} shrink-0`} />
                  <span className="text-[11px] font-['JetBrains_Mono'] text-white/55 flex-1">
                    {b.label}
                  </span>
                  <span className="text-[10px] font-['JetBrains_Mono'] text-white/25 w-7 text-right">
                    {b.pct}%
                  </span>
                  <span className="text-[11px] font-['JetBrains_Mono'] font-medium text-white/70 w-16 text-right">
                    {b.amount}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Gate Rules */}
        <div>
          <SectionLabel>Payment Gate Rules by Desk</SectionLabel>
          <div className="flex flex-col gap-2">
            {gateRules.map((r) => (
              <Card key={r.desk} className="px-3 py-3">
                <div className="flex items-center gap-2 mb-1">
                  <div className="text-[12px] font-['Barlow_Condensed'] font-bold text-amber-400 tracking-widest uppercase">
                    {r.desk}
                  </div>
                  <Chip label={r.chip} color="gray" />
                </div>
                <div className="text-[11px] font-['JetBrains_Mono'] text-white/45 leading-relaxed">
                  {r.rule}
                </div>
              </Card>
            ))}
          </div>
        </div>

        <PrimaryButton>
          <DollarSign className="w-4 h-4" />
          Log Payment
        </PrimaryButton>
      </div>
    </div>
  );
}

// ─── Screen 5: Daily Site Report ─────────────────────────────────────────────

function SiteReport({ setScreen }: { setScreen: (s: Screen) => void }) {
  const [photosTaken, setPhotosTaken] = useState(true);
  const [updateSent, setUpdateSent] = useState(false);

  return (
    <div className="flex flex-col pb-8">
      <div className="bg-[#0b0b0d] border-b border-[#1a1a1e] px-4 py-3.5 sticky top-0 z-10">
        <div className="text-[9px] font-['JetBrains_Mono'] tracking-[0.22em] uppercase text-amber-400/60 mb-0.5">
          AlterCraft · Reports
        </div>
        <h1 className="text-[18px] font-['Barlow_Condensed'] font-bold tracking-widest text-white leading-none uppercase">
          Daily Site Report
        </h1>
        <button
          onClick={() => setScreen("dispute")}
          className="mt-2 text-[10px] font-['JetBrains_Mono'] text-red-400/70 hover:text-red-400 transition-colors flex items-center gap-1"
        >
          <Shield className="w-3 h-3" />
          Open Dispute Protection File →
        </button>
      </div>

      <div className="px-4 pt-4 flex flex-col gap-4">
        {/* Metadata */}
        <div>
          <SectionLabel>Report Metadata</SectionLabel>
          <div className="flex flex-col gap-3">
            <Field label="Site Name" placeholder="Empro Motor Office" />
            <div className="grid grid-cols-2 gap-2">
              <Field label="Date" placeholder="18 Jun 2026" />
              <Field label="Labour Present" placeholder="8 of 14" />
            </div>
          </div>
        </div>

        {/* Work Summary */}
        <div>
          <SectionLabel>Work Summary</SectionLabel>
          <div className="flex flex-col gap-3">
            <TextArea
              label="Work Completed Today"
              placeholder="False ceiling grid complete — Bay A & B. Flooring tiles laid — 60% west wing."
              rows={3}
            />
            <TextArea
              label="Pending Work"
              placeholder="East wing flooring, electrical first fix — est. 2 days remaining"
              rows={2}
            />
          </div>
        </div>

        {/* Material */}
        <div>
          <SectionLabel>Material Status</SectionLabel>
          <div className="flex flex-col gap-3">
            <Field label="Material Used Today" placeholder="120 tiles 600×600, 8 bags cement" />
            <Field label="Material Required Tomorrow" placeholder="60 tiles, conduit 25mm × 50m" />
          </div>
        </div>

        {/* Issues */}
        <TextArea
          label="Issues / Blockers"
          placeholder="Log site issues, delays, material shortage, labour absences, client instructions..."
          rows={2}
          danger
        />

        {/* Proof & Communication */}
        <div>
          <SectionLabel>Proof & Communication</SectionLabel>
          <Card>
            {[
              {
                label: "Photos Taken",
                sub: photosTaken ? "12 photos ready to upload" : "Required before submit",
                value: photosTaken,
                set: setPhotosTaken,
                icon: Camera,
              },
              {
                label: "Update Sent to Client",
                sub: updateSent ? "WhatsApp sent · 6:15 PM" : "No verbal — written only",
                value: updateSent,
                set: setUpdateSent,
                icon: Send,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 px-3 py-3 border-b border-[#191919] last:border-0"
              >
                <button
                  onClick={() => item.set(!item.value)}
                  className="relative shrink-0 transition-colors"
                  style={{ width: 40, height: 22 }}
                >
                  <div
                    className={`absolute inset-0 rounded-full border transition-colors ${
                      item.value
                        ? "bg-emerald-500 border-emerald-500"
                        : "bg-transparent border-white/20"
                    }`}
                  />
                  <div
                    className={`absolute top-0.5 w-4 h-4 rounded-full transition-all ${
                      item.value ? "left-5 bg-white" : "left-0.5 bg-white/30"
                    }`}
                  />
                </button>
                <item.icon className="w-3.5 h-3.5 text-white/25 shrink-0" />
                <div className="flex-1">
                  <div className="text-[11px] font-['JetBrains_Mono'] text-white/65">
                    {item.label}
                  </div>
                  <div className="text-[10px] font-['JetBrains_Mono'] text-white/25 mt-0.5">
                    {item.sub}
                  </div>
                </div>
                {item.value ? (
                  <Chip label="Done" color="green" />
                ) : (
                  <Chip label="Pending" color="red" />
                )}
              </div>
            ))}
          </Card>
        </div>

        <Field
          label="Next Action"
          placeholder="Electrical supervisor on-site — 7 AM sharp"
        />

        <PrimaryButton>
          <Send className="w-4 h-4" />
          Submit Site Report
        </PrimaryButton>
      </div>
    </div>
  );
}

// ─── Screen 6: Dispute Protection File ───────────────────────────────────────

function DisputeProtection() {
  const evidence = [
    { item: "Signed Work Order", secured: true },
    { item: "Payment Invoice #14", secured: true },
    { item: "WhatsApp Chat Export (148 msgs)", secured: true },
    { item: "Site Photos — Day 1–12", secured: true },
    { item: "Bank Transfer Proof", secured: true },
    { item: "Written Confirmation Email", secured: false },
    { item: "Witness Statement", secured: false },
  ];

  const secured = evidence.filter((e) => e.secured).length;

  const disputeMeta = [
    { label: "Dispute Name", value: "Devala Site — Payment Default" },
    { label: "Related Job", value: "Devala Warehouse Project" },
    { label: "Party Involved", value: "Devala Constructions Pvt Ltd" },
    { label: "Amount at Risk", value: "₹68,000", accent: "red" },
    { label: "Current Status", value: "Negotiation Stage", accent: "amber" },
    { label: "Settlement Offered", value: "₹50,000 partial — pending", accent: "amber" },
    { label: "Deadline", value: "25 Jun 2026", accent: "red" },
  ];

  return (
    <div className="flex flex-col pb-8">
      <div className="bg-[#0b0b0d] border-b border-[#1a1a1e] px-4 py-3.5 sticky top-0 z-10">
        <div className="text-[9px] font-['JetBrains_Mono'] tracking-[0.22em] uppercase text-red-400/60 mb-0.5">
          AlterCraft · Legal
        </div>
        <h1 className="text-[18px] font-['Barlow_Condensed'] font-bold tracking-widest text-white leading-none uppercase">
          Dispute Protection File
        </h1>
        <div className="flex gap-1.5 mt-2">
          <Chip label="Active Dispute" color="red" />
          <Chip label="Negotiation" color="amber" />
        </div>
      </div>

      <div className="px-4 pt-4 flex flex-col gap-4">
        {/* Doctrine */}
        <div className="flex items-start gap-2.5 bg-red-500/8 border border-red-500/25 rounded-[5px] px-3 py-3">
          <Shield className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
          <div>
            <div className="text-[9px] font-['JetBrains_Mono'] text-red-400/50 uppercase tracking-widest mb-1">
              Doctrine
            </div>
            <div className="text-[11px] font-['JetBrains_Mono'] text-red-300/85 leading-relaxed font-medium">
              NO EMOTIONAL FIGHT. EVIDENCE FIRST. SETTLEMENT FIRST. LAWFUL ESCALATION ONLY.
            </div>
          </div>
        </div>

        {/* Dispute Details */}
        <div>
          <SectionLabel>Dispute Details</SectionLabel>
          <Card>
            {disputeMeta.map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between px-3 py-2.5 border-b border-[#191919] last:border-0"
              >
                <span className="text-[10px] font-['JetBrains_Mono'] text-white/28">
                  {row.label}
                </span>
                <span
                  className={`text-[11px] font-['JetBrains_Mono'] font-medium text-right ml-3 ${
                    row.accent === "red"
                      ? "text-red-400"
                      : row.accent === "amber"
                      ? "text-amber-400"
                      : "text-white/65"
                  }`}
                >
                  {row.value}
                </span>
              </div>
            ))}
          </Card>
        </div>

        {/* Evidence Tracker */}
        <div>
          <SectionLabel>
            Evidence Tracker — {secured}/{evidence.length} Secured
          </SectionLabel>
          <div className="mb-2">
            <div className="h-1 bg-[#1f1f23] rounded-full overflow-hidden">
              <div
                className="h-full bg-emerald-500 rounded-full transition-all"
                style={{ width: `${(secured / evidence.length) * 100}%` }}
              />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            {evidence.map((ev) => (
              <div
                key={ev.item}
                className="flex items-center gap-2.5 px-3 py-2.5 bg-[#131315] border border-[#1f1f23] rounded-[5px]"
              >
                <div
                  className={`w-3.5 h-3.5 rounded-full border shrink-0 flex items-center justify-center ${
                    ev.secured ? "bg-emerald-500 border-emerald-500" : "border-white/20"
                  }`}
                >
                  {ev.secured && (
                    <Check className="w-2 h-2 text-black" strokeWidth={3} />
                  )}
                </div>
                <span
                  className={`text-[11px] font-['JetBrains_Mono'] flex-1 ${
                    ev.secured ? "text-white/65" : "text-white/28"
                  }`}
                >
                  {ev.item}
                </span>
                {ev.secured ? (
                  <Chip label="Secured" color="green" />
                ) : (
                  <Chip label="Missing" color="red" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Escalation */}
        <div>
          <SectionLabel>Next Lawful Action</SectionLabel>
          <Card className="p-3 border-red-500/18 bg-red-500/5">
            <div className="text-[9px] font-['JetBrains_Mono'] text-red-400/50 uppercase tracking-widest mb-1">
              Escalation Path
            </div>
            <div className="text-[12px] font-['JetBrains_Mono'] text-red-300 leading-relaxed">
              Send legal notice via advocate — 25 Jun 2026 if settlement not reached
            </div>
            <div className="text-[10px] font-['JetBrains_Mono'] text-white/28 mt-1.5">
              Consumer Forum filing ready as fallback. No verbal threats.
            </div>
          </Card>
        </div>

        <div className="flex gap-2">
          <button className="flex-1 bg-[#131315] border border-[#1f1f23] hover:border-white/20 text-white/65 font-['Barlow_Condensed'] font-semibold text-[13px] tracking-widest uppercase py-3.5 rounded-[5px] transition-colors">
            Add Evidence
          </button>
          <button className="flex-1 bg-red-600/12 border border-red-500/30 hover:bg-red-600/22 text-red-400 font-['Barlow_Condensed'] font-semibold text-[13px] tracking-widest uppercase py-3.5 rounded-[5px] transition-colors">
            Escalate
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Bottom Navigation ────────────────────────────────────────────────────────

function BottomNav({
  screen,
  setScreen,
}: {
  screen: Screen;
  setScreen: (s: Screen) => void;
}) {
  const tabs = [
    { id: "dashboard" as Screen, label: "Dashboard", icon: LayoutDashboard },
    { id: "lead" as Screen, label: "Leads", icon: UserPlus },
    { id: "job" as Screen, label: "Jobs", icon: Briefcase },
    { id: "payment" as Screen, label: "Cash", icon: Wallet },
    { id: "report" as Screen, label: "Reports", icon: FileText },
  ];

  const active = tabs.some((t) => t.id === screen) ? screen : "report";

  return (
    <div className="border-t border-[#1a1a1e] bg-[#090909] flex shrink-0">
      {tabs.map((tab) => {
        const isActive = active === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => setScreen(tab.id)}
            className={`flex-1 flex flex-col items-center gap-1 py-3 transition-colors active:scale-95 ${
              isActive ? "text-amber-400" : "text-white/22 hover:text-white/40"
            }`}
          >
            <tab.icon
              className="w-4 h-4"
              strokeWidth={isActive ? 2.5 : 1.5}
            />
            <span className="text-[9px] font-['JetBrains_Mono'] uppercase tracking-widest leading-none">
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

// ─── App Root ─────────────────────────────────────────────────────────────────

function LoginGate({ onSignedIn }: { onSignedIn: (session: OperatorSession) => void }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("Create a local MVP session, or connect the Node server at localhost:8787.");
  const [busy, setBusy] = useState(false);

  const signIn = async (mode: "signup" | "login") => {
    const cleanName = name.trim() || "Contractor Operator";
    const cleanPhone = phone.trim() || "Not provided";
    const cleanEmail = email.trim().toLowerCase();

    setBusy(true);
    setStatus("Checking server...");

    try {
      const response = await fetch(`${operatorApiBase()}/api/auth/${mode}`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: cleanName,
          phone: cleanPhone,
          email: cleanEmail || `${cleanPhone.replace(/\D/g, "") || "operator"}@local.contractor`,
          password: password || "OperatorDesk#2026",
        }),
      });

      if (!response.ok) {
        throw new Error("Server auth failed");
      }

      const data = (await response.json()) as { token?: string; user?: { name?: string; phone?: string; email?: string } };
      const nextSession: OperatorSession = {
        name: data.user?.name || cleanName,
        phone: data.user?.phone || cleanPhone,
        email: data.user?.email || cleanEmail,
        token: data.token,
        mode: "server",
      };
      writeOperatorSession(nextSession);
      onSignedIn(nextSession);
      return;
    } catch {
      const nextSession: OperatorSession = {
        name: cleanName,
        phone: cleanPhone,
        email: cleanEmail,
        mode: "local",
      };
      writeOperatorSession(nextSession);
      setStatus("Server is not connected, so this APK is using a local MVP session on this device.");
      onSignedIn(nextSession);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="h-full flex flex-col bg-[#050506]">
      <div className="relative overflow-hidden border-b border-[#1a1a1e]" style={{ flex: "0 0 60%" }}>
        <div className="absolute inset-0 bg-amber-500/8" />
        <div className="absolute -top-12 -right-12 w-72 h-72 rounded-full bg-amber-500/15" />
        <div className="absolute -bottom-12 -left-12 w-64 h-64 rounded-full bg-blue-500/10" />
        <div className="relative z-10 h-full flex flex-col justify-between p-5">
          <div className="flex items-start gap-3">
            <span className="w-12 h-12 rounded-[9px] bg-[#f8f4ee] border border-amber-500/25 p-1.5 shrink-0 shadow-[0_14px_34px_rgba(0,0,0,0.35)]">
              <img src="/altercraft-logo-mark.png" alt="" className="w-full h-full object-contain" />
            </span>
            <div>
              <div className="text-[9px] font-['JetBrains_Mono'] tracking-[0.22em] uppercase text-amber-400/70 mb-1">
                Contractor Desk
              </div>
              <h1 className="text-[32px] font-['Barlow_Condensed'] font-bold tracking-widest text-white leading-none uppercase">
                Operator Access
              </h1>
              <div className="text-[10px] font-['JetBrains_Mono'] text-white/35 tracking-widest uppercase mt-1">
                Powered by AlterLabs
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {[
              ["Payment Gate", "Blocks risky work"],
              ["Proof Vault", "Photos and scope"],
              ["Cash Desk", "Bucket discipline"],
              ["Site Reports", "Daily control"],
            ].map(([title, copy]) => (
              <Card key={title} className="p-3 bg-[#111113]/80">
                <div className="text-[10px] font-['Barlow_Condensed'] font-bold tracking-widest text-white uppercase">
                  {title}
                </div>
                <div className="text-[9px] font-['JetBrains_Mono'] text-white/28 mt-1">
                  {copy}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 p-4 flex flex-col gap-3 justify-center">
        <div>
          <div className="text-[9px] font-['JetBrains_Mono'] tracking-[0.18em] uppercase text-white/35 mb-2">
            Signup / Login
          </div>
          <div className="grid grid-cols-2 gap-2">
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Name"
              className="bg-[#0f0f12] border border-[#1f1f23] rounded px-3 py-2.5 text-[12px] font-['JetBrains_Mono'] text-white/75 placeholder-white/18 focus:outline-none focus:border-amber-500/50"
            />
            <input
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              placeholder="Phone"
              className="bg-[#0f0f12] border border-[#1f1f23] rounded px-3 py-2.5 text-[12px] font-['JetBrains_Mono'] text-white/75 placeholder-white/18 focus:outline-none focus:border-amber-500/50"
            />
          </div>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email, optional"
            className="w-full mt-2 bg-[#0f0f12] border border-[#1f1f23] rounded px-3 py-2.5 text-[12px] font-['JetBrains_Mono'] text-white/75 placeholder-white/18 focus:outline-none focus:border-amber-500/50"
          />
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password, optional for local MVP"
            type="password"
            className="w-full mt-2 bg-[#0f0f12] border border-[#1f1f23] rounded px-3 py-2.5 text-[12px] font-['JetBrains_Mono'] text-white/75 placeholder-white/18 focus:outline-none focus:border-amber-500/50"
          />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            disabled={busy}
            onClick={() => signIn("signup")}
            className="bg-amber-500 text-black font-['Barlow_Condensed'] font-bold text-[13px] tracking-widest uppercase py-3 rounded-[5px] disabled:opacity-60"
          >
            Create
          </button>
          <button
            type="button"
            disabled={busy}
            onClick={() => signIn("login")}
            className="bg-[#131315] border border-[#1f1f23] text-white/70 font-['Barlow_Condensed'] font-bold text-[13px] tracking-widest uppercase py-3 rounded-[5px] disabled:opacity-60"
          >
            Login
          </button>
        </div>
        <div className="text-[9px] font-['JetBrains_Mono'] text-white/28 leading-relaxed">
          {status}
        </div>
      </div>
    </div>
  );
}

function ContractorDeskMobileApp() {
  const [screen, setScreen] = useState<Screen>("dashboard");
  const [session, setSession] = useState<OperatorSession | null>(() => readOperatorSession());

  const signOut = () => {
    writeOperatorSession(null);
    setSession(null);
    setScreen("dashboard");
  };

  const renderScreen = () => {
    switch (screen) {
      case "dashboard":
        return session ? <Dashboard setScreen={setScreen} session={session} onSignOut={signOut} /> : null;
      case "lead":
        return <NewLead />;
      case "job":
        return <JobDetail setScreen={setScreen} />;
      case "payment":
        return <PaymentGate />;
      case "report":
        return <SiteReport setScreen={setScreen} />;
      case "dispute":
        return <DisputeProtection />;
    }
  };

  return (
    <div
      className="min-h-screen bg-[#050506] flex flex-col overflow-hidden"
      style={{
        minHeight: "100svh",
        paddingTop: "env(safe-area-inset-top)",
        paddingRight: "env(safe-area-inset-right)",
        paddingBottom: "env(safe-area-inset-bottom)",
        paddingLeft: "env(safe-area-inset-left)",
      }}
    >
      <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain" style={{ scrollbarWidth: "none" }}>
        {session ? renderScreen() : <LoginGate onSignedIn={setSession} />}
      </div>

      {session ? <BottomNav screen={screen} setScreen={setScreen} /> : null}
    </div>
  );
}

export default function OperatorDesk() {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const rootRef = useRef<Root | null>(null);

  useEffect(() => {
    document.body.classList.add("operator-desk-active");

    const host = hostRef.current;
    if (!host) {
      return () => document.body.classList.remove("operator-desk-active");
    }

    const shadowRoot = host.shadowRoot ?? host.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = "";

    const style = document.createElement("style");
    style.textContent = operatorDeskStyles;

    const mount = document.createElement("div");
    shadowRoot.append(style, mount);

    const root = createRoot(mount);
    rootRef.current = root;
    root.render(<ContractorDeskMobileApp />);

    return () => {
      document.body.classList.remove("operator-desk-active");
      root.unmount();
      rootRef.current = null;
      shadowRoot.innerHTML = "";
    };
  }, []);

  return <div ref={hostRef} />;
}
