<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper" >
                <div class="modal-container">
                    <div class="modal-header">
                        <slot name="header"> default header </slot>
                        <button
                                class="modal-default-button"
                                @click="$emit('close')"
                            >
                                Close
                            </button>
                    </div>

                    <div class="modal-body">
                        <slot name="body"> default body </slot>
                    </div>

                    <div class="modal-footer">
                        <slot name="footer">
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>
<style lang="scss">
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;

    * {
      outline: none;
    }
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.modal-container {
    max-width: 800px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 80vh;
}
.modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        padding: 10px 20px;
        background-color: var(--highlight);
        color: white;
        border-radius: 10px;
        border: none;
        outline: none;
        transform: translateY(-10px);
        cursor: pointer;
        position: absolute;
        top: 20px;
        right: 20px;

        &:active {
            background-color: white;
            color: grey;
        }
    }
}
.modal-header h3 {
    margin-top: 0;
    color: var(--highlight);
}

.modal-body {
    margin: 20px 0;
    img {
        height: 400px;
    }
}

.modal-default-button {
    float: right;
    
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */
.modal-footer {
  padding: 20px 0;
  
}
.modal-enter {
    opacity: 0;
}

.modal-leave-active {
    opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
@media only screen and (max-width: 872px) {
    .modal-container {
        max-width: 600px;
        max-height: 90vh;
    }

    .modal-body {
        img {
            height: 400px;
        }
    }
}

@media only screen and (max-width: 672px) {
    .modal-container {
        max-width: 500px;
        max-height: 90vh;
    }

    .modal-body {
        img {
            height: 300px;
        }
    }
}


@media only screen and (max-width: 672px) {
    .modal-container {
        max-width: 480px;
        max-height: 90vh;
    }

    .modal-body {
        img {
            height: 200px;
        }
    }
}

@media only screen and (max-width: 490px ) {
    .modal-container {
        max-width: 280px;
        max-height: 100vh;
    }

    .modal-body {
        img {
            height: 200px;
        }
    }
}
</style>