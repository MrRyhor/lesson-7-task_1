import { createStore } from 'vuex'
import { studentsList } from '../constants/studentsList.js'

export default createStore({
    state: {
        studentsData: [],
        filteredStudentsData: [],
        selectedSystemVal: 'All',
        selectedStatusVal: 'All',
    },
    getters: {
        getStudentsData: (state) => {
            studentsList.map((student) => {
                const evulSyst5 = student.evaluationSys === 5
                const evulSyst12 = student.evaluationSys === 12
                if (evulSyst5 && student.averageScore > 5) state.studentsData.push({ ...student, status: 'Блатнiк' })
                if (evulSyst5 && student.averageScore === 5)
                    state.studentsData.push({ ...student, status: 'Вiдмiннiк' })
                if (evulSyst5 && student.averageScore === 4) state.studentsData.push({ ...student, status: 'Хорошист' })
                if (evulSyst5 && student.averageScore === 3)
                    state.studentsData.push({ ...student, status: 'Трiйочник' })
                if (evulSyst5 && student.averageScore <= 2) state.studentsData.push({ ...student, status: 'Двiйочник' })
                if (evulSyst12 && student.averageScore > 12) state.studentsData.push({ ...student, status: 'Блатнiк' })
                if (evulSyst12 && student.averageScore <= 12 && student.averageScore >= 10)
                    state.studentsData.push({ ...student, status: 'Вiдмiннiк' })
                if (evulSyst12 && student.averageScore < 10 && student.averageScore >= 6)
                    state.studentsData.push({ ...student, status: 'Хорошист' })
                if (evulSyst12 && student.averageScore < 6 && student.averageScore > 4)
                    state.studentsData.push({ ...student, status: 'Трiйочник' })
                if (evulSyst12 && student.averageScore <= 2)
                    state.studentsData.push({ ...student, status: 'Двiйочник' })
            })
            return state.studentsData
        },
        getSelectedSystemVal: ({ selectedSystemVal }) => selectedSystemVal,
        getSelectedStatusVal: ({ selectedStatusVal }) => selectedStatusVal,
        getFilteredStudentsData: (state, getters) => {
            if (state.selectedSystemVal === 'All' && state.selectedStatusVal === 'All')
                state.filteredStudentsData = getters.getStudentsData
            else if (state.selectedSystemVal && state.selectedStatusVal === 'All')
                state.filteredStudentsData = getters.getStudentsData.filter(
                    (student) => student.evaluationSys === state.selectedSystemVal
                )
            else if (state.selectedSystemVal === 'All' && state.selectedStatusVal)
                state.filteredStudentsData = getters.getStudentsData.filter(
                    (student) => student.status === state.selectedStatusVal
                )
            else
                state.filteredStudentsData = getters.getStudentsData.filter(
                    (student) =>
                        student.status === state.selectedStatusVal && student.evaluationSys === state.selectedSystemVal
                )
            return state.filteredStudentsData
        },
    },
    mutations: {
        getFilteredBySystem(state, system) {
            state.selectedSystemVal = system
        },
        getFilteredByStatus(state, status) {
            state.selectedStatusVal = status
        },
    },
    actions: {
        filteredByStatus({ commit }, status) {
            commit('getFilteredByStatus', status)
        },
        filteredBySystem({ commit }, system) {
            commit('getFilteredBySystem', system)
        },
    },
})
