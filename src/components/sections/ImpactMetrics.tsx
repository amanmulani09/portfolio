import { metrics } from "../../data/resume";
import { SpotlightCard } from "../react-bits/SpotlightCard";
import { getPortfolioIcon } from "../ui/portfolioIcons";

export function ImpactMetrics() {
  return (
    <div className="metric-rail" aria-label="Selected career impact">
      {metrics.map((metric, index) => {
        const Icon = getPortfolioIcon(metric.icon);

        return (
          <SpotlightCard as="article" className="metric-tile" key={metric.label}>
            <div className="metric-index">0{index + 1}</div>
            <Icon size={18} aria-hidden="true" />
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
            <p>{metric.detail}</p>
          </SpotlightCard>
        );
      })}
    </div>
  );
}
