import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "2rem 4rem",
        background: "black",
      }}
    >
      <Link href="/">
        <h2 style={{ color: "white", fontSize: "2rem" }}>E-commerce</h2>
      </Link>
      <Link href="/cart" className="text-lg border border-green-500">
        <h2 style={{ color: "white", fontSize: "2rem" }}>Cart</h2>
      </Link>
    </nav>
  );
}
