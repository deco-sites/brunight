export interface Props {
	title: string
	subTitle?: string
}

export default function SectionTitle({ title, subTitle }: Props) {
	return (
		<div class="w-full max-w-screen-2xl px-7 mx-auto my-20 lg:my-[7.5rem] px-6">
			<h2 class="font-bold w-full text-center md:my-5 text-[7.5vw] lg:text-[2rem]">
				{title}
			</h2>
			{subTitle && (
				<p class="font-medium text-lg text-center mt-7">{subTitle}</p>
			)}
		</div>
	)
}
