<template>
    <div class="profile">
        <nav-bar class="profile-nav">
            <div slot="center" class="slot-font">苗域银创</div>
        </nav-bar>
        <profile-item/>
    </div>
</template>

<script>

    import NavBar from "../../components/common/navbar/NavBar";
    import ProfileItem from "./childComps/ProfileItem";

    export default {
        name: "Profile",
        components: {
            NavBar,
            ProfileItem,
        }
    }
</script>

<style scoped>
    .slot-font{
        font-size: 16px;
        line-height: 49px;
    }
    .profile {
        height: 100vh;
    }
.profile-nav{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
}

</style>