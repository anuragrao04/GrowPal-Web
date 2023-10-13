<script>
	import { signInWithPopup, GoogleAuthProvider, signOut, } from "firebase/auth";
	import { auth, provider } from "../../lib/firebase";
	import { user } from "../../lib/store";
	import { goto } from "$app/navigation";


	async function googleLogin() {
		const result = await signInWithPopup(auth, provider);
		const credential = GoogleAuthProvider.credentialFromResult(result);
		if (credential === null) throw new Error("Credential is null");

		$user = result.user;
		goto("/");
	}
	async function logout() {
		await signOut(auth);
		$user = null;
	}	

</script>

<section>
	{#if $user}
		<h1>Welcome, {$user.displayName}</h1>
		<button on:click={logout}>Logout</button>
	{:else}
		<div class="google-login">
			<button on:click={googleLogin} class="google-btn">
				<img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt=""/>
				<p>Sign in with Google</p>
			</button>
		</div>
	{/if}
</section>

<style>
	.google-login {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.google-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 2em;
		border-width: 0;
		padding: 0.5em 1em;
		background-color: #fff;
		box-shadow: 0 0 0 1px #dadce0, 0 2px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15);
		cursor: pointer;
	}
	.google-icon {
		width: 1.5em;
		height: 1.5em;
		margin-right: 0.5em;
	}
</style>