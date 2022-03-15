const Tags = ({ titles }: { titles: string[] }) => (
  <ul>
    {titles.map((title) => (
      <Tag title={title} key={title} />
    ))}
  </ul>
);
export const Tag = ({ title }: { title: string }) => (
  <li className="inline-block p-1 mx-2 bg-slate-400 rounded-lg border">
    {title}
  </li>
);

export default Tags;
