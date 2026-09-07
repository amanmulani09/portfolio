import { ArrowUpRight, X } from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { profile } from "../../data/resume";

export function ResumeRequestDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const panel = dialog.current;
    if (!panel) return;
    if (!open) {
      if (panel.open) panel.close();
      return;
    }
    if (!panel.open) panel.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [open]);

  function close() {
    dialog.current?.close();
  }

  function handleClose() {
    form.current?.reset();
    setStatus("");
    onClose();
  }

  function submitRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const request = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Reason: ${data.get("reason")}`,
    ].join("\n");

    const copyRequest = navigator.clipboard?.writeText(request);
    window.open(profile.resume, "_blank", "noopener,noreferrer");
    if (!copyRequest) {
      setStatus("Drive opened. Copy your reason manually into the access request.");
      return;
    }
    void copyRequest.then(
      () => setStatus("Request copied. Paste it into the Google Drive access form."),
      () => setStatus("Drive opened. Copy your reason manually into the access request."),
    );
  }

  return (
    <dialog
      className="resume-dialog glass"
      ref={dialog}
      aria-labelledby="resume-dialog-title"
      aria-describedby="resume-dialog-description"
      onClose={handleClose}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const rect = event.currentTarget.getBoundingClientRect();
        if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) close();
      }}
    >
      <div className="resume-dialog-header">
        <div>
          <span className="eyebrow">RÉSUMÉ ACCESS</span>
          <h2 id="resume-dialog-title">Tell me a little about you.</h2>
        </div>
        <button className="icon-button" type="button" onClick={close} aria-label="Close résumé request"><X size={19} /></button>
      </div>
      <p id="resume-dialog-description" className="resume-dialog-intro">Your details stay in this browser. I’ll copy a short request for you to paste into Google Drive.</p>
      <form className="resume-request-form" ref={form} onSubmit={submitRequest}>
        <label>Full name<input name="name" type="text" autoComplete="name" required /></label>
        <label>Email<input name="email" type="email" autoComplete="email" required /></label>
        <label>Why would you like access?<textarea name="reason" rows={4} minLength={10} required placeholder="Role, opportunity, or reason for reviewing my résumé" /></label>
        <button className="button button-primary" type="submit">Copy request & open Drive <ArrowUpRight size={17} aria-hidden="true" /></button>
        <p className="resume-request-help">Google Drive does not support prefilling its request message. Paste the copied note when Drive asks why you need access.</p>
        <p className="resume-request-status" role="status" aria-live="polite">{status}</p>
      </form>
    </dialog>
  );
}
