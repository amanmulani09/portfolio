import {
  Bot,
  Boxes,
  Building2,
  ChartNoAxesCombined,
  Code2,
  Gauge,
  Globe2,
  Layers3,
  Linkedin,
  Mail,
  MapPinned,
  MessageSquareQuote,
  Rocket,
  Sparkles,
  Users,
  Workflow,
  type LucideIcon
} from "lucide-react";
import type { PortfolioIconName } from "../../types/portfolio";

const portfolioIcons: Record<PortfolioIconName, LucideIcon> = {
  bot: Bot,
  boxes: Boxes,
  building: Building2,
  chart: ChartNoAxesCombined,
  code: Code2,
  gauge: Gauge,
  globe: Globe2,
  layers: Layers3,
  linkedin: Linkedin,
  mail: Mail,
  map: MapPinned,
  quote: MessageSquareQuote,
  rocket: Rocket,
  sparkles: Sparkles,
  users: Users,
  workflow: Workflow
};

export function getPortfolioIcon(icon: PortfolioIconName) {
  return portfolioIcons[icon];
}
