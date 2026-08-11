import {
  Bell,
  Bot,
  Check,
  CreditCard,
  Database,
  Globe2,
  Image as ImageIcon,
  Mail,
  MessageSquare,
  MousePointer2,
  Play,
  Search,
  Settings2,
  ShieldCheck,
  Sparkles,
  Users,
  Video
} from "lucide-react";
import type { ProjectId } from "../../types/portfolio";

type ProjectVisualProps = {
  projectId: ProjectId;
  large?: boolean;
};

function CodoVisual() {
  return (
    <div className="visual-board personify-board">
      <div className="visual-window-bar">
        <span className="visual-window-title">Pull request / automated review</span>
        <span className="visual-status-pill">GitHub App</span>
      </div>
      <div className="journey-surface">
        <span className="journey-connector connector-a" />
        <span className="journey-connector connector-b" />
        <span className="journey-connector connector-c" />
        <div className="journey-step journey-trigger">
          <MousePointer2 size={14} aria-hidden="true" />
          <span>Pull request</span>
          <small>Webhook event</small>
        </div>
        <div className="journey-step journey-audience">
          <Users size={14} aria-hidden="true" />
          <span>Diff context</span>
          <small>Scoped access</small>
        </div>
        <div className="journey-step journey-agent">
          <Bot size={14} aria-hidden="true" />
          <span>AI review</span>
          <small>Findings ranked</small>
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
        <span>Correctness</span>
        <span>Security</span>
        <span className="insight-live">
          <i />
          Human decides
        </span>
      </div>
    </div>
  );
}

function RagArchitecturesVisual() {
  return (
    <div className="visual-board storefront-board">
      <div className="visual-window-bar">
        <span className="visual-window-title">RAG architecture / retrieval lab</span>
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
          Retrieval pipeline
        <strong>Hybrid + reranked</strong>
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

function PgKhataVisual() {
  return (
    <div className="visual-board hydrafacial-board">
      <div className="visual-window-bar">
        <span className="visual-window-title">PG operations / mobile PWA</span>
        <span className="visual-status-pill location-pill">
          <Settings2 size={11} aria-hidden="true" />
          PWA / online
        </span>
      </div>
      <div className="locator-shell">
        <div className="locator-search">
          <CreditCard size={13} aria-hidden="true" />
          <span>tenant · room · rent</span>
          <span className="visual-button icon-only">
            <ShieldCheck size={12} aria-hidden="true" />
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
            <Database size={13} aria-hidden="true" />
          </span>
          <span className="map-pin pin-two">
            <Database size={13} aria-hidden="true" />
          </span>
          <span className="map-pin pin-three">
            <Database size={13} aria-hidden="true" />
          </span>
        </div>
        <div className="provider-card">
          <span className="provider-image" />
          <span>
            <strong>Tenant record</strong>
            <small>typed · protected</small>
          </span>
          <span className="visual-button">
            Ready
          </span>
        </div>
      </div>
      <div className="visual-insight-row">
        <span>React</span>
        <span>FastAPI</span>
        <strong>PostgreSQL</strong>
      </div>
    </div>
  );
}

function ShodhVisual() {
  return (
    <div className="visual-board storefront-board">
      <div className="visual-window-bar">
        <span className="visual-window-title">shodh / website scan</span>
        <span className="visual-status-pill">CLI</span>
      </div>
      <div className="storefront-shell">
        <div className="storefront-nav">
          <span className="storefront-logo">404</span>
          <span>Pages</span>
          <span>Links</span>
          <span>CSV</span>
          <Search size={13} aria-hidden="true" />
        </div>
        <div className="storefront-hero">
          <div>
            <small>WEBSITE SCANNER</small>
            <strong>Find broken links.</strong>
            <span>Scan</span>
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
        Crawl complete
        <strong>CSV ready</strong>
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
      {projectId === "chitra-ai" ? <ChitraVisual /> : null}
      {projectId === "rag-architectures" ? <RagArchitecturesVisual /> : null}
      {projectId === "codo" ? <CodoVisual /> : null}
      {projectId === "pgkhata" ? <PgKhataVisual /> : null}
      {projectId === "shodh" ? <ShodhVisual /> : null}
    </div>
  );
}
