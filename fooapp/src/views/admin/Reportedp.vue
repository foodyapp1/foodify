<template>
        <vs-table v-if="reports && reports.length">
            <vs-tr>
                <vs-th>
                report ID
                </vs-th>
                <vs-th>
                Reason(s)
                </vs-th>
                <vs-th>
                Post Title
                </vs-th>
                <vs-th>
                Post id
                </vs-th>
                <vs-th>
                Post Owner
                </vs-th>
                <vs-th>
                User ID
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
                <span v-if="tr.inappropriate"> | innappropriate content | </span>
                <span v-if="tr.hate"> | hate | </span>
                <span v-if="tr.abuse"> | Abuse | </span>
                </vs-td>
                <vs-td>
                <span>{{ tr.reportedPostName }}</span>
                </vs-td>
                <vs-td >
                <span class="pointing-to-click"  @click="goToPost(tr.post_Id)" >{{ tr.post_Id }}</span>
                </vs-td>
                <vs-td>
                {{ tr.reportedName }}
                </vs-td>
                <vs-td>
                {{ tr.user_Id }}
                </vs-td>
                <vs-td class="delete-the-user">
                <!-- let it be, let it  -->
                <span class="material-icons let-it-be" @click="keepThePost(tr._id, i)" >
                    check
                </span>
                <!-- delete -->
                <span class="material-icons kill-the-thing" @click="deleteReported(tr.post_Id, tr._id, i)" >
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
                    alert("Post deleted for eternity !")
                } else {
                    alert("error deletion process !")
                }
            },
            async keepThePost(idreport, index){
                const deletereport = await axios.delete(`/api/report/${idreport}`);
                if(deletereport){
                    this.reports.splice(index, 1);
                    alert("report deleted")
                } else {
                    alert("error deletion process !")
                }
            },
            goToPost(id){
                this.$router.push(`/post/${id}`)
            }
        }
    }
</script>

<style scoped>
span{
    font-size: 1.07rem;
}
.pointing-to-click{
    cursor: pointer;
    color: cyan;
}
.delete-the-user{
    cursor: pointer;
    color: #B01C1D;
    text-align: center;
}
.let-it-be{
    color: #00FF00;
    margin-right: 1.2rem;
}
</style>