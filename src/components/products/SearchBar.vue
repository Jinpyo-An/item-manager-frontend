<template>
	<div class="search-container">
		<label for="search" class="search-label">Search</label>
		<div class="search-input-wrapper">
			<i class="fas fa-search search-icon">
				<font-awesome-icon :icon="['fas', 'magnifying-glass']" />
			</i>
			<input
				type="text"
				id="search"
				class="search-input"
				placeholder="검색할 전자 제품을 입력하세요."
				v-model="searchQuery"
				@input="emitSearch"
			/>
		</div>
	</div>
</template>

<script setup>
import { ref, watch } from 'vue';

// 부모 컴포넌트로 검색어를 전달하기 위한 emit 사용
const emit = defineEmits(['search']);
const searchQuery = ref(''); // 검색어 입력 값

// 검색어가 변경될 때마다 부모 컴포넌트로 emit
function emitSearch() {
	emit('search', searchQuery.value);
}
</script>

<style scoped>
.search-container {
	margin: 10px;
	display: flex;
	flex-direction: column;
}

.search-label {
	font-weight: bold;
	font-size: 1.5rem;
	margin-bottom: 10px;
	font-family: Lexend, serif; /* Heading */
}

.search-input-wrapper {
	display: flex;
	align-items: center;
	border: 1px solid #ccc;
	border-radius: 8px;
	padding: 10px;
}

.search-icon {
	margin-right: 10px;
	color: #666;
	font-size: 1.2rem;
}

.search-input {
	border: none;
	outline: none;
	flex-grow: 1;
	font-size: 1rem;
}

.search-input::placeholder {
	color: #999;
}
</style>
