<template>
    <div class="container">
        <div class="select">
            Система оцiнювання:
            <select v-model="systSelectVal">
                <option value="All">All</option>
                <option v-for="option in systemOptions" :value="option" :key="option">{{ option }}</option>
            </select>
        </div>
        <div class="select">
            Категорiя:
            <select v-model="statusSelectVal">
                <option value="All">All</option>
                <option v-for="option in statusOptions" :value="option" :key="option">{{ option }}</option>
            </select>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'StudentsItem',

    data() {
        return {
            systemOptions: [12, 5],
            statusOptions: ['Вiдмiннiк', 'Хорошист', 'Трiйочник', 'Двiйочник', 'Блатнiк'],
        }
    },

    computed: {
        ...mapGetters(['getSelectedSystemVal', 'getSelectedStatusVal']),
        systSelectVal: {
            get() {
                return this.getSelectedSystemVal
            },
            set(val) {
                this.filteredBySystem(val)
            },
        },
        statusSelectVal: {
            get() {
                return this.getSelectedStatusVal
            },
            set(val) {
                this.filteredByStatus(val)
            },
        },
    },
    methods: {
        ...mapActions(['filteredBySystem', 'filteredByStatus']),
    },
}
</script>
<style lang="scss" scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;

    & .select {
        display: flex;
        flex-direction: column;
    }
}
</style>
