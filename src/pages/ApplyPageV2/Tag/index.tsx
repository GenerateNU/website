import './style.css';

type TagProps = {
  title: string;
};

export default function Tag({ title }: TagProps) {
  return (
    <div className="tag-container">
      <div className="tag-text">{title}</div>
    </div>
  );
}
