<template>
    <div class="eanumber">
        <div class="top">
            <p>用户姓名：<input type="text"></p>
            <p>用户手机号：<input type="text"></p>
            <p>用户邮箱：<input type="text"></p>
            <p>员工编号：<input type="text"></p>
            <p>身份证号：<input type="text"></p>
            <p>归属组织：<el-popover
                            width="400px"
                            placement="bottom"
                            trigger="click">
                            <div class="dialogTitle">
                                <p class="dialogIpt">
                                    组织名称
                                    <el-input size="small" class="ipt" v-model="search"></el-input>
                                </p>
                                <el-button type="primary" class="dialogBtn" size="mini" icon="el-icon-search" @click="dialogFilter(search)"> 查询</el-button>
                            </div>
                            
                            <el-table :data="dialogFilter(ipt)">
                                <el-table-column width="100" property="date" label="序号"></el-table-column>
                                <el-table-column width="150" property="name" label="组织名称"></el-table-column>
                                <el-table-column width="300" property="address" label="上级组织"></el-table-column>
                            </el-table>
                            <el-button slot="reference" class="sel"></el-button>
                        </el-popover>
            </p>
            <el-button class="search" size="mini" type="primary" icon="el-icon-search">查询</el-button>
        </div>
        <div class="mainTable">
            <div class="tableTitle">
                <el-popover
                    placement="buttom"
                    width="400"
                    trigger="click">
                    <el-date-picker
                        v-model="input.date"
                        type="date"
                        value-format="yyyy-MM-dd"
                        placeholder="选择日期">
                    </el-date-picker>
                    <el-input placeholder="请输入姓名" v-model="input.name"></el-input>
                    <el-input placeholder="请输入地址" v-model="input.address"></el-input>
                    <el-input placeholder="请输入手机号" v-model="input.phoneNumber"></el-input>
                    <el-button @click="addNew" size="mini">确定</el-button>
                    <el-button slot="reference" type="success" size="mini">新增</el-button>
                </el-popover>
                <el-popover
                    placement="buttom"
                    width="400"
                    trigger="click">
                    <el-date-picker
                        v-model="input.date"
                        type="date"
                        value-format="yyyy-MM-dd"
                        placeholder="选择日期">
                    </el-date-picker>
                    <el-input placeholder="请输入姓名" v-model="input.name"></el-input>
                    <el-input placeholder="请输入地址" v-model="input.address"></el-input>
                    <el-input placeholder="请输入手机号" v-model="input.phone"></el-input>
                    <el-button @click="change" size="mini">确定</el-button>
                    <el-button slot="reference" type="warning" size="mini">修改</el-button>
                </el-popover>
                <el-button type="danger" @click="remove" size="mini">离职</el-button>
            </div>
            <el-table
                ref="multipleTable"
                :data="this.$store.state.tableData"
                stripe
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange">
                <el-table-column
                type="selection"
                width="100">
                </el-table-column>
                <el-table-column
                label="日期"
                width="120">
                <template slot-scope="scope">{{ scope.row.date }}</template>
                </el-table-column>
                <el-table-column
                prop="name"
                label="姓名"
                width="120">
                </el-table-column>
                <el-table-column
                prop="address"
                label="地址"
                show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                prop="phoneNumber"
                label="电话"
                show-overflow-tooltip>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            multipleSelection:[],
            input:{
                date:'',
                name:'',
                address:'',
                phoneNumber:''
            },
            search:'',
            dialogData:[],
            ipt:''
        }
    },
    methods:{
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        remove(){  //删除效果
            let idx;
            this.$store.state.tableData.map((v,i)=>{
                this.multipleSelection.map(val=>{
                    if(val === v){
                        this.$store.state.tableData.splice(i,1)
                    }
                })
            })
            
        },
        addNew(){  //添加效果
            this.$store.state.tableData.push(this.input);
            this.input ={
                date:'',
                name:'',
                address:''
            }
        },
        change(){  //修改效果
            this.$store.state.tableData.map((v,i)=>{
                this.multipleSelection.map(val=>{
                    if(val === v){
                        this.$store.state.tableData.splice(i,1)
                    }
                })
            })
            this.$store.state.tableData.push(this.input);
            this.input ={
                date:'',
                name:'',
                address:''
            }
        },
        dialogFilter(search){  //弹窗中的查询按钮效果
            this.ipt = search
            if(search){
                let val = {}
                this.$store.state.gridData.map((v,i)=>{
                        if(v.name == this.search){
                            val = this.$store.state.gridData[i]
                        }
                })
                let res = this.$store.state.gridData.filter((iteam)=>{
                        return iteam.name.indexOf(search)>-1
                    })
                return res
            }else{
                return this.$store.state.gridData
            }
            
        }
    },
    mounted(){
        this.$store.dispatch('getTableData') //绑定vuex中的数据
        this.$store.dispatch('getGridData')
    }
}
</script>
<style src="./eanumber.css">

</style>


