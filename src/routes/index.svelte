<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const prerender = true;

	export const load: Load = async ({ fetch }) => {
		const res = await fetch('/api/getLinks').then((r) => r.json());
		return {
			status: 200,
			props: {
				links: res
			}
		};
	};
</script>

<script lang="ts">
	import { Body } from 'svelte-body';
	export let links: Record<string, any>[];

	const age = (date: string) => {
		const now = new Date();
		const then = new Date(date);
		const diff = now.getTime() - then.getTime();
		const days = Math.floor(diff / (1000 * 60 * 60 * 24));
		return Math.floor(days / 365);
	};
</script>

<Body class="bg-secondary-100" />
<svelte:head>
	<title>Mohammed Ali Agha | Links</title>
	<meta name="description" content="Links for most of my online presence" />
</svelte:head>

<div class="container max-w-screen-md py-4 space-y-4">
	<section
		class="bg-primary text-primary-content p-8 flex flex-col items-center justify-center space-y-4 rounded"
	>
		<img
			src="https://pbs.twimg.com/profile_images/1353029046641291265/J4Tg3f_z_400x400.jpg"
			alt="Profile piture"
			class="max-h-48 w-auto object-contain rounded-full "
		/>
		<h1 class="text-2xl font-semibold text-center">
			<span class="whitespace-nowrap">Mohammed</span>
			<span class="whitespace-nowrap">Ali Agha</span>
		</h1>
		<p class="text-center">
			<span class="whitespace-nowrap">{age('2004 10 03')} y/o |</span>
			<span class="whitespace-nowrap"> Front-end developer |</span>
			<span class="whitespace-nowrap">Serverless FTW | </span>
			<span class="whitespace-nowrap">Liverpool fan</span>
		</p>
	</section>
	<section>
		<h2 class="text-xl font-bold text-primary mb-2">My links</h2>
		<ul class="marker:text-primary space-y-1">
			{#each links as link (link.id)}
				<li>
					<a
						href={link.url}
						target="_blank"
						rel="noopener noreferrer external"
						class="underline underline-offset-[6px] decoration-primary decoration-2"
					>
						{link.title}
					</a>
				</li>
			{/each}
		</ul>
	</section>
</div>
