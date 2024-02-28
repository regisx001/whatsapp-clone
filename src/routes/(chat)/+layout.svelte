<script lang="ts">
	import * as Resizable from '@ui/resizable';
	import * as Avatar from '@ui/avatar';
</script>

<div class=" h-full lg:mx-[12%]">
	<Resizable.PaneGroup direction="horizontal" class="h-full w-full border">
		<Resizable.Pane
			onCollapse={() => {
				console.log('Collapsed');
			}}
			collapsible
			collapsedSize={6}
			minSize={15}
			defaultSize={25}
		>
			<!-- Navbar Left Started -->
			<section class="flex h-12 w-full flex-row items-center justify-center border-b lg:h-20">
				<button
					onclick={() => {
						console.log('open profile');
					}}
					class="lg:h-full lg:p-2"
				>
					<Avatar.Root class="lg:h-full lg:w-full ">
						<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
						<Avatar.Fallback>CN</Avatar.Fallback>
					</Avatar.Root>
				</button>
			</section>
			<!-- Navbar Left End -->

			<div class="flex h-full items-center justify-center p-6">
				<span class="font-semibold">Sidebar</span>
			</div>
		</Resizable.Pane>
		<Resizable.Handle withHandle />
		<Resizable.Pane minSize={65} defaultSize={75}>
			<section class="grid h-12 w-full place-items-center border-b lg:h-20">Navbar Right</section>

			<slot />
		</Resizable.Pane>
	</Resizable.PaneGroup>
</div>
