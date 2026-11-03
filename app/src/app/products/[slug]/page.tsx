type Props = { params: Promise<{ slug: string }> };

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const name = decodeURIComponent(slug).replace(/-/g, " ");
  return (
    <>
      <h1 style={{ textTransform: "capitalize" }}>{name}</h1>
      <p className="lead">Check the breadcrumb above: it is built from the real URL.</p>
    </>
  );
}
