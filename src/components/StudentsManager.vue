<template>
    <div class="container">
        <students-list />
        <students-filter />
    </div>
</template>
<script>
import StudentsList from './StudentsList'
import StudentsFilter from './StudentsFilter'
export default {
    name: 'StudentsManager',
    components: {
        StudentsList,
        StudentsFilter,
    },
}
</script>
<style lang="scss" scoped>
.container {
    max-width: 40%;
    margin: 0 auto;
}
</style>
