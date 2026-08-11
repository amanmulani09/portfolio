import {
  Bell,
  Bot,
  Check,
  Globe2,
  Image as ImageIcon,
  Languages,
  Mail,
  MapPin,
  MessageSquare,
  MousePointer2,
  Play,
  Search,
  Send,
  Sparkles,
  Users,
  Video
} from "lucide-react";
import type { ProjectId } from "../../types/portfolio";

type ProjectVisualProps = {
  projectId: ProjectId;
  large?: boolean;
};

function ShoppingAssistantVisual() {
  return (
    <div className="visual-board personify-board">
      <div className="visual-window-bar">
        <span className="visual-window-title">Shopping session / discovery</span>
        <span className="visual-status-pill">Live</span>
      </div>
      <div className="journey-surface">
        <span className="journey-connector connector-a" />
        <span className="journey-connector connector-b" />
        <span className="journey-connector connector-c" />
        <div className="journey-step journey-trigger">
          <MousePointer2 size={14} aria-hidden="true" />
          <span>Product question</span>
          <small>User intent</small>
        </div>
        <div className="journey-step journey-audience">
          <Users size={14} aria-hidden="true" />
          <span>Session context</span>
          <small>Memory loaded</small>
        </div>
        <div className="journey-step journey-agent">
          <Bot size={14} aria-hidden="true" />
          <span>Agent response</span>
          <small>Tools grounded</small>
        </div>
        <div className="journey-channels">
          <span>
            <Mail size={13} aria-hidden="true" />
          </span>
          <span>
            <MessageSquare size={13} aria-hidden="true" />
          </span>
          <span>
            <Bell size={13} aria-hidden="true" />
          </span>
        </div>
      </div>
      <div className="visual-insight-row">
        <span>Tool calling</span>
        <span>Session memory</span>
        <span className="insight-live">
          <i />
          Valid
        </span>
      </div>
    </div>
  );
}

function RagAssistantVisual() {
  return (
    <div className="visual-board storefront-board">
      <div className="visual-window-bar">
        <span className="visual-window-title">Knowledge retrieval</span>
        <span className="tenant-switcher">
          <i className="tenant-one" />
          <i className="tenant-two" />
          <i className="tenant-three" />
        </span>
      </div>
      <div className="storefront-shell">
        <div className="storefront-nav">
          <span className="storefront-logo">RAG</span>
          <span>Docs</span>
          <span>Sources</span>
          <span>Evals</span>
          <Search size={13} aria-hidden="true" />
        </div>
        <div className="storefront-hero">
          <div>
            <small>INTERNAL KNOWLEDGE</small>
            <strong>Answers, grounded.</strong>
            <span>Retrieve</span>
          </div>
          <div className="product-silhouette">
            <i />
            <i />
            <i />
          </div>
        </div>
        <div className="storefront-products">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className="performance-chip">
        <Globe2 size={13} aria-hidden="true" />
        Pinecone indexed
        <strong>~40% faster</strong>
      </div>
    </div>
  );
}

function ChitraVisual() {
  return (
    <div className="visual-board vibelabs-board">
      <div className="visual-window-bar">
        <span className="visual-window-title">Chitra.ai / analysis run</span>
        <span className="visual-status-pill ai-pill">
          <Sparkles size={11} aria-hidden="true" />
          Analyzing
        </span>
      </div>
      <div className="ai-workspace">
        <div className="ai-input-card">
          <div className="product-orb">
            <i />
          </div>
          <span>Video + speech</span>
          <small>Multimodal input</small>
          <span className="visual-button">
            <Sparkles size={12} aria-hidden="true" />
            Analyze media
          </span>
        </div>
        <div className="ai-flow-line">
          <i />
        </div>
        <div className="ai-output-grid">
          <div className="ai-output copy-output">
            <span>
              <MessageSquare size={13} aria-hidden="true" />
              Transcript
            </span>
            <i />
            <i />
            <i />
            <small>
              <Check size={10} aria-hidden="true" />
              Ready to review
            </small>
          </div>
          <div className="ai-output image-output">
            <span>
              <ImageIcon size={13} aria-hidden="true" />
              Frames
            </span>
            <div className="generated-image">
              <i />
            </div>
          </div>
          <div className="ai-output video-output">
            <span>
              <Video size={13} aria-hidden="true" />
              Insights
            </span>
            <div className="video-frame">
              <Play size={14} fill="currentColor" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
      <div className="visual-insight-row">
        <span>Scored findings</span>
        <span>Prioritized output</span>
        <strong>CI/CD ready</strong>
      </div>
    </div>
  );
}

function CodoVisual() {
  return (
    <div className="visual-board hydrafacial-board">
      <div className="visual-window-bar">
        <span className="visual-window-title">Pull request / review</span>
        <span className="visual-status-pill location-pill">
          <Languages size={11} aria-hidden="true" />
          PR / 128
        </span>
      </div>
      <div className="locator-shell">
        <div className="locator-search">
          <Search size={13} aria-hidden="true" />
          <span>auth.py · checkout</span>
          <span className="visual-button icon-only">
            <Send size={12} aria-hidden="true" />
          </span>
        </div>
        <div className="map-art">
          <span className="map-road road-one" />
          <span className="map-road road-two" />
          <span className="map-road road-three" />
          <span className="map-block block-one" />
          <span className="map-block block-two" />
          <span className="map-block block-three" />
          <span className="map-pin pin-one">
            <MapPin size={13} fill="currentColor" aria-hidden="true" />
          </span>
          <span className="map-pin pin-two">
            <MapPin size={13} fill="currentColor" aria-hidden="true" />
          </span>
          <span className="map-pin pin-three">
            <MapPin size={13} fill="currentColor" aria-hidden="true" />
          </span>
        </div>
        <div className="provider-card">
          <span className="provider-image" />
          <span>
            <strong>Security risk</strong>
            <small>auth.py:87 · high confidence</small>
          </span>
          <span className="visual-button">
            Inspect
          </span>
        </div>
      </div>
      <div className="visual-insight-row">
        <span>Correctness</span>
        <span>Security</span>
        <strong>Human review</strong>
      </div>
    </div>
  );
}

export function ProjectVisual({ projectId, large = false }: ProjectVisualProps) {
  return (
    <div
      className={`project-visual project-visual-${projectId}${large ? " project-visual-large" : ""}`}
      role="img"
      aria-label={`Abstract interface visualization for the ${projectId} case study`}
    >
      {projectId === "shopping-assistant" ? <ShoppingAssistantVisual /> : null}
      {projectId === "rag-assistant" ? <RagAssistantVisual /> : null}
      {projectId === "chitra-ai" ? <ChitraVisual /> : null}
      {projectId === "codo" ? <CodoVisual /> : null}
    </div>
  );
}
