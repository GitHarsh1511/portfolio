export default function Footer() {
  return (
    <footer className="border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 text-center mt-2.5 mb-[-175]">
        <p className="text-white-300 text-sm">
          Copyright © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-green-400">
            Harsh Chauhan
          </span>{" "}
          | All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
