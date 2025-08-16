interface TagProps {
  name: string;
}

const Tag = ({ name }: TagProps) => {
  return (
    <div className="flex justify-center items-center rounded-full dark:bg-gray-600/25 bg-gray-100/65 dark:text-white text-[#0D0D0D] px-3 h-6 w-auto">
      <p className="font-medium text-sm">{name}</p>
    </div>
  );
};

export default Tag;
