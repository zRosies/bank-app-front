const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-skelAnimation before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function CardSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm w-[300px]`}
    >
      <div className="flex p-4">
        <div className="h-5 w-5 rounded-md bg-gray-200" />
        <div className="ml-2 h-6 w-16 rounded-md bg-gray-200 text-sm font-medium" />
      </div>
      <div className="flex items-center justify-center truncate rounded-xl bg-white px-4 py-8">
        <div className="h-7 w-20 rounded-md bg-gray-200" />
      </div>
    </div>
  );
}

export function TransactionSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm max-w-[400px] gap-5`}
    >
      <div className="flex p-4">
        <div className="h-5 w-5 rounded-md bg-gray-200" />
        <div className="ml-2 h-6 w-16 rounded-md bg-gray-200 text-sm font-medium" />
      </div>
      <div className="flex items-start justify-start truncate rounded-xl bg-white px-4 py-2 gap-2">
        <div className="h-7 w-7 bg-gray-200 rounded-[50%]" />
        <div className="h-4 w-[9rem] rounded-md bg-gray-200" />
      </div>
      <div className="flex items-start justify-start truncate rounded-xl bg-white px-4 py-2 gap-2">
        <div className="h-7 w-7 bg-gray-200 rounded-[50%]" />
        <div className="h-4 w-20 rounded-md bg-gray-200" />
      </div>
      <div className="flex items-start justify-start truncate rounded-xl bg-white px-4 py-2 gap-2">
        <div className="h-7 w-7 bg-gray-200 rounded-[50%]" />
        <div className="h-4 w-[9rem] rounded-md bg-gray-200" />
      </div>
      <div className="flex items-start justify-start truncate rounded-xl bg-white px-4 py-2 gap-2">
        <div className="h-7 w-7 bg-gray-200 rounded-[50%]" />
        <div className="h-4 w-[14rem] rounded-md bg-gray-200" />
      </div>
      <div className="flex items-start justify-start truncate rounded-xl bg-white px-4 py-2 gap-2">
        <div className="h-7 w-7 bg-gray-200 rounded-[50%]" />
        <div className="h-4 w-[10rem] rounded-md bg-gray-200" />
      </div>
      <div className="flex items-start justify-start truncate rounded-xl bg-white px-4 py-2 gap-2">
        <div className="h-7 w-7 bg-gray-200 rounded-[50%]" />
        <div className="h-4 w-[13rem] rounded-md bg-gray-200" />
      </div>
      <div className="flex p-4 bg-white justify-end">
        <div className="h-8 w-[8rem] rounded-md bg-gray-200 content-end flex"></div>
      </div>
    </div>
  );
}

export function ChartSkelecton() {
  return (
    <div
      className={`${shimmer} relative flex self-end overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm w-[370px] h-[500px] md:h-[400px] md:w-[600px] my-6`}
    >
      <div className="flex items-end  rounded-xl bg-white px-4 py-2 gap-7 w-full">
        <div className="h-[10rem] w-[1.2rem] rounded-md bg-gray-200" />
        <div className="h-[11.2rem] w-[1.2rem] rounded-md bg-gray-200" />
        <div className="h-[8rem] w-[1.2rem] rounded-md bg-gray-200" />
        <div className="h-[11rem] w-[1.2rem] rounded-md bg-gray-200" />
        <div className="h-[10rem] w-[1.2rem] rounded-md bg-gray-200" />
        <div className="h-[5rem] w-[1.2rem] rounded-md bg-gray-200" />
        <div className="h-[5rem] w-[1.2rem] rounded-md bg-gray-200" />
        <div className="h-[14rem] w-[1.2rem] rounded-md bg-gray-200" />
        <div className="h-[10rem] w-[1.2rem] rounded-md bg-gray-200" />
        <div className="h-[11rem] w-[1.2rem] rounded-md bg-gray-200" />
        <div className="h-[14rem] w-[1.2rem] rounded-md bg-gray-200" />
        <div className="h-[14rem] w-[1.2rem] rounded-md bg-gray-200" />
      </div>
    </div>
  );
}
