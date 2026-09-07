from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import HRFlowable, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle


ROOT = Path(__file__).resolve().parents[1]
OUTPUT_DIR = ROOT / "output" / "pdf"
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
OUTPUT = OUTPUT_DIR / "Aman-Mulani-Full-Stack-AI-Resume.pdf"

NAVY = colors.HexColor("#2d4d73")
INK = colors.HexColor("#202124")
MUTED = colors.HexColor("#5b6068")

styles = getSampleStyleSheet()
name_style = ParagraphStyle(
    "Name", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=24,
    leading=26, alignment=TA_CENTER, textColor=NAVY, spaceAfter=3,
)
contact_style = ParagraphStyle(
    "Contact", parent=styles["Normal"], fontName="Helvetica", fontSize=8.6,
    leading=10, alignment=TA_CENTER, textColor=MUTED, spaceAfter=10,
)
summary_style = ParagraphStyle(
    "Summary", parent=styles["Normal"], fontName="Helvetica", fontSize=8.7,
    leading=10.7, textColor=INK, spaceAfter=6,
)
section_style = ParagraphStyle(
    "Section", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=11.5,
    leading=13, textColor=NAVY, spaceBefore=4, spaceAfter=3,
)
role_style = ParagraphStyle(
    "Role", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=9.3,
    leading=10.8, textColor=INK, spaceAfter=1,
)
period_style = ParagraphStyle(
    "Period", parent=styles["Normal"], fontName="Helvetica-Oblique", fontSize=8.5,
    leading=10, alignment=TA_RIGHT, textColor=MUTED,
)
bullet_style = ParagraphStyle(
    "Bullet", parent=styles["Normal"], fontName="Helvetica", fontSize=8.35,
    leading=9.8, leftIndent=10, firstLineIndent=-7, bulletIndent=0,
    textColor=INK, spaceAfter=1.3,
)
skill_style = ParagraphStyle(
    "Skill", parent=styles["Normal"], fontName="Helvetica", fontSize=8.25,
    leading=9.8, textColor=INK, spaceAfter=1.3,
)
education_style = ParagraphStyle(
    "Education", parent=styles["Normal"], fontName="Helvetica", fontSize=8.4,
    leading=10, textColor=INK,
)


def section(title: str, story: list) -> None:
    story.extend([
        Paragraph(title, section_style),
        HRFlowable(width="100%", thickness=0.7, color=NAVY, spaceBefore=0, spaceAfter=4),
    ])


def role(story: list, title: str, company: str, period: str) -> None:
    table = Table(
        [[Paragraph(f"{title} - {company}", role_style), Paragraph(period, period_style)]],
        colWidths=[6.15 * inch, 1.25 * inch],
    )
    table.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
    ]))
    story.extend([table, Spacer(1, 1)])


def bullet(story: list, text: str) -> None:
    story.append(Paragraph(f"&#8226;&nbsp;&nbsp;{text}", bullet_style))


story = [
    Paragraph("Aman Mulani", name_style),
    Paragraph(
        "+91 7378617999 &nbsp;|&nbsp; mulaniaman0504@gmail.com &nbsp;|&nbsp; linkedin.com/in/amanmulani &nbsp;|&nbsp; github.com/amanmulani09",
        contact_style,
    ),
    Paragraph(
        "<b>Full-Stack &amp; AI Engineer</b> building production web applications and AI-powered products across ecommerce and payments. Experienced across frontend, backend, AI integrations, system design, deployment, and production support. Comfortable taking ownership of features from requirements and architecture through implementation, release, and iteration.",
        summary_style,
    ),
]

section("Work Experience", story)
role(story, "Software Engineer, AI &amp; Full-Stack", "THG Ingenuity", "Aug 2025 - Present")
for text in [
    "Built and maintained an <b>AI Shopping Assistant</b> used across ecommerce brands, working across the frontend, FastAPI backend, LLM integrations, tool calling, retrieval, and production monitoring.",
    "Architected and built an in-house <b>multi-tenant CMS platform</b> for managing content across multiple business websites, with shared services, components, and deployment practices.",
    "Built and shipped end-to-end features and reusable widgets for a multi-tenant ecommerce storefront, working across the <b>Astro.js</b> frontend and <b>FastAPI + GraphQL</b> backend while managing reviews, releases, testing, and production delivery.",
    "Built RAG-based internal applications covering document ingestion, chunking, embeddings, retrieval, LLM integration, and evaluation, with focus on practical quality, latency, and cost.",
    "Delivered AI-powered product experiences including a <b>multimodal AI Stylist</b>, integrating AI capabilities into existing customer journeys and production systems.",
    "Built automation workflows using <b>Python, APIs, n8n, and LLMs</b> to reduce manual support and operational work.",
]:
    bullet(story, text)

role(story, "Product Engineer, Full-Stack", "Razorpay", "Apr 2024 - Aug 2025")
for text in [
    "Designed and built a <b>configuration-driven Push Provisioning platform</b> that simplified partner integrations through a common architecture.",
    "Developed and maintained <b>Python/FastAPI</b> services for secure card tokenization and lifecycle management, with emphasis on reliability, validation, and maintainability.",
    "Delivered end-to-end product features across React, TypeScript, Python, APIs, and databases, working with product, QA, and platform teams.",
    "Improved application reliability through automated testing, integration testing, CI/CD, and production monitoring.",
    "Contributed to design discussions, code reviews, technical documentation, and day-to-day engineering improvements across the team.",
]:
    bullet(story, text)

role(story, "Web Developer", "HMX Media", "Aug 2022 - Mar 2024")
for text in [
    "Built internal tools that automated localization workflows and reduced repetitive engineering work.",
    "Developed reusable frontend components and shared UI libraries using React, JavaScript, Canvas, and WebGL.",
    "Worked on interactive, performance-sensitive web experiences and collaborated with designers and engineers to deliver production features.",
]:
    bullet(story, text)

section("Projects", story)
role(story, "Codo - AI Code Review Agent", "GitHub", "")
bullet(story, "Built an AI-powered code review service integrating GitHub Apps, FastAPI, Redis, LangChain, and LLMs to analyze pull requests and surface potential code quality and security issues.")
role(story, "Chitra.ai - Multimodal Video Analysis Service", "GitHub", "")
bullet(story, "Built an end-to-end service that analyzes video and speech and produces scored, prioritized insight reports, with Docker packaging and CI/CD across staging and production.")

section("Technical Skills", story)
for label, text in [
    ("AI / LLM", "LLM APIs, Enterprise RAG, embeddings, vector search, retrieval, LangGraph, LangChain, Google ADK, Vertex AI, agentic systems, tool calling, MCP / FastMCP, prompt and context engineering, Pinecone, vLLM"),
    ("Evals &amp; Observability", "DeepEval, Langfuse, Grafana, Sentry, structured logging, tracing"),
    ("Languages &amp; Backend", "Python, TypeScript, JavaScript, SQL, FastAPI, Node.js, PostgreSQL, Redis, REST, GraphQL"),
    ("Frontend", "React, Next.js, React Native, Astro, Tailwind CSS, Playwright"),
    ("Cloud &amp; Delivery", "AWS (S3, CloudFront, ECS, Route53), Docker, GitHub Actions, CI/CD"),
    ("Engineering", "System design, API design, automated testing, observability, production debugging, performance optimization, code reviews"),
]:
    story.append(Paragraph(f"<b>{label}:</b> {text}", skill_style))

section("Education", story)
story.append(Paragraph("<b>Bachelor of Computer Applications (BCA)</b> - College of Computer Science and Information Technology", education_style))
story.append(Paragraph("2020 - 2023", period_style))

doc = SimpleDocTemplate(
    str(OUTPUT), pagesize=letter, rightMargin=0.55 * inch, leftMargin=0.55 * inch,
    topMargin=0.38 * inch, bottomMargin=0.34 * inch,
    title="Aman Mulani - Full-Stack & AI Engineer",
    author="Aman Mulani",
)
doc.build(story)
print(OUTPUT)
