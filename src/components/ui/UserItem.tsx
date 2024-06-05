"use client";
export default function UserItem(){
        return <div className="flex justify-between items-center gap-2 border rounded-xl p-2">
            <div className="avater rounded-full min-h-12 min-w-12 bg-emerald-500 text-white font-[700] flex items-center justify-center">
                 M-H
            </div>
            <div className="grow">
                <p className="text-[16px] font-bold">Mohamed Mansour</p>
                <p className="text-[12px] text-neutral-500">Mansour@gmail.com</p>
            </div>
        </div>
}