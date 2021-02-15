<template>
    <div class="footer">
        <p>{{(new Date).getFullYear()}} &copy; by Kate Awisan</p>
    </div>
</template>
<style lang="scss">
    .footer {
        display: flex;
        justify-content: center;
        align-items: center;
        bottom: 0;
        p {
            padding: 20px;
        }
    }
</style>