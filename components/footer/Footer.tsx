export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-6 text-center">
      <p className="text-slate-400 text-sm">
        © {new Date().getFullYear()} Harsh Chauhan. All rights reserved.
      </p>
    </footer>
  );
}
