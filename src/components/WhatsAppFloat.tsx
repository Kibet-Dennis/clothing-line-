const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/254712345678?text=Hello! I'm interested in your products", "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-transparent p-0 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
      aria-label="Chat on WhatsApp"
      style={{ backdropFilter: "blur(2px)" }}
    >
      <svg
        width={56}
        height={56}
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="28" cy="28" r="26" stroke="#25D366" strokeWidth="4" fill="none" />
        <circle cx="28" cy="28" r="18" stroke="#25D366" strokeWidth="3" fill="none" />
        <path
          d="M34.5 32.5c-.5-.2-2.9-1.4-3.3-1.6-.4-.2-.7-.2-1 .2-.3.4-1.2 1.6-1.5 2-.3.4-.6.4-1.1.2-1.1-.4-2.1-.8-3-1.7-.8-.7-1.5-1.6-1.9-2.5-.2-.5 0-.8.2-1.1.2-.3.4-.7.6-1 .2-.3.2-.6 0-.9-.2-.3-1.1-2.6-1.3-3.1-.2-.5-.4-.4-.9-.4h-.7c-.3 0-.7.1-1 .4-.7.7-1.3 2-1.3 3.1 0 1.1.6 2.3 1.3 3.2 1.2 1.7 2.8 3.1 4.6 4 .9.4 1.8.7 2.7.7.7 0 1.3-.2 1.8-.6.5-.4 1.2-1.2 1.5-1.7.3-.5.3-.8.2-1.1z"
          fill="#25D366"
        />
      </svg>
    </button>
  );
};

export default WhatsAppFloat;
