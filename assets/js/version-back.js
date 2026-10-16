(() => {
  const style = document.createElement("style");
  style.textContent = `
    .version-back-button {
      position: fixed;
      top: 1rem;
      right: 2rem;
      z-index: 10000;
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      padding: 0.65rem 0.9rem;
      border: 1px solid rgba(0, 0, 0, 0.16);
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.96);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.18);
      color: #171717;
      font: 600 0.9rem/1.2 Arial, sans-serif;
      letter-spacing: normal;
      text-decoration: none;
    }

    .version-back-button:hover {
      background: #fff;
      color: #171717;
      transform: translateY(-1px);
    }

    .version-back-button:focus-visible {
      outline: 3px solid #5c2246;
      outline-offset: 3px;
    }

    @media (max-width: 480px) {
      .version-back-button {
        top: 0.75rem;
        left: 0.75rem;
      }
    }
  `;
  document.head.append(style);

  const link = document.createElement("a");
  link.className = "version-back-button";
  link.href = "/index.html";
  link.setAttribute("aria-label", "Back to the version archive");
  link.title = "Back to all versions";
  link.innerHTML = '<span aria-hidden="true">&larr;</span><span>Back</span>';
  document.body.prepend(link);
})();
