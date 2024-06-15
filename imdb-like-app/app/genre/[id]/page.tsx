type Props = {
 params: {
  id: string;
 },
 searchParams: {
  genre: string
 }
};

export default function GenrePage(
 { params: { id }, searchParams: { genre } }: Props) {
  return (
    <div>Id {id}, genre {genre}</div>
  )
}