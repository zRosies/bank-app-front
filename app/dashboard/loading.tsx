import { AiOutlineLoading } from "react-icons/ai";
import {
  CardSkeleton,
  ChartSkelecton,
  TransactionSkeleton,
} from "../ui/utils/skelectons";

const Loading = () => {
  return (
    <>
      {/* @ts-ignore */}
      {/* <AiOutlineLoading className="h-12 w-12 animate-loading mx-auto my-[20rem] text-purple-700" /> */}

      <main className="md:my-20 w-[98%] md:w-full my-6 md:px-12">
        <p className="mx-4">Hello, </p>

        <section className="flex flex-col md:flex-row justify-between gap-2 w-full">
          <section className="flex flex-col gap-2">
            <CardSkeleton />
            <TransactionSkeleton />
          </section>
          <section className="flex flex-col-reverse md:flex-col w-[80%]">
            <section className="flex flex-col md:flex-row w-full justify-end gap-5 ">
              <CardSkeleton />
              <CardSkeleton />
            </section>
            <ChartSkelecton />
          </section>
        </section>
        {/* <CardSkeleton /> */}
      </main>
    </>
  );
};

export default Loading;
