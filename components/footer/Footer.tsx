export default function Footer() {
  return (
    <footer className="border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 text-center">
        <p className="text-slate-300 text-sm">
          Copyright © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-purple-400">
            Harsh Chauhan
          </span>{" "}
          | All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
