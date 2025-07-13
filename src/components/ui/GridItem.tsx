interface GridItemProps {
  title?: string;
  description?: string;
  progress?: number;
  icon?: React.ReactNode;
  status?: string;
  color?: string;
  rowSpan?: number;
  colSpan?: number;
  children?: React.ReactNode;
}

export function getStatusClass(status?: string): string {
  switch (status?.toLowerCase()) {
    case "learning":
      return "text-sky-700 bg-sky-200 border-sky-400 dark:text-sky-300 dark:bg-sky-800/40 dark:border-sky-600";
    case "proficient":
      return "text-violet-700 bg-violet-200 border-violet-400 dark:text-violet-300 dark:bg-violet-800/40 dark:border-violet-600";
    case "expert":
      return "text-green-700 bg-green-200 border-green-400 dark:text-green-300 dark:bg-green-800/40 dark:border-green-600";
    case "soon":
      return "text-gray-700 bg-gray-200 border-gray-400 dark:text-gray-300 dark:bg-gray-800/40 dark:border-gray-600";
    default:
      return "text-primary dark:text-primary-dark bg-neutral-300/40 dark:bg-neutral-700/40 border-neutral-300 dark:border-neutral-700";
  }
}

export default function GridItem({
  title,
  description,
  progress,
  icon,
  status,
  color,
  rowSpan = 1,
  colSpan = 1,
  children,
}: GridItemProps) {
  return (
    
    <div
      className={`group relative p-4 bg-neutral-300/20 dark:bg-neutral-700/20 border border-neutral-300 dark:border-neutral-700 rounded-xl backdrop-blur-md shadow-neutral-900/50 dark:shadow-neutral-600/50 shadow-md overflow-hidden col-span-${colSpan} row-span-${rowSpan} flex flex-col justify-between`}
    >
      {icon && (
        <div className="flex flex-row items-start justify-between">
          <div
            className={`text-5xl mb-2 bg-white dark:bg-black p-2 rounded-xl shadow-neutral-900/50 dark:shadow-neutral-600/50 shadow-sm ${color} transition ease-in-out duration-500`}
          >
            {icon}
          </div>
          {status && (
  <p className={`text-sm font-bold rounded-full p-1 px-2 border backdrop-blur-md ${getStatusClass(status)}`}>
    {status}
  </p>
)}
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
          <div className="flex justify-between font-serif italic">
            <p>Mastery:</p>
            <p>{progress}%</p>
          </div>
          <div className="w-full h-2 mt-2 bg-neutral-300/40 dark:bg-neutral-700/40 border border-neutral-300 dark:border-neutral-700 rounded-full backdrop-blur-md shadow-md overflow-hidden">
            <div
              className="h-full bg-accent rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {children}
    </div>
  );
}
