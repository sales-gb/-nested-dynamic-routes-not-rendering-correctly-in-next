import Link from "next/link";

export default function Categories() {
  return (
    <div className="p-8">
      <h1>Categories</h1>
      <ul>
        <li>
          <Link href="/products/categories/1">Category 1</Link>
        </li>
      </ul>
    </div>
  );
}
