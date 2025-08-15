import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/254712345678?text=Hello! I'm interested in your products", "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-transparent border-2 border-cyan-400 text-cyan-400 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
      aria-label="Chat on WhatsApp"
      style={{ backdropFilter: "blur(2px)" }}
    >
      <MessageCircle size={32} strokeWidth={2.5} className="text-cyan-400" />
    </button>
  );
};

export default WhatsAppFloat;
