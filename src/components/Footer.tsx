export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center font-bold text-black text-lg">
              N
            </div>
            <span className="text-lg font-bold tracking-tighter">NIA DIGITAL</span>
          </div>

          <div className="flex gap-8 text-sm text-white/40">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">Conditions</a>
          </div>

          <p className="text-sm text-white/20">
            © 2024 NIA Digital. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
