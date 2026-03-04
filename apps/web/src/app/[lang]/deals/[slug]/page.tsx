export default function DealDetailsPage({ params }: { params: { slug: string } }) {
  return <article className="container card">Deal: {params.slug}</article>;
}
