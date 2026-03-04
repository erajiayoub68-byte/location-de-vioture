export const revalidate = 3600;

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  return (
    <article className="container card">
      <h1>{params.slug}</h1>
      <p>Table of contents + internal links + article schema ready.</p>
    </article>
  );
}
