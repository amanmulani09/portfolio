import { Bot, Mail, MessageSquare, Radio, Users } from "lucide-react";

export function SignalMap() {
  return (
    <div
      className="signal-map"
      role="img"
      aria-label="An AI system map connecting user intent, retrieval context, agent tools, and production outcomes"
    >
      <div className="signal-map-toolbar">
        <span className="window-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span>llm_system.map</span>
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
          <Radio size={16} aria-hidden="true" />
          <span>User intent</span>
          <small>query · goal</small>
        </div>

        <div className="signal-node node-segment">
          <Users size={16} aria-hidden="true" />
          <span>Context</span>
          <small>retrieve · rank</small>
        </div>

        <div className="signal-core">
          <span>AM</span>
          <small>AI systems</small>
          <i />
        </div>

        <div className="signal-node node-journey">
          <Bot size={16} aria-hidden="true" />
          <span>Agents</span>
          <small>tools · memory</small>
        </div>

        <div className="signal-node node-channel">
          <span className="channel-icons">
            <Mail size={14} aria-hidden="true" />
            <MessageSquare size={14} aria-hidden="true" />
          </span>
          <span>Production</span>
          <small>API · app · ops</small>
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
