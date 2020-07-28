<template>
	<div class="inicio">
        <h2>Início</h2>
		<hr>
		<button sucesso @click="Ir">Ir</button>
	</div>
</template>

<script>
export default {
	methods: {
		Ir() {
			this.$router.push('/usuario')
		}
	}
}
</script>

<style>
	
</style>
