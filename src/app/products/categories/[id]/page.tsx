export default function CategoriaPage({ params }: { params: { id: string } }) {
  return (
    <div className="p-8">
      <h1>Categoria {params.id}</h1>
    </div>
  );
}
