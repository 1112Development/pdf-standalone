<template>
  <label class="checkbox-container">{{ label }}
        <input type="checkbox" :checked="checked">
        <span class="checkmark"></span>
    </label>
</template>

<script>
export default {
    props: {
        label: {

        },
        checked: {

        }
    },
}
</script>

<style scoped>
    /* The container */
    .checkbox-container {
        display: flex;
        justify-content: space-between;
        position: relative;
        padding-left: 25px;
        margin-bottom: 2px;
        cursor: pointer;
        font-size: 1.6rem;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    /* Hide the browser's default checkbox */
    .checkbox-container input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    /* Create a custom checkbox */
    .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 15px;
        width: 15px;
        background-color: #fff;
        border: 1px solid #000;
    }

    /* On mouse-over, add a grey background color */
    .checkbox-container:hover input ~ .checkmark {
        /* background-color: #ccc; */
    }

    /* When the checkbox is checked, add a blue background */
    .checkbox-container input:checked ~ .checkmark {
        background-color: #fff;
        border: 1px solid #000;
    }

    /* Create the checkmark/indicator (hidden when not checked) */
    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }

    /* Show the checkmark when checked */
    .checkbox-container input:checked ~ .checkmark:after {
        display: block;
    }

    /* Style the checkmark/indicator */
    .checkbox-container .checkmark:after {
        left: 8px;
        top: -1px;
        width: 5px;
        height: 9px;
        border: solid #000;
        border-width: 0 2px 2px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
</style>