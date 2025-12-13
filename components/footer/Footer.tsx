export default function Footer() {
  return (
    <footer className="border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-6 text-center">
        <p className="text-slate-400 text-sm">
          © {new Date().getFullYear()} Harsh Chauhan | All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
