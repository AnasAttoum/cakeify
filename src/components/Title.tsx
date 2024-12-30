export default function Title({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) {
  return (
    <div className="text-center mt-10 mb-5">
      <span className="uppercase text-gray-500 font-bold">{subTitle}</span>
      <h1 className="text-primary font-extrabold text-3xl italic">{title}</h1>
    </div>
  );
}
