<script lang="ts">
	import { Button } from '@ui/button';
	import { Input } from '@ui/input';
	import { Label } from '@ui/label';
	import { cn } from '$lib/utils';
	import { Github, Facebook, Google } from '@icons';
	import { base } from '$app/paths';
	// import { pocketbase } from '$lib';

	let className: string | undefined | null = undefined;
	export { className as class };

	export let type: 'login' | 'register' = 'login';

	//  Login Handlers
	let Oauth2Providers = [{ name: 'Github' }, { name: 'Google' }, { name: 'Facebook' }];
	let isLoading = false;

	async function onSubmit() {
		isLoading = true;

		setTimeout(() => {
			isLoading = false;
		}, 3000);
	}
	async function loginWithGithub() {
		isLoading = true;
		setTimeout(() => {
			isLoading = false;
		}, 2000);
	}
</script>

<div class={cn('grid gap-6', className)} {...$$restProps}>
	<form>
		<div class="grid gap-3">
			<div class="grid gap-2">
				<Label class="sr-only" for="email">Email</Label>
				<Input
					id="email"
					placeholder="name@example.com"
					type="email"
					autocapitalize="none"
					autocomplete="email"
					autocorrect="off"
					disabled={isLoading}
				/>
				<Input
					id="password"
					placeholder="Password"
					type="password"
					autocapitalize="none"
					autocorrect="off"
					disabled={isLoading}
				/>
				{#if type !== 'login'}
					<Input
						id="passwordConfirm"
						placeholder="Password Confirm"
						type="password"
						autocapitalize="none"
						autocorrect="off"
						disabled={isLoading}
					/>
				{/if}
			</div>
			<Button disabled={isLoading}>
				{#if isLoading}
					Loading
				{:else}
					Sign In with Email
				{/if}
			</Button>
		</div>
	</form>

	<div class="relative">
		<div class="absolute inset-0 flex items-center">
			<span class="w-full border-t" />
		</div>

		<div class="relative flex justify-center text-xs uppercase">
			<span class="bg-background text-muted-foreground px-2"> Or continue with </span>
		</div>
	</div>

	<!-- Oauth2 Login Started -->
	<div class="flex flex-col gap-2 lg:grid lg:grid-cols-2">
		{#each Oauth2Providers as provider}
			<Button
				variant="outline"
				type="button"
				disabled={isLoading}
				on:click={() => {
					loginWithGithub();
				}}
			>
				{#if isLoading}
					Loading
				{:else}
					<div class="mx-2">
						{#if provider.name == 'Github'}
							<Github />
						{:else if provider.name == 'Google'}
							<Google />
						{:else}
							<Facebook />
						{/if}
					</div>
					<p>
						{' '}
						{provider.name}
					</p>
				{/if}
			</Button>
		{/each}
	</div>
	<!-- Oauth2 Login Started -->
</div>

<div class="grid place-items-center">
	<div>
		{#if type == 'login'}
			Don't have account yet ?
			<a class="hover:text-primary underline underline-offset-4" href="{base}/register">
				register now
			</a>
		{:else}
			Login to your account
			<a class="hover:text-primary underline underline-offset-4" href="{base}/login"> here </a>
		{/if}
	</div>
</div>
