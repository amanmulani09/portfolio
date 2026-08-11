import {
  Bell,
  Bot,
  Check,
  CreditCard,
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

function ThgCommerceVisual() {
  return (
    <div className="visual-board storefront-board">
      <div className="visual-window-bar">
        <span className="visual-window-title">THG Commerce / storefront delivery</span>
        <span className="visual-status-pill">Production</span>
      </div>
      <div className="storefront-shell">
        <div className="storefront-nav">
          <span className="storefront-logo">THG</span>
          <span>Store</span>
          <span>Markets</span>
          <span>Ops</span>
          <Globe2 size={13} aria-hidden="true" />
        </div>
        <div className="storefront-hero">
          <div>
            <small>GLOBAL COMMERCE</small>
            <strong>Ship with confidence.</strong>
            <span>Explore</span>
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
        <ShieldCheck size={13} aria-hidden="true" />
        Config validated
        <strong>Release ready</strong>
      </div>
    </div>
  );
}

function PushProvisioningVisual() {
  return (
    <div className="visual-board personify-board">
      <div className="visual-window-bar">
        <span className="visual-window-title">Push Provisioning / token journey</span>
        <span className="visual-status-pill">RBI compliant</span>
      </div>
      <div className="journey-surface">
        <span className="journey-connector connector-a" />
        <span className="journey-connector connector-b" />
        <span className="journey-connector connector-c" />
        <div className="journey-step journey-trigger">
          <CreditCard size={14} aria-hidden="true" />
          <span>Bank card</span>
          <small>Activate</small>
        </div>
        <div className="journey-step journey-audience">
          <ShieldCheck size={14} aria-hidden="true" />
          <span>Verify</span>
          <small>OTP + consent</small>
        </div>
        <div className="journey-step journey-agent">
          <Settings2 size={14} aria-hidden="true" />
          <span>Provision</span>
          <small>Configured flow</small>
        </div>
        <div className="journey-channels">
          <span><CreditCard size={13} aria-hidden="true" /></span>
          <span><Globe2 size={13} aria-hidden="true" /></span>
          <span><Check size={13} aria-hidden="true" /></span>
        </div>
      </div>
      <div className="visual-insight-row">
        <span>Bank</span>
        <span>TokenHQ</span>
        <span className="insight-live"><i />Merchants ready</span>
      </div>
    </div>
  );
}

function HmxInteractiveVisual() {
  return (
    <div className="visual-board vibelabs-board">
      <div className="visual-window-bar">
        <span className="visual-window-title">HMX / real-time 3D configurator</span>
        <span className="visual-status-pill ai-pill">
          <MousePointer2 size={11} aria-hidden="true" />
          Interactive
        </span>
      </div>
      <div className="ai-workspace">
        <div className="ai-input-card">
          <div className="product-orb"><i /></div>
          <span>Product scene</span>
          <small>Mobile-first WebGL</small>
          <span className="visual-button">
            <Settings2 size={12} aria-hidden="true" />
            Configure
          </span>
        </div>
        <div className="ai-flow-line"><i /></div>
        <div className="ai-output-grid">
          <div className="ai-output copy-output">
            <span><Settings2 size={13} aria-hidden="true" />Options</span>
            <i />
            <i />
            <i />
            <small><Check size={10} aria-hidden="true" />State synced</small>
          </div>
          <div className="ai-output image-output">
            <span><ImageIcon size={13} aria-hidden="true" />Materials</span>
            <div className="generated-image"><i /></div>
          </div>
          <div className="ai-output video-output">
            <span><Globe2 size={13} aria-hidden="true" />Browser</span>
            <div className="video-frame"><Play size={14} fill="currentColor" aria-hidden="true" /></div>
          </div>
        </div>
      </div>
      <div className="visual-insight-row">
        <span>Sharp Kitchen</span>
        <span>Royal Enfield</span>
        <strong>Any device</strong>
      </div>
    </div>
  );
}

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

export function ProjectVisual({ projectId, large = false }: ProjectVisualProps) {
  return (
    <div
      className={`project-visual project-visual-${projectId}${large ? " project-visual-large" : ""}`}
      role="img"
      aria-label={`Abstract interface visualization for the ${projectId} case study`}
    >
      {projectId === "thg-commerce" ? <ThgCommerceVisual /> : null}
      {projectId === "push-provisioning" ? <PushProvisioningVisual /> : null}
      {projectId === "hmx-interactive" ? <HmxInteractiveVisual /> : null}
      {projectId === "chitra-ai" ? <ChitraVisual /> : null}
      {projectId === "rag-architectures" ? <RagArchitecturesVisual /> : null}
      {projectId === "codo" ? <CodoVisual /> : null}
    </div>
  );
}
