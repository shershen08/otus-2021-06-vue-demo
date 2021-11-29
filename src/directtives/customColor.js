const cc = {
    props: ['color', 'size'],
    mounted (el, binding) {

        //start some logic

        //console.log(el.getAttribute('color'))
        el.style.backgroundColor = el.getAttribute('color') || '#ffcc00';
        el.style.fontSize = (el.getAttribute('size') || 12) + 'px';
    },
    unmounted(){

        //close some logic
    }
}


const focus = {
    mounted (el, binding) {
        el.focus()
    }
}

export const plugin = {
    install: (app, options) => {

       // console.log(options)

        app.config.globalProperties.foo = 42
        app.config.globalProperties.capitalise = (str) => str.toUpperCase();

        //API of my service
        app.config.globalProperties.getData = () => {}
        app.config.globalProperties.removeData = () => {}

        app.directive('custom-color', cc)

      //  if(options.useFocus) {
            app.directive('focus', focus)
      //  }

        app.mixin({
            created() {
          //   console.log('created hook', this.$props); //i18n, routing, state
            }
        });
    }
}

export default cc;