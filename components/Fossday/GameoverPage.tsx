"use client";
import React from "react";

export default function GameoverPage() {
	return (
		<div className="w-screen h-screen overflow-hidden relative p-4 mt-7 flex items-start justify-center">
			<div className="absolute bottom-0">
				<img src="./fossday/gameover.svg" alt="" className=" scale-150" />
			</div>
			<div className="text-4xl md:text-5xl text-white font-pixelify font-medium text-center p-4 md:w-[50vw] mt-9 flex flex-col items-center justify-center gap-9">
				<p className="">
					To contact us or to ask Any Questions , Join this group
				</p>
				{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
				<button
					className="px-5 py-2 bg-white text-[#4fadf5] flex items-center justify-center rounded-full"
					onClick={() => {
						window.location.href = "https://chat.whatsapp.com/group-link";
					}}
				>
					Join Group
				</button>
			</div>
		</div>
	);
}
