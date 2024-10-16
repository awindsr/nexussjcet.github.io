import React from "react";

export default function AboutPage() {
	return (
		<div className="flex flex-col w-full min-h-screen p-4 items-center justify-around text-white font-pixelify">
			<div className="flex flex-col items-center justify-center text-center w-full lg:w-3/4 xl:w-1/2 mb-8 lg:mb-0 z-10">
				<h2 className="text-4xl sm:text-4xl md:text-6xl font-medium text-[#F0FF47] mb-4">
					What is FOSS DAY?
				</h2>
				<p className="text-base sm:text-lg md:text-xl lg:text-2xl">
					Dive into the world of open-source with The Nexus Project's debut
					event! Whether you’re a seasoned coder or just getting started,
					FOSSDAY offers something for everyone. Workshops for students and talk
					session from experinced developers around the FOSS community.
				</p>
			</div>
			<div className="flex flex-col items-center justify-center text-center w-full lg:w-3/4 xl:w-1/2">
				<h2 className="text-4xl sm:text-4xl md:text-6xl font-medium text-[#F0FF47] mb-4">
					What or Who is the Nexus Project?
				</h2>
				<p className="text-base sm:text-lg md:text-xl lg:text-2xl">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat atque
					magnam eum magni tenetur alias sunt nisi in suscipit nesciunt,
					provident consequatur a aspernatur modi neque deleniti ea libero,
					repellat molestias incidunt tempora itaque odio cum? Repellat veniam
					explicabo consequuntur.
				</p>
			</div>
		</div>
	);
}
