import "./contact.scss";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" required placeholder="Full Name" />
          <input type="email" required placeholder="Email" />
          <textarea required placeholder="Message:"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
