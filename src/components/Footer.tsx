export default function Footer() {
  return (
    <footer className="py-6 border-t border-white/5">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gold-moving rounded flex items-center justify-center font-black text-black text-lg">
              N
            </div>
            <span className="text-lg font-black tracking-tighter text-white">NIYA DIGITAL</span>
          </div>

          <p className="text-sm text-white/20">
            © 2025 NIYA Digital. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
