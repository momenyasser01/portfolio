interface TagProps {
  name: string;
}

const Tag = ({ name }: TagProps) => {
  return (
    <div className="flex justify-center items-center rounded-full dark:bg-gray-600/25 bg-gray-100 dark:text-white text-[#0D0D0D] px-3 min-w-10 h-6">
      <p className="font-medium text-[8px] md:text-[10px] lg:text-[12px]">{name}</p>
    </div>
  );
};

export default Tag;
