interface BentoItemProps {
  title?: string;
  description?: string;
  progress?: number;
  icon?: React.ReactNode;
  color?: string;
  rowSpan?: number;
  colSpan?: number;
  children?: React.ReactNode;
}

export default function BentoItem({
  title,
  description,
  progress,
  icon,
  color,
  rowSpan = 1,
  colSpan = 1,
  children,
}: BentoItemProps) {
  return (
    <div
      className={`relative p-4 bg-neutral-300/20 dark:bg-neutral-700/20 border border-neutral-300 dark:border-neutral-700 rounded-xl backdrop-blur-md shadow-md overflow-hidden col-span-${colSpan} row-span-${rowSpan} flex flex-col justify-between`}
    >
      {icon && (
        <div className="flex flex-row items-start">
          <div
            className={`text-5xl mb-2 bg-white dark:bg-black p-2 rounded-xl hover:${color}`}
          >
            {icon}
          </div>
        </div>
      )}
      {title && <h3 className="text-xl font-bold">{title}</h3>}
      {description && (
        <p className="text-sm text-secondary dark:text-secondary-dark">
          {description}
        </p>
      )}
      {typeof progress === "number" && (
        <div>
          <div className="flex justify-between italic">
            <p>Mastery:</p>
            <p>{progress}%</p>
          </div>
          <div className="w-full h-2 mt-2 bg-neutral-300/40 dark:bg-neutral-700/40 border border-neutral-300 dark:border-neutral-700 rounded-full backdrop-blur-md shadow-md overflow-hidden">
            <div
              className="h-full bg-accent dark:bg-accent-dark rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {children}
    </div>
  );
}
