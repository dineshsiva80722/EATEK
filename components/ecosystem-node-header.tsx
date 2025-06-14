import React from "react"
import { type EcosystemNode } from "@/lib/ecosystem-data"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import * as LucideIcons from "lucide-react"

interface EcosystemNodeHeaderProps {
  node: EcosystemNode
}

export default function EcosystemNodeHeader({ node }: EcosystemNodeHeaderProps) {
  // Create a mapping of icon names to their components
  const iconComponents: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
    Lightbulb: LucideIcons.Lightbulb,
    BookOpen: LucideIcons.BookOpen,
    Palette: LucideIcons.Palette,
    Cpu: LucideIcons.Cpu,
    Rocket: LucideIcons.Rocket,
    Users: LucideIcons.Users,
    LineChart: LucideIcons.LineChart,
    School: LucideIcons.School,
    ClipboardCheck: LucideIcons.ClipboardCheck,
    FlaskConical: LucideIcons.FlaskConical,
    Cloud: LucideIcons.Cloud,
    BrainCircuit: LucideIcons.BrainCircuit,
    Smartphone: LucideIcons.Smartphone,
    PenTool: LucideIcons.PenTool,
    VrHeadset: LucideIcons.HeadsetIcon,
    Building: LucideIcons.Building,
    BarChart3: LucideIcons.BarChart3,
  }

  // Get the icon component or fallback to HelpCircle
  const Icon = iconComponents[node.icon] || LucideIcons.HelpCircle

  return (
    <div>
      <Link href="/ecosystem" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 mb-6">
        <ChevronLeft className="mr-1 h-4 w-4" />
        Back to Ecosystem
      </Link>

      <div className="flex items-center gap-4 mb-4">
        <Icon className="w-8 h-8" style={{ color: node.color }} />

        <div>
          <h1 className="text-3xl font-bold">{node.name}</h1>
          <div className="text-sm text-gray-500 capitalize">{node.category}</div>
        </div>
      </div>

      <p className="text-xl text-gray-700 mt-4">{node.description}</p>
    </div>
  )
}
