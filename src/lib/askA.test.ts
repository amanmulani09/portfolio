import assert from "node:assert/strict";
import { test } from "node:test";
import { getAnswer } from "./askA.ts";

test("common recruiter questions resolve to the right résumé facts", () => {
  const questions = [
    ["What’s his experience?", "experience"],
    ["Tell me about his AI work", "ai"],
    ["What has Aman built?", "projects"],
    ["How can I contact him?", "contact"],
    ["Can I download his résumé?", "resume"],
    ["What did he build with AG-UI?", "shopping-assistant"],
    ["Tell me about Codo", "codo"],
    ["multi-tenant CMS", "multi-tenant-cms"],
    ["Razorpay experience", "push-provisioning"],
    ["HMX Media", "hmx"],
    ["retrieval and RAG", "rag"],
    ["What is his degree?", "education"],
    ["Where is Aman based?", "location"],
    ["Next.js and FastAPI", "full-stack"],
    ["CI/CD and Cloud Run", "production"],
    ["Current company?", "thg"],
    ["Where does he work?", "thg"],
  ];
  for (const [question, expected] of questions) assert.equal(getAnswer(question).topic, expected, question);
});

test("specific projects win over broad AI and skill terms", () => {
  assert.equal(getAnswer("Codo AI code review stack").topic, "codo");
  assert.equal(getAnswer("THG Shopping Assistant").topic, "shopping-assistant");
  assert.match(getAnswer("cost savings").text, /\$4,000\+ per month/);
  assert.match(getAnswer("how many brands?").text, /10\+ ecommerce brands/);
});

test("unconfirmed and unknown questions never invent facts", () => {
  assert.equal(getAnswer("What is Aman's salary at THG?").topic, "availability");
  assert.equal(getAnswer("Can I hire Aman remotely?").topic, "availability");
  assert.equal(getAnswer("Kubernetes certifications?").topic, "unknown");
  assert.equal(getAnswer("banana spaceship").topic, "unknown");
  assert.equal(getAnswer("shipping").topic, "unknown");
  assert.equal(getAnswer("   ").topic, "empty");
  assert.equal(getAnswer("<script>alert(1)</script>").topic, "unknown");
});

test("answers only link to curated portfolio or contact destinations", () => {
  for (const question of ["projects", "Codo", "contact", "resume", "skills", "experience", "unknown"]) {
    for (const { href } of getAnswer(question).links) {
      if (href === "https://drive.google.com/file/d/1kYkDvaHlf5aIC6p7wbB5iiHYsIIBdmLT/view?usp=drivesdk") continue;
      assert.match(href, /^(\/#|mailto:mulaniaman0504@gmail\.com$|https:\/\/(github\.com\/amanmulani09|www\.linkedin\.com\/in\/aman-mulani\/))/);
    }
  }
});
