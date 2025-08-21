export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full py-6 text-center">
      <p className="text-sm">
        Copyright © {year} | Built by{" "}
        <span className="font-semibold">Mohammed Arfat</span>
      </p>
    </footer>
  );
}
