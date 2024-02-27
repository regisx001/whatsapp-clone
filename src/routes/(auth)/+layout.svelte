<script lang="ts">
	import { RandomQuote } from '@widgets';
	import { base } from '$app/paths';
</script>

<div
	class="container relative grid h-[100%] flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0"
>
	<div class="bg-muted relative hidden h-full flex-col p-10 text-white lg:flex dark:border-r">
		<div
			class="<!-- else content here --> absolute inset-0
			bg-cover"
			style="
				background-image:
					url(https://images.unsplash.com/photo-1590069261209-f8e9b8642343?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80);"
		/>
		<div class="relative z-20 flex items-center text-lg font-medium">New Generation Whatsapp</div>
		<div class="relative z-20 mt-auto">
			<!-- Quote start -->
			<RandomQuote />
			<!-- Quote end -->
		</div>
	</div>
	<div class="lg:p-8">
		<div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[450px]">
			<div class="flex flex-col space-y-2 text-center">
				<h1 class="text-2xl font-semibold tracking-tight">Create an account</h1>
				<p class="text-muted-foreground text-sm">Enter your email below to create your account</p>
			</div>

			<slot />

			<p class="text-muted-foreground px-8 text-center text-sm">
				By signing up, you agree to our{' '}
				<a href={base} class="hover:text-primary underline underline-offset-4">
					Terms of Service
				</a>{' '}
				and{' '}
				<a href={base} class="hover:text-primary underline underline-offset-4"> Privacy Policy </a>
				.
			</p>
		</div>
	</div>
</div>
