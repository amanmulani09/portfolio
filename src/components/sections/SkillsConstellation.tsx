import { skillGroups } from "../../data/resume";
import { getPortfolioIcon } from "../ui/portfolioIcons";

export function SkillsConstellation() {
  return (
    <section className="toolkit-section" id="toolkit" aria-labelledby="toolkit-title">
      <div className="content-section toolkit-layout">
        <div className="toolkit-intro">
          <span>03 / Working toolkit</span>
          <h2 id="toolkit-title">Tools I use to build and ship.</h2>
          <p>
            I choose technology based on the user need, data quality, security requirements, speed, cost, and long-term
            ownership.
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
