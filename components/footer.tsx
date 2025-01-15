export default function Footer() {
  return (
    <footer className="py-8 bg-black border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} RAGE EFFECT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
