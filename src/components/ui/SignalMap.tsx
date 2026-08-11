import { Braces, Cloud, Database, PanelsTopLeft, Sparkles } from "lucide-react";

export function SignalMap() {
  return (
    <div
      className="signal-map"
      role="img"
      aria-label="A product system map connecting frontend interfaces, backend services, data, multi-agent capabilities, and production operations"
    >
      <div className="signal-map-toolbar">
        <span className="window-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span>product_system.map</span>
        <span className="live-indicator">
          <i />
          Live
        </span>
      </div>

      <div className="signal-canvas">
        <div className="signal-orbit orbit-one" />
        <div className="signal-orbit orbit-two" />
        <div className="signal-beam beam-one" />
        <div className="signal-beam beam-two" />

        <div className="signal-node node-source">
          <PanelsTopLeft size={16} aria-hidden="true" />
          <span>Interface</span>
          <small>React · Lit</small>
        </div>

        <div className="signal-node node-segment">
          <Database size={16} aria-hidden="true" />
          <span>Data</span>
          <small>SQL · retrieval</small>
        </div>

        <div className="signal-core">
          <span>AM</span>
          <small>Product systems</small>
          <i />
        </div>

        <div className="signal-node node-journey">
          <Sparkles size={16} aria-hidden="true" />
          <span>Multi-agent</span>
          <small>agents · tools</small>
        </div>

        <div className="signal-node node-channel">
          <span className="channel-icons">
            <Braces size={14} aria-hidden="true" />
            <Cloud size={14} aria-hidden="true" />
          </span>
          <span>Services</span>
          <small>API · cloud · ops</small>
        </div>
      </div>

      <div className="signal-map-footer">
        <span>
          <i className="status-good" />
          Reliable
        </span>
        <span>
          <i className="status-good" />
          Observable
        </span>
        <span>
          <i className="status-warm" />
          Human-reviewed
        </span>
      </div>
    </div>
  );
}
