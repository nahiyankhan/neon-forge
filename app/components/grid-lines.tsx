export const GridLines = ({ columns }: { columns: number }) => {
  return (
    <div className="w-screen h-screen absolute z-[-1] top-0 left-0 border-b border-divider">
      {Array.from({ length: columns - 1 }).map((_, i) => (
        <div
          key={i}
          className="absolute h-full flex"
          style={{
            transform: `translateX(calc((100vw - ${
              10 * (columns - 1)
            }px)/${columns} * ${i + 1} + ${i * 10}px))`,
          }}
        >
          <div className="h-full w-px bg-divider translate-x-[4px]" />
        </div>
      ))}
    </div>
  );
};
