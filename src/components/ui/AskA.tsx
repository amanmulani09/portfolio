import { ArrowUp, ArrowUpRight, MessageCircle, RotateCcw, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { getAnswer, type Answer } from "../../lib/askA";
import { profile } from "../../data/resume";

type Message = { question: string; answer: Answer };
const suggestions = ["What has Aman built?", "Tell me about his AI work", "What’s his experience?", "How can I contact him?"];

export function AskA({ open, onOpen, onClose, onResume }: { open: boolean; onOpen: () => void; onClose: () => void; onResume: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const conversation = useRef<HTMLDivElement>(null);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const panel = dialog.current;
    if (!panel) return;
    if (!open) { panel.close(); return; }
    panel.showModal();
    input.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; panel.close(); };
  }, [open]);

  useEffect(() => {
    const log = conversation.current;
    if (log) log.scrollTop = log.scrollHeight;
  }, [messages]);

  function ask(value: string) {
    const text = value.trim().slice(0, 300);
    if (!text) return;
    setMessages((previous) => [...previous, { question: text, answer: getAnswer(text) }]);
    setQuestion("");
    input.current?.focus();
  }

  return <>
    <button className="ask-launcher glass" type="button" onClick={onOpen} aria-haspopup="dialog" aria-controls="ask-a-dialog"><span className="ask-mark" aria-hidden="true">a<span>.</span></span><span>Ask about my work</span><MessageCircle size={17} aria-hidden="true" /></button>
    <dialog className="chat-dialog glass" id="ask-a-dialog" ref={dialog} aria-labelledby="ask-title" aria-describedby="ask-description" onClose={onClose} onClick={(event) => { if (event.target === event.currentTarget) { const rect = event.currentTarget.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) onClose(); } }}>
      <div className="chat-header"><span className="ask-mark">a<span>.</span></span><div><h2 id="ask-title">Ask A</h2><p id="ask-description">A little guide to Aman’s work.</p></div><div className="chat-header-actions"><button className="icon-button" type="button" aria-label="Start new conversation" disabled={messages.length === 0} onClick={() => { setMessages([]); setQuestion(""); input.current?.focus(); }}><RotateCcw size={16} /></button><button className="icon-button" type="button" aria-label="Close Ask A" onClick={onClose}><X size={19} /></button></div></div>
      <div className="chat-conversation" ref={conversation}>
        <div className="chat-welcome"><span className="small-label"><span className="status-dot" /> Answers from my résumé</span><h3>Nice to meet you.</h3><p>Looking for a quick overview? Ask about my experience, projects, skills, or how to get in touch.</p></div>
        <div className="chat-suggestions" aria-label="Suggested questions">{suggestions.map((suggestion) => <button key={suggestion} onClick={() => ask(suggestion)}>{suggestion}<ArrowUpRight size={14} aria-hidden="true" /></button>)}</div>
        <div role="log" aria-label="Conversation" aria-live="polite" aria-relevant="additions">{messages.map((message, index) => <div className="chat-exchange" key={index}><div className="chat-question"><span className="sr-only">You: </span>{message.question}</div><div className="chat-answer"><span className="chat-author">Ask A</span><p>{message.answer.text}</p>{message.answer.links.length > 0 && <div className="chat-links">{message.answer.links.map((item) => <a key={item.href} href={item.href} {...(item.href.startsWith("https:") ? { target: "_blank", rel: "noopener noreferrer" } : {})} onClick={(event) => { if (item.href === profile.resume) { event.preventDefault(); onResume(); } onClose(); }}>{item.label}<ArrowUpRight size={14} aria-hidden="true" /></a>)}</div>}</div></div>)}</div>
      </div>
      <div className="chat-footer"><form onSubmit={(event) => { event.preventDefault(); ask(question); }}><label className="sr-only" htmlFor="ask-question">Ask about Aman</label><input ref={input} autoFocus autoComplete="off" id="ask-question" name="question" placeholder="Ask about Aman…" maxLength={300} value={question} onChange={(event) => setQuestion(event.target.value)} /><button type="submit" aria-label="Send question" disabled={!question.trim()}><ArrowUp size={20} /></button></form><p>No AI model. Questions stay in this tab.</p></div>
    </dialog>
  </>;
}
