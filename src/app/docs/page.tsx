export default async function Docs({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const { lang = "ru" } = await searchParams;

  return <>Документация на {lang} языке</>;
}
