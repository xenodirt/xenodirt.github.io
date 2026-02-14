import { useRef, useState } from "react";

export default function ContactUs() {
  const formRef = useRef(null);
  const [form, setForm] = useState({ firstname: "", subject: "" });
  const [message, setMessage] = useState("");

  function onSubmit(event) {
    event.preventDefault();
    setMessage("Submission success!");
  }

  return (
    <div id="content">
      <h1 id="content-title">contact us</h1>

      <div id="content-blocks">
        <form
          ref={formRef}
          className="contact-card"
          onSubmit={onSubmit}
        >
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="fname">Name</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Juan Dela Cruz"
                required
                value={form.firstname}
                onChange={(e) =>
                  setForm((p) => ({ ...p, firstname: e.target.value }))
                }
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Message</label>
              <textarea
                id="subject"
                name="subject"
                placeholder="Write your message"
                rows={8}
                required
                value={form.subject}
                onChange={(e) =>
                  setForm((p) => ({ ...p, subject: e.target.value }))
                }
              />
            </div>
          </div>

          <button className="form-submit" type="submit">
            Send
          </button>

          <p id="form-message">{message}</p>
        </form>
      </div>
    </div>
  );
}