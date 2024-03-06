<script lang="ts">
  import * as ContextMenu from "@ui/context-menu"
</script>


<section class=" relative flex h-full w-full flex-col">
	<div class="h-full overflow-scroll px-10 pt-6">
		<div class="space-y-4">
			{#each Array(10) as item}
				<ContextMenu.Root>
					<ContextMenu.Trigger class="w-full">
						<div
							class="bg-primary text-primary-foreground ml-auto flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm"
						>
							Hi, how can I help you today? Hi, how can I help you today? Hi, how can I help you
							today? Hi, how can I help you today?
						</div>
					</ContextMenu.Trigger>
					<ContextMenu.Content>
						<ContextMenu.Item class="cursor-pointer">Delete</ContextMenu.Item>
						<ContextMenu.Item class="cursor-pointer">Select</ContextMenu.Item>
					</ContextMenu.Content>
				</ContextMenu.Root>

				<ContextMenu.Root>
					<ContextMenu.Trigger class="w-full">
						<div
							class="bg-muted flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm"
						>
							What seems to be the problem? What seems to be the problem? What seems to be the
							problem? What seems to be the problem? What seems to be the problem? What seems to be
							the problem? What seems to be the problem? What seems to be the problem? What seems to
							be the problem? What seems to be the problem? What seems to be the problem?
						</div>
					</ContextMenu.Trigger>
					<ContextMenu.Content>
						<ContextMenu.Item class="cursor-pointer">Reply</ContextMenu.Item>
						<ContextMenu.Item class="cursor-pointer">Delete</ContextMenu.Item>
						<ContextMenu.Item class="cursor-pointer">Select</ContextMenu.Item>
					</ContextMenu.Content>
				</ContextMenu.Root>
			{/each}
		</div>
	</div>
	<div class="mb-24 w-full px-10">
		<!-- <Input class="mx-6" type="text" placeholder="message ...." /> -->
		<form class="flex w-full items-center space-x-2">
			<input
				class="border-input placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full flex-1 rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50"
				id="message"
				placeholder="Type your message..."
				autocomplete="off"
			/>
			<button
				type="submit"
				tabindex="0"
				class="focus-visible:ring-ring bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-9 w-9 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50"
				data-button-root=""
				><svg
					width="24"
					height="24"
					class="h-4 w-4"
					role="img"
					aria-label="paper plane"
					viewBox="0 0 15 15"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
					><path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M1.20308 1.04312C1.00481 0.954998 0.772341 1.0048 0.627577 1.16641C0.482813 1.32802 0.458794 1.56455 0.568117 1.75196L3.92115 7.50002L0.568117 13.2481C0.458794 13.4355 0.482813 13.672 0.627577 13.8336C0.772341 13.9952 1.00481 14.045 1.20308 13.9569L14.7031 7.95693C14.8836 7.87668 15 7.69762 15 7.50002C15 7.30243 14.8836 7.12337 14.7031 7.04312L1.20308 1.04312ZM4.84553 7.10002L2.21234 2.586L13.2689 7.50002L2.21234 12.414L4.84552 7.90002H9C9.22092 7.90002 9.4 7.72094 9.4 7.50002C9.4 7.27911 9.22092 7.10002 9 7.10002H4.84553Z"
					></path></svg
				> <span class="sr-only">Send</span></button
			>
		</form>
	</div>
</section>
