export default {
    methods: {
        showToast(variant, title, descripcion) {
            this.$root.$bvToast.toast(descripcion, {
                title: title,
                autoHideDelay: 3000,
                variant: variant,
                solid: true
            });
        }
    }
}