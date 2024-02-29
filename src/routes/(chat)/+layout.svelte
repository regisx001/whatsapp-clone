<script lang="ts">
	import { MoreVertical, CircleUserRound, UsersRound } from 'lucide-svelte';
	import { Button } from '@ui/button';
	import * as Resizable from '@ui/resizable';
	import * as Avatar from '@ui/avatar';
	import { Input } from '@ui/input';
	import * as Tabs from '@ui/tabs';
	import { Badge } from '@ui/badge';

	import BeamBg from '@main/BeamBG.svelte';
	// Functions
	let hiding_var = '';
	function hideOnCollapse() {
		hiding_var = 'hidden';
	}
	function showOnExpand() {
		hiding_var = '';
	}
</script>

<div class=" h-full lg:mx-[10%]">
	<Resizable.PaneGroup direction="horizontal" class="h-full w-full border">
		<Resizable.Pane
			onCollapse={() => {
				console.log('Collapsed');
				hideOnCollapse();
			}}
			onExpand={() => {
				showOnExpand();
			}}
			collapsible
			collapsedSize={10}
			minSize={18}
			defaultSize={25}
		>
			<!-- Navbar Left Started -->
			<section class="flex h-20 w-full flex-row items-center justify-between border-b">
				<button
					onclick={() => {
						console.log('open profile');
					}}
					class="h-full p-2"
				>
					<Avatar.Root class="h-full w-full ">
						<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
						<!-- <Avatar.Fallback>CN</Avatar.Fallback> -->
					</Avatar.Root>
				</button>

				<div
					role="none"
					aria-orientation="vertical"
					aria-hidden="true"
					data-orientation="vertical"
					data-melt-separator=""
					data-separator-root=""
					class="bg-border mx-1 h-6 w-[1px] shrink-0 {hiding_var}"
				></div>

				<h1 class="text-xl font-semibold {hiding_var}">Bruce Wayns</h1>
				<div class="mx-1">
					<Button class=" h-14 w-14 rounded-full" variant={'ghost'}>
						<MoreVertical />
					</Button>
				</div>
			</section>
			<!-- Navbar Left End -->

			<div
				class="flex h-full w-full flex-col overflow-scroll {hiding_var == '' ? 'p-6' : 'p-2 pt-6'}"
			>
				<Input type="text" placeholder="Search" class="my-3  {hiding_var}" />

				<Tabs.Root value="account" class="">
					<Tabs.List class="grid w-full grid-cols-2">
						<Tabs.Trigger value="account">
							<CircleUserRound size={20} />
						</Tabs.Trigger>
						<Tabs.Trigger value="password">
							<UsersRound size={20} />
						</Tabs.Trigger>
					</Tabs.List>
					<Tabs.Content class="w-full" value="account">
						<section class="flex flex-col gap-3 pb-20">
							<Button class="h-18 bg-accent w-full justify-between" variant={'outline'}>
								<div class="flex items-center justify-center">
									<Avatar.Root>
										<Avatar.Image
											src="https://avatars.githubusercontent.com/u/98271602?v=4"
											alt="@shadcn"
										/>
										<!-- <Avatar.Fallback>CN</Avatar.Fallback> -->
									</Avatar.Root>
									<div
										role="none"
										aria-orientation="vertical"
										aria-hidden="true"
										data-orientation="vertical"
										data-melt-separator=""
										data-separator-root=""
										class="bg-border mx-2 h-6 w-[1px] shrink-0 {hiding_var}"
									></div>
								</div>
								<h1 class="font-bold {hiding_var}">Sousou HRJ</h1>
								<Badge class="bg-green-600" variant="secondary" />
							</Button>
							{#each Array(20) as item}
								<Button class="h-18 w-full justify-between" variant={'outline'}>
									<div class="flex items-center justify-center">
										<Avatar.Root>
											<Avatar.Image
												src="https://avatars.githubusercontent.com/u/98271602?v=4"
												alt="@shadcn"
											/>
											<!-- <Avatar.Fallback>CN</Avatar.Fallback> -->
										</Avatar.Root>
										<div
											role="none"
											aria-orientation="vertical"
											aria-hidden="true"
											data-orientation="vertical"
											data-melt-separator=""
											data-separator-root=""
											class="bg-border mx-2 h-6 w-[1px] shrink-0 {hiding_var}"
										></div>
									</div>
									<h1 class="font-bold {hiding_var}">Regisx001</h1>
									<Badge variant="secondary" />
								</Button>
							{/each}
						</section>
					</Tabs.Content>
					<Tabs.Content value="password">Password</Tabs.Content>
				</Tabs.Root>
			</div>
		</Resizable.Pane>
		<Resizable.Handle withHandle />
		<Resizable.Pane minSize={65} defaultSize={75}>
			<section class="flex h-20 w-full flex-row border-b">
				<button
					onclick={() => {
						console.log('open profile');
					}}
					class="relative mx-4 h-full p-2"
				>
					<Avatar.Root>
						<Avatar.Image
							src="https://avatars.githubusercontent.com/u/98271602?v=2"
							alt="@shadcn"
						/>
						<!-- <Avatar.Fallback>CN</Avatar.Fallback> -->
					</Avatar.Root>
				</button>
				<div class="grid place-items-center">
					<h1 class="my-auto pt-4 text-xl font-bold">Sousou HRJ</h1>
					<p class="pb-2 opacity-65">Last seen recently</p>
				</div>
				<!-- <Badge class="rounded-full bg-green-600" variant="secondary" /> -->
			</section>
			<slot />
		</Resizable.Pane>
	</Resizable.PaneGroup>
</div>
