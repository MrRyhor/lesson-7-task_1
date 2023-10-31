<template>
    <div class="wrapper">
        <template v-if="getFilteredStudentsData.length">
            <div class="container" v-for="student in getFilteredStudentsData" :key="student.id">
                <ul>
                    <li>{{ student.name }}</li>
                </ul>
                <ul>
                    <li>{{ student.averageScore }}</li>
                </ul>
            </div>
        </template>
        <template v-else>
            <div class="empty-container">No results</div>
        </template>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: 'StudentsList',

    computed: {
        ...mapGetters(['getFilteredStudentsData']),
    },
    methods: {
        showStudentsData() {
            console.log(this.getFilteredStudentsData)
        },
    },
}
</script>
<style lang="scss" scoped>
.wrapper {
    margin-top: 20px;
    min-height: 400px;

    & .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-weight: 600;

        ul,
        li {
            list-style: none;
        }
    }

    & .empty-container {
        display: flex;
        align-items: center;
        justify-content: center;
        text-transform: uppercase;
        font-weight: 700;
        color: red;
    }
}
</style>
