<template>
    <div class="todo__list-item-toggle">
        <svg width="20" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 11.5L10.5 21.5L24 3" stroke="#DCDCDC" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </div>
</template>

<script>
export default {
    name: 'toggle-button',
    props: {
        todo: {
            type: Object,
            require: true,
        }
    }
}
</script>