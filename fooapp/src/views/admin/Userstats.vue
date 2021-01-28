<template>
        <vs-table v-if="users && users.length">
            <vs-tr>
                <vs-th>
                Name
                </vs-th>
                <vs-th>
                Email
                </vs-th>
                <vs-th>
                Id
                </vs-th>
                <vs-th>
                status
                </vs-th>
                <vs-th>
                delete user
                </vs-th>
            </vs-tr>
            <vs-tr
                v-for="(tr, i) in users"
                :key="i">
                <vs-td>
                <span>{{ tr.username }}</span>
                </vs-td>
                <vs-td>
                    {{ tr.email }}
                </vs-td>
                <vs-td>
                    {{ tr._id }}
                </vs-td>
                <vs-td>
                    {{ tr.status }}
                </vs-td>
                <vs-td class="delete-the-user">
                <span class="material-icons" @click="deleteUser(tr._id, i)">delete</span>
                </vs-td>
            </vs-tr>
        </vs-table>
</template>

<script>
import axios from "axios"
    export default {
        name : 'Usersstats',
        data: () => ({
            users : null,
        }),
        async mounted(){
            // eslint-disable-next-line
            const alluser = await axios.get('/api/loginsignup/');
            this.users = alluser.data;
        },
        methods: {
            async deleteUser(id, index){
                const deleted = await axios.delete(`/api/loginsignup/${id}`);
                if(deleted){
                    this.users.splice(index, 1);
                    alert("User have Been banished for eternity !")
                } else {
                    alert("error user deletion process !")
                }
            }
        }
    }
</script>

<style scoped>
span{
    font-size: 1.07rem;
}
.delete-the-user{
    cursor: pointer;
    color: #B01C1D;
    text-align: center;
}
</style>