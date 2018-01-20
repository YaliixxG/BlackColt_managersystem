<template>
<div class="siderbar">
 <el-menu :default-active="goRoutes" class="el-menu-vertical-demo" unique-opened router>  
     <template v-for="item in items">
     <template v-if="item.subs">          
         <el-submenu :index="item.index">
        <template slot="title"><i :class="item.icon"></i><span>{{item.title}}</span></template>
        <el-menu-item-group v-for="(subsitem,i) in item.subs" :key="i">          
          <el-menu-item :index="subsitem.index">{{subsitem.title}}</el-menu-item>        
        </el-menu-item-group>        
      </el-submenu>
    </template> 
    <template v-else>        
          <el-menu-item :index="item.index"><i :class="item.icon"></i>{{item.title}}</el-menu-item>                
    </template> 
    </template>        
      </el-menu> 
        
</div>  
</template>

<script>
export default {
    data(){
        return{
          items:[
              {
                  index:'readMe',
                  icon:'el-icon-setting',
                  title:'我的管理系统'
              },
              {
                  index:'userCtrl',
                  icon:'el-icon-edit',
                  title:'用户管理'
              },
              {
                  index:'2',
                  icon:'el-icon-document',
                  title:'统计汇总',
                  subs:[
                      {
                          index:'checkDay',
                          title:'考勤统计'
                      },
                      {
                          index:'onBusiness',
                          title:'出差审批'
                      },
                      {
                          index:'carCtrl',
                          title:'用车审批'
                      },
                      {
                          index:'overTime',
                          title:'加班审批'
                      },
                      {
                          index:'borrowM',
                          title:'借款审批'
                      }
                  ]
              },
               {
                  index:'3',
                  icon:'el-icon-view',
                  title:'权限管理',
                  subs:[
                      {
                          index:'roleM',
                          title:'角色管理'
                      },
                      {
                          index:'functionM',
                          title:'功能模块'
                      },
                      {
                          index:'chooseM',
                          title:'选择用户'
                      }
                  ]
              },
              {
                  index:'4',
                  icon:'el-icon-menu',
                  title:'应用管理',
                  subs:[
                      {
                          index:'groupC',
                          title:'控件管理'
                      },
                      {
                          index:'noticeC',
                          title:'公告管理'
                      },
                      {
                          index:'projectC',
                          title:'项目管理'
                      }
                  ]
              }

          ]
        }
    }
}
</script>


<style scoped>
.siderbar{
    width:250px;
    position: absolute;
        left: 0;
        top: 58px;
        bottom:0;
        background:#eef1f6;
}
</style>


