<script lang="ts">
	import { FacebookAuth, GoogleAuth } from '$components';
</script>


<main class="grid place-items-center container mx-auto h-full">
	<div class="space-y-5 variant-glass-primary w-[90%] sm:w-2/3 lg:w-1/2 xl:w-1/3 p-7 sm:p-10 rounded-2xl">
		<h1 class="text-2xl lg:text-3xl text-center">Iniciar sesión</h1>

		<div class="grid items-center gap-2">
			<GoogleAuth />

			<FacebookAuth />
		</div>

		<label class="label">
			<span>Usuario</span>

			<input
				class		= "input variant-ghost-primary"
				title		= "Usuario"
				type		= "text"
				placeholder	= "Ingresa usuario"
			/>
		</label>

		<label class="label">
			<span>Constraseña</span>

			<input
				class		= "input variant-ghost-primary"
				title		= "Contraseña"
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
