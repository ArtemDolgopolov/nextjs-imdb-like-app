import { notFound } from "next/navigation"

type Props = {
 params: {
  term: string;
 };
};

export default function SearchPage({ params: {term} }: Props) {
  if (!term) notFound()

  const termToUse = decodeURI(term)

  return (
    <div>Search results for {termToUse}</div>
  )
}