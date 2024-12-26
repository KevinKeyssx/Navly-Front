<script lang="ts">
	import FacebookIcon from "../../icons/FacebookIcon.svelte";
	import GoogleIcons	from "../../icons/GoogleIcons.svelte";
</script>


<main class="grid place-items-center container mx-auto h-full">
	<div class="space-y-5 variant-ghost-primary w-[40%] mt-10 p-10 rounded-2xl">
		<h1 class="text-3xl text-center">Iniciar sesión</h1>

		<div class="mx-auto flex items-center justify-center gap-5">
			<button class="btn btn-icon variant-ghos">
				<GoogleIcons />
			</button>

			<button class="btn btn-icon variant-ghos">
				<FacebookIcon />
			</button>
		</div>

		<label class="label">
			<span>Usuario</span>

			<input
				class		= "input variant-ghost-primary"
				title		= "Input"
				type		= "text"
				placeholder	= "Ingresa usuario"
			/>
		</label>

		<label class="label">
			<span>Constraseña</span>

			<input
				class		= "input variant-ghost-primary"
				title		= "Input"
				type		= "text"
				placeholder	= "Ingrese contraseña"
			/>
		</label>

		<div class="flex items-center w-full gap-3">
			<button class="btn variant-ghost-secondary w-full">
				Crear Cuenta
			</button>

			<button class="btn variant-ghost-secondary w-full">
				Comenzar
			</button>
		</div>
	</div>
</main>
