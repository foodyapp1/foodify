<template functional>
    <footer class="footer section__footer">
        <div class="footer__content">
            <div class="footer__left">
                <span>Copyright &copy; dhaouiaziz</span>
            </div>
            <div class="footer__right">
                <span>Created with </span>
                <a href="https://github.com/dhaouiaziz13" target="_blank" class="nav__link">
                    <ion-icon name="heart" class="footer__icon"></ion-icon>
                </a>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
};
</script>

<style lang="scss">
@import '@/assets/scss/components/footer.scss';
</style>
