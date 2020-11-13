<template>
  <div id="profile">
    <h2>我是profile页</h2>
    <h2>{{$store.state.counter}}</h2>
    <h2>学生数组：{{$store.state.studentList}}</h2>
    <button @click="insertStudent()">增加学生</button>
    <button @click="deleteStudent()">删除学生</button>
    <button @click="insertStudentInfo()">增加所有学生的性别</button>
    <button @click="deleteStudentInfo()">删除所有学生的年龄</button>
  </div>
</template>

<script>
  export default {
    name: "Profile",
    methods: {

      insertStudent(){
        let student={
          name: '吴青珂',
          age: 18
        };
        this.$store.commit({
          type: 'insertStudent',
          student: student,
        });
      },

      deleteStudent(){
        this.$store.commit({
          type: 'deleteStudent'
        });
      },

      insertStudentInfo(){
        let sex='男';
        this.$store.commit({
          type: 'insertStudentInfo',
          sex: sex
        });
      },

      deleteStudentInfo(){
        this.$store.commit({
          type: 'deleteStudentInfo',
        })
      },

    },
  }
</script>

<style scoped>
  #profile{
    background-color: aqua;
    padding: 5px;
  }
</style>
