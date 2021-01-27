<template>
        <vs-table v-if="reports && reports.length">
            <vs-tr>
                <vs-th>
                report id
                </vs-th>
                <vs-th>
                post id
                </vs-th>
                <vs-th>
                Owner Id
                </vs-th>
                <vs-th>
                delete post
                </vs-th>
            </vs-tr>
            <vs-tr
                v-for="(tr, i) in reports"
                :key="i">
                <vs-td>
                <span>{{ tr._id }}</span>
                </vs-td>
                <vs-td>
                {{ tr.post_Id }}
                </vs-td>
                <vs-td>
                {{ tr.user_Id }}
                </vs-td>
                <vs-td class="delete-the-user">
                <span class="material-icons" @click="deleteReported(tr.post_Id, tr._id, i)">
                    delete
                </span>
                </vs-td>
            </vs-tr>
        </vs-table>
</template>

<script>
import axios from "axios"
    export default {
        name : 'Reportedp',
        data: () => ({
            reports : null,
        }),
        async mounted(){
            // eslint-disable-next-line
            const allreports = await axios.get('/api/report/');
            this.reports = allreports.data;
        },
        methods: {
            async deleteReported(idPost, idreport, index){
                const deletereport = await axios.delete(`/api/report/${idreport}`);
                const deletepost = await axios.delete(`/api/dummieposts/${idPost}`);
                if(deletereport && deletepost){
                    this.reports.splice(index, 1);
                    alert("user deleted for eternity !")
                } else {
                    alert("error deletion process !")
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