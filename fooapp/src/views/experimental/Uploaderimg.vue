<template>
    <div>
        <h1>I'm the testing ground for upload img</h1>
        <form @submit.prevent="sendFile" enctype="multipart/form-data">
            <div>
                
                <label for="file"> Upload File</label>
                <input 
                type="file"
                ref="file"
                @change="selectFile"
                />
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name: 'Uploaderimg',
        data: () => ({
            file: ''
        }),
        methods:{
                selectFile(){
                   this.file = this.$refs.file.files[0]; 
                }, 
                async sendFile(){
                    const formData = new FormData();
                    formData.append('file', this.file);
                    try{
                        await axios.post('/api/uploadtest/test', formData)
                    } catch (err) {
                        // eslint-disable-next-line
                        console.log(err)
                    }
                    
                }
            },
    }
</script>

<style scoped>

</style>