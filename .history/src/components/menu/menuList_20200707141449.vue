<template>
    <div>
        <el-menu :collapse="isCollapse"
                 router
                 :default-active="$route.name"
                 text-color="#979797"
                 active-text-color="#fff"
                 background-color="#001529">
            <template v-for="(item) in menuList">
                <el-submenu v-if="item.alwaysShow" :index="item.name">
                    <template slot="title">
                        <i :class="item.meta.icon" class="xy-menu-icon" :style="{marginRight:hierarchy * 10 + 'px'}"></i>
                        <span>{{item.meta.title}}</span>
                    </template>
                    <menu-sun :menuList="item.children" :hierarchy="hierarchy + 1"/>
                </el-submenu>
                <el-menu-item v-else :index="resolveName(item)" :route="item.path">
                    <i :class="resolveIcon(item)" class="xy-menu-icon" :style="{marginRight: hierarchy * 10 + 'px'}"></i>
                    <span slot="title">{{resolveName(item)}}</span>
                </el-menu-item>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import {geti8ln} from '@/util'
    import MenuSun from '@/components/menu/menuList'
    export default {
        name: "MenuSun",
        components: {
            MenuSun
        },
        props:['menuList', 'hierarchy', 'isCollapse'],
        mounted() {
            geti8ln()
        },
        methods: {
            resolveIcon(item) {
                if(item.children&& item.children.length === 1) {
                    return item.children[0].icon ? item.children[0].icon : item.children[0].meta.icon
                } else {
                    return item.icon
                }
            },
            resolveName(item) {
                if(item.children && item.children.length === 1) {
                    return item.children[0].name ? item.children[0].name : item.children[0].meta.title
                } else {
                    return item.name
                }
            },
            
        }
    }
</script>

<style scoped>

</style>
