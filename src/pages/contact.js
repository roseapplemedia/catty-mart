import React from "react"
import "../css/contact.css"

export default function ContactPage() {
  return (
    <div className="container">
      <form name="contact" method="POST" data-netlify="true">
        <label for="name">
          Name
          <input type="text" id="name" name="name" placeholder="Your name.." />
        </label>
        <label for="email">
          Email
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email.."
          />
        </label>

        <label for="subject">
          Message
          <textarea
            id="message"
            name="message"
            placeholder="Message.."
            // style="height: 200px"
          ></textarea>
        </label>
        <div hidden data-netlify-recaptcha="true"></div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}
