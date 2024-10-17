import React, { useState } from "react";
import "../styles/faq.scss";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I make Chrome my default web browser?",
      answer: "You can set Chrome as your default browser on Windows or Mac operating systems as well as your iPhone, iPad or Android device. When you set Chrome as your default browser, any link you click will automatically open in Chrome.",
      link:"Find specific instructions for your device here"
    },
    {
      question: "How can I customise Chrome?",
      answer: "You can test out different colours, themes and settings in real time by opening a new tab in Chrome and clicking the “Customise Chrome” icon in the bottom right corner. A new side panel will open with the available customisation features.",
      link: "Learn more about customising Chrome"
    },
    {
      question: "What are Chrome's safety settings?",
      answer: "Chrome uses cutting-edge safety and security features to help you manage your safety. Use Safety Check to instantly audit for compromised passwords, safe browsing status and any available Chrome updates.",
      link: "Learn more about safety and security on Chrome."
    },
    {
      question: "What is Chrome’s password manager?",
      answer: "Chrome uses Google Password Manager, which makes it simple to save, manage and protect your passwords online. It also helps you create strong, unique passwords for every account you use.",
      link: "Learn more about Google Password Manager."
    },
    {
      question: "Are there anti-slip tile options available?",
      answer: "Yes, anti-slip tiles are designed with a rough surface to provide extra traction, making them ideal for wet areas like bathrooms and kitchens."
    },
    {
      question: "How do I add a browser extension to Chrome?",
      answer: "It’s easy to add extensions to Chrome for desktop. Simply visit the Chrome Web Store, find and select the extension you want, and click Add to Chrome. Some extensions might need additional permissions. To use the extension, click on its icon to the right of the address bar.",
      link: "Learn more about extensions."
    },
    {
      question: "How do I update Chrome?",
      answer: "Normally updates happen in the background when you close and reopen your computer's browser. If you haven’t closed your browser in a while, you might see a pending update.",
      link: "Learn more about Chrome updates."
    }
  ];

  return (
    <div className="accordion-container-unique">
      <h2 className="faq-header-unique">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="accordion-item-unique">
          <div
            className="accordion-title-unique"
            onClick={() => toggleAccordion(index)}
          >
            <h3>{faq.question}</h3>
            <span>{activeIndex === index ? "-" : "+"}</span>
          </div>
          <div
            className={`accordion-content-unique ${
              activeIndex === index ? "active" : ""
            }`}
          >
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;