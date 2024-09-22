"use client";
import { cn } from "../../@/lib/utils";


export function CardDemo() {
  return (
    <div className="max-w-xs w-full">
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)] bg-cover",
          
          "before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
        )}
      >
         <div className="relative z-50 p-6 rounded-lg bg-secondary bg-opacity-70">
          <h1 className="font-bold text-xl md:text-3xl text-gray-50 mb-2">
            Movie Title
          </h1>

          <div className="grid grid-cols-1 gap-4">
            <div className="font-normal text-base text-gray-200">
              <span className="font-semibold text-gray-50">Category:</span> Action
            </div>
            <div className="font-normal text-base text-gray-200">
              <span className="font-semibold text-gray-50">Rating:</span> 4.5/5
            </div>
            <div className="font-normal text-base text-gray-200 col-span-2">
              <span className="font-semibold text-gray-50">Release:</span> 2023
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
