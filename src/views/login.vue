<template>
    <div class="container">
        <div class="login-box">
            <h1>XY-ADMIN</h1>
            <form action="" @submit.prevent="login">
                <div class="input-item">
                    <label>{{$t('login.name')}}</label>
                    <input type="text" required="" autofocus ref="userNameIput" v-model="loginForm.name">
                </div>
                <div class="input-item">
                    <label>{{$t('login.password')}}</label>
                    <input type="password" required="" ref="passwordIput" v-model="loginForm.password">
                </div>
                <input type="submit" :value="$t('login.login')"/>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loginForm: {
                name:'',
                password:''
            }
        }
    },
    methods:{
        login() {
            this.$router.push('/home')
        }
    }
}
</script>

<style scoped lang="scss">
    .container{
        background-color: var(--muted);
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .login-box{
        width: 400px;
        background-color: var(--card);
        border: 1px solid var(--border);
        border-radius: var(--radius);
        padding: 40px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        h1{
            text-align: center;
            color: var(--foreground);
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 32px;
        }
        .input-item {
            margin-bottom: 24px;
            label {
                display: block;
                font-size: 0.875rem;
                font-weight: 500;
                color: var(--muted-foreground);
                margin-bottom: 8px;
                text-align: left;
            }
            input {
                border: 1px solid var(--border);
                border-radius: var(--radius);
                outline: none;
                background-color: var(--background);
                color: var(--foreground);
                height: 40px;
                padding: 0 12px;
                display: block;
                width: 100%;
                font-size: 0.875rem;
                transition: border-color 0.2s;
                &:focus {
                    border-color: var(--ring);
                }
            }
        }
        input[type="submit"] {
            background-color: var(--primary);
            border: none;
            outline: none;
            color: var(--primary-foreground);
            padding: 10px;
            width: 100%;
            border-radius: var(--radius);
            display: block;
            margin-top: 32px;
            cursor: pointer;
            font-weight: 600;
            font-size: 0.875rem;
            transition: opacity 0.2s;
            &:hover {
                opacity: 0.9;
            }
        }
    }

</style>
