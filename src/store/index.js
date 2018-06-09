import Vue from 'vue';
import vuex from 'vuex';
import axios from 'axios'
Vue.use(vuex);

export default new vuex.Store({
    state:{
        test: Math.floor(Math.random(0,1)*10000),
        msg:'',
        data: [],
        tableData:[],
        gridData:[]
    },
    mutations:{
        muGetData(state,data){
            state.data = data
        },
        tableData(state,data){
            state.tableData = data
        },
        gridData(state,data){
            state.gridData = data
        }
    },
    actions:{
        getData({commit}){
            axios.get('/static/data.json')
            .then(res=>{
                commit('muGetData',res.data)
            })
        },
        getTableData({commit}){
            axios.get('/static/tableData.json')
            .then(res=>{
                commit('tableData',res.data)
            })
        },
        getGridData({commit}){
            axios.get('/static/gridData.json')
            .then(res=>{
                commit('gridData',res.data)
            })
        }
    },
    modules:{}
})