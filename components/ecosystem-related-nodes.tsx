import React from "react"
import type { EcosystemNode } from "@/lib/ecosystem-data"
import Link from "next/link"
import * as LucideIcons from "lucide-react"

interface EcosystemRelatedNodesProps {
  nodes: EcosystemNode[]
}

// Create a mapping of icon names to their components
const iconComponents: Record<string, React.ComponentType<any>> = {
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

export default function EcosystemRelatedNodes({ nodes }: EcosystemRelatedNodesProps) {
  // Get icon component by name
  const getIconComponent = (iconName: string) => {
    const IconComponent = iconComponents[iconName] || LucideIcons.HelpCircle
    return <IconComponent size={20} className="text-white" />
  }

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">Related Nodes</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {nodes.map((node) => (
          <Link
            key={node.id}
            href={`/ecosystem/${node.slug}`}
            className="p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg" style={{ backgroundColor: node.color }}>
                {getIconComponent(node.icon)}
              </div>
              <div>
                <h3 className="font-medium">{node.name}</h3>
                <div className="text-xs text-gray-500 capitalize">{node.category}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
