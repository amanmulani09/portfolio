import { skillGroups } from "../../data/resume";
import { getPortfolioIcon } from "../ui/portfolioIcons";

export function SkillsConstellation() {
  return (
    <section className="toolkit-section" aria-labelledby="toolkit-title">
      <div className="content-section toolkit-layout">
        <div className="toolkit-intro">
          <span>Working toolkit</span>
          <h2 id="toolkit-title">Tools are choices, not identity.</h2>
          <p>
            I choose technology around evidence quality, permission boundaries, latency, operating cost, and the team
            that will own the system in production.
          </p>
        </div>
        <div className="toolkit-groups">
          {skillGroups.map((group) => {
            const Icon = getPortfolioIcon(group.icon);

            return (
              <article key={group.label}>
                <div>
                  <Icon size={18} aria-hidden="true" />
                  <h3>{group.label}</h3>
                </div>
                <p>{group.skills.join(" · ")}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
